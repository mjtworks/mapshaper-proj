var assert = require('assert'),
    api = require('../../'),
    helpers = require('../helpers');

describe('merc.js', function () {

  var fwd_in = [
    [ 2, 1],
    [ 2,-1],
    [-2, 1],
    [-2,-1]
  ];

  var e_fwd_expect = [
    [ 222638.981586547132,  110579.965218249708],
    [ 222638.981586547132, -110579.965218249112],
    [-222638.981586547132,  110579.965218249708],
    [-222638.981586547132, -110579.965218249112]
  ];

  var s_fwd_expect = [
    [ 223402.144255274179,  111706.743574944077],
    [ 223402.144255274179, -111706.743574944485],
    [-223402.144255274179,  111706.743574944077],
    [-223402.144255274179, -111706.743574944485]
  ];

  var inv_in = [
    [ 200, 100],
    [ 200,-100],
    [-200, 100],
    [-200,-100]
  ];

  var e_inv_expect = [
    [ 0.00179663056823904264,  0.00090436947522799056],
    [ 0.00179663056823904264, -0.00090436947522799056],
    [-0.00179663056823904264,  0.00090436947522799056],
    [-0.00179663056823904264,  -0.00090436947522799056]
  ];

  var s_inv_expect = [
    [ 0.00179049310978382265,  0.000895246554845297135],
    [ 0.00179049310978382265, -0.000895246554858019272],
    [-0.00179049310978382265,  0.000895246554845297135],
    [-0.00179049310978382265, -0.000895246554858019272]
  ];

  var eargs = "+proj=merc   +ellps=GRS80  +lat_1=0.5 +lat_2=2";
  var sargs = "+proj=merc   +a=6400000    +lat_1=0.5 +lat_2=2";

  helpers.fwd_test(eargs, fwd_in, e_fwd_expect);
  helpers.fwd_test(sargs, fwd_in, s_fwd_expect);
  helpers.inv_test(eargs, inv_in, e_inv_expect);
  helpers.inv_test(sargs, inv_in, s_inv_expect);

});
