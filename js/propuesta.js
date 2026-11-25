"use strict";

const WA = "50237645139";
const CAMBIO = 7.7;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const Q = n => "Q " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const calma = matchMedia("(prefers-reduced-motion: reduce)").matches;
const EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

const ICO = {
  chevAbajo: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  aperture: '<circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  images: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  cash: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  frame: '<rect width="18" height="18" x="3" y="3" rx="1"/><rect width="10" height="10" x="7" y="7"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>'
};
const ico = (n, w = 18) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n]}</svg>`;
const pintarIconos = (r = document) => $$("[data-i]", r).filter(el => ICO[el.dataset.i]).forEach(el => { el.innerHTML = ico(el.dataset.i); el.removeAttribute("data-i"); });

const PRECIOS = {
  pagina: {
    n: "Página del estudio", tipo: "Landing page", ini: 600, mes: 300,
    para: "Para que lo encuentren y aparten fecha con anticipo.",
    vista: "land",
    x: ["<b>Portafolio</b> por categoría", "<b>«Encuentre su sesión»</b>: recomienda el paquete", "<b>Fechas libres en vivo</b>", "Paquetes con anticipo para apartar", "Reseñas y promoción del mes", "Panel sencillo, lista para Google"]
  },
  tienda: {
    n: "Tienda en línea", tipo: "E-commerce", ini: 2000, mes: 450,
    para: "Para vender impresiones y álbumes sin atender cada pedido por chat.",
    vista: "tienda",
    x: ["<b>Todo lo de la página</b>", "<b>«Véala en su pared»</b>: su foto a escala", "Impresiones, álbumes y <b>tarjetas de regalo</b>", "<b>Fotos de desfiles y eventos</b> por familia", "Paquetes y <b>envío gratis desde un monto</b>", "Pago por transferencia o contra entrega", "<b>Recordatorio de carrito olvidado</b>", "Pedido con código que el cliente sigue"]
  },
  completo: {
    n: "Sistema completo con landing", tipo: "Sistema web + página", ini: 2500, mes: 750, conTienda: 900, rec: true,
    para: "Para llevar el estudio de la reserva a la entrega y vender más.",
    vista: "sis",
    x: ["<b>La página incluida</b>; la tienda, si la quieren", "<b>Ventas que le encuentra cada día</b>, con el mensaje listo", "<b>Cámara en vivo</b> (según la cámara): las fotos llegan solas", "<b>Cada sesión preparada</b>: tomas, luz y clima", "Reservas con anticipo y <b>recordatorios automáticos</b>", "<b>Galería que vende fotos extra</b>, con marca de agua", "<b>Portal de cada familia</b> con enlace y PIN", "<b>Ofertas por WhatsApp</b>, referidos y reseñas", "Clientes, caja y reportes; <b>se instala como app</b>"]
  }
};
const DEMOS = {
  pagina: { gancho: "Convierte al que mira en el que aparta.", palancas: [
    ["sparkles", "Cuestionario", "Recomienda el paquete y deja la consulta lista para cerrar."],
    ["calendar", "Fechas libres en vivo", "«Quedan 3 sábados» es cierto y empuja a decidir."],
    ["star", "El paquete del medio, destacado", "Junto al Premium, el Clásico se ve como la compra sensata."],
    ["gift", "Guía gratis a cambio del WhatsApp", "El que no está listo deja su número para la próxima temporada."]
  ] },
  tienda: { gancho: "Cada galería termina en algo impreso.", palancas: [
    ["frame", "Su foto, en su pared", "Verla a escala anima al tamaño grande."],
    ["package", "Paquetes que ahorran", "Una compra se vuelve tres piezas."],
    ["cart", "Envío gratis desde Q 600", "«Le faltan Q 80» y el mini álbum entra al carrito."],
    ["users", "Desfiles y eventos", "Cada familia busca a su hijo y compra la foto."],
    ["send", "Carrito olvidado", "Le llega un WhatsApp para terminar la compra."]
  ] },
  completo: { gancho: "Le encuentra ventas al estudio cada mañana.", palancas: [
    ["bell", "Ventas que le encuentra cada día", "Cumpleaños, aniversarios y galerías por vencer, con el mensaje listo."],
    ["heart", "Galería que vende fotos extra", "El paquete trae 10 y la familia quiere 14."],
    ["lock", "Marca de agua hasta pagar", "Al pagar el saldo, las fotos se liberan solas."],
    ["send", "Campañas a quien le interesa", "Mini sesiones navideñas solo a las familias con bebé."],
    ["users", "Portal de cada familia", "Con su enlace y su PIN elige fotos, paga y guarda sus recibos."]
  ], extra: ["?portal=1", "users", "Abrir el portal de la familia"] }
};

const EXTRAS = [
  { id: "tienda", n: "Agregar la tienda", d: k => `Queda con página, sistema y tienda. La mensualidad queda en ${Q(PRECIOS.completo.conTienda * k)}.`, mes: 150, w: "la tienda", solo: ["completo"], on: true },
  { id: "gt", n: "Dominio .com.gt", d: "Además del .com incluido.", ini: 380, anual: true },
  { id: "carga", n: "Pasar su portafolio de Facebook", d: "Hasta 300 fotos, por categoría.", ini: 300 },
  { id: "capa", n: "Capacitación extra", d: "Otra sesión de 2 horas.", ini: 350 }
];

const FAQ = [
  ["¿Cómo sabemos que va a vender más?", "El panel cuenta consultas, ventas y clientes que vuelven. A los tres meses vemos los números juntos y ajustamos."],
  ["¿Qué pasa si se llena el espacio de las fotos?", "Cada plan trae espacio de sobra. Si el estudio crece, la nube cobra cerca de Q 0.17 por GB al mes y se lo pasamos sin ganancia."],
  ["¿El dominio es nuestro?", "Sí. Se registra a nombre del estudio y se va con ustedes."],
  ["¿Podemos empezar con la página y después subir?", "Sí. Lo pagado de arranque se abona y solo pagan la diferencia."],
  ["¿Qué significa tiempo real?", "Que nadie recarga. Si un cliente aparta el sábado, a otro ya le sale ocupado."],
  ["¿Tenemos que dejar WhatsApp?", "No. El sistema arma los mensajes y ustedes los mandan como siempre."],
  ["¿Y si comparten las fotos sin pagar el saldo?", "En el sistema completo, la galería lleva marca de agua hasta que paguen."]
];

const iva = () => ($("#iva")?.checked ? 1.12 : 1);
function odometro(el, valor, fmt = Q) {
  const desde = Number(el.dataset.v || 0);
  el.dataset.v = valor;
  if (calma || !desde || desde === valor) { el.textContent = fmt(valor); return; }
  const t0 = performance.now(), dur = 520;
  const paso = t => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(desde + (valor - desde) * e);
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
  setTimeout(() => { if (Number(el.dataset.v) === valor) el.textContent = fmt(valor); }, dur + 80);
}
function destello() {
  if (calma) return;
  $("#destello").animate([{ opacity: .75 }, { opacity: 0 }], { duration: 320, easing: EASE });
}

function intro() {
  const el = $("#intro");
  let visto = false;
  try { visto = sessionStorage.getItem("fgs.intro") === "1"; sessionStorage.setItem("fgs.intro", "1"); } catch (e) {}
  if (calma || visto) { el.classList.add("listo"); entrarPortada(0); return; }
  const g = $("#hueco-g"), hojas = $("#hojas"), flash = $(".flash", el), exif = $("#intro-exif");
  const abrir = [{ transform: "scale(0.01) rotate(0deg)" }, { transform: "scale(7.5) rotate(70deg)" }];
  const op = { duration: 1000, delay: 420, easing: EASE, fill: "forwards" };
  g.animate(abrir, op);
  hojas.animate(abrir, op);
  flash.animate([{ opacity: 0 }, { opacity: .8 }, { opacity: 0 }], { duration: 420, delay: 300, easing: EASE });
  exif.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 450, easing: EASE, fill: "forwards" });
  let fin = setTimeout(cerrar, 1380);
  function cerrar() { clearTimeout(fin); el.classList.add("listo"); }
  addEventListener("keydown", cerrar, { once: true });
  entrarPortada(780);
}
function entrarPortada(retraso) {
  const lineas = $$("#titulo .linea > span");
  if (calma) return;
  lineas.forEach((s, i) => s.animate(
    [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
    { duration: 800, delay: retraso + i * 70, easing: EASE, fill: "backwards" }));
  $$(".portada .para, .portada .bajada, .portada .acciones").forEach((el, i) => el.animate(
    [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 700, delay: retraso + 260 + i * 70, easing: EASE, fill: "backwards" }));
  $("#visor").animate(
    [{ opacity: 0, transform: "scale(0.96)", filter: "blur(8px)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    { duration: 900, delay: retraso + 120, easing: EASE, fill: "backwards" });
}

function visor() {
  const fotos = ["f-xv", "f-bebe", "f-pedida", "f-primer", "f-maracas", "f-quince", "f-familia", "f-retrato", "f-camisola", "f-pareja", "f-graduacion", "f-fuerza"];
  const exif = ["f/2.8 · 1/250 · ISO 100", "f/1.8 · 1/500 · ISO 200", "f/4 · 1/160 · ISO 100", "f/2.2 · 1/125 · ISO 400", "f/2 · 1/200 · ISO 100", "f/8 · 1/320 · ISO 100"];
  const v = $("#visor"), enf = $("#enfoque"), foto = $("#visor-foto");
  const flash = document.createElement("div"); flash.className = "visor-flash"; flash.setAttribute("aria-hidden", "true"); v.append(flash);
  let i = 0, cuadro = 1, ocupado = false, timer;

  function disparar(x, y) {
    if (ocupado) return; ocupado = true;
    enf.classList.remove("fijo");
    enf.style.left = (x ?? 30 + Math.random() * 40) + "%";
    enf.style.top = (y ?? 28 + Math.random() * 36) + "%";
    setTimeout(() => {
      enf.classList.add("fijo");
      setTimeout(() => {
        if (!calma) flash.animate([{ opacity: 0 }, { opacity: .9, offset: .18 }, { opacity: 0 }], { duration: 620, easing: EASE });
        const vieja = foto.cloneNode(); vieja.removeAttribute("id"); vieja.classList.add("visor-vieja"); foto.after(vieja);
        i = (i + 1) % fotos.length; cuadro++;
        foto.className = "foto " + fotos[i];
        const fin = () => { vieja.remove(); ocupado = false; };
        if (calma) fin();
        else {
          const a = vieja.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: 90, easing: EASE, fill: "forwards" });
          a.onfinish = fin; setTimeout(fin, 900);
        }
        $("#visor-exif").textContent = exif[i % exif.length];
        $("#visor-cuadro").textContent = "FGS · " + String(cuadro).padStart(4, "0");
      }, x == null ? 520 : 260);
    }, x == null ? 520 : 200);
  }
  function programar() { clearInterval(timer); if (!calma) timer = setInterval(() => { if (!document.hidden) disparar(); }, 4200); }

  v.setAttribute("role", "button"); v.tabIndex = 0;
  v.setAttribute("aria-label", "Visor de cámara: toque para tomar otra foto");
  v.addEventListener("click", e => {
    const r = v.getBoundingClientRect();
    const x = Math.min(82, Math.max(18, (e.clientX - r.left) / r.width * 100));
    const y = Math.min(78, Math.max(18, (e.clientY - r.top) / r.height * 100));
    disparar(e.clientX ? x : null, e.clientY ? y : null); programar();
  });
  v.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); disparar(50, 44); programar(); } });
  programar();
}

function miniVista(tipo) {
  if (tipo === "land") return `<div class="mini m-land"><div class="top"><i></i><i></i><i></i></div><div class="lienzo"><div class="hero foto f-xv"></div><span class="titulo"></span><span class="titulo"></span><div class="tiras"><span class="foto f-quince"></span><span class="foto f-bebe"></span><span class="foto f-familia"></span><span class="foto f-retrato"></span></div></div></div>`;
  if (tipo === "tienda") return `<div class="mini m-tienda"><div class="top"><i></i><i></i><i></i></div><div class="lienzo"><span class="carrito">3</span><div class="rej">${["f-producto", "f-pedida", "f-familia", "f-quince", "f-paisaje", "f-bebe"].map(f => `<div class="prod"><span class="foto ${f}"></span><i></i></div>`).join("")}</div></div></div>`;
  return `<div class="mini m-sis"><div class="top" style="grid-column:1/-1"><i></i><i></i><i></i></div><div class="lado"><i></i><i></i><i></i><i></i><i></i></div><div class="area"><div class="cifras"><span></span><span></span><span></span></div><div class="tablero">${[3, 2, 2, 1].map(n => `<div class="col">${"<span></span>".repeat(n)}</div>`).join("")}</div></div></div>`;
}
function pintarSistemas() {
  $("#sistemas-lista").innerHTML = Object.entries(PRECIOS).map(([id, p]) => `
    <article class="sistema revela${p.rec ? " recomendado" : ""}">
      ${p.rec ? '<span class="cinta">Recomendado</span>' : ""}
      <div class="vista">${miniVista(p.vista)}</div>
      <div class="cuerpo">
        <p class="tipo mono">${p.tipo.toUpperCase()}</p>
        <h3>${p.n}</h3>
        <p style="color:var(--tinta2);margin:0">${p.para}</p>
        <ul class="lista">${p.x.map(t => `<li>${ico("check")}<span>${t}</span></li>`).join("")}</ul>
        <div class="desde"><span style="color:var(--tinta2)">Desde</span><span><b>${Q(p.ini)}</b> + ${Q(p.mes)}/mes${p.conTienda ? `<small class="desde-nota">Con la tienda (la página va incluida): ${Q(p.conTienda)}/mes</small>` : ""}</span></div>
      </div>
    </article>`).join("");
}

function pintarVitrinas() {
  $("#vitrinas").innerHTML = Object.entries(PRECIOS).map(([id, p], i) => {
    const d = DEMOS[id];
    return `<article class="vitrina revela${i % 2 ? " al-reves" : ""}">
      <div class="vit-vista" role="img" aria-label="Vista de la demo de ${p.n}">${miniVista(p.vista)}</div>
      <div class="vit-cuerpo">
        <p class="tipo mono">${String(i + 1).padStart(2, "0")} · ${p.tipo.toUpperCase()}</p>
        <h3>${p.n}</h3>
        <p class="gancho">${d.gancho}</p>
        <ol class="palancas">${d.palancas.map(([ic, t, x]) => `<li><span class="ic">${ico(ic, 16)}</span><div><b>${t}</b><span>${x}</span></div></li>`).join("")}</ol>
      </div>
    </article>`;
  }).join("");
}

function escribirDominio() {
  const el = $("#url-txt"), dominios = ["fotogonzalezstudio.com", "fotogonzalezstudio.com.gt"];
  if (calma) { el.textContent = dominios[0]; return; }
  let d = 0, i = dominios[0].length, borrando = true; el.textContent = dominios[0];
  const tic = () => {
    const txt = dominios[d];
    if (!borrando) { i++; el.textContent = txt.slice(0, i); if (i === txt.length) { borrando = true; return setTimeout(tic, 2400); } }
    else { i--; el.textContent = txt.slice(0, i); if (i === 0) { borrando = false; d = (d + 1) % dominios.length; } }
    setTimeout(tic, borrando ? 28 : 70);
  };
  new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { o.disconnect(); setTimeout(tic, 1800); } }, { threshold: .4 }).observe(el);
}

function pintarPlanes() {
  const k = iva();
  $("#planes").innerHTML = Object.entries(PRECIOS).map(([id, p]) => {
    const t = !!p.conTienda, grande = t ? "conTienda" : "mes";
    return `
    <article class="plan revela visto${p.rec ? " recomendado" : ""}">
      ${p.rec ? '<span class="cinta">Recomendado</span>' : ""}
      <div><p class="mono tinta2">${(t ? p.tipo + " + tienda" : p.tipo).toUpperCase()}</p><h3 style="margin-top:6px">${t ? "Sistema completo con tienda" : p.n}</h3></div>
      <div class="monto"><b data-odo="${grande}-${id}">${Q(p[grande] * k)}</b><span>/ mes</span></div>
      <p class="arranque">Arranque: <b data-odo="ini-${id}">${Q(p.ini * k)}</b></p>${t ? `<p class="arranque alt">Sin la tienda: <b data-odo="mes-${id}">${Q(p.mes * k)}</b> al mes</p>` : ""}
      <a class="btn" href="#plan-form" data-elige="${id}"${t ? " data-tienda" : ""}>Escoger este</a>
    </article>`;
  }).join("");
  $$("[data-odo]").forEach(el => { const [t, id] = el.dataset.odo.split("-"); el.dataset.v = PRECIOS[id][t] * k; });
  $$("[data-elige]").forEach(a => a.addEventListener("click", () => {
    $(`#plan-form input[value="${a.dataset.elige}"]`).checked = true;
    if (a.hasAttribute("data-tienda")) $('#extras input[value="tienda"]').checked = true;
    resumen();
  }));
}
function actualizarPlanes() {
  const k = iva();
  $$("[data-odo]").forEach(el => { const [t, id] = el.dataset.odo.split("-"); odometro(el, PRECIOS[id][t] * k); });
  $("#ct-ini").textContent = Q(PRECIOS.completo.ini * k);
  $("#ct-sin").textContent = Q(PRECIOS.completo.mes * k);
  $("#ct-con").textContent = Q(PRECIOS.completo.conTienda * k);
  $$(".dom-op .p[data-q]").forEach(el => el.textContent = Q(el.dataset.q * k));
}
function pintarExtras() {
  $("#extras").innerHTML = EXTRAS.map(e => `
    <label data-id="${e.id}"><input type="checkbox" value="${e.id}"${e.on ? " checked" : ""}>
      <span>${e.n}<small data-extra-d="${e.id}">${typeof e.d === "function" ? e.d(iva()) : e.d}</small></span>
      <span class="p" data-extra="${e.id}"></span></label>`).join("");
  $$("#extras input").forEach(i => i.addEventListener("change", resumen));
}
function precioExtra(e, k) {
  if (e.mes) return "+" + Q(e.mes * k) + "/mes";
  return Q(e.ini * k) + (e.anual ? "/año" : "");
}
const resumenPrevio = {};
function resumen() {
  const k = iva(), f = $("#plan-form"), id = f.paq.value, p = PRECIOS[id];
  $$("#extras label").forEach(l => {
    const e = EXTRAS.find(x => x.id === l.dataset.id);
    const vale = !e.solo || e.solo.includes(id);
    l.style.opacity = vale ? 1 : .4; $("input", l).disabled = !vale;
    $(`[data-extra="${e.id}"]`).textContent = vale ? precioExtra(e, k) : "No aplica";
    if (typeof e.d === "function") $(`[data-extra-d="${e.id}"]`).textContent = e.d(k);
  });
  const elegidos = EXTRAS.filter(e => { const i = $(`#extras input[value="${e.id}"]`); return i.checked && !i.disabled; });
  const ini = p.ini + elegidos.filter(e => e.ini).reduce((s, e) => s + e.ini, 0);
  const mes = p.mes + elegidos.filter(e => e.mes).reduce((s, e) => s + e.mes, 0);
  $("#resumen").innerHTML = `
    <div><dt>Al arrancar</dt><dd data-r="ini"></dd></div>
    <div><dt>Cada mes</dt><dd data-r="mes"></dd></div>
    <div><dt>Precios</dt><dd style="font-size:1rem;font-family:inherit;font-weight:600">${k > 1 ? "Con IVA" : "Sin IVA"}</dd></div>
    <div><dt>Incluye</dt><dd style="font-size:1rem;font-family:inherit;font-weight:600">Hospedaje · dominio .com</dd></div>`;
  [["ini", ini * k], ["mes", mes * k]].forEach(([r, v]) => {
    const el = $(`[data-r="${r}"]`); el.dataset.v = resumenPrevio[r] || v; resumenPrevio[r] = v; odometro(el, v);
  });
  const txt = `Hola Antonio, soy de Foto González Studio. Me interesa el ${p.n.toLowerCase()}${elegidos.length ? " con " + elegidos.map(e => e.w || e.n).join(", ") : ""}: ${Q(ini * k)} al arrancar y ${Q(mes * k)} al mes${k > 1 ? " (con IVA)" : ""}. ¿Cuándo empezamos?`;
  $("#plan-wa").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(txt);
}

function pintarFAQ() {
  $("#faq").innerHTML = FAQ.map(([q, a]) => `<details class="revela"><summary>${q}</summary><p>${a}</p></details>`).join("");
}

const FOTOS_DEMO = ["f-familia", "f-bebe", "f-xv", "f-paisaje", "f-pedida", "f-primer", "f-retrato", "f-cacao", "f-quince", "f-mundial", "f-anillo", "f-pastel", "f-glam", "f-graduacion", "f-pareja", "f-camisola", "f-fuerza", "f-maracas", "f-producto", "f-maestra", "f-toga", "f-boda", "f-maternidad", "f-navidad"];
const PAQ_DEMO = [{ n: "Sesión de estudio", p: 450 }, { n: "Familia en exterior", p: 850 }, { n: "XV años", p: 2400 }];
const ESTADOS = [["Recibido", "Pagó el anticipo"], ["En edición", "Retoque y color"], ["En impresión", "Laboratorio"], ["Listo para recoger", "En el estudio"], ["Entregado", "¡Gracias!"]];
const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const demo = { sel: [], estado: 0, caja: 1250, reservas: [], fecha: null, paq: 1 };
const red = fn => setTimeout(fn, 180 + Math.random() * 220);

function hora() { return new Date().toLocaleTimeString("es-GT", { hour: "2-digit", minute: "2-digit" }); }
function alFeed(icono, html) {
  const li = document.createElement("li");
  li.className = "nuevo";
  li.innerHTML = `<span class="ico">${ico(icono, 15)}</span><span>${html}</span><time>${hora()}</time>`;
  const feed = $("#feed");
  feed.prepend(li);
  setTimeout(() => li.classList.remove("nuevo"), 1600);
  while (feed.children.length > 9) feed.lastElementChild.remove();
}
let avisoT;
function avisoCel(txt) {
  const a = $("#aviso-cel");
  $("#aviso-cel-txt").textContent = txt;
  a.classList.add("ver");
  clearTimeout(avisoT);
  avisoT = setTimeout(() => a.classList.remove("ver"), 2600);
}
function proximosDias() {
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, i) => { const d = new Date(hoy); d.setDate(hoy.getDate() + i + 1); return d; });
}
const FIJAS = { 1: "Boda", 3: "Retrato en estudio", 5: "XV años" };

function pintarGaleria() {
  $("#galeria").innerHTML = FOTOS_DEMO.map((f, i) => `
    <button data-n="${i}" aria-pressed="false" aria-label="Foto ${i + 1}"><span class="foto ${f}"></span><span class="num mono">${String(i + 1).padStart(2, "0")}</span><span class="cora">${ico("heart", 14)}</span></button>`).join("");
  $$("#galeria button").forEach(b => b.addEventListener("click", () => {
    const n = +b.dataset.n, ya = demo.sel.includes(n);
    if (!ya && demo.sel.length >= 8) { avisoCel("Su paquete incluye 8. Quite una para cambiarla."); return; }
    demo.sel = ya ? demo.sel.filter(x => x !== n) : [...demo.sel, n];
    b.classList.toggle("sel", !ya); b.setAttribute("aria-pressed", !ya);
    $("#cel-cuenta").textContent = demo.sel.length;
    $("#cel-barra").style.width = (demo.sel.length / 8 * 100) + "%";
    red(() => {
      pintarSeleccionPanel();
      alFeed("heart", ya ? `La familia quitó la foto <b>#${String(n + 1).padStart(2, "0")}</b>` : `La familia eligió la foto <b>#${String(n + 1).padStart(2, "0")}</b>`);
      if (demo.sel.length === 8 && !ya) alFeed("check", "<b>Selección completa</b> · lista para edición");
    });
  }));
}
function pintarSeleccionPanel() {
  const el = $("#p-elegidas");
  el.textContent = demo.sel.length; el.classList.remove("salta"); void el.offsetWidth; el.classList.add("salta");
  $("#p-sel-txt").textContent = demo.sel.length ? `${demo.sel.length} de 8` : "esperando…";
  const tiras = $("#p-tiras");
  const actuales = $$(".foto", tiras).map(x => +x.dataset.n);
  const html = demo.sel.map(n => `<span class="foto ${FOTOS_DEMO[n]}" data-n="${n}"${actuales.includes(n) ? ' style="animation:none"' : ""}></span>`).join("")
    + '<span class="vacia"></span>'.repeat(8 - demo.sel.length);
  tiras.innerHTML = html;
}
function pintarFechas() {
  const dias = proximosDias();
  $("#fechas").innerHTML = dias.map((d, i) => {
    const ocupada = FIJAS[i] || demo.reservas.some(r => r.i === i);
    return `<button data-dia="${i}" aria-pressed="${demo.fecha === i}"${ocupada ? " disabled" : ""}><small>${DIAS[d.getDay()]}</small><b>${d.getDate()}</b></button>`;
  }).join("");
  $$("#fechas button").forEach(b => b.addEventListener("click", () => { demo.fecha = +b.dataset.dia; pintarFechas(); }));
}
function pintarOpciones() {
  $("#opciones").innerHTML = PAQ_DEMO.map((p, i) => `<label><span><input type="radio" name="paqdemo" value="${i}"${i === demo.paq ? " checked" : ""}> ${p.n}</span><b>${Q(p.p)}</b></label>`).join("");
  $$("#opciones input").forEach(i => i.addEventListener("change", () => demo.paq = +i.value));
}
function pintarSemana() {
  const dias = proximosDias();
  $("#semana").innerHTML = dias.map((d, i) => {
    const r = demo.reservas.find(x => x.i === i);
    return `<div class="dia"><small>${DIAS[d.getDay()]}</small><b>${d.getDate()}</b>${FIJAS[i] ? `<span class="ses fija">${FIJAS[i]}</span>` : ""}${r ? `<span class="ses">${r.n} · reserva en línea</span>` : ""}</div>`;
  }).join("");
  $("#p-sesiones").textContent = 3 + demo.reservas.length;
}
function reservar() {
  if (demo.fecha === null) { avisoCel("Escoja una fecha primero."); return; }
  const i = demo.fecha, p = PAQ_DEMO[demo.paq], d = proximosDias()[i];
  const anticipo = p.p / 2;
  const btn = $("#reservar");
  btn.disabled = true; btn.textContent = "Confirmando…";
  red(() => {
    demo.reservas.push({ i, n: p.n.split(" ")[0] === "Sesión" ? "Estudio" : p.n.split(" ")[0] });
    demo.fecha = null; demo.caja += anticipo;
    pintarFechas(); pintarSemana();
    odometro($("#p-caja"), demo.caja);
    alFeed("calendar", `<b>Nueva reserva</b> · ${DIAS[d.getDay()]} ${d.getDate()} · ${p.n}`);
    alFeed("cash", `Anticipo recibido · <b>${Q(anticipo)}</b>`);
    avisoCel(`Listo: ${DIAS[d.getDay()]} ${d.getDate()} es suyo. Anticipo ${Q(anticipo)}.`);
    btn.disabled = false; btn.textContent = "Reservar y pagar anticipo";
  });
}
function pintarRuta() {
  $("#ruta").innerHTML = ESTADOS.map(([n, s], i) => `<li class="${i < demo.estado ? "hecho" : i === demo.estado ? "ahora hecho" : ""}"><i>${ico("check", 12)}</i><span>${n}<small>${s}</small></span></li>`).join("");
  $("#p-estado").textContent = ESTADOS[demo.estado][0];
  const sig = ESTADOS[demo.estado + 1];
  const b = $("#avanzar");
  b.textContent = sig ? "Pasar a: " + sig[0] : "Volver a empezar";
}
function avanzar() {
  const b = $("#avanzar");
  b.disabled = true;
  demo.estado = demo.estado + 1 >= ESTADOS.length ? 0 : demo.estado + 1;
  red(() => {
    pintarRuta(); b.disabled = false;
    const e = ESTADOS[demo.estado][0];
    alFeed("package", `Álbum FGS-2187 → <b>${e}</b>`);
    if (demo.estado) avisoCel(`Su álbum está: ${e.toLowerCase()}.`);
  });
}
function pestanas() {
  const tabs = $$(".pestanas [role=tab]");
  tabs.forEach(t => t.addEventListener("click", () => {
    tabs.forEach(x => { x.setAttribute("aria-selected", x === t); $("#" + x.getAttribute("aria-controls")).hidden = x !== t; });
    const donde = { "t-galeria": "está viendo su galería", "t-reservar": "está viendo fechas libres", "t-pedido": "está revisando su pedido" }[t.id];
    red(() => { $("#presencia span:last-child").textContent = "Familia Prueba " + donde; });
  }));
}
function iniciarDemo() {
  pintarGaleria(); pintarSeleccionPanel(); pintarFechas(); pintarOpciones(); pintarSemana(); pintarRuta(); pestanas();
  $("#p-caja").dataset.v = demo.caja; $("#p-caja").textContent = Q(demo.caja);
  $("#reservar").addEventListener("click", reservar);
  $("#avanzar").addEventListener("click", avanzar);
  alFeed("eye", "Familia Prueba abrió su galería");
  alFeed("bag", "Pedido en línea · <b>2 cuadros 40×60</b>");
  $$("#feed li").forEach(li => li.classList.remove("nuevo"));
}

function revelar() {
  const io = new IntersectionObserver(ents => ents.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const hermanos = el.parentElement ? $$(":scope > .revela:not(.visto)", el.parentElement) : [];
    const idx = Math.max(0, hermanos.indexOf(el));
    el.style.transitionDelay = calma ? "0ms" : Math.min(idx, 6) * 60 + "ms";
    el.classList.add("visto"); io.unobserve(el);
  }), { threshold: .15, rootMargin: "0px 0px -8% 0px" });
  $$(".revela:not(.visto), .enfoca, .revelado").forEach(el => io.observe(el));
}

function barra() {
  const b = $("#barra"), menu = $("#menu"), btn = $("#menu-btn");
  addEventListener("scroll", () => b.classList.toggle("con-borde", scrollY > 20), { passive: true });
  btn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  });
  $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); }));
  const tel = matchMedia("(max-width: 640px)");
  let ultimo = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY, d = y - ultimo;
    if (Math.abs(d) < 6) return;
    ultimo = y;
    b.classList.toggle("oculta", tel.matches && d > 0 && y > 120 && !menu.classList.contains("abierto") && !b.querySelector(":focus-visible"));
  }, { passive: true });
  b.addEventListener("focusin", () => b.classList.remove("oculta"));
  tel.addEventListener("change", () => b.classList.remove("oculta"));
  const secciones = $$("main > section[id]");
  const io = new IntersectionObserver(ents => ents.forEach(e => {
    if (!e.isIntersecting) return;
    const t = e.target.dataset.toma;
    $$("a", menu).forEach(a => a.setAttribute("aria-current", !!t && a.dataset.toma === t));
  }), { rootMargin: "-45% 0px -50% 0px" });
  secciones.forEach(s => io.observe(s));
}

let nLista = 0;
function verTodo(lista, n = 4, siempre = false) {
  if (!lista || lista.children.length <= n + 1) return;
  const total = lista.children.length;
  lista.classList.add(siempre ? "corta-siempre" : "corta");
  if (!lista.id) lista.id = "lista-corta-" + (++nLista);
  const b = document.createElement("button");
  b.type = "button"; b.className = "ver-todo" + (siempre ? " siempre" : "");
  b.setAttribute("aria-controls", lista.id);
  const pintar = () => {
    const abierta = lista.classList.contains("abierta");
    b.setAttribute("aria-expanded", String(abierta));
    b.innerHTML = `<span>${abierta ? "Ver menos" : `Ver todo (${total})`}</span>${ico("chevAbajo", 16)}`;
  };
  b.addEventListener("click", () => {
    const antes = b.getBoundingClientRect().top;
    lista.classList.toggle("abierta"); pintar();
    const despues = b.getBoundingClientRect().top;
    if (Math.abs(despues - antes) > 1) scrollBy({ top: despues - antes, behavior: "instant" });
  });
  pintar();
  (lista.closest("table") || lista).after(b);
}

pintarIconos();
pintarSistemas();
pintarVitrinas();
pintarPlanes();
pintarExtras();
pintarFAQ();
resumen();
actualizarPlanes();
$("#iva").addEventListener("change", () => { actualizarPlanes(); resumen(); });
$$('#plan-form input[name="paq"]').forEach(i => i.addEventListener("change", resumen));
$("#cierre-wa").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent("Hola Antonio, vi la propuesta para Foto González Studio y quiero hablar.");
$$(".wa").forEach(a => a.addEventListener("click", destello));
$$("#sistemas-lista .lista").forEach(l => verTodo(l, 4, true));
$$("#vitrinas .palancas").forEach(l => verTodo(l));
iniciarDemo();
escribirDominio();
barra();
revelar();
intro();
visor();
pintarIconos();
