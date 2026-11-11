/* 11 · A su medida — el estudio prueba color, letra, paquete y tono, y ve su panel al instante.
   Usa LETRAS, COLORES, cargarLetras, varsLetra y varsColor de demos/completo/letras.js */
"use strict";
(function () {
  const caja = document.getElementById("medida");
  if (!caja || typeof LETRAS === "undefined") return;
  const vista = document.getElementById("m-vista");

  const LETRAS_M = ["lora", "bodoni", "cormorant", "jakarta"].map(id => LETRAS.find(l => l.id === id));
  const ETIQ_LETRA = { lora: "Tranquila", bodoni: "De revista", cormorant: "Elegante", jakarta: "Moderna" };
  const PAQ = [
    { id: "primer", n: "Sesión de primer año", msg: "sesión de primer año", m: 650, por: "Le hicieron su sesión de recién nacido y el bebé cumple 1 año el 1 de diciembre.",
      f: "Su bebé cumple su primer año el 1 de diciembre", c: "¡Ya casi cumple su primer añito!" },
    { id: "xv", n: "XV años en estudio", msg: "sesión de XV años", m: 2900, por: "La hija mayor cumple 15 en marzo y la familia ya vino a dos sesiones.",
      f: "Se acercan los XV años de su hija en marzo", c: "¡Ya vienen los XV! Marzo llega rapidito." },
    { id: "navidad", n: "Mini sesión navideña", msg: "mini sesión navideña", m: 450, por: "Vinieron el diciembre pasado y las fechas de este año se llenan rápido.",
      f: "Ya abrimos las mini sesiones navideñas de diciembre", c: "¡Ya están las mini sesiones navideñas!" },
    { id: "embarazo", n: "Sesión de embarazo", msg: "sesión de embarazo", m: 950, por: "En su sesión de pareja contaron que esperan bebé para febrero.",
      f: "Les deseamos lo mejor en esta espera", c: "¡Qué emoción, ya viene el bebé!" }
  ];
  const TONOS = [{ id: "formal", n: "De usted, formal" }, { id: "cercano", n: "Cercano, de confianza" }];
  const st = { color: "corinto", letra: "lora", paq: "primer", tono: "formal" };

  const radio = (grupo, id, txt, extra = "") =>
    `<label${extra}><input type="radio" name="${grupo}" value="${id}"${st[grupo] === id ? " checked" : ""}><span>${txt}</span></label>`;
  document.getElementById("m-colores").innerHTML = COLORES.map(c =>
    radio("color", c.id, `<i style="background:${c.a}"></i><em>${c.n}</em>`, ` class="m-sw" title="${c.n}"`)).join("");
  document.getElementById("m-letras").innerHTML = LETRAS_M.map(l =>
    radio("letra", l.id, `<b style="font-family:'${l.serif}',Georgia,serif">${ETIQ_LETRA[l.id]}</b><small>${l.n}</small>`)).join("");
  document.getElementById("m-paquetes").innerHTML = PAQ.map(p => radio("paq", p.id, p.n)).join("");
  document.getElementById("m-tonos").innerHTML = TONOS.map(t => radio("tono", t.id, t.n)).join("");

  const fmtQ = typeof Q === "function" ? Q : v => "Q " + Number(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function mensaje(p) {
    if (st.tono === "formal")
      return `Buenos días, familia. Les saluda Foto González Studio. ${p.f}. ¿Desean que les apartemos una fecha para su ${p.msg}? La inversión es de ${fmtQ(p.m)}.`;
    return `¡Hola, familia! ${p.c} ¿Les apartamos su ${p.msg}? Sale en ${fmtQ(p.m)}.`;
  }
  function pintar() {
    const c = COLORES.find(x => x.id === st.color), l = LETRAS.find(x => x.id === st.letra), p = PAQ.find(x => x.id === st.paq);
    Object.entries({ ...varsColor(c), ...varsLetra(l) }).forEach(([k, v]) => vista.style.setProperty(k, v));
    vista.style.fontSynthesis = l.uno ? "none" : "";
    document.getElementById("mv-paq").textContent = p.n;
    document.getElementById("mv-por").textContent = p.por;
    document.getElementById("mv-btn").textContent = "Mandar la oferta · " + fmtQ(p.m);
    document.getElementById("mv-msg").textContent = mensaje(p);
    document.getElementById("m-ver").href = `demos/completo/?letra=${l.id}&color=${c.id}&de=propuesta`;
  }
  document.getElementById("m-ctrl").addEventListener("change", e => {
    if (!e.target.name) return;
    st[e.target.name] = e.target.value;
    pintar();
  });
  // Las letras se descargan solo cuando la sección se acerca
  new IntersectionObserver((ents, o) => {
    if (!ents[0].isIntersecting) return;
    o.disconnect(); cargarLetras(LETRAS_M);
  }, { rootMargin: "600px 0px" }).observe(caja);
  if (typeof pintarIconos === "function") pintarIconos(caja);
  pintar();
})();
