/* @requires
pj_const
pj_err
pj_param
pj_list
pj_utils
pj_init
pj_transform
pj_fwd
pj_inv
rtodms
proj4js
*/

// Projections are inserted here by the build script

var api = proj4js; //

api.pj_init = pj_init;
api.pj_fwd = pj_fwd;
api.pj_fwd_deg = pj_fwd_deg;
api.pj_inv = pj_inv;
api.pj_inv_deg = pj_inv_deg;
api.pj_transform = pj_transform;
api.pj_transform_point = pj_transform_point;

// export functions for testing
api.internal = {
  dmstod: dmstod,
  dmstor: dmstor,
  get_rtodms: get_rtodms,
  get_dtodms: get_dtodms,
  pj_latlong_from_proj: pj_latlong_from_proj,
  pj_get_params: pj_get_params,
  pj_datums: pj_datums,
  pj_list: pj_list,
  pj_ellps: pj_ellps,
  pj_units: pj_units,
  find_datum: find_datum,
  DEG_TO_RAD: DEG_TO_RAD,
  RAD_TO_DEG: RAD_TO_DEG
};

module.exports = api;