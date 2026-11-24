(function () {
  var r = document.documentElement, yo = document.currentScript;
  r.setAttribute("data-diseno", "claro");
  try { localStorage.removeItem("fgs.diseno"); } catch (e) {}
  var css = yo && yo.getAttribute("data-css");
  if (css) document.write('<link rel="stylesheet" href="' + css + '" data-diseno-claro>');
  window.disenoActual = function () { return "claro"; };
})();
