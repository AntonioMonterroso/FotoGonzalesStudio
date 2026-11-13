/* Demos Foto González Studio — utilidades compartidas (Monterroso Dev Studio)
   Todo lo «en vivo» se simula aquí; en el sistema real lo hace Supabase Realtime. */
"use strict";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const Q = n => "Q " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const calma = matchMedia("(prefers-reduced-motion: reduce)").matches;
const EASE = "cubic-bezier(0.25, 1, 0.5, 1)";
const red = fn => setTimeout(fn, 180 + Math.random() * 220); // simula el viaje por internet
const hora = () => new Date().toLocaleTimeString("es-GT", { hour: "2-digit", minute: "2-digit" });
const azar = a => a[Math.floor(Math.random() * a.length)];

/* ---------- Íconos (Lucide, ISC) ---------- */
const ICO = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  aperture: '<circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  images: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  unlock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  cash: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  frame: '<rect width="18" height="18" x="3" y="3" rx="1"/><rect width="10" height="10" x="7" y="7"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  cake: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  layout: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  chevAbajo: '<path d="m6 9 6 6 6-6"/>',
  chevArriba: '<path d="m18 15-6-6-6 6"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
};
const ico = (n, w = 18) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n] || ""}</svg>`;
const pintarIconos = (r = document) => $$("[data-i]", r).filter(el => ICO[el.dataset.i]).forEach(el => { el.innerHTML = ico(el.dataset.i); el.removeAttribute("data-i"); });

/* ---------- Números que cuentan solos ---------- */
function odometro(el, valor, fmt = Q) {
  const desde = Number(el.dataset.v ?? valor);
  el.dataset.v = valor;
  if (calma || desde === valor) { el.textContent = fmt(valor); return; }
  const t0 = performance.now(), dur = 520;
  const paso = t => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(desde + (valor - desde) * e);
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
  setTimeout(() => { if (Number(el.dataset.v) === valor) el.textContent = fmt(valor); }, dur + 80);
}

/* ---------- Avisos (prueba social y notificaciones) ---------- */
function aviso(html, { ic = "bell", foto = "", dur = 4800, sub = "" } = {}) {
  let caja = $("#avisos");
  if (!caja) { caja = document.createElement("div"); caja.id = "avisos"; caja.className = "avisos"; caja.setAttribute("aria-live", "polite"); document.body.append(caja); }
  const el = document.createElement("div");
  el.className = "aviso";
  el.innerHTML = `<span class="ic${foto ? " foto " + foto : ""}">${foto ? "" : ico(ic)}</span><span>${html}${sub ? `<small>${sub}</small>` : ""}</span>`;
  caja.append(el);
  while (caja.children.length > 2) caja.firstElementChild.remove();
  setTimeout(() => { el.classList.add("sale"); setTimeout(() => el.remove(), 320); }, dur);
  return el;
}

/* ---------- WhatsApp simulado: así le llega el mensaje al estudio ---------- */
function simularWA({ texto, quien = "Usted", respuesta = "", nota = "En el sistema real este botón abre WhatsApp con el mensaje ya escrito, directo al número del estudio." }) {
  let h = $("#hoja-wa");
  if (!h) {
    h = document.createElement("div"); h.id = "hoja-wa"; h.className = "hoja-wa"; h.setAttribute("role", "dialog"); h.setAttribute("aria-modal", "true"); h.setAttribute("aria-label", "Mensaje de WhatsApp de muestra");
    h.innerHTML = `<div class="caja"><div class="cab"><span class="av">FG</span><div><b>Foto González Studio</b><small>en línea</small></div></div><div class="chat"></div>
      <div class="pie-wa"><p></p><button class="btn btn-tinta" type="button">Listo</button></div></div>`;
    document.body.append(h);
    const cerrar = () => h.classList.remove("ver");
    $(".pie-wa .btn", h).addEventListener("click", cerrar);
    h.addEventListener("click", e => { if (e.target === h) cerrar(); });
    addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
  }
  $(".chat", h).innerHTML = `<p class="b yo">${texto}<small>${hora()} ✓✓</small></p>` + (respuesta ? `<p class="b" style="animation-delay:900ms">${respuesta}<small>${hora()}</small></p>` : "");
  $(".pie-wa p", h).textContent = nota;
  h.classList.add("ver");
  setTimeout(() => $(".pie-wa .btn", h).focus(), 50);
}

/* ---------- Cinta de la demo y palancas de venta ---------- */
function cintaDemo({ sistema, palancas }) {
  const ids = Object.keys(palancas);
  const c = document.createElement("div");
  c.className = "cinta-demo";
  c.innerHTML = `<span class="et mono">DEMO · <b>${sistema}</b></span>
    ${window.cambiarDiseno ? `<button class="cinta-dis" type="button" data-diseno-btn aria-label="Cambiar el diseño" aria-pressed="${window.disenoActual() === "claro"}">${ico("aperture", 16)}<span class="dis-txt">Diseño: <b data-diseno-txt>${window.disenoActual() === "claro" ? "Claro" : "Clásico"}</b></span></button>` : ""}
    <a href="../../#demos">${ico("back", 16)}<span>Propuesta</span></a>
    <button class="ver-venta" type="button" aria-pressed="false">${ico("trend", 16)}<span class="vv-largo">Ver cómo vende</span><span class="vv-corto">Cómo vende</span><span class="txt-largo">&nbsp;(${ids.length})</span></button>
    <button class="cinta-plegar" type="button" aria-label="Plegar la barra de la demo" aria-controls="cinta-demo">${ico("chevAbajo", 18)}</button>`;
  c.id = "cinta-demo";
  document.body.append(c);

  // la barra se pliega en un botón redondo y lo recuerda
  const abre = document.createElement("button");
  abre.type = "button"; abre.className = "cinta-abrir"; abre.innerHTML = ico("chevArriba", 20);
  abre.setAttribute("aria-label", "Mostrar la barra de la demo"); abre.setAttribute("aria-controls", "cinta-demo");
  document.body.append(abre);
  function plegar(si, foco) {
    document.documentElement.classList.toggle("cinta-plegada", si);
    c.inert = si; abre.inert = !si;
    abre.setAttribute("aria-expanded", String(!si));
    try { localStorage.setItem("fgs.cinta", si ? "plegada" : "abierta"); } catch (e) { /* sin almacenamiento */ }
    if (foco) setTimeout(() => (si ? abre : $(".cinta-plegar", c)).focus(), 60);
  }
  let plegadaAntes = false;
  try { plegadaAntes = localStorage.getItem("fgs.cinta") === "plegada"; } catch (e) { /* sin almacenamiento */ }
  plegar(plegadaAntes, false);
  $(".cinta-plegar", c).addEventListener("click", e => { e.stopPropagation(); plegar(true, e.detail === 0); });
  abre.addEventListener("click", e => { e.stopPropagation(); plegar(false, e.detail === 0); });

  // pines numerados sobre cada palanca
  ids.forEach((id, i) => {
    const el = $(`[data-palanca="${id}"]`);
    if (!el) return;
    if (getComputedStyle(el).position === "static") el.style.position = "relative";
    const pin = document.createElement("button");
    pin.type = "button"; pin.className = "pin"; pin.textContent = i + 1;
    pin.setAttribute("aria-label", `Palanca de venta ${i + 1}: ${palancas[id].t}`);
    pin.addEventListener("click", e => { e.stopPropagation(); abrir(i, pin); });
    el.append(pin);
  });

  const g = document.createElement("div");
  g.className = "globo"; g.setAttribute("role", "dialog"); g.setAttribute("aria-live", "polite");
  document.body.append(g);
  let actual = -1;
  function colocar(pin) {
    const r = pin.getBoundingClientRect(), w = g.offsetWidth, hG = g.offsetHeight;
    let x = Math.min(Math.max(16, r.left), innerWidth - w - 16);
    let y = r.bottom + 10;
    if (y + hG > innerHeight - 16) y = Math.max(16, r.top - hG - 10);
    g.style.left = x + "px"; g.style.top = y + "px";
  }
  function abrir(i, pin) {
    actual = i;
    const p = palancas[ids[i]];
    g.innerHTML = `<button class="cerrar" type="button" aria-label="Cerrar">${ico("x", 16)}</button>
      <span class="n">Palanca ${i + 1} de ${ids.length}</span><h4>${p.t}</h4><p>${p.d}</p>
      ${p.e ? `<div class="efecto">${ico("trend", 16)}<span>${p.e}</span></div>` : ""}
      <div class="nav"><button type="button" data-ir="-1"${i === 0 ? " disabled" : ""}>Anterior</button><button type="button" data-ir="1">${i === ids.length - 1 ? "Terminar" : "Siguiente"}</button></div>`;
    $(".cerrar", g).onclick = cerrar;
    $$("[data-ir]", g).forEach(b => b.onclick = () => {
      const k = actual + Number(b.dataset.ir);
      if (k >= ids.length) return cerrar();
      irA(k);
    });
    g.classList.add("ver");
    colocar(pin || $(`[data-palanca="${ids[i]}"] > .pin`));
  }
  function irA(k) {
    const el = $(`[data-palanca="${ids[k]}"]`);
    if (!el) return;
    if (typeof window.antesDePalanca === "function") window.antesDePalanca(ids[k]);
    el.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" });
    g.classList.remove("ver");
    setTimeout(() => abrir(k, $(".pin", el)), calma ? 0 : 520);
  }
  function cerrar() { g.classList.remove("ver"); actual = -1; }
  addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
  addEventListener("scroll", () => { if (actual >= 0) colocar($(`[data-palanca="${ids[actual]}"] > .pin`)); }, { passive: true });
  document.addEventListener("click", e => { if (actual >= 0 && !g.contains(e.target)) cerrar(); });

  const btn = $(".ver-venta", c);
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const on = document.body.classList.toggle("modo-venta");
    btn.setAttribute("aria-pressed", on);
    if (on) irA(0); else cerrar();
  });
  if (location.hash === "#vende") setTimeout(() => btn.click(), 900);
}

/* ---------- Revelado al hacer scroll ---------- */
function revelar() {
  const io = new IntersectionObserver(ents => ents.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const hermanos = el.parentElement ? $$(":scope > .revela:not(.visto)", el.parentElement) : [];
    el.style.transitionDelay = calma ? "0ms" : Math.min(Math.max(0, hermanos.indexOf(el)), 6) * 60 + "ms";
    el.classList.add("visto"); io.unobserve(el);
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  $$(".revela:not(.visto), .revelado:not(.visto)").forEach(el => io.observe(el));
}
