"use strict";
(function () {
  const SEL = [
    ".sec-cabeza > .eyebrow", ".sec-cabeza > p", ".precios-cab .iva", ".planes", ".compra-unica",
    ".rt-tabla tbody tr", ".comp tbody tr", ".palancas li", ".m-mas h3", ".m-mas li", ".extras label",
    ".deslizador", ".calc-res .res", ".calc-nota", ".beneficios li", ".vivo-explica > *", ".tercios > *",
    ".m-ctrl fieldset", ".et-cols > div", ".cierre .fila", ".cierre .lead", ".portada .para", ".lista li", ".escena > *"
  ].join(",");
  const calma = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver(ents => {
    const porPadre = new Map();
    ents.forEach(e => {
      if (!e.isIntersecting) return;
      const p = e.target.parentElement;
      if (!porPadre.has(p)) porPadre.set(p, []);
      porPadre.get(p).push(e.target);
      io.unobserve(e.target);
    });
    porPadre.forEach(lista => lista.forEach((el, i) => {
      el.style.transitionDelay = calma ? "0ms" : Math.min(i, 7) * 55 + "ms";
      el.classList.add("mv-in");
      setTimeout(() => { el.style.transitionDelay = ""; }, 1400);
    }));
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

  function preparar(raiz) {
    raiz.querySelectorAll(SEL).forEach(el => {
      if (el.classList.contains("mv") || el.classList.contains("revela") || el.closest(".revela:not(.visto)")) return;
      if (el.closest("#intro")) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight * 0.9 && r.height > 0) return;
      el.classList.add("mv");
      io.observe(el);
    });
  }
  function iniciar() {
    preparar(document);
    const iva = document.getElementById("iva");
    if (iva) iva.addEventListener("change", () => {
      document.querySelectorAll(".desglose, .dom-op .p, .compra-unica .dos-formas, .arranque").forEach(el => {
        el.classList.remove("cambia"); void el.offsetWidth; el.classList.add("cambia");
      });
    });
    const ctrl = document.getElementById("m-ctrl"), vista = document.querySelector("#m-vista .m-area");
    if (ctrl && vista && !calma) ctrl.addEventListener("change", e => {
      if (e.target.name === "letra" || e.target.name === "paq" || e.target.name === "tono")
        vista.animate([{ opacity: 0.45, translate: "0 4px" }, { opacity: 1, translate: "0 0" }], { duration: 320, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
    });
    if (ctrl) ctrl.addEventListener("change", e => {
      if (e.target.name !== "color" || calma) return;
      const r = document.documentElement;
      r.classList.add("tinendo");
      clearTimeout(r._tinendo);
      r._tinendo = setTimeout(() => r.classList.remove("tinendo"), 700);
    }, true);
    const menu = document.getElementById("menu"), btn = document.getElementById("menu-btn");
    if (menu && btn) btn.addEventListener("click", () => {
      if (!menu.classList.contains("abierto")) return;
      menu.querySelectorAll("a").forEach((a, i) => { a.style.animationDelay = i * 35 + "ms"; a.classList.remove("menu-abierto-anim"); void a.offsetWidth; a.classList.add("menu-abierto-anim"); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
