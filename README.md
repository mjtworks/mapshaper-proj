# mapshaper-proj

This software is a JavaScript port of the Proj.4 map projection library, which is used by QGIS, GDAL and other popular geospatial software packages.

Why create another Proj.4 port, when there is already [proj4js](https://github.com/proj4js/proj4js)?

* Unlike proj4js, this port is a very literal translation to JavaScript. This software should behave almost exacly like Proj.4, with the exception of some missing features. Also, staying up-to-date with changes to Proj.4 should be relatively simple.

* This port has some useful features of Proj.4 that are missing from proj4js, for example, error handling, which is largely missing from proj4js.


#### Missing features

* No support for datum transformations using grid files.

* No EPSG code support.

* No support for parsing WTK strings.

* Only about half of Proj.4's 130-odd projections have been ported.



## mproj and mcs2cs scripts

These are workalike versions of the `proj` and `cs2cs` programs from Proj.4.

To install the latest versions system-wide, run `npm install -g mproj`

## Node API

The API can be used in either the Proj.4 style or the proj4js style.

#### proj4js style

```
var proj = require('mproj');
# create functions for translating between two coordinate systems
# returned object has forward() and inverse() functions
var obj = proj(<source definition>, <dest definition>);

# WGS84 is assumed if a source definition is not given
var obj = proj(<dest definition>);

# a shortcut for translating a single location
var xy = proj([<source definition>,] dest definition, <point>);
```

See the [proj4js.org website](http://proj4js.org/) for more detailed help.

#### Proj.4 style

```
var proj = require('mproj');
# create a projection object from a proj4 string
var P = proj.pj_init(<proj4 crs definition>);

# project and unproject geographical coordinates
var xy = proj.pj_fwd({lam: <longitude in radians>, phi: <latitude in radians>}, P);
var lp = proj.pj_inv({x: <easting in meters>, y: <northing in meters>}, P);

# transform arrays of coordinates from one coordinate reference system to another
proj.pj_transform(<source defn>, <dest defn>, <x array>, <y array>[, <z array>]);
```

#### Error handling
The x and y coordinates of unprojectable points are set to `Infinity`. Other errors cause an Error to be thrown bearing an appropriate message.


## Building

Running `build` creates a complete build in the `dist/` directory.

Running `build merc,lcc,aea` creates a build containing only the listed projections. Customize this list with the projections that you want. Run `mproj -l` to see a list of all supported projections.