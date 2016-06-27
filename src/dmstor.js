/* @requires pj_err */

// Convert a formatted value in DMS or decimal degrees to radians
function dmstor(str) {
  return dmstod(str) * DEG_TO_RAD;
}

function dmstod(str) {
  var deg = /-?[0-9.]+d/i.exec(str);
  var min = /[0-9.]+'/.exec(str);
  var sec = /[0-9.]+"/.exec(str);
  var inv = /[ws][\s]*$/i.test(str);
  var d = parseFloat(deg ? deg[0] : str);
  if (min) {
    d += parseFloat(min[0]) / 60;
  }
  if (sec) {
    d += parseFloat(sec[0]) / 3600;
  }
  if (inv) {
    d = -d;
  }
  if (isNaN(d)) {
    e_error(-16);
  }
  return d;
}