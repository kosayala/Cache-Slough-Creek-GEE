# Wetland Dynamics in the Cache Slough Complex
This project uses Sentinel‑2 imagery, Google Earth Engine, and ArcGIS Pro to analyze seasonal moisture patterns in the Cache Slough Complex (Sacramento–San Joaquin Delta, CA).  
The workflow produces seasonal NDMI composites, spectral signatures, and a summer‑to‑winter NDMI change‑detection map. A final academic poster summarizing the project is included in this repository.  
## Methods (Brief)
- Defined AOI using USGS DEM boundaries
- Filtered Sentinel‑2 SR Harmonized imagery by season (Spring–Winter 2024–25)
- Applied cloud masking (QA60)
- Generated seasonal median composites
- Calculated NDVI, NDMI, and spectral signatures
- Exported GeoTIFFs to ArcGIS Pro
- Created seasonal comparison maps and NDMI change detection
## Key Findings
- Wetlands are wettest in winter/spring due to precipitation and flooding
- Summer/fall show drying, with lower NDMI and higher NIR reflectance
- Spectral signatures separate permanent water, wetland vegetation, and upland areas
- NDMI change detection highlights strong winter inundation on northern Liberty Island
## Repository Structure
gee_scripts/     - GEE JavaScript code
Maps_Images/  - Final ArcGIS Pro maps
poster/          - Final project poster (PDF)
images/          - Supporting figures for README
## Poster
The full academic poster summarizing the workflow, results, and interpretation is available in:

/poster/CSC_poster.pdf



