/* Interruptor de diseño: «claro» (por defecto) o «clásico».
   Se recuerda en este navegador y vale para todas las páginas de la propuesta.
   Uso: <script src="…/diseno.js" data-css="claro.css?v=…"></script> justo después de los estilos de la página. */
(function () {
  var CLAVE = "fgs.diseno", r = document.documentElement, yo = document.currentScript;
  var q = null;
  try { q = new URLSearchParams(location.search).get("diseno"); } catch (e) { q = null; }
  var d = q;
  try { if (!d) d = localStorage.getItem(CLAVE); if (q) localStorage.setItem(CLAVE, q); } catch (e) { /* sin almacenamiento */ }
  d = d === "clasico" ? "clasico" : "claro";
  r.setAttribute("data-diseno", d);
  // La hoja del diseño claro se escribe aquí mismo para que no parpadee al abrir
  var css = yo && yo.getAttribute("data-css");
  if (css) document.write('<link rel="stylesheet" href="' + css + '" data-diseno-claro media="' + (d === "claro" ? "all" : "not all") + '">');
  function aplicar(v) {
    r.setAttribute("data-diseno", v);
    var ls = document.querySelectorAll("link[data-diseno-claro]");
    for (var i = 0; i < ls.length; i++) ls[i].media = v === "claro" ? "all" : "not all";
    var ts = document.querySelectorAll("[data-diseno-txt]");
    for (var k = 0; k < ts.length; k++) ts[k].textContent = v === "claro" ? "Claro" : "Clásico";
    var bs = document.querySelectorAll("[data-diseno-btn]");
    for (var j = 0; j < bs.length; j++) bs[j].setAttribute("aria-pressed", v === "claro");
    try { document.dispatchEvent(new CustomEvent("diseno", { detail: v })); } catch (e) { /* navegador viejo */ }
  }
  window.disenoActual = function () { return r.getAttribute("data-diseno"); };
  window.cambiarDiseno = function () {
    var v = window.disenoActual() === "claro" ? "clasico" : "claro";
    try { localStorage.setItem(CLAVE, v); } catch (e) { /* sin almacenamiento */ }
    aplicar(v);
  };
  document.addEventListener("DOMContentLoaded", function () { aplicar(window.disenoActual()); });
  document.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest("[data-diseno-btn]"); if (b) window.cambiarDiseno(); });
  addEventListener("storage", function (e) { if (e.key === CLAVE && e.newValue) aplicar(e.newValue === "clasico" ? "clasico" : "claro"); });
})();
