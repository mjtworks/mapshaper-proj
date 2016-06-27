var assert = require('assert'),
    api = require('../'),
    helpers = require('./helpers');

describe('eqdc.js', function () {

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

  describe('Equidistant Conic', function () {

    var s_fwd_expect = [
    [ 223351.088175113517,  111786.108747173785],
    [ 223521.200266735133, -111615.970741240744],
    [-223351.088175113517,  111786.108747173785],
    [-223521.200266735133, -111615.970741240744]
    ];

    var s_inv_expect = [
    [ 0.0017902210900486641,   0.000895245944814909169],
    [ 0.00179021986984890255, -0.000895247165333684842],
    [-0.0017902210900486641,   0.000895245944814909169],
    [-0.00179021986984890255, -0.000895247165333684842]
    ];

    var e_fwd_expect = [
    [ 222588.440269285755,  110659.134907347048],
    [ 222756.836702042434, -110489.578087220681],
    [-222588.440269285755,  110659.134907347048],
    [-222756.836702042434, -110489.578087220681]
    ];

    var e_inv_expect = [
    [ 0.00179635944879094839,  0.000904368858588402644],
    [ 0.00179635822020772734, -0.000904370095529954975],
    [-0.00179635944879094839,  0.000904368858588402644],
    [-0.00179635822020772734, -0.000904370095529954975]
    ];

    var sargs = "+proj=eqdc   +a=6400000    +lat_1=0.5 +lat_2=2";
    var eargs = "+proj=eqdc   +ellps=GRS80  +lat_1=0.5 +lat_2=2";

    helpers.fwd_test(sargs, fwd_in, s_fwd_expect);
    helpers.inv_test(sargs, inv_in, s_inv_expect);
    helpers.fwd_test(eargs, fwd_in, e_fwd_expect);
    helpers.inv_test(eargs, inv_in, e_inv_expect);
  })

});