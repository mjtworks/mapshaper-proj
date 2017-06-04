var assert = require('assert'),
    api = require('../../'),
    helpers = require('../helpers');

describe('ortho.js', function () {

  var fwd_in = [
    [ 2, 1],
    [ 2,-1],
    [-2, 1],
    [-2,-1]
  ];

  var inv_in = [
    [ 200, 100],
    [ 200,-100],
    [-200, 100],
    [-200,-100]
  ];

  var s_fwd_expect = [
    [ 223322.76057672748,  111695.401198614476],
    [ 223322.76057672748, -111695.401198614476],
    [-223322.76057672748,  111695.401198614476],
    [-223322.76057672748, -111695.401198614476]
  ];

  var s_inv_expect = [
    [ 0.0017904931102938101,  0.000895246554928338998],
    [ 0.0017904931102938101, -0.000895246554928338998],
    [-0.0017904931102938101,  0.000895246554928338998],
    [-0.0017904931102938101, -0.000895246554928338998]
  ];

  var sargs = "+proj=ortho   +a=6400000    +lat_1=0.5 +lat_2=2";

  helpers.fwd_test(sargs, fwd_in, s_fwd_expect);
  helpers.inv_test(sargs, inv_in, s_inv_expect);
});