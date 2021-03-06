var assert = require('assert'),
    api = require('../'),
    wkt_to_proj4 = api.internal.wkt_to_proj4,
    wkt_from_proj4 = api.internal.wkt_from_proj4,
    fs = require('fs');

var files = [
  ['tmerc_wuhan_ejdl.prj', '+proj=tmerc +x_0=500000 +lon_0=114 +ellps=krass +no_defs'],
  ['nsper_world_esri.prj', '+proj=nsper +h=35800000 +datum=WGS84 +no_defs'],
  ['utm_18N_esri.prj', '+proj=utm +zone=18 +datum=WGS84 +no_defs'],
  ['stateplane_ny_li_nad83_feet_esri.prj', '+proj=lcc +x_0=300000 +lon_0=-74 +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs'],
  ['robinson_world_esri.prj', '+proj=robin +datum=WGS84 +no_defs'],
  ['robinson_sphere_esri.prj', '+proj=robin +a=6371000 +no_defs'],
  ['wgs84_esri.prj', '+proj=longlat +datum=WGS84'],
  ['wgs84_ogc.prj', '+proj=longlat +datum=WGS84'],
  ['web_mercator_esri.prj', '+proj=merc +lat_ts=0 +a=6378137 +no_defs'], // standard_parallel_1 not handled
  ['web_mercator_aux_sphere_esri.prj', '+proj=merc +lat_ts=0 +a=6378137 +no_defs'], // 8 Auxiliary_Sphere_Type and standard_parallel_1
  ['web_mercator_v2_esri.prj', '+proj=merc +a=6378137 +no_defs'],
  ['web_mercator_v2_ogc.prj', '+proj=merc +a=6378137 +no_defs'],
  ['web_mercator_v3_esri.prj', '+proj=merc +a=6378137 +no_defs'],
  ['web_mercator_v3_ogc.prj', '+proj=merc +a=6378137 +no_defs'],
  ['web_mercator_v4.prj', '+proj=merc +lat_ts=0 +a=6378137 +no_defs'], //standard_parallel_1
  ['nzgd_ogc.prj', '+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +datum=nzgd49 +no_defs'],
  ['nzgd_esri.prj', '+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +datum=nzgd49 +no_defs'],
  // http://epsg.io/2393 and https://github.com/proj4js/proj4js/issues/222
  ['tmerc_epsg2393_ogc.prj', '+proj=tmerc +lon_0=27 +x_0=3500000 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs'],
  // ESRI wkt from epsg is missing wgs84 params -- test fails
  // ['tmerc_epsg2393_esri.prj', '+proj=tmerc +lon_0=27 +x_0=3500000 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs'],
  ['g33_dotacional_educacion_escuelas.prj', '+proj=lcc +lon_0=-66.43333333333334 +lat_0=17.833333333333332 +lat_1=18.433333333333334 +x_0=200000 +y_0=200000 +lat_2=18.033333333333335 +ellps=GRS80 +no_defs']
];

describe('proj4 -> WKT -> proj4', function () {
  files.forEach(function(arr) {
    var proj4 = arr[1];
    it(proj4, function() {
      var wkt = wkt_from_proj4(proj4);
      var output = wkt_to_proj4(wkt);
      if (output != proj4) {
        console.log(proj4);
        console.log(output)
        console.log('\n', wkt)
      }
      assert.equal(output, proj4);
    });

  });
});

describe('WKT -> proj4', function() {
  files.forEach(function(arr) {
    var file = arr[0],
        expect = arr[1];
    it(file, function() {
      var wkt = fs.readFileSync('test/prj/' + file, 'utf8');
      var output = wkt_to_proj4(wkt);
      if (output != expect) {
        console.log(output);
        console.log(expect);
        console.log('\n', wkt)
      }
      assert.equal(output, expect);
    })
  })
})
