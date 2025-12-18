// -----------------------------------------------------------------------
//                    DEFINING THE GEOMETRY OF AOI
// -------------------------------------------------------------
// AOI - Cache Slough Complex (CSC), northern Sacramento-San Joaquin Delta, California
// defined boundary from USGS DEM  
//
// West_Bounding_Coordinate: -121.806348
// East_Bounding_Coordinate: -121.578296
// North_Bounding_Coordinate: 38.376606
// South_Bounding_Coordinate: 38.209375
//
// WGS84
//
var csc = ee.Geometry.Rectangle({
  coords: [-121.806348, 38.209375, -121.578296, 38.376606],
  proj: 'EPSG:4326',
  geodesic: false
});
Map.centerObject(csc, 11);
Map.addLayer(csc, {color: 'red'}, 'AOI');
//
// -------------------------------------------------------------------------------
//      IMPORT 2018 SENTINEL 2 DATA
// -------------------------------------------------------------------
function maskS2clouds(image) {
var qa = image.select('QA60');
// Bits 10 and 11 are clouds and cirrus, respectively.
var cloudBitMask = 1 << 10;
var cirrusBitMask = 1 << 11;
// Both flags should be set to zero, indicating clear conditions.
var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
.and(qa.bitwiseAnd(cirrusBitMask).eq(0));
return image.updateMask(mask).divide(10000);
}
