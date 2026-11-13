/* Detalles de fotógrafo para todas las páginas: esquinas de visor, datos de la toma,
   tira de negativos y el obturador que se abre al cargar.
   Uso: <script src="…/foto.js" data-visor="selectores" data-toma="selectores" data-obturador="1"></script> */
(function () {
  var yo = document.currentScript, calma = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SEL_V = (yo && yo.getAttribute("data-visor")) || "", SEL_T = (yo && yo.getAttribute("data-toma")) || "";
  var APERTURAS = ["f/1.8", "f/2.0", "f/2.8", "f/4", "f/5.6"], VEL = ["1/125", "1/160", "1/200", "1/250", "1/320", "1/500"], ISO = ["ISO 100", "ISO 200", "ISO 400", "ISO 800"], LENTE = ["35 mm", "50 mm", "85 mm", "70 mm", "24 mm"];
  var n = 0;
  function datos(i) { return APERTURAS[i % 5] + " · " + VEL[(i * 3) % 6] + " · " + ISO[(i * 7) % 4] + " · " + LENTE[(i * 2) % 5]; }
  function marcar(el) {
    if (SEL_V && el.matches && el.matches(SEL_V) && !el.querySelector(":scope > .visor-marco")) {
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
      var m = document.createElement("span"); m.className = "visor-marco"; m.setAttribute("aria-hidden", "true");
      m.innerHTML = "<i></i><i></i><i></i><i></i><b></b>"; el.appendChild(m);
    }
    if (SEL_T && el.matches && el.matches(SEL_T) && !el.querySelector(":scope > .toma-datos")) {
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
      var t = document.createElement("span"); t.className = "toma-datos"; t.setAttribute("aria-hidden", "true");
      t.textContent = datos(n++); el.appendChild(t);
    }
  }
  function recorrer(raiz) {
    if (!raiz.querySelectorAll) return;
    if (SEL_V) { var a = raiz.querySelectorAll(SEL_V); for (var i = 0; i < a.length; i++) marcar(a[i]); }
    if (SEL_T) { var b = raiz.querySelectorAll(SEL_T); for (var k = 0; k < b.length; k++) marcar(b[k]); }
    if (raiz.matches) marcar(raiz);
  }
  /* Tira de negativos: <div class="negativo" data-toma-n="02" data-titulo="Lo que cambia" data-pregunta="¿…?"></div> */
  function negativos() {
    var ns = document.querySelectorAll(".negativo:not([data-listo])");
    for (var i = 0; i < ns.length; i++) {
      var e = ns[i], num = e.getAttribute("data-toma-n") || "", tit = e.getAttribute("data-titulo") || "", pre = e.getAttribute("data-pregunta") || "";
      var base = parseInt(num, 10) || (i + 1), cuadros = "";
      for (var c = 0; c < 9; c++) cuadros += "<span>" + (base * 4 + c) + (c % 2 ? "A" : "") + "</span>";
      e.innerHTML = '<div class="neg-perf" aria-hidden="true"></div><div class="neg-cuadros" aria-hidden="true">' + cuadros + '</div>' +
        '<div class="neg-txt">' + (num ? '<span class="neg-n">Toma ' + num + '</span>' : "") + (tit ? "<b>" + tit + "</b>" : "") + (pre ? "<small>" + pre + "</small>" : "") + "</div>" +
        '<div class="neg-perf" aria-hidden="true"></div>';
      e.setAttribute("data-listo", "1");
    }
  }
  /* El obturador se abre al cargar (una vez por visita) */
  function obturador() {
    if (!yo || !yo.getAttribute("data-obturador") || calma) return;
    try { if (sessionStorage.getItem("fgs.obt." + location.pathname)) return; sessionStorage.setItem("fgs.obt." + location.pathname, "1"); } catch (e) { /* sin almacenamiento */ }
    if (/[?&]embed=1/.test(location.search)) return;
    var o = document.createElement("div"); o.className = "obturador"; o.setAttribute("aria-hidden", "true");
    var hojas = ""; for (var h = 0; h < 6; h++) hojas += '<path d="M50 50 L' + (50 + 70 * Math.cos(h * Math.PI / 3)).toFixed(1) + " " + (50 + 70 * Math.sin(h * Math.PI / 3)).toFixed(1) + '"/>';
    o.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><g class="obt-hojas">' + hojas + "</g></svg>";
    document.body.appendChild(o);
    setTimeout(function () { o.classList.add("abre"); }, 60);
    setTimeout(function () { o.remove(); }, 1300);
  }
  /* Fotos de muestra (no son del estudio): llevan su etiqueta cuando se ven grandes */
  var MUESTRA = ".foto.f-toga, .foto.f-toga2, .foto.f-maternidad, .foto.f-boda, .foto.f-navidad", pend = false;
  function muestras() {
    pend = false;
    var a = document.querySelectorAll(MUESTRA + ", .foto[data-muestra]");
    for (var i = 0; i < a.length; i++) {
      var e = a[i], si = e.matches(MUESTRA) && e.offsetWidth >= 120 && e.offsetHeight >= 90;
      if (si && !e.hasAttribute("data-muestra")) e.setAttribute("data-muestra", "");
      else if (!si && e.hasAttribute("data-muestra")) e.removeAttribute("data-muestra");
    }
  }
  function luego() { if (!pend) { pend = true; requestAnimationFrame(function () { setTimeout(muestras, 60); }); } }
  function iniciar() {
    negativos(); recorrer(document.body); obturador(); muestras();
    addEventListener("resize", luego); document.addEventListener("click", function () { setTimeout(luego, 350); });
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) {
        if (ms[i].type === "attributes") { if (ms[i].attributeName === "class") luego(); continue; }
        for (var k = 0; k < ms[i].addedNodes.length; k++) { var nd = ms[i].addedNodes[k]; if (nd.nodeType === 1 && (SEL_V || SEL_T)) recorrer(nd); }
        luego();
      }
      negativos();
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
