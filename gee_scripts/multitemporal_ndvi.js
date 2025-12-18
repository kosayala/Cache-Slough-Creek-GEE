// ---------- MULTITEMPORAL NDVI -------------
// ------------------------------------------
// for every season from years 2018 and 2024
//
// lets make a function for it
// -------------------------
// Function to compute seasonal indices
// -------------------------
function computeSeasonalIndices(year, season, startDate, endDate) {
  
  var s2Collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterDate(startDate, endDate)
  .filterBounds(csc)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .map(maskS2clouds);
  
  var medianImage = s2Collection.median().clip(csc);
  
  var ndvi = medianImage.normalizedDifference(['B8', 'B4']).rename('NDVI_' + season + '_' + year);
  var ndmi = medianImage.normalizedDifference(['B8', 'B11']).rename('NDMI_' + season + '_' + year);
  var ndwi = medianImage.normalizedDifference(['B3', 'B8']).rename('NDWI_' + season + '_' + year);
  
  return medianImage.addBands([ndvi, ndmi, ndwi]);
}

// visualize NDVI
var ndviViz = {min:-1, max:1, palette:['white', 'yellow', 'green', 'darkgreen']};
// visualization  NDMI
var ndmiViz = {min:-1, max:1, palette:['brown', 'lightblue', 'blue', 'darkblue']};
// visualization NDWI
var ndwiViz = {min:-1, max:1, palette:['brown','lightblue','blue','darkblue']};
// True color visualization
var rgbViz = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 0.3,
  gamma: 1.2
};

// --------------------------------------------
//               season and year
// --------------------------------------------
//

/*
// ------ 2018 -----
//
// spring:
//
var spring2018 = computeSeasonalIndices(2018, 'spring', '2018-03-01', '2018-05-31' )
Map.addLayer(spring2018.select('NDVI_spring_2018'), ndviViz, 'Spring 2018 NDVI');
Map.addLayer(spring2018.select('NDMI_spring_2018'), ndmiViz, 'Spring 2018 NDMI');
Map.addLayer(spring2018.select('NDWI_spring_2018'), ndwiViz, 'Spring 2018 NDWI');
Map.addLayer(spring2018, rgbViz, 'Spring 2018 RGB');

//
// summer:
// 
var summer2018 = computeSeasonalIndices(2018, 'summer', '2018-06-01', '2018-08-31')
Map.addLayer(summer2018.select('NDVI_summer_2018'), ndviViz, 'Summer 2018 NDVI');
Map.addLayer(summer2018.select('NDMI_summer_2018'), ndmiViz, 'Summer 2018 NDMI');
Map.addLayer(summer2018.select('NDWI_summer_2018'), ndwiViz, 'Summer 2018 NDWI');
Map.addLayer(summer2018, rgbViz, 'Summer 2018 RGB');
//
// fall:
// 
var fall2018 = computeSeasonalIndices(2018, 'fall', '2018-09-01', '2018-11-30')
Map.addLayer(fall2018.select('NDVI_fall_2018'), ndviViz, 'Fall 2018 NDVI');
Map.addLayer(fall2018.select('NDMI_fall_2018'), ndmiViz, 'Fall 2018 NDMI');
Map.addLayer(fall2018.select('NDWI_fall_2018'), ndwiViz, 'Fall 2018 NDWI');
Map.addLayer(fall2018, rgbViz, 'Fall 2018 RGB');
//
// winter:
// 
var winter2018 = computeSeasonalIndices(2018, 'winter', '2018-12-01', '2019-02-28')
Map.addLayer(winter2018.select('NDVI_winter_2018'), ndviViz, 'Winter 2018 NDVI');
Map.addLayer(winter2018.select('NDMI_winter_2018'), ndmiViz, 'Winter 2018 NDMI');
Map.addLayer(winter2018.select('NDWI_winter_2018'), ndwiViz, 'Winter 2018 NDWI');
Map.addLayer(winter2018, rgbViz, 'Winter 2018 RGB');
//
//

*/


// ------ 2024 -----
//
// spring:
//
var spring2024 = computeSeasonalIndices(2024, 'spring', '2024-03-01', '2024-05-31')
//Map.addLayer(spring2024.select('NDVI_spring_2024'), ndviViz, 'Spring 2024 NDVI');
//Map.addLayer(spring2024.select('NDMI_spring_2024'), ndmiViz, 'Spring 2024 NDMI');
//Map.addLayer(spring2024.select('NDWI_spring_2024'), ndwiViz, 'Spring 2024 NDWI');
//Map.addLayer(spring2024, rgbViz, 'Spring 2024 RGB');
//
// summer:
var summer2024 = computeSeasonalIndices(2024, 'summer', '2024-06-01', '2024-08-31')
//Map.addLayer(summer2024.select('NDVI_summer_2024'), ndviViz, 'Summer 2024 NDVI');
//Map.addLayer(summer2024.select('NDMI_summer_2024'), ndmiViz, 'Summer 2024 NDMI');
//Map.addLayer(summer2024.select('NDWI_summer_2024'), ndwiViz, 'Summer 2024 NDWI');
Map.addLayer(summer2024, rgbViz, 'Summer 2024 RGB');
//
// fall:
// 
var fall2024 = computeSeasonalIndices(2024, 'fall', '2024-09-01', '2024-11-30')
//Map.addLayer(fall2024.select('NDVI_fall_2024'), ndviViz, 'Fall 2024 NDVI');
//Map.addLayer(fall2024.select('NDMI_fall_2024'), ndmiViz, 'Fall 2024 NDMI');
//Map.addLayer(fall2024.select('NDWI_fall_2024'), ndwiViz, 'Fall 2024 NDWI');
//Map.addLayer(fall2024, rgbViz, 'Fall 2024 RGB');

//
// winter:
// 
var winter2024 = computeSeasonalIndices(2024, 'winter', '2024-12-01', '2025-02-28')
//Map.addLayer(winter2024.select('NDVI_winter_2024'), ndviViz, 'Winter 2024 NDVI');
//Map.addLayer(winter2024.select('NDMI_winter_2024'), ndmiViz, 'Winter 2024 NDMI');
//Map.addLayer(winter2024.select('NDWI_winter_2024'), ndwiViz, 'Winter 2024 NDWI');
Map.addLayer(winter2024, rgbViz, 'Winter 2024 RGB');
//
