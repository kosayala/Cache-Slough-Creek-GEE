// --------------------------------------------------
//                 EXPORTING NDVI,NDMI,NDWI
// --------------------------------------------------
// Visualization scales (optional, mostly for reference)
var scale = 10; // Sentinel-2 resolution


//----------Spring 2024------------
//
Export.image.toDrive({
  image: spring2024.select(['NDVI_spring_2024','NDMI_spring_2024','NDWI_spring_2024']),
  description: 'Spring_2024_Indices',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Spring_2024_Indices',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ---- Summer 2024 ----
Export.image.toDrive({
  image: summer2024.select(['NDVI_summer_2024','NDMI_summer_2024','NDWI_summer_2024']),
  description: 'Summer_2024_Indices',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Summer_2024_Indices',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});


// ---- Fall 2024 ----
Export.image.toDrive({
  image: fall2024.select(['NDVI_fall_2024','NDMI_fall_2024','NDWI_fall_2024']),
  description: 'Fall_2024_Indices',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Fall_2024_Indices',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ---- Winter 2024 ----
Export.image.toDrive({
  image: winter2024.select(['NDVI_winter_2024','NDMI_winter_2024','NDWI_winter_2024']),
  description: 'Winter_2024_Indices',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Winter_2024_Indices',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

//
// ---- Summer 2024 RGB ----
Export.image.toDrive({
  image: summer2024.select(['B4','B3','B2']), // Red, Green, Blue bands
  description: 'Summer_2024_RGB',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Summer_2024_RGB',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ----- Summer 2024 ALL -----
Export.image.toDrive({
  image: summer2024.select(['B4','B3','B2', 'B8','B11']), // Red, Green, Blue bands
  description: 'Summer_2024_ALL',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Summer_2024_ALL',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ----- Winter 2024 ALL ---
Export.image.toDrive({
  image: summer2024.select(['B4','B3','B2', 'B8','B11']), // Red, Green, Blue bands
  description: 'Winter_2024_ALL',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Winter_2024_ALL',
  region: csc,
  scale: scale,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
