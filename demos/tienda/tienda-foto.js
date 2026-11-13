/* Tienda · detalles de fotógrafo: hoja de contactos, recorte, laboratorio, revelado y movimiento suave */
(() => {
  const suave = !calma;
  const fino = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Hoja de contactos ---------- */
  const caja = $(".tira-caja");
  if (caja) {
    caja.classList.add("hoja");
    caja.insertAdjacentHTML("afterbegin", `<div class="hc-cab" aria-hidden="true"><span>FGS 400</span><span>Rollo 01 · 24 exp.</span><span class="hc-lapiz">Marcadas: sus favoritas</span></div>`);
    caja.insertAdjacentHTML("beforeend", `<div class="hc-pie" aria-hidden="true"><span>▸ XV años · Retalhuleu</span><span>Hoja de contactos</span></div>`);
    $$("#tira .miniatura").forEach((b, i) => b.style.setProperty("--i", i));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { caja.classList.add("dibuja"); io.disconnect(); } }), { threshold: .25 });
    io.observe(caja);
  }

  /* ---------- Recorte y encuadre ---------- */
  const PROP = { "30x40": ["4:3", 300], "40x60": ["3:2", 240], "60x90": ["3:2", 200] };
  const config = $(".config"), primerGrupo = $(".config .grupo");
  let rcY = 50;
  if (config && primerGrupo) {
    primerGrupo.insertAdjacentHTML("beforebegin", `
      <div class="recorte" id="recorte">
        <div class="rc-cab"><span class="rc-tit">Encuadre</span><span class="rc-etq" id="rc-etq"></span></div>
        <div class="rc-area">
          <div class="foto ${fotoCls()} rc-foto" data-su-foto="rc-foto"></div>
          <div class="rc-marco" id="rc-marco" role="slider" tabindex="0" aria-label="Mover el encuadre hacia arriba o hacia abajo" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="Al centro">
            <i class="rc-t1"></i><i class="rc-t2"></i><i class="rc-t3"></i><i class="rc-t4"></i>
            <b class="rc-e e1"></b><b class="rc-e e2"></b><b class="rc-e e3"></b><b class="rc-e e4"></b>
          </div>
        </div>
        <p class="rc-nota" id="rc-nota"></p>
      </div>`);
  }
  const area = $(".rc-area"), marco = $("#rc-marco");
  function pintarRecorte() {
    if (!area) return;
    const t = TAM[cfg.tam], r = t.w / t.h, [prop, ppp] = PROP[cfg.tam];
    const caja = area.getBoundingClientRect(), base = caja.height ? caja.width / caja.height : 1;
    const alto = Math.min(100, (base / r) * 100);
    area.style.setProperty("--rc-alto", alto + "%");
    area.style.setProperty("--rc-top", ((100 - alto) * rcY / 100) + "%");
    $("#cuadro").style.setProperty("--rc-y", rcY + "%");
    $("#rc-etq").textContent = `${t.n.replace(" cm", "")} · ${prop}`;
    $("#rc-nota").innerHTML = `Arrastre el recuadro para elegir qué parte se imprime. <b>${ppp} ppp</b> · ${ppp >= 240 ? "nitidez excelente" : "muy buena a distancia de pared"}.`;
    const txt = rcY < 34 ? "Más arriba" : rcY > 66 ? "Más abajo" : "Al centro";
    marco.setAttribute("aria-valuenow", Math.round(rcY)); marco.setAttribute("aria-valuetext", txt);
  }
  if (marco) {
    let arrastre = null;
    const mover = y => { rcY = Math.max(0, Math.min(100, y)); pintarRecorte(); };
    marco.addEventListener("pointerdown", e => {
      arrastre = { y: e.clientY, v: rcY, h: area.getBoundingClientRect().height };
      marco.setPointerCapture(e.pointerId); area.classList.add("moviendo");
    });
    marco.addEventListener("pointermove", e => {
      if (!arrastre) return;
      const libre = arrastre.h * (1 - parseFloat(area.style.getPropertyValue("--rc-alto")) / 100);
      if (libre > 2) mover(arrastre.v + (e.clientY - arrastre.y) / libre * 100);
    });
    const soltar = () => { arrastre = null; area.classList.remove("moviendo"); };
    marco.addEventListener("pointerup", soltar); marco.addEventListener("pointercancel", soltar);
    marco.addEventListener("keydown", e => {
      const d = { ArrowUp: -10, ArrowDown: 10, Home: -100, End: 100 }[e.key];
      if (d === undefined) return;
      e.preventDefault(); mover(Math.abs(d) === 100 ? (d < 0 ? 0 : 100) : rcY + d);
    });
  }

  /* ---------- Laboratorio de impresión ---------- */
  const LAB = {
    papel: { t: "Impresión giclée en papel algodón", d: [["Papel", "Algodón 308 g, mate"], ["Tinta", "Pigmento, 12 colores"], ["Dura", "Más de 100 años sin decolorarse"]] },
    canvas: { t: "Canvas sobre bastidor de madera", d: [["Tela", "Lienzo de algodón 380 g"], ["Bastidor", "Pino seco de 3.8 cm"], ["Acabado", "Barniz que protege del sol"]] },
    marco: { t: "Enmarcado en nogal, listo para colgar", d: [["Moldura", "Nogal natural de 3 cm"], ["Vidrio", "Antirreflejo, no se ve el foco"], ["Atrás", "Cartón libre de ácido y gancho"]] }
  };
  const grupoAcab = $("#acabados")?.closest(".grupo");
  if (grupoAcab) grupoAcab.insertAdjacentHTML("afterend", `<div class="lab" id="lab" aria-live="polite"></div>`);
  let labAntes = "";
  function pintarLab() {
    const lab = $("#lab"); if (!lab || labAntes === cfg.acab) return;
    const l = LAB[cfg.acab], cambio = labAntes !== "";
    labAntes = cfg.acab;
    lab.innerHTML = `<span class="lab-muestra m-${cfg.acab}" aria-hidden="true"></span>
      <div class="lab-txt"><small>Ficha del laboratorio</small><b>${l.t}</b>
      <dl>${l.d.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl></div>`;
    if (cambio && suave) { lab.classList.remove("entra"); void lab.offsetWidth; lab.classList.add("entra"); }
  }

  /* ---------- Revelado al agregar y destellos ---------- */
  const pared = $("#pared-vista");
  if (pared) pared.insertAdjacentHTML("beforeend", `<span class="luz-roja" aria-hidden="true"></span><span class="destello" aria-hidden="true"></span><span class="lab-aviso" aria-hidden="true">Revelando…</span>`);
  const cuadro = $("#cuadro");
  if (cuadro) cuadro.insertAdjacentHTML("beforeend", `<span class="capa-revela" aria-hidden="true"></span>`);
  const repetir = (el, cls) => { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };

  window.alElegirFoto = () => { if (suave) repetir(pared, "flash"); };
  let primera = true;
  window.alCambiarCuadro = () => {
    pintarRecorte(); pintarLab();
    if (primera) { primera = false; return; }
    if (suave) repetir(cuadro, "mece");
  };
  window.alAgregarCuadro = () => { if (suave) { repetir(pared, "revelando"); repetir(cuadro, "revela-foto"); } };

  /* ---------- Entradas al bajar ---------- */
  $$(".sec-cab, .config > .eyebrow, .config > h2, .config > .nota, .config > .recorte, .config > .grupo, .config > .lab, .config > .precio-caja, .seguimiento, .estudio, .tira-caja, .regalo, .ev-caja")
    .forEach(el => { if (!el.classList.contains("visto")) el.classList.add("revela"); });
  revelar();

  /* ---------- El collage sigue al mouse, apenas ---------- */
  const collage = $(".collage");
  if (collage && fino && suave) {
    const capas = $$(".foto", collage).map((el, i) => [el, [14, -9, 18][i] || 10]);
    collage.addEventListener("pointermove", e => {
      const r = collage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      capas.forEach(([el, k]) => el.style.translate = `${(x * k).toFixed(1)}px ${(y * k).toFixed(1)}px`);
    });
    collage.addEventListener("pointerleave", () => capas.forEach(([el]) => el.style.translate = "0px 0px"));
  }

  addEventListener("resize", () => pintarRecorte());
  pintarRecorte(); pintarLab();
})();
