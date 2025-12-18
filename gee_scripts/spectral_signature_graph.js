// ------------- Spectral signature graph -----------
// 

// --- Bands to plot (reflectance bands used for RGB, NDVI, NDMI) ---
var spectralBands = ['B2','B3','B4','B8','B11']; // blue, green, red, NIR, SWIR

// --- Prepare image: select bands and unmask to avoid nulls from masked pixels ---
var img = winter2024.select(spectralBands).unmask(0); // fills masked pixels with 0 (choose another fill if preferred)

// --- Helper: reduceRegion with safe options ---
function getSignature(image, geom) {
  return image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geom,
    scale: 10,
    tileScale: 4,
    maxPixels: 1e9
  });
}

// --- Compute mean reflectance dictionaries ---
var waterSig = getSignature(img, waterPoly1);
var wetlandSig = getSignature(img, wetlandPoly3);
var nonWetlandSig = getSignature(img, nonwetlandPoly1);

// --- Convert dictionaries to numeric lists (order = spectralBands) ---
function dictToList(dict, bandList) {
  dict = ee.Dictionary(dict);
  return ee.List(bandList).map(function(b) {
    return ee.Number(dict.get(b));
  });
}

var waterList = dictToList(waterSig, spectralBands);
var wetlandList = dictToList(wetlandSig, spectralBands);
var nonWetlandList = dictToList(nonWetlandSig, spectralBands);

// --- Build array and chart ---
var arr = ee.Array([waterList, wetlandList, nonWetlandList]);

var chart = ui.Chart.array.values(arr, 1, spectralBands)
  .setChartType('LineChart')
  .setOptions({
    title: 'Winter Mean reflectance: RGB / NIR / SWIR bands',
    hAxis: {title: 'Band'},
    vAxis: {title: 'Reflectance (mean)'},
    lineWidth: 2,
    pointSize: 6,
    series: {
      0: {color: 'blue', labelInLegend: 'Water'},
      1: {color: 'green', labelInLegend: 'Wetland'},
      2: {color: 'orange', labelInLegend: 'Non-wetland veg'}
    }
  });

print(chart);

// --- Also compute and print NDVI and NDMI per polygon for quick reference ---
// NDVI = (NIR - Red) / (NIR + Red)  -> B8, B4
// NDMI = (NIR - SWIR) / (NIR + SWIR) -> B8, B11
var ndvi = summer2024.normalizedDifference(['B8','B4']).rename('NDVI');
var ndmi = summer2024.normalizedDifference(['B8','B11']).rename('NDMI');

function getIndexValue(indexImage, geom) {
  return indexImage.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geom,
    scale: 10,
    tileScale: 4,
    maxPixels: 1e9
  });
}

print('Water NDVI/NDMI', getIndexValue(ndvi.addBands(ndmi), waterPoly1));
print('Wetland NDVI/NDMI', getIndexValue(ndvi.addBands(ndmi), wetlandPoly3));
print('Non-wetland NDVI/NDMI', getIndexValue(ndvi.addBands(ndmi), nonwetlandPoly1));
