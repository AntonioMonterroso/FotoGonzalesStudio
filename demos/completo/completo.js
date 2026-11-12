/* Demo · Sistema completo — Foto González Studio (Monterroso Dev Studio)
   Pensado primero para el iPhone. Todo es de muestra y se simula en el navegador;
   en el sistema real lo mueve Supabase Realtime. */
"use strict";

/* ---------- Íconos que usa solo esta demo (Lucide, ISC) ---------- */
Object.assign(ICO, {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  wa: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  hdd: '<path d="M22 12H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M6 16h.01"/><path d="M10 16h.01"/>',
  sd: '<path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M8 6v3"/><path d="M11 6v3"/><path d="M14 6v3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  sunset: '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
  lluvia: '<path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
  chev: '<path d="m9 18 6-6-6-6"/>',
  qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  contacto: '<path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/>',
  userplus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
  maleta: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  tomas: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  camara: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  lugar: '<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  mas: '<circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/><circle cx="5" cy="12" r="1.4"/>',
  escudo: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  alerta: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  borrar: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  ropa: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  paleta: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
  play: '<path d="M6 3l14 9-14 9z"/>',
  pausa: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
  huella: '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>'
});

/* ---------- Botones que se convierten en «Listo ✓» ---------- */
const pausa = ms => new Promise(r => setTimeout(r, calma ? Math.min(ms, 160) : ms));
const btn = (txt, ic, cls = "bt-1", extra = "") => `<button type="button" class="bt ${cls}" ${extra}><span class="bt-in">${ic ? ico(ic, 20) : ""}<span>${txt}</span></span></button>`;
const icoListo = () => `<svg class="trazo" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
function poner(b, html) {
  const vie = $(".bt-in", b), nue = document.createElement("span");
  nue.className = "bt-in"; nue.innerHTML = html;
  if (!vie || calma) { if (vie) vie.replaceWith(nue); else b.append(nue); return; }
  vie.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-6px)" }], { duration: 110, easing: EASE }).onfinish = () => {
    vie.replaceWith(nue);
    nue.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 200, easing: EASE });
  };
}
async function accion(b, { espera = "Enviando…", listo = "Listo", ms = 560 } = {}) {
  if (!b || b.disabled) return false;
  b.disabled = true; b.style.minWidth = b.offsetWidth + "px";
  b.classList.add("cargando"); poner(b, `<span class="giro" aria-hidden="true"></span><span>${espera}</span>`);
  await pausa(ms);
  b.classList.remove("cargando"); b.classList.add("listo"); poner(b, `${icoListo()}<span>${listo}</span>`);
  return true;
}
/* Cambia el contenido de una caja sin perder su pin de «Ver cómo vende» */
function pinta(el, html) { const pin = $(":scope > .pin", el); el.innerHTML = html; if (pin) el.append(pin); }
function entra(el, d = 0) { if (!calma && el) el.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 360, delay: d, easing: EASE, fill: "backwards" }); }
const hora12 = h => { const [a, m] = h.split(":").map(Number); return `${a % 12 || 12}:${String(m).padStart(2, "0")} ${a < 12 ? "a. m." : "p. m."}`; };

/* ---------- Palancas de venta (botón «Ver cómo vende») ---------- */
const PALANCAS = {
  vivo: { t: "Cuánto lleva el mes, sin pedir cuentas", d: "Cada anticipo, cada foto extra y cada pago suma aquí en el mismo segundo, venga de la página, de la galería o del estudio.", e: "Si a mediados de mes las cifras van bajas, se nota ese mismo día y se manda una oferta." },
  maleta: { t: "Llega preparado a cada sesión", d: "La próxima sesión aparece primero, con su maleta para marcar, la lista de tomas y a qué hora es la luz dorada si es afuera.", e: "Ninguna sesión se arruina por una batería descargada o una tarjeta llena." },
  ventas: { t: "A quién escribirle hoy", d: "Cada mañana el sistema revisa clientes, fechas y galerías, y arma la lista de a quién escribir. El mensaje ya va escrito: un toque y sale por WhatsApp.", e: "Los clientes que ya tiene el estudio vuelven a comprar sin que nadie tenga que acordarse." },
  fechas: { t: "Una fecha importante trae la siguiente sesión", d: "El sistema guarda cumpleaños, aniversarios y la edad de los bebés que fotografió, y avisa con semanas de anticipación.", e: "Una familia que ya confió en el estudio es la más fácil de volver a atender." },
  cotizacion: { t: "Ningún precio se queda en visto", d: "Si alguien pidió precio y no respondió, a los 3 días aparece aquí con las fechas que quedan libres.", e: "Recupera reservas que hoy se pierden solo porque nadie volvió a escribir." },
  saldo: { t: "Marca de agua hasta que paguen", d: "La familia ve sus fotos con marca de agua hasta que paga el saldo. El recordatorio sale con un toque.", e: "La familia quiere sus fotos, así que paga antes y sin cobros incómodos." },
  resena: { t: "La opinión se pide en el momento justo", d: "Al día siguiente de cada entrega, el sistema propone pedir la reseña en Google, cuando la familia está contenta.", e: "Quien busca «fotógrafo en Retalhuleu» confía más en el estudio con reseñas recientes." },
  reservas: { t: "Ninguna reserva se queda sin respuesta", d: "Lo que llega de la página o de WhatsApp espera aquí: confirmar, proponer otra fecha o pedir el anticipo. Si no pagan en 24 horas, la fecha se libera sola.", e: "Se aparta más rápido, y sin fechas perdidas." },
  envivo: { t: "Las fotos llegan solas de la cámara", d: "Cada foto que se toma aparece en segundos. Se guarda o se borra con un toque y se copia sola al disco y a la nube. La familia la ve en una pantalla grande.", e: "La familia se enamora de sus fotos en la misma sesión: ahí se venden las extra." },
  cobrar: { t: "Nada se queda sin cobrar", d: "Anticipos y saldos pendientes en una sola lista. «Recordar» manda el mensaje y «Ya pagó» lo pasa a cobrado.", e: "El dinero que se debe se ve todos los días, no al final del mes." },
  galeria: { t: "La galería que vende fotos extra", d: "El paquete trae 10 fotos. Si la familia marca más, le aparece la oferta de llevarse las extra o la galería completa, y paga ahí mismo.", e: "Es la venta más natural del estudio: la familia ya está enamorada de esas fotos." },
  anticipo: { t: "La fecha se aparta con anticipo", d: "Quien reserva en línea paga el anticipo para apartar. Si no paga en 24 horas, la fecha se libera sola.", e: "Menos sábados perdidos por quien no llega." },
  proxima: { t: "Cada cliente trae su siguiente venta", d: "La ficha dice qué ofrecerle según lo que ya hizo con el estudio, con el mensaje escrito.", e: "Venderle otra vez a quien ya confió cuesta mucho menos que conseguir un cliente nuevo." },
  referidos: { t: "Referidos con premio", d: "Cada cliente tiene su código. La familia nueva recibe descuento y quien recomendó gana impresiones.", e: "En Reu todos se conocen: los clientes contentos traen a los siguientes." },
  campanas: { t: "Ofertas a quien sí le interesa", d: "Se escoge un grupo y una oferta. Le llega a cada uno con su nombre y las respuestas entran en vivo.", e: "Llenar diciembre ya no depende de publicar y esperar." },
  portafolio: { t: "El portafolio en un toque", d: "Desde el celular se manda el contacto del estudio o los álbumes que el cliente quiere ver, por WhatsApp o como se prefiera.", e: "Quien pregunta precio ve el trabajo en el momento, cuando más interés tiene." }
};
const VISTA_DE = { vivo: "hoy", maleta: "hoy", ventas: "hoy", fechas: "hoy", cotizacion: "hoy", saldo: "hoy", resena: "hoy", cobrar: "cobrar", reservas: "reservas", envivo: "envivo", galeria: null, anticipo: "agenda", proxima: "clientes", referidos: "clientes", campanas: "ofertas", portafolio: "compartir" };

/* ---------- Estado general ---------- */
const S = { ingresos: 38450, extra: 3115, cobradoHoy: 0 };
const modoHoja = () => matchMedia("(max-width: 1279px)").matches;
const enCel = () => matchMedia("(max-width: 860px)").matches;
const MES = new Date().toLocaleDateString("es-GT", { month: "long" });
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DIAS_C = ["L", "M", "M", "J", "V", "S", "D"];
const hoyIdx = () => (new Date().getDay() + 6) % 7;
function lunes() { const h = new Date(); h.setDate(h.getDate() - hoyIdx()); return h; }

/* ---------- Cifras ---------- */
function pintarCifras() {
  odometro($("#k-ing"), S.ingresos);
  const debeT = COBRAR.filter(c => !c.pagado && !c.cancelada).reduce((t, c) => t + c.m, 0);
  odometro($("#k-cobrar"), debeT); odometro($("#cob-pend-q"), debeT);
  odometro($("#k-extra"), S.extra);
}
function flotar(sel, monto) {
  if (calma) return;
  const caja = $(sel).parentElement, f = document.createElement("span");
  f.className = "flota"; f.textContent = "+" + Q(monto);
  caja.append(f);
  f.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)", offset: .25 }, { opacity: 0, transform: "translateY(-14px)" }], { duration: 1400, easing: EASE }).onfinish = () => f.remove();
}
function venta(m, { extra = false } = {}) {
  S.ingresos += m; if (extra) S.extra += m;
  pintarCifras(); flotar("#k-ing", m); if (extra) flotar("#k-extra", m);
}

/* ---------- Lo último ---------- */
function alFeed(ic, html, clave = "") {
  const feed = $("#feed"), prev = feed.firstElementChild;
  if (clave && prev && prev.dataset.clave === clave) {
    $(".txt", prev).innerHTML = html; $("time", prev).textContent = hora();
    prev.classList.add("nuevo"); clearTimeout(prev._t); prev._t = setTimeout(() => prev.classList.remove("nuevo"), 1600);
    return;
  }
  const li = document.createElement("li");
  li.className = "nuevo"; if (clave) li.dataset.clave = clave;
  li.innerHTML = `<span class="ico">${ico(ic, 15)}</span><span class="txt">${html}</span><time>${hora()}</time>`;
  feed.prepend(li);
  li._t = setTimeout(() => li.classList.remove("nuevo"), 1800);
  while (feed.children.length > 6) feed.lastElementChild.remove();
}

/* ---------- Escríbales hoy ---------- */
const OPORT = [
  { id: "perez", mot: "fechas", pal: "fechas", ic: "cake", q: "Familia del bebé", t: "Un bebé cumple 1 año en 3 semanas", d: "Le tomaron sus fotos de recién nacido aquí.", monto: 650,
    wa: "Hola. ¡Su bebé ya va a cumplir su primer año! ¿Le hacemos su sesión con pastel aquí en el estudio? Tenemos sábados libres en diciembre. Sesión de primer año: Q 650.00, con 15 fotos editadas.",
    resp: "¡Sí! Justo estábamos pensando en eso. ¿Tienen el sábado 13 en la mañana?", logro: "¡Apartó su sesión!" },
  { id: "ruiz", mot: "fechas", ic: "heart", q: "Novios de diciembre", t: "Unos novios cumplen 1 año de casados", d: "El estudio hizo su boda. Ofrézcales la sesión de aniversario.", monto: 950,
    wa: "Hola. ¡Ya casi cumplen un año de casados! Para celebrarlo tenemos la sesión de aniversario con un video corto de 1 minuto: Q 950.00. ¿Les apartamos una fecha?",
    resp: "Qué bonito detalle. Sí, el domingo 7 por la tarde nos queda bien.", logro: "¡Apartaron!" },
  { id: "morales", mot: "galerias", ic: "images", q: "Familia de la quinceañera", t: "Las fotos de unos XV se cierran en 3 días", d: "Eligieron 32 fotos y no han pedido álbum.", monto: 1450,
    wa: "Hola. La galería de los XV está abierta hasta el viernes. Si quieren el álbum 30×30 con sus favoritas, este mes sale en Q 1,450.00 con la caja de regalo incluida.",
    resp: "Sí lo queremos, con la foto del vestido en la portada. ¿Cómo pagamos?", logro: "¡Pidió el álbum!" },
  { id: "daniela", mot: "cobros", pal: "cotizacion", ic: "clock", q: "Quinceañera de marzo", t: "Una cotización de XV espera su anticipo", d: "Se la mandaron hace 3 días. Quedan 2 sábados en marzo.", monto: 2900,
    wa: "Hola. ¿Pudo ver la cotización de los XV con video? Le cuento que de marzo solo nos quedan 2 sábados. Si le sirve, con Q 500.00 de anticipo se la apartamos hoy.",
    resp: "Perdón, se me pasó. Sí, apártenos el sábado 21. Ahorita le mando la boleta.", logro: "¡Apartó!" },
  { id: "castillo", mot: "cobros", pal: "saldo", ic: "lock", q: "Novios de octubre", t: "Unos novios deben Q 1,200.00", d: "Sus fotos de boda ya están listas, con marca de agua.", monto: 1200,
    wa: "Hola. ¡Su galería de boda ya está lista! Pueden verla con su PIN. Al cancelar el saldo de Q 1,200.00 se quita la marca de agua y se habilita la descarga en alta.",
    resp: "¡Qué emoción! Ya hice la transferencia, le mando la boleta.", logro: "¡Pagó!" },
  { id: "lopez", mot: "galerias", ic: "book", q: "Familia del parque", t: "Una familia está eligiendo sus fotos ahora", d: "Ofrézcale el álbum mientras las ve.", monto: 650,
    wa: "Hola. Vimos que ya está eligiendo sus fotos. Con las que marcó le armamos un álbum 20×20 de tapa dura por Q 650.00. ¿Se lo preparamos?",
    resp: "¡Qué buena idea! Sí, porfa, con las del parque.", logro: "¡Pidió el álbum!" },
  { id: "resena", mot: "resenas", pal: "resena", ic: "star", q: "Tres familias", t: "Pida opiniones en Google", d: "Tres familias recibieron sus fotos ayer.", monto: 0,
    wa: "Hola. Gracias por confiar en Foto González Studio. Si les gustaron sus fotos, ¿nos ayudan con una reseña en Google? Les toma un minuto: g.page/fotogonzalez",
    resp: "¡Claro que sí! Ya la dejamos, quedamos encantados.", logro: "2 opiniones de 5 estrellas" }
];
function pieOp(o) {
  if (o.estado === "lograda") return `<span class="op-ok">${icoListo()}${o.logro}${o.monto ? ` · ${Q(o.monto)}` : ""}</span>`;
  if (o.estado === "enviada") return `<span class="op-esp"><i></i>Esperando que conteste…</span>`;
  return btn("Mandar mensaje", "wa", "bt-1 bt-full op-btn");
}
const MOTIVOS = [["fechas", "Fechas"], ["cobros", "Cobros"], ["galerias", "Galerías"], ["resenas", "Reseñas"]];
let MOT = "fechas";
function pintarOport() {
  $("#oport").innerHTML = OPORT.map(o => `
    <li class="op" data-id="${o.id}" data-mot="${o.mot}"${o.pal ? ` data-palanca="${o.pal}"` : ""}${o.mot === MOT ? "" : " hidden"}>
      <div class="op-fila"><span class="op-ic">${ico(o.ic, 20)}</span>
        <div class="op-txt"><b>${o.t}</b><p>${o.d}</p></div>
        <span class="op-m">${o.monto ? Q(o.monto) : "★★★★★"}</span></div>
      <div class="op-pie">${pieOp(o)}</div>
    </li>`).join("");
  $("#motivos").innerHTML = `<span class="pastilla" aria-hidden="true"></span>` + MOTIVOS.map(([id, t]) => `<button type="button" role="tab" data-mot="${id}" aria-selected="${id === MOT}">${t}<em></em></button>`).join("");
  $("#motivos").style.setProperty("--n", MOTIVOS.length);
  $("#oport").addEventListener("click", e => { const b = e.target.closest(".op-btn"); if (b) mandarOport(b.closest(".op").dataset.id, b); });
  $("#motivos").addEventListener("click", e => { const b = e.target.closest("[data-mot]"); if (b) elegirMotivo(b.dataset.mot); });
  elegirMotivo(MOT, true);
}
function elegirMotivo(m, sinAnim) {
  MOT = m;
  $$("#motivos [data-mot]").forEach(b => b.setAttribute("aria-selected", b.dataset.mot === m));
  $("#motivos").style.setProperty("--i", MOTIVOS.findIndex(x => x[0] === m));
  let k = 0;
  $$("#oport .op").forEach(li => {
    const on = li.dataset.mot === m; li.hidden = !on;
    if (on && !sinAnim) entra(li, k++ * 40);
  });
  pintarPendientes();
}
function pintarPendientes() {
  const pend = OPORT.filter(o => !o.estado);
  const c = $("#cuenta-op"); c.textContent = pend.length; c.classList.toggle("cero", !pend.length);
  const total = pend.reduce((t, o) => t + o.monto, 0);
  $("#op-total").textContent = pend.length ? `${pend.length} · ${Q(total)}` : "Todo enviado";
  $$("#motivos [data-mot]").forEach(b => { const n = pend.filter(o => o.mot === b.dataset.mot).length; const em = $("em", b); em.textContent = n || ""; em.classList.toggle("cero", !n); });
  const vac = $("#op-vacio"), pendAqui = OPORT.some(o => o.mot === MOT && o.estado !== "lograda");
  vac.hidden = pendAqui;
  vac.innerHTML = `${icoListo()}Todo listo aquí`;
}
function pieCambia(o) {
  const li = $(`.op[data-id="${o.id}"]`); if (!li) return;
  const pie = $(".op-pie", li);
  li.classList.toggle("lograda", o.estado === "lograda");
  if (calma) { pie.innerHTML = pieOp(o); return; }
  pie.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, easing: EASE }).onfinish = () => {
    pie.innerHTML = pieOp(o);
    pie.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: EASE });
  };
}
async function mandarOport(id, b) {
  const o = OPORT.find(x => x.id === id);
  if (o.estado || !(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Enviado" }))) return;
  o.estado = "enviada"; pintarPendientes();
  simularWA({ texto: o.wa, respuesta: o.resp, nota: "" });
  alFeed("send", `Mensaje enviado a <b>${o.q}</b>`);
  setTimeout(() => pieCambia(o), 900);
  setTimeout(() => lograr(o), 4200 + Math.random() * 2400);
}
function lograr(o) {
  if (o.estado === "lograda") return;
  o.estado = "lograda"; pieCambia(o); pintarPendientes();
  if (o.id === "castillo") { pagar("c-castillo", { silencio: true }); }
  else if (o.monto) venta(o.monto);
  alFeed(o.monto ? "cash" : "star", `<b>${o.q}</b>: ${o.logro}${o.monto ? ` · ${Q(o.monto)}` : ""}`);
  aviso(`${o.logro}${o.monto ? ` · <b>${Q(o.monto)}</b>` : ""}`, { ic: o.monto ? "cash" : "star", sub: o.q });
}

/* ---------- Por cobrar ---------- */
const COBRAR = [
  { id: "c-qmarzo", n: "Quinceañera de marzo", t: "XV con video", que: "Anticipo", m: 600, f: "f-quince" },
  { id: "c-castillo", n: "Novios de octubre", t: "Boda", que: "Saldo", m: 1200, f: "f-anillo" },
  { id: "c-primer", n: "Familia del primer año", t: "Primer año", que: "Anticipo", m: 325, f: "f-primer" },
  { id: "c-grad", n: "Colegio La Asunción", t: "Graduación", que: "Saldo", m: 2400, f: "f-graduacion" }
];
const filaCobro = c => `<li class="cob" data-id="${c.id}">
  <div class="cob-fila"><span class="foto cob-f ${c.f}" aria-hidden="true"></span>
    <span class="cob-t"><b>${c.n}</b><small>${c.que} · ${c.t}</small></span><b class="cob-m">${Q(c.m)}</b></div>
  <div class="cob-bts">${c.recordado ? `<span class="cob-esp"><i></i>Recordado · esperando el pago</span>` : btn("Recordar", "send", "bt-0 bt-chico", 'data-cob="rec"')}${btn("Ya pagó", "check", "bt-2 bt-chico", 'data-cob="pago"')}</div></li>`;
function pintarCobrar() {
  const pend = COBRAR.filter(c => !c.pagado && !c.cancelada);
  const cc = $("#cuenta-cob"); cc.textContent = pend.length; cc.classList.toggle("cero", !pend.length);
  $("#cobrar").innerHTML = pend.length ? pend.map(filaCobro).join("") : `<li class="cob-vacio">${ico("check", 18)}Nadie le debe nada</li>`;
  $("#cob-n").textContent = pend.length ? `${pend.length} · ${Q(pend.reduce((s, c) => s + c.m, 0))}` : "";
}
function iniciarCobrar() {
  pintarCobrar();
  $("#cobrar").addEventListener("click", async e => {
    const b = e.target.closest("[data-cob]"); if (!b) return;
    const c = COBRAR.find(x => x.id === b.closest(".cob").dataset.id);
    if (b.dataset.cob === "rec") recordarPago(c, b);
    else { if (await accion(b, { espera: "Guardando…", listo: "Pagado", ms: 420 })) setTimeout(() => pagar(c.id), 380); }
  });
}
async function recordarPago(c, b) {
  if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Recordado" }))) return;
  c.recordado = true;
  simularWA({ texto: `Hola. Le escribe Foto González Studio. Le recordamos ${c.que === "Anticipo" ? "el anticipo para dejar segura su fecha" : "el saldo de su sesión"} (${c.t.toLowerCase()}): ${Q(c.m)}. Puede pagarlo aquí: fotogonzalezstudio.com/pagar`, nota: "" });
  alFeed("send", `Recordatorio de pago a <b>${c.n}</b>`);
  setTimeout(() => { const li = $(`.cob[data-id="${c.id}"]`); if (li && !c.pagado) { const v = document.createElement("div"); v.innerHTML = filaCobro(c); li.querySelector(".cob-bts").replaceWith(v.firstElementChild.querySelector(".cob-bts")); } }, 900);
  setTimeout(() => pagar(c.id, { auto: true }), 5200 + Math.random() * 1800);
}
function pagar(id, { auto = false, silencio = false } = {}) {
  const c = COBRAR.find(x => x.id === id); if (!c || c.pagado) return;
  c.pagado = true;
  S.cobradoHoy += c.m; venta(c.m);
  odometro($("#cobrado-q"), S.cobradoHoy);
  const li = $(`.cob[data-id="${id}"]`);
  const fin = () => { pintarCobrar(); pintarCifras(); };
  if (li && !calma) {
    li.style.height = li.offsetHeight + "px";
    li.animate([{ opacity: 1, transform: "none", height: li.offsetHeight + "px" }, { opacity: 0, transform: "translateX(24px)", height: "0px", marginBottom: "-10px" }], { duration: 380, easing: EASE, fill: "forwards" }).onfinish = fin;
  } else fin();
  const ul = $("#cobrado"); $(".vacio", ul)?.remove();
  const nuevo = document.createElement("li");
  nuevo.innerHTML = `<span class="foto cob-f ${c.f}" aria-hidden="true"></span><span class="cob-t"><b>${c.n}</b><small>${c.que} · ${c.t} · ${hora()}</small></span><b class="cob-m">${Q(c.m)}</b>`;
  ul.prepend(nuevo); entra(nuevo, 200);
  if (id.startsWith("res-")) reservaPagada(id.slice(4));
  // lo que depende del pago
  const s = AG.find(x => x.cob === id); if (s) pintarAgenda();
  if (SES && SES.cob === id && abiertas.has($("#hoja-ses"))) pintarSesion();
  if (id === "c-castillo") pagarCastillo();
  const o = OPORT.find(x => x.id === "castillo");
  if (id === "c-castillo" && !o.estado) { o.estado = "lograda"; o.logro = "Ya pagó"; pieCambia(o); pintarPendientes(); }
  if (!silencio) {
    alFeed("cash", `<b>${c.n}</b> pagó ${c.que.toLowerCase()} · ${Q(c.m)}`);
    aviso(`${c.que} recibido · <b>${Q(c.m)}</b>`, { ic: "cash", sub: auto ? `${c.n} pagó después del recordatorio` : c.n });
  }
}

/* ---------- Agenda: sesiones con maleta, tomas y luz ---------- */
const EQUIPO = ["Cámara principal", "Cámara de respaldo", "Lente 50 mm", "Lente 24-70 mm", "Flash y difusor", "Baterías cargadas (4)", "Tarjetas vacías (2)"];
const EXTRA_EQ = { ext: ["Reflector plegable", "Agua y repelente"], video: ["Estabilizador y micrófono"] };
const UTIL = {
  retrato: ["Banco alto", "Fondo gris", "Espejo de mano"],
  bebe: ["Mantas suaves", "Calentador del set", "Canasta y gorritos", "Ruido blanco en el celular"],
  xv: ["Humo y luces de colores", "Corona de repuesto", "Zapatillas de cambio", "Abanico para el vestido"],
  primer: ["Set de circo", "Globos de colores", "Mantel para el pastel", "Toallitas húmedas"],
  pareja: ["Manta para la arena", "Luces de hilo", "Toalla"],
  grad: ["Escalera para foto de grupo", "Lista de graduandos", "Megáfono"],
  boda: ["Lente 70-200 mm", "Escalera chica", "Lista de familiares para las fotos de grupo", "Comida para la jornada"],
  familia: ["Burbujas para los niños", "Manta de picnic", "Juguete con sonido"]
};
const TOMAS = {
  retrato: ["Plano medio con luz suave", "Cerrado del rostro", "De perfil", "Cuerpo completo"],
  bebe: ["Dormido en la canasta", "Sus manos con las de mamá", "Los pies", "Con papá y mamá", "Detalle de las pestañas"],
  xv: ["Detalles del vestido y los zapatos", "Retrato con la corona", "Con papá y mamá", "Vuelta con el vestido", "Con sus hermanos", "Mirada por encima del hombro"],
  primer: ["Con el pastel entero", "La primera probada", "Con papá y mamá", "Pies y manos", "Riendo con los globos"],
  pareja: ["Caminando de la mano", "Abrazo de espaldas al mar", "Risa espontánea", "Contraluz al atardecer", "Pies en la arena"],
  grad: ["El desfile completo", "La banda de guerra", "Grupo con la maestra", "Cada graduando con su diploma"],
  boda: ["Los anillos", "Llegada de la novia", "El primer beso", "Familia de cada lado", "Primer baile", "El pastel"],
  familia: ["Todos mirando a la cámara", "Los niños corriendo", "Abuelos con nietos", "Papá cargando a la niña"]
};
const AG = [
  { id: "a1", d: 0, h: "9:00", dur: "1 h", n: "Clienta de retrato", t: "Retrato en estudio", tipo: "retrato", f: "f-retrato", lugar: "En el estudio", a: 225 },
  { id: "a2", d: 1, h: "16:00", dur: "2 h", n: "Familia del recién nacido", t: "Recién nacido", tipo: "bebe", f: "f-bebe", lugar: "En el estudio", a: 475 },
  { id: "a3", d: 2, h: "10:00", dur: "1 h", n: "Quinceañera de marzo", t: "XV · prueba de vestido", tipo: "xv", f: "f-quince", lugar: "En el estudio", a: 0, cob: "c-qmarzo" },
  { id: "a4", d: 3, h: "15:00", dur: "2 h", n: "Pareja de preboda", t: "Preboda en la playa", tipo: "pareja", f: "f-pareja", lugar: "Playa de Champerico", a: 600,
    luz: { dorada: [16.92, 17.5], txtDorada: "4:55 a 5:30 p. m.", puesta: "5:30 p. m.", clima: "Soleado · 31 °C", lluvia: 10, salir: "Salga del estudio a las 2:10 p. m. (45 min de camino)", consejo: "Empiece con las fotos de cerca y deje la caminata en la arena para la luz dorada." } },
  { id: "a5", d: 4, h: "8:00", dur: "4 h", n: "Colegio La Asunción", t: "Desfile y graduación", tipo: "grad", f: "f-graduacion", lugar: "Calles del centro de Reu", a: 2400,
    luz: { dorada: [6.05, 6.7], txtDorada: "6:05 a 6:40 a. m.", puesta: "5:30 p. m.", clima: "Nublado a ratos · 28 °C", lluvia: 30, salir: "Salga a las 7:30 a. m.", consejo: "A las 8 la luz ya está fuerte: use la sombra de los árboles del parque para las fotos de grupo." } },
  { id: "a6", d: 5, h: "9:00", dur: "3 h", n: "Quinceañera de noviembre", t: "XV en estudio con video", tipo: "xv", video: true, f: "f-xv", lugar: "En el estudio", a: 1200 },
  { id: "a7", d: 5, h: "16:00", dur: "1 h", n: "Familia del primer año", t: "Primer año · set de circo", tipo: "primer", f: "f-primer", lugar: "En el estudio", a: 0, cob: "c-primer" },
  { id: "a8", d: 6, h: "17:00", dur: "6 h", n: "Novios de diciembre", t: "Boda · ceremonia y fiesta", tipo: "boda", video: true, f: "f-boda", lugar: "Iglesia y salón en Reu", a: 3900,
    luz: { dorada: [16.92, 17.5], txtDorada: "4:55 a 5:30 p. m.", puesta: "5:30 p. m.", clima: "Despejado · 29 °C", lluvia: 5, salir: "Llegue a las 4:15 p. m.", consejo: "Haga los retratos de los novios antes de la ceremonia: después ya no hay luz." } }
];
const MAL = {}, TOM = {};
const maletaDe = s => [...EQUIPO, ...(s.luz ? EXTRA_EQ.ext : []), ...(s.video ? EXTRA_EQ.video : [])];
const pendiente = s => s.cob && !COBRAR.find(c => c.id === s.cob)?.pagado;
const debe = s => COBRAR.find(c => c.id === s.cob)?.m || 0;
const AG_OFRECIDO = new Set();
const hNum = h => { const [a, m] = h.split(":").map(Number); return a + m / 60; };

function cuandoTxt(d) { const k = hoyIdx(); return d === k ? "Hoy" : d === k + 1 ? "Mañana" : DIAS[d]; }
function pintarAgenda() {
  const l = lunes(), hoy = hoyIdx();
  $("#ag-mes").textContent = l.toLocaleDateString("es-GT", { month: "long", year: "numeric" });
  let libres = 0;
  $("#semana-tira").innerHTML = DIAS_C.map((c, i) => {
    const f = new Date(l); f.setDate(l.getDate() + i);
    const n = AG.filter(s => s.d === i).length;
    return `<button type="button" data-dia="${i}" class="${i === hoy ? "hoy" : ""}${i < hoy ? " pasado" : ""}" aria-label="${DIAS[i]} ${f.getDate()}, ${n} ${n === 1 ? "sesión" : "sesiones"}"><small>${c}</small><b>${f.getDate()}</b><span class="puntos">${"<i></i>".repeat(Math.min(n, 3))}</span></button>`;
  }).join("");
  $("#semana").innerHTML = DIAS.map((d, i) => {
    const f = new Date(l); f.setDate(l.getDate() + i);
    const ses = AG.filter(s => s.d === i).sort((x, y) => hNum(x.h) - hNum(y.h));
    const tardeLibre = !ses.some(s => hNum(s.h) >= 13) && i >= hoy;
    if (tardeLibre && !AG_OFRECIDO.has(i)) libres++;
    return `<section class="dia${i === hoy ? " hoy" : ""}${i < hoy ? " pasado" : ""}" id="dia-${i}">
      <h2 class="dia-cab">${d} <span>${f.getDate()}</span>${i === hoy ? '<em class="hoy-et">Hoy</em>' : ""}</h2>
      <div class="lista">${ses.map(s => {
        const pend = pendiente(s);
        return `<button type="button" class="ses${pend ? " pend" : ""}" data-ses="${s.id}">
          <span class="ses-h"><b>${hora12(s.h).replace(" ", "<br>")}</b><small>${s.dur}</small></span>
          <span class="ses-foto foto ${s.f}" aria-hidden="true"></span>
          <span class="ses-txt"><b>${s.t}</b><small>${s.n}</small>
            <span class="ses-est">${pend ? `<span class="est pend">${ico("clock", 13)}Falta pagar ${Q(debe(s))}</span>` : `<span class="est ok">${ico("check", 13)}Pagó</span>`}${s.luz ? `<span class="est luz">${ico("sunset", 13)}Afuera</span>` : ""}</span></span>
          ${ico("chev", 18)}</button>`;
      }).join("")}${tardeLibre ? (AG_OFRECIDO.has(i)
        ? `<div class="libre ofrecido">${ico("check", 16)}<span>Tarde ofrecida a la lista de espera</span></div>`
        : `<div class="libre"><span>${ses.length ? "Tarde libre" : "Día libre"}</span>${btn("Ofrecer la tarde", "sparkles", "bt-0 bt-chico", `data-ofrecer="${i}"`)}</div>`)
        : (!ses.length ? `<div class="libre pasado-txt"><span>Sin sesiones</span></div>` : "")}</div>
    </section>`;
  }).join("");
  $("#ag-n").textContent = AG.length;
  $("#ag-p").textContent = AG.filter(pendiente).length;
  $("#ag-l").textContent = libres;
  odometro($("#ag-q"), AG.filter(s => !pendiente(s)).reduce((t, s) => t + (s.a || debe(s)), 0));
  pintarProxSesion();
}
function iniciarAgenda() {
  pintarAgenda();
  $("#semana").addEventListener("click", async e => {
    const s = e.target.closest("[data-ses]"); if (s) return abrirSesion(s.dataset.ses);
    const b = e.target.closest("[data-ofrecer]"); if (!b) return;
    const i = Number(b.dataset.ofrecer), f = new Date(lunes()); f.setDate(f.getDate() + i);
    const dia = DIAS[i].toLowerCase() + " " + f.getDate();
    if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Ofrecida" }))) return;
    simularWA({ texto: `Hola, le escribe Foto González Studio. Se nos liberó la tarde del ${dia}. Si quiere su sesión ese día, se la apartamos con el anticipo. ¿Le interesa?`, respuesta: "¡Sí! ¿A las 4 puede ser?", nota: "" });
    AG_OFRECIDO.add(i);
    alFeed("send", `Tarde del <b>${dia}</b> ofrecida a 6 familias en lista de espera`);
    setTimeout(pintarAgenda, 1100);
  });
  $("#semana-tira").addEventListener("click", e => {
    const b = e.target.closest("[data-dia]"); if (!b) return;
    const d = $("#dia-" + b.dataset.dia), y = d.getBoundingClientRect().top + scrollY - (enCel() ? 60 : 16);
    scrollTo({ top: y, behavior: calma ? "auto" : "smooth" });
  });
}

/* Próxima sesión (en Hoy) */
function proxima() {
  const k = hoyIdx(), ahora = new Date().getHours() + new Date().getMinutes() / 60;
  const orden = [...AG].sort((a, b) => a.d - b.d || hNum(a.h) - hNum(b.h));
  return orden.find(s => s.d > k || (s.d === k && hNum(s.h) + .5 >= ahora)) || orden[0];
}
const anillo = (p, r = 22) => { const c = 2 * Math.PI * r; return `<svg class="anillo" width="${r * 2 + 8}" height="${r * 2 + 8}" viewBox="0 0 ${r * 2 + 8} ${r * 2 + 8}" aria-hidden="true"><circle cx="${r + 4}" cy="${r + 4}" r="${r}" class="an-pista"/><circle cx="${r + 4}" cy="${r + 4}" r="${r}" class="an-lleno" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}"/></svg>`; };
function pintarProxSesion() {
  const s = proxima(), m = maletaDe(s), u = UTIL[s.tipo] || [], tot = m.length + u.length, hechos = (MAL[s.id] || new Set()).size;
  const listo = hechos === tot;
  pinta($("#prox-ses"), `
    <div class="ps-cab"><span class="ps-et">${ico("camara", 15)}Su próxima sesión</span><span class="ps-cuando">${s.d < hoyIdx() ? "La otra semana" : cuandoTxt(s.d)} · ${hora12(s.h)}</span></div>
    <div class="ps-cuerpo">
      <span class="foto ps-foto ${s.f}" aria-hidden="true"></span>
      <div class="ps-txt"><b>${s.t}</b><small>${s.n}</small>
        <span class="ps-dato">${ico("lugar", 15)}${s.lugar}</span>
        ${s.luz ? `<span class="ps-dato oro">${ico("sunset", 15)}Luz dorada ${s.luz.txtDorada}</span>` : ""}</div>
      <div class="ps-anillo${listo ? " listo" : ""}">${anillo(hechos / tot)}<span><b>${hechos}</b>/${tot}</span></div>
    </div>
    <div class="ps-bts">${btn(listo ? "Maleta lista" : "Preparar maleta", listo ? "check" : "maleta", listo ? "bt-ok" : "bt-1", `data-abrir="maleta"`)}
      <div class="ps-bts2">${btn("Tomas", "tomas", "bt-0", `data-abrir="tomas"`)}${btn("Cámara en vivo", "camara", "bt-0", `data-envivo="1"`)}</div></div>`);
  $("#prox-ses").dataset.sid = s.id;
}

/* Hoja de una sesión */
let SES = null, SES_TAB = "maleta";
function abrirSesion(id, tab = "maleta") {
  SES = AG.find(x => x.id === id); SES_TAB = tab === "luz" && !SES.luz ? "maleta" : tab;
  pintarSesion();
  abrirHoja($("#hoja-ses"));
  $("#ses-cuerpo").scrollTop = 0;
}
function pintarSesion() {
  const s = SES, l = lunes(), f = new Date(l); f.setDate(l.getDate() + s.d);
  const pend = pendiente(s);
  const tabs = [["maleta", "Maleta", "maleta"], ["tomas", "Tomas", "tomas"], ...(s.luz ? [["luz", "Luz", "sun"]] : []), ...(EVENTO[s.id] ? [["evento", "Evento", "users"]] : [])];
  if (!tabs.some(t => t[0] === SES_TAB)) SES_TAB = "maleta";
  const i = tabs.findIndex(t => t[0] === SES_TAB);
  $("#hoja-ses-t").textContent = `${cuandoTxt(s.d)} ${f.getDate()}`;
  $("#ses-cuerpo").innerHTML = `
    <div class="ses-hero"><span class="foto ${s.f}" aria-hidden="true"></span>
      <div><small>${hora12(s.h)} · ${s.dur}</small><h3 id="ses-t">${s.t}</h3><p>${s.n}</p><p class="lug">${ico("lugar", 15)}${s.lugar}</p></div></div>
    <div class="ses-pago">${pend ? `<span class="est pend">${ico("clock", 13)}Falta pagar ${Q(debe(s))}</span>${btn("Recordar pago", "send", "bt-0 bt-chico", 'id="ses-rec"')}` : `<span class="est ok">${ico("check", 13)}Pagó · la fecha está segura</span>`}</div>
    ${btn("Tomar fotos en vivo", "camara", "bt-2 bt-full ses-vivo", 'data-sa="vivo"')}
    <div class="seg" role="tablist" aria-label="Preparar la sesión" style="--n:${tabs.length};--i:${i}"><span class="pastilla" aria-hidden="true"></span>
      ${tabs.map(([id, t, ic]) => `<button type="button" role="tab" aria-selected="${id === SES_TAB}" data-tab="${id}">${ico(ic, 16)}<span>${t}</span></button>`).join("")}</div>
    <div class="seg-cuerpo" id="seg-cuerpo">${cuerpoSesion()}</div>
    <div class="ses-fin">
      ${REC.antes ? `<p class="ses-rec">${ico("bell", 15)}<span>Recordatorio automático: ${s.d - 1 < hoyIdx() ? "ya se le mandó" : `se manda ${cuandoTxt(s.d - 1).toLowerCase()} a las 9:00 a. m.`}</span></p>` : ""}
      <div class="ses-acc2">${btn("Cambiar fecha", "calendar", "bt-0", 'data-sa="mover"')}${btn("Cancelar", "x", "bt-0 peligro", 'data-sa="cancelar"')}</div>
      <div class="ses-mover" id="ses-mover" hidden></div>
    </div>`;
  if (SES_TAB === "evento") qrInvitados();
}
function cuerpoSesion() {
  const s = SES;
  if (SES_TAB === "evento") return cuerpoEvento(s);
  if (SES_TAB === "luz") {
    const L = s.luz, ini = 5, fin = 20, pct = h => ((h - ini) / (fin - ini) * 100).toFixed(2);
    return `<div class="luz">
      <div class="luz-dia" aria-hidden="true"><span class="luz-dor" style="left:${pct(6.05)}%;width:${pct(6.7) - pct(6.05)}%"></span><span class="luz-dor" style="left:${pct(L.dorada[0])}%;width:${pct(L.dorada[1]) - pct(L.dorada[0])}%"></span>
        <span class="luz-ses" style="left:${pct(hNum(s.h))}%"><i></i><em>Sesión</em></span>
        <span class="luz-h l0" style="left:0">5 a. m.</span><span class="luz-h" style="left:46.67%">Mediodía</span><span class="luz-h l2" style="left:100%">8 p. m.</span></div>
      <ul class="grupo-ios datos">
        <li>${ico("sunset", 20)}<span>Luz dorada<small>${L.txtDorada}</small></span></li>
        <li>${ico("sun", 20)}<span>Se pone el sol<small>${L.puesta}</small></span></li>
        <li>${ico(L.lluvia >= 30 ? "lluvia" : "cloud", 20)}<span>Clima<small>${L.clima} · lluvia ${L.lluvia} %</small></span></li>
        <li>${ico("clock", 20)}<span>Cuándo salir<small>${L.salir}</small></span></li>
      </ul>
      <p class="consejo">${ico("sparkles", 18)}<span>${L.consejo}</span></p></div>`;
  }
  const lista = SES_TAB === "maleta" ? [["Equipo", maletaDe(s)], ["Utilería", UTIL[s.tipo] || []]] : [["Que no falten", TOMAS[s.tipo] || []]];
  const set = (SES_TAB === "maleta" ? MAL : TOM)[s.id] || new Set();
  const tot = lista.reduce((t, g) => t + g[1].length, 0);
  let k = 0;
  return `<div class="prog-fila"><div class="prog"><i style="transform:scaleX(${set.size / tot})"></i></div><b id="prog-n">${set.size} de ${tot}</b></div>
    <p class="todo-listo"${set.size === tot ? "" : " hidden"}>${icoListo()}${SES_TAB === "maleta" ? "Todo listo para salir" : "No faltó ninguna toma"}</p>
    ${lista.map(([t, items]) => `<h4 class="grupo-t">${t}</h4><div class="grupo-ios">${items.map(x => filaChk(k, x, set.has(k++))).join("")}</div>`).join("")}`;
}

/* ---------- Eventos: horario, contactos, equipo y fotos para los invitados ---------- */
const EVENTO = {
  a8: { horario: [["16:15", "Llegada y fotos de detalles"], ["16:45", "Retratos de los novios con luz dorada"], ["17:30", "Ceremonia"], ["18:30", "Fotos de familia"], ["19:30", "Entrada al salón"], ["20:00", "Primer baile"], ["21:00", "Pastel y brindis"], ["23:00", "Salida de los novios"]],
    contactos: [["Coordinadora de la boda", "Horarios y entradas"], ["Encargado del salón", "Luces y lugar para la cámara"], ["DJ", "Música del vals y del baile"], ["Mamá de la novia", "Lista de familiares"]],
    equipo: [["Fotógrafo principal", "Cámara principal, 24-70 y 70-200"], ["Segundo fotógrafo", "Cámara de respaldo y 50 mm"], ["Video", "Estabilizador, micrófono y dron"]], invitados: true },
  a6: { horario: [["9:00", "Peinado y maquillaje: detalles"], ["9:40", "Vestido y corona"], ["10:15", "Set con humo y luces"], ["11:00", "Con la familia"], ["11:30", "Video corto"]],
    contactos: [["Mamá de la quinceañera", "Vestuario y familia"], ["Maquillista", "Retoques entre cambios"]],
    equipo: [["Fotógrafo", "Cámara principal y flash"], ["Video", "Estabilizador y micrófono"]], invitados: false },
  a5: { horario: [["7:30", "Llegada al colegio"], ["8:00", "Sale el desfile"], ["9:30", "Banda de guerra en el parque"], ["10:30", "Fotos de grupo"], ["11:00", "Entrega de diplomas"]],
    contactos: [["Dirección del colegio", "Permisos y lista"], ["Maestra guía", "Orden de los grupos"]],
    equipo: [["Fotógrafo principal", "Cámara y 70-200"], ["Ayudante", "Escalera y lista de graduandos"]], invitados: true }
};
const INV = {};
function cuerpoEvento(s) {
  const E = EVENTO[s.id];
  return `<h4 class="grupo-t">Horario del día</h4>
    <ol class="horario">${E.horario.map(([h, t], i) => `<li${i === 0 ? ' class="primero"' : ""}><b>${hora12(h)}</b><span>${t}</span></li>`).join("")}</ol>
    <h4 class="grupo-t">Contactos del día</h4>
    <div class="grupo-ios">${E.contactos.map(([r, d], i) => `<div class="ct"><span class="gi">${ico("contacto", 18)}</span><span class="ct-t">${r}<small>${d}</small></span>
      <button type="button" class="ct-b" data-ct="tel" data-n="${i}" aria-label="Llamar a ${r}">${ico("phone", 18)}</button><button type="button" class="ct-b" data-ct="wa" data-n="${i}" aria-label="Escribir a ${r}">${ico("wa", 18)}</button></div>`).join("")}</div>
    <h4 class="grupo-t">Quién va</h4>
    <div class="grupo-ios">${E.equipo.map(([r, lleva], i) => `<div class="ct"><span class="eq-av" style="background:${["#8E2234", "#2F7D4F", "#7A5C8E"][i % 3]}">${r[0]}</span><span class="ct-t">${r}<small>${lleva}</small></span></div>`).join("")}</div>
    ${E.invitados ? `<h4 class="grupo-t">Fotos para los invitados</h4>
    <div class="inv"><span class="inv-qr" id="inv-qr"></span><div><b>Código QR para las mesas</b><small>Los invitados ven las fotos mientras pasa el evento y piden impresas.</small>
      ${btn(INV[s.id] ? "Activado" : "Activar", INV[s.id] ? "check" : "qr", INV[s.id] ? "bt-ok bt-chico" : "bt-2 bt-chico", 'data-inv="1"')}</div></div>` : ""}`;
}
function qrInvitados() { const q = $("#inv-qr"); if (q) cargarQR().then(() => { q.innerHTML = svgQR(); }).catch(() => { q.innerHTML = ico("qr", 40); }); }
function filaChk(i, txt, on) { return `<button type="button" class="chk" role="checkbox" aria-checked="${on}" data-k="${i}"><span class="caja">${on ? icoListo() : ""}</span><span class="txt">${txt}</span></button>`; }
function iniciarSesionHoja() {
  const c = $("#ses-cuerpo");
  c.addEventListener("click", async e => {
    const sa = e.target.closest("[data-sa]");
    if (sa) return accionSesion(sa.dataset.sa, sa);
    const dm = e.target.closest("[data-mover]");
    if (dm) return moverSesion(Number(dm.dataset.mover), dm);
    const ct = e.target.closest("[data-ct]");
    if (ct) {
      const [r] = EVENTO[SES.id].contactos[Number(ct.dataset.n)];
      if (ct.dataset.ct === "tel") llamar(r, SES.f);
      else simularWA({ texto: "Hola, le escribe Foto González Studio. Vamos llegando al evento. ¿Todo en orden con el horario?", respuesta: "¡Sí! Los esperamos en la entrada principal.", nota: "" });
      return;
    }
    const inv = e.target.closest("[data-inv]");
    if (inv && !INV[SES.id]) {
      if (!(await accion(inv, { espera: "Activando…", listo: "Activado" }))) return;
      INV[SES.id] = true;
      aviso("Fotos en vivo para los invitados · <b>activadas</b>", { ic: "qr", sub: "Imprima el código para las mesas" });
      return;
    }
    const tab = e.target.closest("[data-tab]");
    if (tab) {
      SES_TAB = tab.dataset.tab;
      const seg = $(".seg", c), bs = $$("[data-tab]", seg);
      seg.style.setProperty("--i", bs.indexOf(tab));
      bs.forEach(b => b.setAttribute("aria-selected", b === tab));
      const cu = $("#seg-cuerpo"); cu.innerHTML = cuerpoSesion(); if (SES_TAB === "evento") qrInvitados();
      if (!calma) cu.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: EASE });
      return;
    }
    const chk = e.target.closest(".chk");
    if (chk) {
      const store = SES_TAB === "maleta" ? MAL : TOM, set = store[SES.id] || (store[SES.id] = new Set()), k = Number(chk.dataset.k);
      const on = !set.has(k); on ? set.add(k) : set.delete(k);
      chk.setAttribute("aria-checked", on); $(".caja", chk).innerHTML = on ? icoListo() : "";
      const tot = $$(".chk", c).length;
      $(".prog i", c).style.transform = `scaleX(${set.size / tot})`;
      $("#prog-n").textContent = `${set.size} de ${tot}`;
      const tl = $(".todo-listo", c), ya = set.size === tot;
      if (ya && tl.hidden) { tl.hidden = false; entra(tl); aviso(SES_TAB === "maleta" ? "Maleta lista · <b>todo empacado</b>" : "Lista de tomas · <b>completa</b>", { ic: "check", sub: SES.t }); }
      else if (!ya) tl.hidden = true;
      if (SES_TAB === "maleta") pintarProxSesion();
      return;
    }
    const rec = e.target.closest("#ses-rec");
    if (rec) {
      const cb = COBRAR.find(x => x.id === SES.cob);
      if (cb && !cb.recordado) recordarPago(cb, rec);
    }
  });
  $("#prox-ses").addEventListener("click", e => {
    if (e.target.closest("[data-envivo]")) return irEnVivo($("#prox-ses").dataset.sid);
    const b = e.target.closest("[data-abrir]"); if (b) abrirSesion($("#prox-ses").dataset.sid, b.dataset.abrir);
  });
}

/* ---------- Clientes ---------- */
const MES_L = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const MES_C = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
// hist: [mes corto + año, sesión, monto, foto]; fechas: [ícono, qué, mes 1-12, día]; g: gustos para la sesión
const CLI = [
  { id: "abuelos", n: "Abuelos de Bella Aurora", desde: "Clientes desde 2021 · Bella Aurora", tag: "50 años de casados",
    fechas: [["heart", "Bodas de oro", 2, 20], ["cake", "Cumpleaños del abuelo", 7, 8]],
    hist: [["Dic 2025", "Cuatro generaciones", 1200, "f-familia"], ["Feb 2024", "Retrato de pareja", 450, "f-retrato"]],
    nota: "Vienen con hijos y nietos: 18 personas. Llevar silla para la abuela y hacer las fotos de grupo primero.",
    g: { col: [["#D9C9A3", "Beige"], ["#FFFFFF", "Blanco"]], ropa: "Guayabera blanca y vestido beige", ninos: "8 nietos de 2 a 14 años", mascota: "No", sitio: "El jardín de su casa", fav: ["f-familia", "Las cuatro generaciones juntas"] },
    prox: { ic: "heart", t: "Sesión de bodas de oro", por: "El 20 de febrero cumplen 50 años de casados.", m: 1500, album: "Familias",
      wa: "Hola. ¡El 20 de febrero cumplen 50 años de casados! Les proponemos una sesión de bodas de oro con toda la familia, en su jardín, por Q 1,500.00. ¿Le apartamos fecha?", resp: "¡Qué lindo! Sí, que sea un domingo para que vengan todos." },
    cod: "REF-0098", refs: ["Familia del parque", "Clienta frecuente", "Mamá primeriza"] },
  { id: "valeria", n: "Clienta frecuente", desde: "Clienta desde 2022 · Bella Aurora", tag: "Recomienda",
    fechas: [["cake", "Su cumpleaños", 1, 22], ["heart", "Aniversario de bodas", 3, 9], ["sparkles", "Nace su bebé", 12, 15]],
    hist: [["Oct 2026", "Maternidad en estudio", 950, "f-glam"], ["Mar 2025", "Aniversario en exterior", 850, "f-pareja"], ["Mar 2024", "Boda civil con video", 4200, "f-boda"], ["Dic 2023", "Mini sesión navideña", 350, "f-familia"]],
    nota: "Prefiere las sesiones por la mañana. Pagó siempre a tiempo.",
    g: { col: [["#E8DCCB", "Crema"], ["#8E2234", "Vino"]], ropa: "Vestidos largos y telas que se muevan", ninos: "Su bebé nace en diciembre", mascota: "No", sitio: "Luz de la mañana, afuera", fav: ["f-pareja", "Acostados en el pasto, en el aniversario"] },
    prox: { ic: "sparkles", t: "Sesión de recién nacido", por: "Hizo su maternidad en octubre y el bebé nace a mediados de diciembre.", m: 950, album: "Bebés",
      wa: "Hola. ¡Ya falta poco para conocer a su bebé! Le apartamos la sesión de recién nacido para sus primeros 15 días, con 10 % por ser clienta frecuente. ¿Le guardo fecha?", resp: "¡Sí! Nace a mediados de diciembre. Guárdeme la fecha, porfa." },
    cod: "REF-0142", refs: ["Familia del recién nacido", "Pareja de preboda"] },
  { id: "colegio", n: "Colegio La Asunción", desde: "Clientes desde 2024 · Retalhuleu", tag: "Contrato cada año",
    fechas: [["sparkles", "Desfile de independencia", 9, 15], ["star", "Graduación", 10, 28]],
    hist: [["Nov 2026", "Desfile y graduación", 4800, "f-graduacion"], ["Sep 2026", "Desfile del 15", 1800, "f-maracas"], ["Sep 2025", "Desfile del 15", 1600, "f-cacao"]],
    nota: "Se habla con la dirección. Piden una foto de cada graduando y una de grupo grande.",
    g: { col: [["#1D2D6B", "Azul marino"], ["#FFFFFF", "Blanco"]], ropa: "Uniforme de gala y toga", ninos: "62 graduandos", mascota: "No", sitio: "El patio del colegio y el parque", fav: ["f-graduacion", "La banda en el desfile"] },
    prox: { ic: "book", t: "Anuario con las fotos del año", por: "Hicieron desfile y graduación con el estudio. Cada familia compra su anuario.", m: 3500, album: "Graduaciones",
      wa: "Buenas tardes. Con las fotos del desfile y la graduación les podemos armar el anuario 2026, y cada familia lo pide aparte. La edición de la dirección sale en Q 3,500.00. ¿Le mando una muestra?", resp: "Nos interesa. Mándeme la muestra para enseñarla en la reunión." },
    cod: "REF-0055", refs: ["Una graduanda de San Felipe"] },
  { id: "morales", n: "Familia de la quinceañera", desde: "Clientes desde 2024 · San Felipe", tag: "Fotos por cerrarse",
    fechas: [["cake", "Cumpleaños de la quinceañera", 11, 3]],
    hist: [["Nov 2026", "XV en estudio con video", 2400, "f-xv"], ["Nov 2025", "Retrato de cumpleaños", 450, "f-quince"]],
    nota: "La quinceañera quiere un cuadro grande para la sala. Eligieron 32 fotos y no han pedido impresiones.",
    g: { col: [["#7E1A2A", "Vino"], ["#C9A94D", "Dorado"]], ropa: "Vestido vino y corona dorada", ninos: "Dos hermanos menores", mascota: "No", sitio: "El estudio con humo y luces", fav: ["f-xv", "La de la corona con fondo oscuro"] },
    prox: { ic: "book", t: "Álbum de los XV", por: "Sus fotos se cierran en 3 días y no han pedido nada impreso.", m: 1450, album: "XV años",
      wa: "Hola. La galería de los XV está abierta hasta el viernes. Con las 32 fotos que eligieron armamos el álbum 30×30 por Q 1,450.00. ¿Se lo preparamos?", resp: "Sí, el álbum grande. ¿Lo puedo pagar en dos partes?" },
    cod: "REF-0293", refs: [] },
  { id: "perez", n: "Familia del bebé", desde: "Clientes desde 2025 · Champerico", tag: "Cumple en 3 semanas",
    fechas: [["cake", "El bebé cumple 1 año", 12, 1]],
    hist: [["Dic 2025", "Recién nacido", 950, "f-bebe"], ["Ago 2025", "Maternidad", 850, "f-retrato"]],
    nota: "Viajan desde Champerico: darles horario después de las 10 de la mañana.",
    g: { col: [["#F4C9C0", "Rosado"], ["#FFFFFF", "Blanco"]], ropa: "Body blanco y tutú para el primer año", ninos: "El bebé y una prima", mascota: "No", sitio: "El set de circo del estudio", fav: ["f-bebe", "Dormido en la canasta"] },
    prox: { ic: "cake", t: "Sesión de primer año", por: "Le hicieron su recién nacido en diciembre y cumple 1 año el 1 de diciembre.", m: 650, album: "Primer año",
      wa: "Hola. ¡Su bebé ya va a cumplir su primer año! Tenemos el set de circo o el de pastel para su sesión, Q 650.00. ¿Le apartamos fecha antes del 1 de diciembre?", resp: "¡Sí! El de circo. ¿Puede ser el sábado 28?" },
    cod: "REF-0388", refs: ["Familia nueva"] },
  { id: "lopez", n: "Familia del parque", desde: "Clientes desde 2023 · San Sebastián", tag: "Eligiendo fotos",
    fechas: [["cake", "Cumpleaños de la hija", 2, 14], ["heart", "Aniversario de bodas", 6, 2]],
    hist: [["Nov 2026", "Familia en exterior", 850, "f-familia"], ["Jun 2026", "Sesión Mundial 2026", 350, "f-camisola"], ["Dic 2025", "Mini sesión navideña", 350, "f-maracas"], ["Feb 2024", "Primer año de la hija", 650, "f-primer"]],
    nota: "Siempre compran alguna impresión. Mejor sesiones cortas y antes de las 10.",
    g: { col: [["#2F5D3A", "Verde"], ["#F2E6D0", "Beige"], ["#3B5B8C", "Mezclilla"]], ropa: "Toda la familia en tonos tierra", ninos: "Una niña de 3 años: llevar juguete", mascota: "Un perrito café, quieren incluirlo", sitio: "El parque central, temprano", fav: ["f-familia", "Los tres caminando de la mano"] },
    prox: { ic: "book", t: "Álbum de la sesión que está eligiendo", por: "Está marcando sus fotos ahora. Es cuando más ganas tiene de llevárselas impresas.", m: 650, album: "Familias",
      wa: "Hola. Vimos que ya está eligiendo sus fotos. Con las que marcó le podemos armar un álbum 20×20 de tapa dura por Q 650.00. ¿Se lo preparamos?", resp: "¡Qué buena idea! Sí, porfa, con las del parque." },
    cod: "REF-0217", refs: [] },
  { id: "mama", n: "Mamá primeriza", desde: "Clienta desde 2026 · Retalhuleu", tag: "Bebé en enero",
    fechas: [["sparkles", "Nace su bebé", 1, 10]],
    hist: [["Oct 2026", "Maternidad", 950, "f-glam"]],
    nota: "Le da pena la cámara: platicarle y poner su música. Le encanta el blanco y negro.",
    g: { col: [["#FFFFFF", "Blanco"], ["#1C1B19", "Negro"]], ropa: "Vestido blanco ajustado", ninos: "Su primer bebé", mascota: "Una gata", sitio: "Estudio con fondo negro", fav: ["f-glam", "El perfil con luz dorada"] },
    prox: { ic: "sparkles", t: "Recién nacido en sus primeros 15 días", por: "Su bebé nace en enero. Las fotos de recién nacido salen mejor antes de los 15 días.", m: 950, album: "Bebés",
      wa: "Hola. ¡Ya casi llega su bebé! Las fotos de recién nacido salen más bonitas en sus primeros 15 días. Le apartamos la sesión por Q 950.00 y la movemos según el día que nazca. ¿Le parece?", resp: "¡Sí, porfa! Así ya no me preocupo por eso." },
    cod: "REF-0602", refs: [] },
  { id: "ruiz", n: "Novios de diciembre", desde: "Clientes desde 2025 · Retalhuleu", tag: "Aniversario",
    fechas: [["heart", "Primer aniversario de bodas", 12, 5], ["cake", "Cumpleaños de la novia", 4, 18]],
    hist: [["Dic 2025", "Boda con video", 7800, "f-boda"], ["Oct 2025", "Preboda en Champerico", 1200, "f-pareja"]],
    nota: "Compraron el álbum 30×30 de la boda. Quieren volver a la playa.",
    g: { col: [["#1F3A5F", "Azul noche"], ["#D9C9A3", "Arena"]], ropa: "Lino claro, descalzos", ninos: "No", mascota: "No", sitio: "Playa de Champerico al atardecer", fav: ["f-boda", "La sonrisa de la novia"] },
    prox: { ic: "heart", t: "Sesión de primer aniversario", por: "El 5 de diciembre cumplen un año de casados.", m: 850, album: "Bodas",
      wa: "Hola. ¡El 5 de diciembre cumplen su primer año de casados! Les ofrecemos una sesión de aniversario en Champerico, donde hicimos su preboda, por Q 850.00. ¿Les guardamos la fecha?", resp: "¡Nos encanta! Sí, el domingo antes del aniversario." },
    cod: "REF-0451", refs: [] },
  { id: "castillo", n: "Novios de octubre", desde: "Clientes desde 2026 · Nuevo San Carlos", tag: "Deben saldo",
    fechas: [["heart", "Primer aniversario de bodas", 10, 17]],
    hist: [["Oct 2026", "Boda", 5800, "f-anillo"]],
    nota: "Pidieron una foto grande de la ceremonia para la casa de los papás.",
    g: { col: [["#FFFFFF", "Blanco"], ["#9DB08A", "Salvia"]], ropa: "Novia con velo largo", ninos: "Dos pajecitos sobrinos", mascota: "No", sitio: "El jardín del salón", fav: ["f-anillo", "El anillo en la pedida"] },
    prox: { ic: "unlock", t: "Pagar el saldo y liberar las fotos", por: "Su galería está lista con marca de agua. Al pagar descargan todo en alta.", m: 1200, album: "Bodas",
      wa: "Hola. ¡Su galería de boda ya está lista! Al completar el saldo de Q 1,200.00 se quita la marca de agua y pueden descargar todo en alta. ¿Le paso los datos para transferir?", resp: "¡Sí! Hoy mismo transfiero." },
    cod: "REF-0510", refs: [] },
  { id: "pareja", n: "Pareja de preboda", desde: "Clientes desde 2026 · Retalhuleu", tag: "Sesión el jueves",
    fechas: [["heart", "Su boda", 2, 14]],
    hist: [["Ago 2026", "Pedida de mano", 650, "f-anillo"]],
    nota: "Se casan el 14 de febrero. La preboda es este jueves en Champerico.",
    g: { col: [["#E8B4A0", "Durazno"], ["#FFFFFF", "Blanco"]], ropa: "Ella vestido largo durazno, él camisa blanca", ninos: "No", mascota: "Un labrador: sí va a la playa", sitio: "Playa de Champerico", fav: ["f-anillo", "El anillo de la pedida"] },
    prox: { ic: "heart", t: "La boda con video", por: "Hicieron la pedida y la preboda con el estudio. La boda del 14 de febrero aún no está apartada.", m: 7800, album: "Bodas",
      wa: "Hola. ¡Qué emoción la preboda del jueves! Para el 14 de febrero les guardamos la cobertura de la boda con video por Q 7,800.00, con 10 % menos por la preboda. ¿Se la apartamos?", resp: "¡Sí! Nos encantaría que ustedes la hagan." },
    cod: "REF-0577", refs: [] }
];
const CL = { sel: "valeria", filtro: "todos", q: "", enviadas: new Set() };
const hoy0 = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
function diasA(mes, dia) { const h = hoy0(); let d = new Date(h.getFullYear(), mes - 1, dia); if (d < h) d = new Date(h.getFullYear() + 1, mes - 1, dia); return Math.round((d - h) / 864e5); }
const totalDe = c => c.hist.reduce((s, h) => s + h[2], 0);
const mesesDesde = txt => { const [m, a] = txt.split(" "); const h = new Date(); return (h.getFullYear() - +a) * 12 + h.getMonth() - MES_C.indexOf(m); };
const textoMeses = n => n <= 0 ? "Este mes" : n === 1 ? "Hace 1 mes" : n < 12 ? `Hace ${n} meses` : n < 24 ? "Hace 1 año" : `Hace ${Math.floor(n / 12)} años`;
const cercana = c => Math.min(...c.fechas.map(f => diasA(f[2], f[3])));
const normal = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const FILTROS = [
  ["todos", "Todos", () => true],
  ["ofrecer", "Para ofrecer", c => !CL.enviadas.has(c.id)],
  ["fechas", "Fechas cerca", c => cercana(c) <= 60],
  ["recomiendan", "Recomiendan", c => c.refs.length > 0]
];
function visibles() {
  const f = FILTROS.find(x => x[0] === CL.filtro)[2], q = normal(CL.q.trim());
  return CLI.filter(c => f(c) && (!q || normal([c.n, c.desde, c.tag, c.nota, ...c.hist.map(h => h[1])].join(" ")).includes(q)))
    .sort((a, b) => a.n.localeCompare(b.n, "es"));
}
const fichaEnHoja = () => $("#principal").clientWidth < 820;
function pintarClientes() {
  $("#cli-filtros").innerHTML = FILTROS.map(([id, t, f]) => `<button type="button" aria-pressed="${CL.filtro === id}" data-f="${id}">${t}<span>${CLI.filter(f).length}</span></button>`).join("");
  const vs = visibles(), grupos = {};
  vs.forEach(c => (grupos[normal(c.n[0]).toUpperCase()] ||= []).push(c));
  const letras = Object.keys(grupos);
  $("#lista-cli").innerHTML = letras.map(L => `<li class="letra-g"><h3 class="letra-h" id="L-${L}">${L}</h3><ul>${grupos[L].map(c => {
    const env = CL.enviadas.has(c.id), sel = c.id === CL.sel && !fichaEnHoja();
    return `<li><button type="button" class="cli-row" data-cli="${c.id}" aria-current="${sel}">
      <span class="foto av ${c.hist[0][3]}" aria-hidden="true"></span>
      <span class="cr-txt"><b>${c.n}</b><small class="${env ? "hecho" : ""}">${env ? ico("check", 13) + "Oferta enviada" : ico(c.prox.ic, 13) + c.prox.t}</small></span>
      ${ico("chev", 18)}</button></li>`;
  }).join("")}</ul></li>`).join("");
  $("#abc").innerHTML = letras.length > 2 ? letras.map(L => `<button type="button" data-l="${L}" aria-label="Ir a la ${L}">${L}</button>`).join("") : "";
  const vacio = $("#cli-vacio");
  vacio.hidden = vs.length > 0;
  if (!vs.length) vacio.textContent = CL.q.trim() ? `Nadie coincide con «${CL.q.trim()}».` : "Nadie en este filtro por ahora.";
}
function elegirCliente(id) {
  CL.sel = id;
  const c = CLI.find(x => x.id === id), tot = totalDe(c), n = c.hist.length;
  $$("#lista-cli .cli-row").forEach(b => b.setAttribute("aria-current", b.dataset.cli === id && !fichaEnHoja()));
  $("#fc-av").className = "foto fc-av " + c.hist[0][3];
  $("#fc-n").textContent = c.n; $("#fc-sub").textContent = c.desde; $("#fc-tag").textContent = c.tag;
  $("#fc-acc").innerHTML = [["llamar", "phone", "Llamar"], ["wa", "wa", "WhatsApp"], ["porta", "images", "Portafolio"], ["ofrecer", "gift", "Ofrecer"]]
    .map(([k, ic, t]) => `<button type="button" class="fc-a" data-fa="${k}">${ico(ic, 22)}<span>${t}</span></button>`).join("");
  $("#fc-cifras").innerHTML = `<div><small>Ha gastado</small><b>${Q(tot)}</b></div><div><small>Sesiones</small><b>${n}</b></div><div><small>Última vez</small><b>${textoMeses(mesesDesde(c.hist[0][0]))}</b></div>`;
  pintarProx(c);
  const g = c.g;
  $("#fc-gustos").innerHTML = `
    <div class="gu"><span class="gi">${ico("paleta", 18)}</span><div><small>Colores</small><span class="sw">${g.col.map(([h, t]) => `<span><i style="background:${h}"></i>${t}</span>`).join("")}</span></div></div>
    <div class="gu"><span class="gi">${ico("ropa", 18)}</span><div><small>Ropa</small><b>${g.ropa}</b></div></div>
    <div class="gu"><span class="gi">${ico("users", 18)}</span><div><small>Niños</small><b>${g.ninos}</b></div></div>
    <div class="gu"><span class="gi">${ico("huella", 18)}</span><div><small>Mascota</small><b>${g.mascota}</b></div></div>
    <div class="gu"><span class="gi">${ico("lugar", 18)}</span><div><small>Lugar favorito</small><b>${g.sitio}</b></div></div>
    <div class="gu fav"><span class="foto ${g.fav[0]}" aria-hidden="true"></span><div><small>La foto que más les gustó</small><b>${g.fav[1]}</b></div></div>`;
  $("#fc-carrete").innerHTML = c.hist.map(([f, t, m, foto]) => `<figure class="cr"><span class="foto ${foto}" aria-hidden="true"></span><figcaption><b>${t}</b><small>${f.replace(" ", " de ")} · ${Q(m)}</small></figcaption></figure>`).join("");
  $("#fc-carrete").scrollLeft = 0;
  $("#fc-fechas").innerHTML = c.fechas.map(([i, t, m, d]) => {
    const faltan = diasA(m, d), av = new Date(hoy0().getTime() + (faltan - 21) * 864e5);
    const aviso = faltan <= 30 ? `<span class="chip vivo"><i></i>Ya está en Hoy</span>` : `<span class="fc-avisa">Le avisa el ${av.getDate()} ${MES_C[av.getMonth()].toLowerCase()}</span>`;
    return `<li><span class="i">${ico(i, 15)}</span><span>${t}<small>${d} de ${MES_L[m - 1]} · ${faltan === 0 ? "es hoy" : faltan === 1 ? "falta 1 día" : `faltan ${faltan} días`}</small></span>${aviso}</li>`;
  }).join("");
  $("#fc-nota").textContent = c.nota;
  $("#fc-ref-in").innerHTML = `<div class="ref-fila"><div><h4>Código para recomendar</h4><span class="ref-cod">${c.cod}</span></div>
      ${btn("Mandar su código", "share", "bt-0 bt-chico", 'id="ref-wa"')}</div>
    <p class="ref-txt">${c.refs.length ? `Ya recomendó a <b>${c.refs.length} ${c.refs.length === 1 ? "familia" : "familias"}</b> y ganó <b>${Q(c.refs.length * 100)}</b> en impresiones.` : "Cada familia que llegue con su código le da Q 100.00 en impresiones."}</p>
    ${c.refs.length ? `<div class="ref-chips">${c.refs.map(r => `<span>${r}</span>`).join("")}</div>` : ""}`;
}
function pintarProx(c) {
  const p = c.prox, env = CL.enviadas.has(c.id), caja = $("#fc-prox");
  caja.classList.toggle("enviada", env);
  pinta(caja, `<div class="fp-cab"><span class="fp-ic">${ico(env ? "check" : p.ic, 20)}</span>
      <div class="fp-txt"><small>${env ? "Ya se le ofreció" : "Ofrézcale"}</small><b>${p.t}</b></div><span class="fp-m">${Q(p.m)}</span></div>
    <p class="fp-por">${env ? `«${p.resp}»` : p.por}</p>
    ${env ? "" : btn("Mandar oferta", "wa", "bt-1 bt-full", 'id="fp-wa"')}`);
}
async function ofrecer(c, b) {
  if (CL.enviadas.has(c.id)) return;
  if (b && !(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Enviada" }))) return;
  simularWA({ texto: c.prox.wa, respuesta: c.prox.resp, nota: "" });
  CL.enviadas.add(c.id);
  alFeed("send", `Oferta enviada a <b>${c.n}</b>: ${c.prox.t}`);
  setTimeout(() => { pintarClientes(); if (CL.sel === c.id) { pintarProx(c); entra($("#fc-prox")); } }, 900);
}
function colocarFicha() {
  const f = $("#ficha"), enHoja = fichaEnHoja(), destino = enHoja ? $("#cli-cuerpo") : $("#ficha-desk");
  if (f.parentElement !== destino) destino.append(f);
  if (!enHoja) cerrarHoja($("#hoja-cli"), true);
  $$("#lista-cli .cli-row").forEach(b => b.setAttribute("aria-current", b.dataset.cli === CL.sel && !enHoja));
}
function iniciarClientes() {
  pintarIconos($("#v-clientes"));
  pintarClientes(); elegirCliente(CL.sel); colocarFicha();
  $("#lista-cli").addEventListener("click", e => {
    const b = e.target.closest("[data-cli]"); if (!b) return;
    elegirCliente(b.dataset.cli);
    if (fichaEnHoja()) { $("#cli-cuerpo").scrollTop = 0; abrirHoja($("#hoja-cli")); }
    else if (!calma) $("#ficha").animate([{ opacity: .4, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 280, easing: EASE });
  });
  $("#abc").addEventListener("click", e => {
    const b = e.target.closest("[data-l]"); if (!b) return;
    const h = $("#L-" + b.dataset.l), y = h.getBoundingClientRect().top + scrollY - (enCel() ? 56 : 12);
    scrollTo({ top: y, behavior: calma ? "auto" : "smooth" });
  });
  $("#cli-filtros").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (!b) return; CL.filtro = b.dataset.f; pintarClientes(); });
  $("#cli-q").addEventListener("input", e => { CL.q = e.target.value; pintarClientes(); });
  $("#ficha").addEventListener("click", e => {
    const c = CLI.find(x => x.id === CL.sel);
    if (e.target.closest("#fp-wa")) return ofrecer(c, e.target.closest("#fp-wa"));
    if (e.target.closest("#ref-wa")) {
      const b = e.target.closest("#ref-wa");
      accion(b, { espera: "Abriendo WhatsApp…", listo: "Enviado" }).then(ok => ok && simularWA({ texto: `Hola. Gracias por ser parte de Foto González Studio. Este es su código: ${c.cod}. Si una familia lo usa al reservar, ella recibe 10 % de descuento y usted gana Q 100.00 en impresiones.`, respuesta: "¡Qué bien! Se lo voy a pasar a mi hermana.", nota: "" }));
      return;
    }
    const a = e.target.closest("[data-fa]"); if (!a) return;
    if (!calma) a.animate([{ transform: "scale(0.94)" }, { transform: "scale(1)" }], { duration: 220, easing: EASE });
    if (a.dataset.fa === "llamar") llamar(c.n, c.hist[0][3]);
    else if (a.dataset.fa === "wa") simularWA({ texto: `Hola, le saluda Foto González Studio. ¿Cómo están? Queríamos saber cómo les fue con sus fotos.`, respuesta: "¡Muy bien! Ya las tenemos en la sala.", nota: "" });
    else if (a.dataset.fa === "porta") simularWA({ texto: `Hola. Le comparto nuestro portafolio de ${c.prox.album.toLowerCase()} para que vea ideas: ${urlPorta([c.prox.album])}`, respuesta: "¡Qué bonitas! Me gustan las de luz natural.", nota: "" });
    else if (a.dataset.fa === "ofrecer") { const b = $("#fp-wa"); if (b) { b.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" }); ofrecer(c, b); } }
  });
}
/* Llamada simulada, como en el iPhone */
let llT = null;
function llamar(nombre, foto) {
  const ll = $("#llamada");
  $("#ll-av").className = "foto ll-av " + foto; $("#ll-n").textContent = nombre; $("#ll-t").textContent = "llamando…";
  ll.hidden = false; requestAnimationFrame(() => ll.classList.add("ver"));
  setTimeout(() => $("#ll-colgar").focus({ preventScroll: true }), 80);
  let s = 0; clearInterval(llT);
  setTimeout(() => { if (ll.hidden) return; llT = setInterval(() => { s++; $("#ll-t").textContent = `0:${String(s).padStart(2, "0")}`; }, 1000); }, 2200);
}
function colgar() {
  const ll = $("#llamada"); clearInterval(llT);
  ll.classList.remove("ver"); setTimeout(() => { if (!ll.classList.contains("ver")) ll.hidden = true; }, 300);
}

/* ---------- Fotos: galerías privadas ---------- */
const GAL = { castilloPagada: false, recordadoXV: false, resenaDic: false, publicadaBebe: false };
function pintarGalerias() {
  const n = G.sel.length;
  const filas = [
    { id: "parque", fotos: ["f-familia", "f-camisola", "f-primer"], n: "Familia del parque", t: "Familia en exterior", total: 24,
      estado: ["vivo", "Eligiendo ahora", "dot"], barra: Math.min(1, n / 10), barraTxt: `${n} de 10 elegidas${n > 10 ? ` · ${n - 10} extra` : ""}`,
      datos: [["Elegidas", n], ["Extra vendido", Q(G.extraVendido)]], acc: btn("Ver cómo elige", "eye", "bt-2 bt-full", 'data-gal="vivo"') },
    { id: "xv", fotos: ["f-xv", "f-quince", "f-glam"], n: "Quinceañera de noviembre", t: "XV en estudio con video", total: 180,
      estado: ["alerta", "Se cierra en 3 días", "clock"], barra: .85, barraTxt: "Quedan 3 de 21 días",
      datos: [["Elegidas", 32], ["Impresiones", "Ninguna"]],
      acc: GAL.recordadoXV ? `<span class="hecho">${icoListo()}Álbum ofrecido</span>` : btn("Ofrecer álbum", "book", "bt-1 bt-full", 'data-gal="xv"') },
    { id: "oct", fotos: ["f-boda", "f-anillo", "f-pareja"], n: "Novios de octubre", t: "Boda", total: 420, marca: !GAL.castilloPagada,
      estado: GAL.castilloPagada ? ["vivo", "Pagado completo", "unlock"] : ["lock", "Con marca de agua", "lock"], barra: GAL.castilloPagada ? 1 : .6, barraTxt: GAL.castilloPagada ? "Pueden bajar todas en alta" : `Pagado ${Q(1800)} de ${Q(3000)}`,
      datos: [["Debe", Q(GAL.castilloPagada ? 0 : 1200)], ["Puede bajarlas", GAL.castilloPagada ? "Sí" : "No"]],
      acc: GAL.castilloPagada ? `<span class="hecho">${icoListo()}Fotos liberadas</span>` : btn("Ya pagó", "check", "bt-2 bt-full", 'data-gal="pago"') },
    { id: "dic", fotos: ["f-pareja", "f-boda", "f-anillo"], n: "Novios de diciembre", t: "Boda con video", total: 610,
      estado: ["neutro", "Entregada", "check"], barra: 1, barraTxt: "Álbum 30×30 en el laboratorio",
      datos: [["Extra vendido", Q(1975)], ["Opinión", GAL.resenaDic ? "Pedida" : "Sin pedir"]],
      acc: GAL.resenaDic ? `<span class="hecho">${icoListo()}Opinión pedida</span>` : btn("Pedir opinión", "star", "bt-0 bt-full", 'data-gal="resena"') },
    { id: "bebe", fotos: ["f-bebe", "f-pastel", "f-producto"], n: "Familia del recién nacido", t: "Recién nacido", total: 38,
      estado: GAL.publicadaBebe ? ["vivo", "Ya la tienen", "check"] : ["neutro", "Editando", "clock"], barra: GAL.publicadaBebe ? 1 : .7, barraTxt: GAL.publicadaBebe ? "Enlace y PIN enviados" : "Editadas 27 de 38",
      datos: [["Fotos", 38], ["Se manda", GAL.publicadaBebe ? "Hoy" : "El jueves"]],
      acc: GAL.publicadaBebe ? `<span class="hecho">${icoListo()}La familia ya la tiene</span>` : btn("Mandarle sus fotos", "send", "bt-0 bt-full", 'data-gal="publicar"') }
  ];
  $("#galerias").innerHTML = filas.map(g => `<li class="gal${g.marca ? " con-marca" : ""}" data-gal-id="${g.id}">
    <div class="gal-portada">
      <span class="foto ${g.fotos[0]} g1" aria-hidden="true"></span><span class="foto ${g.fotos[1]} g2" aria-hidden="true"></span><span class="foto ${g.fotos[2]} g3" aria-hidden="true"></span>
      <span class="gal-marca" aria-hidden="true">FOTO GONZÁLEZ · FOTO GONZÁLEZ · FOTO GONZÁLEZ</span>
      <span class="gal-estado ${g.estado[0]}">${g.estado[2] === "dot" ? "<i></i>" : ico(g.estado[2], 13)}${g.estado[1]}</span>
      <span class="gal-total">${g.total} fotos</span>
    </div>
    <div class="gal-cuerpo">
      <div><b>${g.n}</b><small>${g.t}</small></div>
      <div class="gal-barra"><i style="transform:scaleX(${g.barra})"></i></div><small class="gal-barra-txt">${g.barraTxt}</small>
      <dl class="gal-datos">${g.datos.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      <div class="gal-acc">${g.acc}</div>
    </div></li>`).join("");
  $("#gl-extra").textContent = Q(1975 + G.extraVendido);
  $("#gl-saldo").textContent = Q(GAL.castilloPagada ? 0 : 1200);
}
function iniciarGalerias() {
  pintarGalerias();
  $("#galerias").addEventListener("click", async e => {
    const b = e.target.closest("[data-gal]"); if (!b) return;
    const k = b.dataset.gal;
    if (k === "vivo") {
      if (modoHoja()) abrirCliente();
      else if (!calma) $("#cliente .cel").animate([{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 600, easing: EASE });
      aviso("La familia del parque está eligiendo sus fotos", { ic: "eye", sub: "Toque los corazones en el celular" });
      return;
    }
    if (k === "pago") { if (await accion(b, { espera: "Guardando…", listo: "Pagado", ms: 420 })) setTimeout(() => pagar("c-castillo"), 500); return; }
    const txt = { xv: ["Abriendo WhatsApp…", "Ofrecido"], resena: ["Abriendo WhatsApp…", "Pedida"], publicar: ["Mandando…", "Mandadas"] }[k];
    if (!(await accion(b, { espera: txt[0], listo: txt[1] }))) return;
    if (k === "xv") {
      simularWA({ texto: "Hola. Su galería de XV cierra el viernes. Si quiere el álbum 30×30 con sus favoritas, este mes sale en Q 1,450.00 con la caja de regalo.", respuesta: "¡Sí lo queremos! ¿Le pagamos el anticipo por transferencia?", nota: "" });
      GAL.recordadoXV = true;
      setTimeout(() => { venta(1450); alFeed("book", "<b>Quinceañera de noviembre</b> pidió el álbum 30×30 · Q 1,450.00"); aviso("Álbum vendido · <b>Q 1,450.00</b>", { ic: "book", sub: "Quinceañera de noviembre" }); }, 4200);
    } else if (k === "resena") {
      simularWA({ texto: "Hola. Gracias otra vez por dejarnos estar en su boda. Si les gustaron sus fotos, ¿nos ayudan con una reseña en Google? Les toma un minuto: g.page/fotogonzalez", respuesta: "¡Claro que sí! Ya se la dejamos.", nota: "" });
      GAL.resenaDic = true;
      setTimeout(() => { alFeed("star", "<b>Novios de diciembre</b> dejaron 5 estrellas en Google"); aviso("Opinión nueva · <b>5 estrellas</b>", { ic: "star", sub: "Novios de diciembre" }); }, 3800);
    } else if (k === "publicar") {
      GAL.publicadaBebe = true;
      alFeed("send", "Fotos del <b>recién nacido</b> enviadas · enlace y PIN por WhatsApp");
      aviso("Fotos enviadas · <b>la familia ya tiene su galería</b>", { ic: "images", sub: "Recién nacido · 38 fotos" });
    }
    setTimeout(pintarGalerias, 1000);
  });
}
function pagarCastillo() { if (GAL.castilloPagada) return; GAL.castilloPagada = true; pintarGalerias(); alFeed("unlock", "Se quitó la marca de agua de la boda de <b>los novios de octubre</b>"); }

/* ---------- Ofertas ---------- */
const SEG = [
  { id: "bebes", n: "Familias con bebé de 6 a 12 meses", c: 38 },
  { id: "mundial", n: "Las que vinieron a la sesión del Mundial", c: 27 },
  { id: "inactivos", n: "Clientes que no vuelven desde 2025", c: 64 }
];
const OFR = [
  { id: "navidad", n: "Mini sesión navideña", d: "20 minutos · 8 fotos", p: 350, msj: "Hola. Le escribe Foto González Studio. Ya armamos el set navideño: mini sesión de 20 minutos con 8 fotos editadas por Q 350.00. Quedan pocos espacios en diciembre. ¿Le apartamos uno?" },
  { id: "anio", n: "Sesión de primer año", d: "Con pastel · 15 fotos y video", p: 650, msj: "Hola. ¡Su bebé ya va por su primer año! Le ofrecemos la sesión con pastel en el estudio, 15 fotos y un video corto, por Q 650.00. ¿Le apartamos fecha?" },
  { id: "cuadro", n: "Cuadro 40×60 de su foto favorita", d: "Listo en 5 días", p: 375, msj: "Hola. ¿Ya tiene su foto favorita en la pared? Este mes el cuadro 40×60 con marco de madera sale en Q 375.00. Solo díganos cuál y lo mandamos a imprimir." }
];
const CAM = { seg: "bebes", ofr: "navidad", corriendo: false };
function pintarCampana() {
  $("#cam-seg").innerHTML = SEG.map(s => `<label><input type="radio" name="seg" value="${s.id}"${s.id === CAM.seg ? " checked" : ""}><span>${s.n}</span><span class="n">${s.c}</span></label>`).join("");
  $("#cam-ofr").innerHTML = OFR.map(o => `<label><input type="radio" name="ofr" value="${o.id}"${o.id === CAM.ofr ? " checked" : ""}><span>${o.n}<small>${o.d}</small></span><span class="n">${Q(o.p)}</span></label>`).join("");
  $$("#cam-seg input, #cam-ofr input").forEach(i => i.addEventListener("change", () => { CAM[i.name] = i.value; mensajeCampana(); }));
  $("#cam-enviar").addEventListener("click", enviarCampana);
  mensajeCampana();
}
function mensajeCampana() {
  const s = SEG.find(x => x.id === CAM.seg), o = OFR.find(x => x.id === CAM.ofr), m = $("#cam-msj");
  m.textContent = o.msj;
  if (!calma) m.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 260, easing: EASE });
  if (!CAM.corriendo) $("#cam-enviar-txt").textContent = `Mandar a ${s.c} familias`;
}
function enviarCampana() {
  if (CAM.corriendo) return;
  const s = SEG.find(x => x.id === CAM.seg), o = OFR.find(x => x.id === CAM.ofr), b = $("#cam-enviar");
  CAM.corriendo = true; b.disabled = true; b.classList.add("cargando"); $("#cam-enviar-txt").textContent = "Mandando…";
  $$("#cam-seg input, #cam-ofr input").forEach(i => i.disabled = true);
  const res = $("#cam-res"); res.hidden = false; entra(res);
  const meta = { env: s.c, lei: Math.round(s.c * .84), res: Math.round(s.c * .29), apa: Math.max(1, Math.round(s.c * .11)) };
  const val = { env: 0, lei: 0, res: 0, apa: 0 };
  ["env", "lei", "res", "apa"].forEach(k => { $("#n-" + k).dataset.v = 0; $("#n-" + k).textContent = "0"; $("#r-" + k).style.transform = "scaleX(0)"; });
  $("#n-q").dataset.v = 0; $("#n-q").textContent = Q(0);
  let k = 0;
  const tic = () => {
    k++;
    const av = { env: Math.min(1, k / 3), lei: Math.min(1, k / 7), res: Math.min(1, Math.max(0, (k - 2) / 8)), apa: Math.min(1, Math.max(0, (k - 4) / 8)) };
    Object.keys(meta).forEach(m => {
      const v = Math.round(meta[m] * av[m]);
      if (v !== val[m]) { val[m] = v; odometro($("#n-" + m), v, n => String(Math.round(n))); }
      $("#r-" + m).style.transform = `scaleX(${v / s.c})`;
    });
    odometro($("#n-q"), val.apa * o.p);
    if (k === 6) alFeed("chat", `Oferta «${o.n}»: <b>${val.res}</b> ya contestaron`, "cam");
    if (k < 12) return setTimeout(tic, 750);
    const total = meta.apa * o.p;
    venta(total);
    alFeed("cash", `Oferta «${o.n}»: <b>${meta.apa} apartaron</b> · ${Q(total)}`, "cam");
    aviso(`Oferta «${o.n}» · <b>${meta.apa} apartaron</b>`, { ic: "send", sub: `${Q(total)} ganados` });
    CAM.corriendo = false; b.disabled = false; b.classList.remove("cargando"); $("#cam-enviar-txt").textContent = "Mandar otra oferta";
    $$("#cam-seg input, #cam-ofr input").forEach(i => i.disabled = false);
  };
  setTimeout(tic, 500);
}

/* ---------- Mi contacto y portafolio ---------- */
const URL_PAG = new URL("../pagina/", location.href).href;
const urlPorta = albs => URL_PAG + "#portafolio";
const ALBUMES = [["XV años", "f-xv", 48], ["Bodas", "f-boda", 64], ["Bebés", "f-bebe", 36], ["Familias", "f-familia", 40], ["Primer año", "f-primer", 28], ["Graduaciones", "f-graduacion", 52]];
const PORTA = new Set();
const VCARD = () => ["BEGIN:VCARD", "VERSION:3.0", "N:;Foto González Studio;;;", "FN:Foto González Studio", "ORG:Foto González Studio", "TITLE:Fotografía y video",
  "TEL;TYPE=CELL,VOICE:+50250168853", "EMAIL;TYPE=WORK:premiumdesigngt@gmail.com", "ADR;TYPE=WORK:;;Residenciales Bella Aurora, zona 6;Retalhuleu;;;Guatemala", "URL:" + URL_PAG, "END:VCARD"].join("\r\n");
let qrListo = null;
function cargarQR() {
  if (qrListo) return qrListo;
  qrListo = new Promise((ok, mal) => {
    if (window.qrcode) return ok();
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    s.onload = ok; s.onerror = mal; document.head.append(s);
  });
  return qrListo;
}
function svgQR() { const q = qrcode(0, "M"); q.addData(URL_PAG); q.make(); return q.createSvgTag({ cellSize: 4, margin: 0, scalable: true }); }
function pintarQR() {
  cargarQR().then(() => { $("#tn-qr").innerHTML = svgQR(); $("#qr-grande").innerHTML = svgQR(); })
    .catch(() => { $("#tn-qr").innerHTML = ico("qr", 40); $("#qr-grande").innerHTML = `<p class="qr-sin">${URL_PAG}</p>`; });
}
function pintarAlbumes() {
  $("#albumes").innerHTML = ALBUMES.map(([n, f, c]) => `<button type="button" class="alb" aria-pressed="${PORTA.has(n)}" data-alb="${n}">
    <span class="foto ${f}" aria-hidden="true"></span><span class="alb-ok">${PORTA.has(n) ? icoListo() : ""}</span><span class="alb-t"><b>${n}</b><small>${c} fotos</small></span></button>`).join("");
}
function botonPorta() {
  const b = $("#porta-mandar"), n = PORTA.size;
  b.disabled = !n; b.classList.remove("listo");
  $(".bt-in", b).innerHTML = `${ico("send", 20)}<span>${n ? `Mandar ${n === 1 ? "el álbum" : `${n} álbumes`}` : "Elija uno o más álbumes"}</span>`;
  $("#porta-n").textContent = n ? `${n} ${n === 1 ? "elegido" : "elegidos"}` : "Toque los álbumes";
}
async function compartir({ title, text, url, files }, b, listo = "Compartido") {
  if (!(await accion(b, { espera: "Abriendo…", listo, ms: 260 }))) return;
  try {
    if (navigator.share) {
      const datos = files && navigator.canShare && navigator.canShare({ files }) ? { title, text, files } : { title, text, url };
      await navigator.share(datos);
    } else simularWA({ texto: `${text}\n${url}`, nota: "" });
  } catch (e) { /* la persona cerró la hoja de compartir */ }
  setTimeout(() => { b.disabled = false; b.classList.remove("listo"); b.style.minWidth = ""; poner(b, b._orig); }, 1600);
}
function iniciarCompartir() {
  pintarAlbumes(); botonPorta();
  $$("#v-compartir .bt").forEach(b => b._orig = $(".bt-in", b).innerHTML);
  $("#albumes").addEventListener("click", e => {
    const a = e.target.closest("[data-alb]"); if (!a) return;
    const n = a.dataset.alb, on = !PORTA.has(n); on ? PORTA.add(n) : PORTA.delete(n);
    a.setAttribute("aria-pressed", on); $(".alb-ok", a).innerHTML = on ? icoListo() : "";
    if (!calma) a.animate([{ transform: "scale(0.96)" }, { transform: "scale(1)" }], { duration: 240, easing: EASE });
    botonPorta();
  });
  $("#porta-mandar").addEventListener("click", e => {
    const albs = [...PORTA], b = e.currentTarget;
    b._orig = $(".bt-in", b).innerHTML;
    compartir({ title: "Portafolio · Foto González Studio", text: `Hola. Le comparto nuestro portafolio de ${albs.join(", ").toLowerCase()}. Ahí puede ver precios y apartar su fecha.`, url: urlPorta(albs) }, b, "Enviado");
    alFeed("images", `Portafolio enviado: <b>${albs.join(", ")}</b>`);
  });
  $("#comp-compartir").addEventListener("click", e => {
    const file = typeof File === "function" ? new File([VCARD()], "Foto-Gonzalez-Studio.vcf", { type: "text/vcard" }) : null;
    compartir({ title: "Foto González Studio", text: "Foto González Studio · Fotografía y video en Retalhuleu · WhatsApp +502 5016 8853", url: URL_PAG, files: file ? [file] : null }, e.currentTarget);
  });
  $("#comp-guardar").addEventListener("click", async e => {
    const b = e.currentTarget;
    if (!(await accion(b, { espera: "Preparando…", listo: "Listo para guardar", ms: 300 }))) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([VCARD()], { type: "text/vcard" })); a.download = "Foto-Gonzalez-Studio.vcf";
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    setTimeout(() => { b.disabled = false; b.classList.remove("listo"); b.style.minWidth = ""; poner(b, b._orig); }, 1800);
  });
  const qr = () => { pintarQR(); abrirHoja($("#hoja-qr")); };
  $("#comp-qr").addEventListener("click", qr);
  $("#tn-qr").addEventListener("click", qr);
}

/* ---------- Tarjetas y respaldo ---------- */
const TARJ = [
  { id: "A", gb: 128, ses: "XV en estudio con video", f: "f-xv", cuando: "Sábado pasado", fotos: 1240, disco: true, nube: true },
  { id: "B", gb: 64, ses: "Familia en exterior", f: "f-familia", cuando: "Hace 3 días", fotos: 412, disco: true, nube: false },
  { id: "C", gb: 128, ses: "Boda de octubre", f: "f-anillo", cuando: "Hace 2 semanas", fotos: 2180, disco: false, nube: false },
  { id: "D", gb: 64, vacia: true }
];
const sinCopia = () => TARJ.filter(t => !t.vacia && !(t.disco && t.nube)).length;
function filaResp(t, k, ic, nombre) {
  if (t.copiando === k) return `<div class="rp copiando" data-k="${k}">${ico(ic, 20)}<span class="rp-t">${nombre}<small class="rp-n">0 de ${t.fotos.toLocaleString("en-US")} fotos</small><span class="prog"><i></i></span></span></div>`;
  return `<div class="rp${t[k] ? " ok" : ""}">${ico(ic, 20)}<span class="rp-t">${nombre}<small>${t[k] ? "Copiadas todas" : "Todavía no"}</small></span>${t[k] ? `<span class="rp-ok">${icoListo()}</span>` : btn(k === "disco" ? "Copiar" : "Subir", k === "disco" ? "hdd" : "cloud", "bt-2 bt-chico", `data-copiar="${k}"`)}</div>`;
}
function pintarRespaldo() {
  const n = sinCopia();
  pinta($("#resp-estado"), n ? `<div class="re alerta">${ico("alerta", 22)}<span><b>${n} ${n === 1 ? "sesión no está" : "sesiones no están"} en dos lugares</b><small>No borre esas tarjetas todavía.</small></span></div>`
    : `<div class="re ok">${ico("escudo", 22)}<span><b>Todo está guardado en dos lugares</b><small>Disco del estudio y nube.</small></span></div>`);
  $("#tarjetas").innerHTML = TARJ.map(t => t.vacia
    ? `<li class="tarj vacia" data-t="${t.id}"><div class="tarj-cab"><span class="sd">${ico("sd", 22)}<b>${t.id}</b></span><span class="tarj-t"><b>Tarjeta ${t.id} · ${t.gb} GB</b><small>Vacía, lista para la próxima sesión</small></span></div></li>`
    : `<li class="tarj${t.disco && t.nube ? " segura" : ""}" data-t="${t.id}">
      <div class="tarj-cab"><span class="foto tarj-f ${t.f}" aria-hidden="true"></span><span class="tarj-t"><b>${t.ses}</b><small>Tarjeta ${t.id} · ${t.gb} GB · ${t.fotos.toLocaleString("en-US")} fotos · ${t.cuando}</small></span></div>
      <div class="grupo-ios">${filaResp(t, "disco", "hdd", "Disco del estudio")}${filaResp(t, "nube", "cloud", "Nube")}</div>
      <div class="tarj-pie">${t.disco && t.nube ? `<span class="chip vivo">${ico("escudo", 13)}Segura en 2 lugares</span>${btn("Borrar la tarjeta", "borrar", "bt-0 bt-chico", 'data-borrar="1"')}` : `<span class="chip alerta">${ico("alerta", 13)}No la borre todavía</span>`}</div></li>`).join("");
  const c = $("#cuenta-resp"); c.textContent = n; c.classList.toggle("cero", !n);
  $("#mas-resp").textContent = n ? `${n} sin copia completa` : "Todo respaldado";
  pintarMasCuenta();
  pintarAvisoResp();
}
function pintarAvisoResp() {
  const n = sinCopia(), el = $("#hoy-resp");
  el.hidden = !n;
  if (n) el.innerHTML = `<span class="ar-ic">${ico("sd", 20)}</span><span><b>${n} ${n === 1 ? "tarjeta" : "tarjetas"} sin respaldo completo</b><small>Copie las fotos antes de borrarlas.</small></span>${btn("Ver", "chev", "bt-0 bt-chico", 'data-ir="respaldo"')}`;
}
function iniciarRespaldo() {
  pintarRespaldo();
  $("#tarjetas").addEventListener("click", async e => {
    const li = e.target.closest(".tarj"); if (!li) return;
    const t = TARJ.find(x => x.id === li.dataset.t);
    const cp = e.target.closest("[data-copiar]");
    if (cp) {
      const k = cp.dataset.copiar; t.copiando = k; pintarRespaldo();
      const fila = $(`.tarj[data-t="${t.id}"] .rp.copiando`), barra = $(".prog i", fila), txt = $(".rp-n", fila);
      const dur = calma ? 300 : 2200, t0 = performance.now();
      const paso = ahora => {
        const p = Math.min(1, (ahora - t0) / dur), e2 = 1 - Math.pow(1 - p, 2);
        barra.style.transform = `scaleX(${e2})`; txt.textContent = `${Math.round(t.fotos * e2).toLocaleString("en-US")} de ${t.fotos.toLocaleString("en-US")} fotos`;
        if (p < 1) return requestAnimationFrame(paso);
        t[k] = true; t.copiando = null; pintarRespaldo();
        const segura = t.disco && t.nube;
        alFeed(k === "disco" ? "hdd" : "cloud", `${t.ses}: fotos ${k === "disco" ? "copiadas al disco" : "subidas a la nube"}${segura ? " · <b>segura en 2 lugares</b>" : ""}`);
        if (segura) aviso(`<b>${t.ses}</b> ya está segura`, { ic: "check", sub: "En el disco y en la nube" });
      };
      requestAnimationFrame(paso);
      return;
    }
    const bo = e.target.closest("[data-borrar]");
    if (bo && (await accion(bo, { espera: "Borrando…", listo: "Borrada", ms: 700 }))) {
      setTimeout(() => { Object.assign(t, { vacia: true, ses: "", f: "" }); pintarRespaldo(); entra($(`.tarj[data-t="${t.id}"]`)); }, 600);
    }
  });
}

/* ---------- Celular de la familia: la galería que vende ---------- */
const FOTOS = ["f-familia", "f-primer", "f-camisola", "f-pastel", "f-familia", "f-bebe", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia"];
const INCL = 10, P_EXTRA = 35, P_TODA = 450;
const G = { sel: [], pagadas: new Set(), completa: false, extraVendido: 0, avisoMas: false };
const PRODS = [["Impresión 20×30", "Papel lustre profesional", 95], ["Cuadro 40×60", "Marco de madera natural", 375], ["Lienzo 60×90", "Listo para colgar", 650]];
const libre = i => { if (G.completa || G.pagadas.has(i)) return true; const k = G.sel.indexOf(i); return k > -1 && k < INCL; };
const extrasPend = () => G.completa ? [] : G.sel.slice(INCL).filter(i => !G.pagadas.has(i));
function pintarGaleria() {
  $("#galeria").innerHTML = FOTOS.map((f, i) => `<div class="ft" data-n="${i}">
    <span class="foto ${f}" aria-hidden="true"></span>
    <span class="wm" aria-hidden="true"><span>FOTO GONZÁLEZ</span><span>FOTO GONZÁLEZ</span><span>FOTO GONZÁLEZ</span></span>
    <span class="num mono">${i + 1}</span><span class="extra-tag">EXTRA</span>
    <button class="abrir" type="button" aria-label="Pedir impresión de la foto ${i + 1}"></button>
    <button class="corazon" type="button" aria-pressed="false" aria-label="Elegir la foto ${i + 1}"><span>${ico("heart", 15)}</span></button></div>`).join("");
  $("#galeria").addEventListener("click", ev => {
    const t = ev.target.closest(".ft"); if (!t) return;
    const i = Number(t.dataset.n);
    if (ev.target.closest(".corazon")) corazon(i, ev.target.closest(".corazon"));
    else if (ev.target.closest(".abrir")) abrirImp(i);
  });
  $("#of-unas").addEventListener("click", () => comprar("unas"));
  $("#of-toda").addEventListener("click", () => comprar("toda"));
  $("#hi-cerrar").addEventListener("click", cerrarImp);
  actualizarGaleria();
}
function actualizarGaleria() {
  $$("#galeria .ft").forEach(t => {
    const i = Number(t.dataset.n), k = G.sel.indexOf(i);
    t.classList.toggle("libre", libre(i));
    t.classList.toggle("extra", k >= INCL && !libre(i));
    $(".corazon", t).setAttribute("aria-pressed", k > -1);
  });
  const n = G.sel.length, ext = extrasPend();
  $("#c-cuenta").textContent = Math.min(n, INCL);
  $("#c-extra").textContent = G.completa ? "Galería completa" : n > INCL ? `+${n - INCL} extra` : "";
  $("#c-barra").style.transform = `scaleX(${Math.min(1, n / INCL)})`;
  const of = $("#oferta"), ver = ext.length > 0;
  if (ver) {
    const m = ext.length * P_EXTRA;
    $("#of-t").innerHTML = `Eligió <b>${ext.length} ${ext.length === 1 ? "foto" : "fotos"} más</b> de las que trae su paquete.`;
    $("#of-unas").innerHTML = `Llevar ${ext.length === 1 ? "la extra" : "las " + ext.length} por <span class="nw">${Q(m)}</span>`;
    $("#of-toda").innerHTML = `Toda la galería (24) por <span class="nw">${Q(P_TODA)}</span>`;
    $("#of-toda").classList.toggle("conviene", ext.length >= 6);
  }
  of.classList.toggle("ver", ver); of.inert = !ver;
}
function corazon(i, b) {
  const k = G.sel.indexOf(i);
  if (k > -1) G.sel.splice(k, 1); else G.sel.push(i);
  if (!calma) $("span", b).animate([{ transform: "scale(1)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 300, easing: EASE });
  actualizarGaleria();
  red(() => {
    const n = G.sel.length;
    alFeed("heart", `La familia del parque lleva <b>${n}</b> ${n === 1 ? "foto elegida" : "fotos elegidas"}${n > INCL ? ` · <b>${n - INCL} más</b> que su paquete` : ""}`, "sel-lopez");
    pintarGalerias();
    if (n > INCL && !G.avisoMas) { G.avisoMas = true; aviso("La familia del parque quiere <b>más fotos</b>", { ic: "sparkles", sub: "Ya le apareció la oferta en su celular" }); }
  });
}
function toastCel(txt) {
  const t = $("#toast-cel"); $("#toast-cel-txt").textContent = txt;
  t.classList.add("ver"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("ver"), 2800);
}
function comprar(tipo) {
  const ext = extrasPend(); if (!ext.length) return;
  const monto = tipo === "toda" ? P_TODA : ext.length * P_EXTRA;
  const b = $(tipo === "toda" ? "#of-toda" : "#of-unas"); b.disabled = true; b.textContent = "Pagando…";
  setTimeout(() => {
    if (tipo === "toda") G.completa = true; else ext.forEach(i => G.pagadas.add(i));
    G.extraVendido += monto; b.disabled = false;
    actualizarGaleria();
    toastCel("Pago aprobado. Sus fotos ya están sin marca de agua.");
    red(() => {
      venta(monto, { extra: true });
      const que = tipo === "toda" ? "la galería completa" : `${ext.length} ${ext.length === 1 ? "foto extra" : "fotos extra"}`;
      alFeed("cash", `La familia del parque compró <b>${que}</b> · ${Q(monto)}`);
      aviso(`Venta en la galería · <b>${Q(monto)}</b>`, { ic: "cash", sub: `La familia del parque compró ${que}` });
      pintarGalerias();
    });
  }, 700);
}
let impFoto = 0;
function abrirImp(i) {
  impFoto = i;
  $("#hi-foto").className = "foto hi-foto " + FOTOS[i];
  $("#hi-t").textContent = "Foto " + (i + 1);
  $("#hi-prods").innerHTML = PRODS.map(([n, d, p], k) => `<button type="button" data-k="${k}"><span>${n}<small>${d}</small></span><b>${Q(p)}</b></button>`).join("");
  $$("#hi-prods button").forEach(b => b.addEventListener("click", () => pedirImp(Number(b.dataset.k))));
  const h = $("#hoja-imp"); h.inert = false; h.classList.add("ver");
  setTimeout(() => $("#hi-prods button").focus({ preventScroll: true }), 60);
}
function cerrarImp() { const h = $("#hoja-imp"); h.classList.remove("ver"); h.inert = true; }
function pedirImp(k) {
  const [n, , p] = PRODS[k];
  cerrarImp();
  toastCel(`Pedido recibido: ${n}.`);
  red(() => {
    venta(p);
    alFeed("frame", `La familia del parque pidió <b>${n}</b> de la foto ${impFoto + 1} · ${Q(p)}`);
    aviso(`Pedido de impresión · <b>${Q(p)}</b>`, { ic: "bag", sub: `Familia del parque · ${n}` });
  });
}

/* ---------- Acciones de la hoja de sesión: cámara, cambiar fecha, cancelar ---------- */
async function accionSesion(k, b) {
  const s = SES;
  if (k === "vivo") { cerrarHoja($("#hoja-ses"), true); return irEnVivo(s.id); }
  if (k === "mover") {
    const m = $("#ses-mover");
    if (!m.hidden) { m.hidden = true; return; }
    m.innerHTML = `<p class="nr-sub">¿A qué día la pasa? Se queda a las ${hora12(s.h)}.</p><div class="nr-dias chicos">${Array.from({ length: 7 }, (_, i) => i + 1).map(k2 => {
      const d = fechaEn(k2), dd = hoyIdx() + k2, choca = dd <= 6 && AG.some(x => x !== s && x.d === dd && x.h === s.h);
      return `<button type="button" class="nr-dia" data-mover="${k2}"${choca ? " disabled" : ""}><small>${d.toLocaleDateString("es-GT", { weekday: "short" }).replace(".", "")}</small><b>${d.getDate()}</b><span>${choca ? "Ocupado" : "Libre"}</span></button>`;
    }).join("")}</div>`;
    m.hidden = false; entra(m);
    m.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "nearest" });
    return;
  }
  if (k === "cancelar") {
    if (!b.classList.contains("confirmar")) {
      b.classList.add("confirmar"); poner(b, `${ico("alerta", 18)}<span>Toque otra vez para cancelar</span>`);
      clearTimeout(b._t); b._t = setTimeout(() => { if (document.contains(b)) { b.classList.remove("confirmar"); poner(b, `${ico("x", 18)}<span>Cancelar</span>`); } }, 3200);
      return;
    }
    clearTimeout(b._t); b.classList.remove("confirmar");
    if (!(await accion(b, { espera: "Cancelando…", listo: "Cancelada" }))) return;
    AG.splice(AG.indexOf(s), 1);
    const c = COBRAR.find(x => x.id === s.cob); if (c) c.cancelada = true;
    pintarCobrar(); pintarCifras(); pintarAgenda();
    setTimeout(() => {
      cerrarHoja($("#hoja-ses"));
      simularWA({ texto: `Hola. Le escribe Foto González Studio. Quedó cancelada su sesión (${s.t.toLowerCase()}). Cuando quiera la volvemos a apartar, aquí estamos.`, nota: "" });
      alFeed("calendar", `Sesión cancelada: <b>${s.n}</b> · el espacio se ofreció a la lista de espera`);
      aviso("Sesión cancelada · <b>se avisó a la familia</b>", { ic: "calendar", sub: "El espacio se ofreció a 6 familias en lista de espera" });
    }, 600);
  }
}
async function moverSesion(k, b) {
  const s = SES, d = fechaEn(k), dd = hoyIdx() + k;
  if (!(await accion(b, { espera: "…", listo: "Listo", ms: 300 }))) return;
  if (dd <= 6) s.d = dd; else AG.splice(AG.indexOf(s), 1);
  pintarAgenda();
  simularWA({ texto: `Hola. Le escribe Foto González Studio. Movimos su sesión (${s.t.toLowerCase()}) al ${fechaTxt(d)} a las ${hora12(s.h)}. ¡Los esperamos!`, respuesta: "¡Perfecto, gracias por avisar!", nota: "" });
  alFeed("calendar", `<b>${s.n}</b>: sesión movida al ${fechaTxt(d)}`);
  aviso(`Sesión movida · <b>${fechaTxt(d)}</b>`, { ic: "calendar", sub: `${s.n} · se le avisó por WhatsApp` });
  if (dd <= 6) setTimeout(pintarSesion, 500); else setTimeout(() => cerrarHoja($("#hoja-ses")), 500);
}

/* ---------- Sub-menú de Sesiones: Agenda · Reservas · En vivo ---------- */
function pintarSubnav(v) {
  const n = RES.filter(r => r.estado !== "lista").length;
  $$("[data-subnav]").forEach(el => {
    el.innerHTML = `<div class="seg sub" role="tablist" aria-label="Sesiones" style="--n:3;--i:${SESV.indexOf(v)}"><span class="pastilla" aria-hidden="true"></span>
      ${[["agenda", "Agenda"], ["reservas", "Reservas"], ["envivo", "En vivo"]].map(([id, t]) => `<button type="button" role="tab" data-ir="${id}" aria-selected="${id === v}"><span>${t}</span>${id === "reservas" && n ? `<em>${n}</em>` : ""}${id === "envivo" && ENV.conectada ? '<i class="vivo-dot" aria-label="cámara conectada"></i>' : ""}</button>`).join("")}</div>`;
  });
}

/* ---------- Reservas: bandeja, nueva reserva y recordatorios ---------- */
const fechaEn = k => { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + k); return d; };
const fechaTxt = d => d.toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long" });
const anticipoDe = r => Math.round(r.m / 2 / 25) * 25;
const RES = [
  { id: "r1", n: "Una familia de San Felipe", t: "Familia en exterior", tipo: "familia", k: 10, h: "9:00", origen: "Desde su página", estado: "nueva", m: 850, f: "f-familia" },
  { id: "r2", n: "Una quinceañera de Reu", t: "XV en estudio", tipo: "xv", k: 24, h: "10:30", origen: "Por WhatsApp", estado: "nueva", m: 2400, f: "f-quince" },
  { id: "r3", n: "Un papá primerizo", t: "Recién nacido", tipo: "bebe", k: 6, h: "10:30", origen: "Desde su página", estado: "anticipo", horas: 18, m: 950, f: "f-bebe" }
];
const cobroRes = r => ({ id: "res-" + r.id, n: r.n, t: r.t, que: "Anticipo", m: anticipoDe(r), f: r.f });
COBRAR.push(cobroRes(RES[2]));
function filaRes(r) {
  const cuando = `${fechaTxt(fechaEn(r.k))} · ${hora12(r.h)}`;
  let est = "", bts = "";
  if (r.estado === "nueva") {
    est = `<span class="est nueva">${ico("bell", 13)}Nueva · ${r.origen}</span>`;
    bts = btn("Confirmar y pedir anticipo", "check", "bt-1 bt-full", 'data-r="ok"') + btn(r.otras ? "Elija el día de arriba" : "Proponer otra fecha", "calendar", "bt-0 bt-full", 'data-r="otra"');
  } else if (r.estado === "propuesta") {
    est = `<span class="est pend"><i class="punto-esp"></i>Esperando que conteste</span>`;
  } else if (r.estado === "anticipo") {
    const c = COBRAR.find(x => x.id === "res-" + r.id);
    est = `<span class="est pend">${ico("clock", 13)}Falta anticipo ${Q(anticipoDe(r))} · se libera en ${r.horas} h</span>`;
    bts = (c && c.recordado ? `<span class="cob-esp"><i></i>Recordado</span>` : btn("Recordar", "send", "bt-0 bt-chico", 'data-r="rec"')) + btn("Ya pagó", "check", "bt-2 bt-chico", 'data-r="pago"');
  }
  return `<li class="res" data-rid="${r.id}">
    <div class="cob-fila"><span class="foto cob-f ${r.f}" aria-hidden="true"></span><span class="cob-t"><b>${r.t}</b><small>${r.n}</small></span><b class="cob-m">${Q(r.m)}</b></div>
    <p class="res-cuando">${ico("calendar", 15)}<span>${cuando}</span></p>
    <div class="res-est">${est}</div>
    ${r.otras ? `<div class="res-otras">${r.otras.map(k => `<button type="button" class="chip-b" data-otra="${k}">${fechaEn(k).toLocaleDateString("es-GT", { weekday: "short", day: "numeric", month: "short" })}</button>`).join("")}</div>` : ""}
    ${bts ? `<div class="res-bts${r.estado === "anticipo" ? " dos" : ""}">${bts}</div>` : ""}</li>`;
}
function pintarReservas() {
  const vis = RES.filter(r => r.estado !== "lista");
  $("#reservas").innerHTML = vis.length ? vis.map(filaRes).join("") : `<li class="cob-vacio">${ico("check", 18)}Todas las reservas tienen respuesta</li>`;
  $("#res-n").textContent = vis.length || "";
  if (SESV.includes(VISTA)) pintarSubnav(VISTA);
  pintarAvisoRes();
}
function cambiaRes(r) {
  const li = $(`.res[data-rid="${r.id}"]`);
  if (!li) return pintarReservas();
  const v = document.createElement("div"); v.innerHTML = filaRes(r);
  const n = v.firstElementChild; li.replaceWith(n); entra(n);
  pintarAvisoRes(); if (SESV.includes(VISTA)) pintarSubnav(VISTA);
}
function reservaPagada(rid) {
  const r = RES.find(x => x.id === rid); if (!r) return;
  r.estado = "lista";
  const d = hoyIdx() + r.k;
  if (d <= 6) { AG.push({ id: "ag-" + r.id, d, h: r.h, dur: "1 h", n: r.n, t: r.t, tipo: r.tipo, f: r.f, lugar: "En el estudio", a: anticipoDe(r) }); pintarAgenda(); }
  const li = $(`.res[data-rid="${rid}"]`);
  if (li && !calma) li.animate([{ opacity: 1 }, { opacity: 0, transform: "translateX(24px)" }], { duration: 320, easing: EASE, fill: "forwards" }).onfinish = pintarReservas;
  else pintarReservas();
}
function pintarAvisoRes() {
  const n = RES.filter(r => r.estado === "nueva").length, el = $("#hoy-res");
  el.hidden = !n;
  if (n) el.innerHTML = `<span class="ar-ic">${ico("calendar", 20)}</span><span><b>${n} ${n === 1 ? "reserva nueva" : "reservas nuevas"}</b><small>Esperan que les confirme.</small></span>${btn("Ver", "chev", "bt-0 bt-chico", 'data-ir="reservas"')}`;
}
/* Recordatorios automáticos */
const REC = { antes: true, camino: true, despues: true };
const REC_T = [["antes", "Un día antes", "Hora, lugar y qué traer"], ["camino", "El día, si es afuera", "«Vamos en camino» una hora antes"], ["despues", "Al entregar las fotos", "Gracias y pedir su opinión"]];
const QUE_TRAER = { retrato: "dos cambios de ropa", bebe: "pañales, una mantita y el chupón", xv: "el vestido, la corona y zapatos cómodos", primer: "el pastel y un cambio de ropa", pareja: "ropa clara y sandalias", grad: "la toga y el diploma", boda: "la lista de familiares para las fotos de grupo", familia: "ropa en tonos parecidos y un juguete para los niños" };
function msgRec(f) {
  const s = f.s;
  if (f.k === "antes") return `Hola. Le recordamos su sesión (${s.t.toLowerCase()}) ${s.d === hoyIdx() + 1 ? "mañana" : "el " + DIAS[s.d].toLowerCase()} a las ${hora12(s.h)} en ${s.lugar.replace("En el estudio", "el estudio, Bella Aurora zona 6")}. Por favor traigan ${QUE_TRAER[s.tipo] || "lo que más les guste"}. ¡Los esperamos!`;
  return `Hola. Vamos en camino a ${s.lugar}. Llegamos una hora antes para preparar todo. ¡Nos vemos pronto!`;
}
function pintarRecordatorios() {
  $("#rec-ajustes").innerHTML = REC_T.map(([k, t, d]) => `<button type="button" class="sw-fila" role="switch" aria-checked="${REC[k]}" data-rec="${k}"><span class="txt">${t}<small>${d}</small></span><span class="switch" aria-hidden="true"><i></i></span></button>`).join("");
  const hoy = hoyIdx(), prox = AG.filter(s => s.d > hoy).sort((a, b) => a.d - b.d || hNum(a.h) - hNum(b.h)), filas = [];
  prox.forEach(s => {
    if (REC.antes) filas.push({ s, k: "antes", cuando: `${cuandoTxt(s.d - 1)} · 9:00 a. m.` });
    if (REC.camino && s.luz) { const [a, m] = s.h.split(":").map(Number); filas.push({ s, k: "camino", cuando: `${cuandoTxt(s.d)} · ${hora12(`${a - 1}:${String(m).padStart(2, "0")}`)}` }); }
  });
  const lista = $("#rec-lista");
  lista._filas = filas.slice(0, 5);
  lista.innerHTML = lista._filas.length ? lista._filas.map((f, i) => `<li><span class="foto cob-f ${f.s.f}" aria-hidden="true"></span><span class="cob-t"><b>${f.s.n}</b><small>${f.k === "antes" ? "Recordatorio" : "Vamos en camino"} · ${f.cuando}</small></span>${btn("Ver", "eye", "bt-0 bt-chico", `data-ver="${i}"`)}</li>`).join("")
    : `<li class="vacio">Los recordatorios están apagados.</li>`;
}
/* Nueva reserva paso a paso */
const TIPOS_RES = [["retrato", "Retrato", 450, "f-retrato"], ["familia", "Familia", 850, "f-familia"], ["bebe", "Recién nacido", 950, "f-bebe"], ["primer", "Primer año", 650, "f-primer"], ["xv", "XV años", 2400, "f-xv"], ["pareja", "Pareja", 850, "f-pareja"], ["boda", "Boda", 5800, "f-boda"], ["grad", "Graduación", 650, "f-graduacion"]];
const HORAS_RES = ["9:00", "10:30", "14:00", "16:00", "17:00"];
const PASOS_NR = ["¿Qué sesión?", "¿Qué día?", "¿A qué hora?", "¿Para quién?", "Revisar y apartar"];
const NR = {};
const ocupado = (k, h) => { const d = hoyIdx() + k; return d <= 6 && AG.some(s => s.d === d && s.h === h); };
const anticipoNR = () => Math.round(TIPOS_RES.find(x => x[0] === NR.tipo)[2] / 2 / 25) * 25;
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const quienNR = () => NR.cli ? CLI.find(c => c.id === NR.cli).n : esc(NR.nuevo.trim());
function abrirNuevaReserva() {
  Object.assign(NR, { paso: 0, tipo: null, k: null, h: null, cli: null, nuevo: "", tel: "", link: true });
  pintarNR(0); abrirHoja($("#hoja-res")); $("#res-cuerpo").scrollTop = 0;
}
function listoNR() { return [NR.tipo, NR.k, NR.h, NR.cli || NR.nuevo.trim().length > 1, true][NR.paso]; }
function pintarNR(dir = 1) {
  const c = $("#res-cuerpo"), p = NR.paso;
  let h = `<div class="nr-pasos" aria-label="Paso ${p + 1} de 5">${PASOS_NR.map((_, i) => `<i class="${i < p ? "ok" : i === p ? "on" : ""}"></i>`).join("")}</div><h3 class="nr-t">${PASOS_NR[p]}</h3>`;
  if (p === 0) h += `<div class="nr-tipos">${TIPOS_RES.map(([id, t, m, f]) => `<button type="button" class="nr-tipo" data-tipo="${id}" aria-pressed="${NR.tipo === id}"><span class="foto ${f}" aria-hidden="true"></span><span><b>${t}</b><small>${Q(m)}</small></span></button>`).join("")}</div>`;
  if (p === 1) h += `<div class="nr-dias">${Array.from({ length: 14 }, (_, i) => i + 1).map(k => {
    const d = fechaEn(k), libres = HORAS_RES.filter(x => !ocupado(k, x)).length;
    return `<button type="button" class="nr-dia" data-k="${k}" aria-pressed="${NR.k === k}"${libres ? "" : " disabled"}><small>${d.toLocaleDateString("es-GT", { weekday: "short" }).replace(".", "")}</small><b>${d.getDate()}</b><span>${libres ? libres + " libres" : "Lleno"}</span></button>`;
  }).join("")}</div>`;
  if (p === 2) h += `<p class="nr-sub">${fechaTxt(fechaEn(NR.k))}</p><div class="nr-horas">${HORAS_RES.map(x => `<button type="button" class="nr-hora" data-h="${x}" aria-pressed="${NR.h === x}"${ocupado(NR.k, x) ? " disabled" : ""}>${hora12(x)}${ocupado(NR.k, x) ? "<small>Ocupado</small>" : ""}</button>`).join("")}</div>`;
  if (p === 3) h += `<div class="nr-clis">${CLI.slice().sort((a, b) => a.n.localeCompare(b.n, "es")).map(cl => `<button type="button" class="nr-cli" data-cli="${cl.id}" aria-pressed="${NR.cli === cl.id}"><span class="foto av ${cl.hist[0][3]}" aria-hidden="true"></span><b>${cl.n}</b></button>`).join("")}</div>
    <p class="nr-o">o un cliente nuevo</p>
    <label class="nr-campo"><span>Nombre</span><input id="nr-nom" type="text" autocomplete="off" value="${esc(NR.nuevo)}" placeholder="Ej.: Familia del mercado"></label>
    <label class="nr-campo"><span>WhatsApp</span><input id="nr-tel" type="tel" inputmode="tel" autocomplete="off" value="${esc(NR.tel)}" placeholder="5555 5555"></label>`;
  if (p === 4) {
    const t = TIPOS_RES.find(x => x[0] === NR.tipo);
    h += `<div class="nr-res"><span class="foto ${t[3]}" aria-hidden="true"></span><div><b>${t[1]}</b><small>${quienNR()}</small></div></div>
      <ul class="grupo-ios datos"><li>${ico("calendar", 20)}<span>Día<small>${fechaTxt(fechaEn(NR.k))}</small></span></li><li>${ico("clock", 20)}<span>Hora<small>${hora12(NR.h)}</small></span></li><li>${ico("cash", 20)}<span>Anticipo para apartar<small>${Q(anticipoNR())} de ${Q(t[2])}</small></span></li></ul>
      <div class="grupo-ios nr-sw"><button type="button" class="sw-fila" role="switch" aria-checked="${NR.link}" id="nr-link"><span class="txt">Mandar el enlace de pago por WhatsApp<small>Si no paga en 24 h, la fecha se libera sola</small></span><span class="switch" aria-hidden="true"><i></i></span></button></div>`;
  }
  h += `<div class="nr-nav">${p ? btn("Atrás", "back", "bt-0", 'data-nr="-1"') : ""}${btn(p === 4 ? "Apartar fecha" : "Siguiente", p === 4 ? "check" : "arrow", "bt-1", `data-nr="1"${listoNR() ? "" : " disabled"}`)}</div>`;
  c.innerHTML = h;
  if (!calma) $$(":scope > :not(.nr-pasos)", c).forEach((el, i) => el.animate([{ opacity: 0, transform: `translateX(${dir * 18}px)` }, { opacity: 1, transform: "none" }], { duration: 300, delay: i * 30, easing: EASE, fill: "backwards" }));
}
function marcar(sel, attr, val) { $$(sel, $("#res-cuerpo")).forEach(b => b.setAttribute("aria-pressed", b.dataset[attr] === String(val))); const n = $('[data-nr="1"]', $("#res-cuerpo")); if (n) n.disabled = !listoNR(); }
function avanzaNR() { setTimeout(() => { if (listoNR() && NR.paso < 4) { NR.paso++; pintarNR(1); $("#res-cuerpo").scrollTop = 0; } }, calma ? 0 : 260); }
async function apartarNR(b) {
  if (!(await accion(b, { espera: "Apartando…", listo: "¡Apartada!" }))) return;
  const t = TIPOS_RES.find(x => x[0] === NR.tipo), an = anticipoNR(), quien = quienNR(), id = "nr" + Date.now(), d = hoyIdx() + NR.k, k = NR.k, hh = NR.h, link = NR.link;
  COBRAR.push({ id, n: quien, t: t[1], que: "Anticipo", m: an, f: t[3] });
  if (d <= 6) AG.push({ id: "ag" + id, d, h: hh, dur: "1 h", n: quien, t: t[1], tipo: NR.tipo, f: t[3], lugar: "En el estudio", a: 0, cob: id });
  pintarCobrar(); pintarCifras(); pintarAgenda();
  alFeed("calendar", `Fecha apartada: <b>${quien}</b> · ${t[1]} · ${fechaTxt(fechaEn(k))}`);
  setTimeout(() => {
    cerrarHoja($("#hoja-res"));
    if (link) simularWA({ texto: `Hola. Le escribe Foto González Studio. Le apartamos su sesión (${t[1].toLowerCase()}) el ${fechaTxt(fechaEn(k))} a las ${hora12(hh)}. Para dejarla segura, el anticipo es de ${Q(an)}: fotogonzalezstudio.com/pagar`, respuesta: "¡Gracias! Ahorita lo pago.", nota: "" });
    aviso(`Fecha apartada · <b>${t[1]}</b>`, { ic: "calendar", sub: `${quien} · falta anticipo ${Q(an)}` });
  }, 700);
}
function iniciarReservas() {
  pintarAvisoRes();
  $("#res-nueva").addEventListener("click", abrirNuevaReserva);
  $("#reservas").addEventListener("click", async e => {
    const li = e.target.closest(".res"); if (!li) return;
    const r = RES.find(x => x.id === li.dataset.rid), b = e.target.closest("[data-r]"), o = e.target.closest("[data-otra]");
    if (o) {
      r.k = Number(o.dataset.otra); r.otras = null; r.estado = "propuesta";
      simularWA({ texto: `Hola. Gracias por escribirnos. Para su sesión (${r.t.toLowerCase()}) tenemos libre el ${fechaTxt(fechaEn(r.k))} a las ${hora12(r.h)}. ¿Le queda bien?`, respuesta: "¡Sí, perfecto! Apártenmelo, porfa.", nota: "" });
      alFeed("calendar", `Otra fecha propuesta a <b>${r.n}</b>`);
      cambiaRes(r);
      setTimeout(() => {
        r.estado = "anticipo"; r.horas = 24; COBRAR.push(cobroRes(r)); pintarCobrar(); pintarCifras(); cambiaRes(r);
        aviso(`Aceptó la fecha · <b>${r.n}</b>`, { ic: "calendar", sub: "Falta el anticipo de " + Q(anticipoDe(r)) });
      }, 4500);
      return;
    }
    if (!b) return;
    const k = b.dataset.r;
    if (k === "otra") { if (!r.otras) { r.otras = [r.k + 1, r.k + 3, r.k + 7]; cambiaRes(r); } return; }
    if (k === "ok") {
      if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Confirmada" }))) return;
      simularWA({ texto: `Hola. ¡Su fecha está libre! ${r.t} el ${fechaTxt(fechaEn(r.k))} a las ${hora12(r.h)}. Para apartarla, el anticipo es de ${Q(anticipoDe(r))}. Puede pagarlo aquí: fotogonzalezstudio.com/pagar`, respuesta: "¡Gracias! Ahorita lo pago.", nota: "" });
      r.estado = "anticipo"; r.horas = 24; r.otras = null; COBRAR.push(cobroRes(r)); pintarCobrar(); pintarCifras();
      alFeed("check", `Reserva confirmada a <b>${r.n}</b> · se pidió el anticipo`);
      setTimeout(() => cambiaRes(r), 800);
      return;
    }
    if (k === "rec") { const c = COBRAR.find(x => x.id === "res-" + r.id); if (c && !c.recordado) { await recordarPago(c, b); setTimeout(() => cambiaRes(r), 900); } return; }
    if (k === "pago" && (await accion(b, { espera: "Guardando…", listo: "Pagado", ms: 420 }))) setTimeout(() => pagar("res-" + r.id), 380);
  });
  $("#rec-ajustes").addEventListener("click", e => {
    const b = e.target.closest("[data-rec]"); if (!b) return;
    REC[b.dataset.rec] = !REC[b.dataset.rec]; b.setAttribute("aria-checked", REC[b.dataset.rec]);
    setTimeout(() => { pintarRecordatorios(); $$("#rec-lista li").forEach((li, i) => entra(li, i * 30)); }, 160);
  });
  $("#rec-lista").addEventListener("click", e => { const b = e.target.closest("[data-ver]"); if (b) simularWA({ texto: msgRec($("#rec-lista")._filas[Number(b.dataset.ver)]), nota: "" }); });
  const c = $("#res-cuerpo");
  c.addEventListener("click", e => {
    const t = e.target.closest("[data-tipo]"), d = e.target.closest("[data-k]"), h = e.target.closest("[data-h]"), cl = e.target.closest("[data-cli]"), nv = e.target.closest("[data-nr]");
    if (t) { NR.tipo = t.dataset.tipo; marcar(".nr-tipo", "tipo", NR.tipo); return avanzaNR(); }
    if (d && !d.disabled) { NR.k = Number(d.dataset.k); NR.h = null; marcar(".nr-dia", "k", NR.k); return avanzaNR(); }
    if (h && !h.disabled) { NR.h = h.dataset.h; marcar(".nr-hora", "h", NR.h); return avanzaNR(); }
    if (cl) { NR.cli = cl.dataset.cli; NR.nuevo = ""; $("#nr-nom").value = ""; marcar(".nr-cli", "cli", NR.cli); return avanzaNR(); }
    if (e.target.closest("#nr-link")) { NR.link = !NR.link; $("#nr-link").setAttribute("aria-checked", NR.link); return; }
    if (nv && !nv.disabled) {
      if (nv.dataset.nr === "-1") { NR.paso--; pintarNR(-1); return; }
      if (NR.paso === 4) return apartarNR(nv);
      NR.paso++; pintarNR(1); c.scrollTop = 0;
    }
  });
  c.addEventListener("input", e => {
    if (e.target.id === "nr-nom") { NR.nuevo = e.target.value; if (NR.nuevo) { NR.cli = null; marcar(".nr-cli", "cli", ""); } else marcar(".nr-cli", "cli", NR.cli); }
    if (e.target.id === "nr-tel") NR.tel = e.target.value;
  });
}

/* ---------- Cámara en vivo: las fotos llegan solas ---------- */
const FOTOS_TIPO = { pareja: ["f-pareja", "f-anillo", "f-boda"], boda: ["f-boda", "f-anillo", "f-pareja"], xv: ["f-xv", "f-quince", "f-glam"], bebe: ["f-bebe", "f-pastel", "f-producto"], primer: ["f-primer", "f-pastel"], familia: ["f-familia", "f-camisola"], retrato: ["f-retrato", "f-glam", "f-fuerza"], grad: ["f-graduacion", "f-maracas", "f-cacao", "f-maestra", "f-paisaje"] };
const ENV = { ses: null, conectada: false, pausa: false, fotos: [], n: 0, t: null, fam: false, actual: null };
const sesEnVivo = () => AG.find(s => s.id === ENV.ses) || proxima();
function irEnVivo(id) {
  if (ENV.ses && ENV.ses !== id && ENV.fotos.length) { ENV.fotos = []; }
  ENV.ses = id; irVista("envivo");
  if (VISTA === "envivo") pintarEnVivo();
}
const vivasEV = () => ENV.fotos.filter(f => !f.borrada);
function tileEV(f) {
  return `<li class="ev-ft${f.guardada ? " guardada" : ""}" data-f="${f.id}"><span class="foto ${f.c}" style="background-position:${f.pos}" aria-hidden="true"></span>
    <span class="ev-num">#${f.num} · ${f.h}</span><span class="ev-nube${f.nube ? " ok" : ""}" title="${f.nube ? "Guardada en el disco y la nube" : "Guardando…"}">${f.nube ? ico("cloud", 13) : '<span class="giro"></span>'}</span>
    <div class="ev-acc"><button type="button" class="ev-b ev-g" aria-pressed="${!!f.guardada}" aria-label="Guardar la foto ${f.num}">${ico("heart", 18)}</button><button type="button" class="ev-b ev-x" aria-label="Borrar la foto ${f.num}">${ico("borrar", 18)}</button></div></li>`;
}
function cifrasEV() {
  const el = $("#ev-cifras");
  if (!ENV.conectada && !ENV.fotos.length) { el.innerHTML = ""; return; }
  const datos = [["Llegaron", ENV.fotos.length], ["Guardadas", ENV.fotos.filter(f => f.guardada && !f.borrada).length], ["Borradas", ENV.fotos.filter(f => f.borrada).length]];
  if (el.children.length === 3) datos.forEach(([, n], i) => { const b = $("b", el.children[i]); if (b.textContent !== String(n)) { b.textContent = n; if (!calma) b.animate([{ transform: "translateY(4px)", opacity: .4 }, { transform: "none", opacity: 1 }], { duration: 240, easing: EASE }); } });
  else el.innerHTML = datos.map(([t, n]) => `<div><small>${t}</small><b>${n}</b></div>`).join("");
}
function pintarEnVivo() {
  const s = sesEnVivo(); ENV.ses = s.id;
  pinta($("#ev-cam"), ENV.conectada ? `
    <div class="ev-est on"><span class="ev-dot"></span><span><b>${ENV.pausa ? "En pausa" : "Cámara conectada"}</b><small>Cámara principal · Wi-Fi</small></span></div>
    <div class="ev-ses"><span class="foto ${s.f}" aria-hidden="true"></span><span><b>${s.t}</b><small>${s.n}</small></span></div>
    <div class="ev-chips"><span class="chip">${ico("zap", 13)}Batería 82 %</span><span class="chip">${ico("sd", 13)}Tarjeta A · 61 GB libres</span><span class="chip vivo">${ico("escudo", 13)}Se guarda solo en disco y nube</span></div>`
    : `<div class="ev-est"><span class="ev-dot"></span><span><b>Cámara sin conectar</b><small>Encienda la cámara y su Wi-Fi</small></span></div>
    <div class="ev-ses"><span class="foto ${s.f}" aria-hidden="true"></span><span><b>${s.t}</b><small>${s.n} · ${cuandoTxt(s.d)} ${hora12(s.h)}</small></span></div>
    ${btn("Conectar cámara", "camara", "bt-1 bt-full", 'id="ev-con"')}`);
  cifrasEV();
  $("#ev-bts").innerHTML = ENV.conectada ? btn(ENV.pausa ? "Seguir" : "Pausar", ENV.pausa ? "play" : "pausa", "bt-0", 'data-ev="pausa"') + btn("Pantalla para la familia", "eye", "bt-2", 'data-ev="fam"') + btn("Terminar y mandar a su galería", "send", "bt-1", 'data-ev="fin"') : "";
  const vis = vivasEV();
  $("#ev-grid").innerHTML = vis.length ? vis.slice().reverse().map(tileEV).join("") : ENV.conectada ? `<li class="ev-vacio">${ico("camara", 28)}<span>Tome la primera foto: aparece aquí en segundos.</span></li>` : "";
}
function siguienteEV(ms) { clearTimeout(ENV.t); ENV.t = setTimeout(llegaFoto, ms ?? 2600 + Math.random() * 1800); }
function llegaFoto() {
  if (!ENV.conectada || ENV.pausa) return;
  if (document.hidden) return siguienteEV();
  const s = sesEnVivo(), lista = FOTOS_TIPO[s.tipo] || ["f-familia"];
  const f = { id: "ev" + (++ENV.n), num: String(1200 + ENV.n).padStart(4, "0"), c: azar(lista), pos: `${20 + Math.round(Math.random() * 60)}% ${15 + Math.round(Math.random() * 45)}%`, h: hora(), guardada: false, borrada: false, nube: false };
  ENV.fotos.push(f);
  if (VISTA === "envivo") {
    const g = $("#ev-grid"); $(".ev-vacio", g)?.remove();
    const v = document.createElement("div"); v.innerHTML = tileEV(f); const li = v.firstElementChild; g.prepend(li);
    if (!calma) li.animate([{ opacity: 0, transform: "scale(0.95)" }, { opacity: 1, transform: "none" }], { duration: 380, easing: EASE });
  }
  cifrasEV(); pantallaFoto(f);
  setTimeout(() => { f.nube = true; const n = $(`.ev-ft[data-f="${f.id}"] .ev-nube`); if (n) { n.classList.add("ok"); n.innerHTML = ico("cloud", 13); n.title = "Guardada en el disco y la nube"; } }, 1200 + Math.random() * 900);
  if (ENV.fotos.length < 40) siguienteEV();
}
let desT = null, desFn = null;
function deshacer(txt, fn) {
  const d = $("#deshacer"); $("#deshacer-t").textContent = txt; desFn = fn;
  d.classList.add("ver"); clearTimeout(desT); desT = setTimeout(() => { d.classList.remove("ver"); desFn = null; }, 5000);
}
function guardarEV(f, on) {
  f.guardada = on;
  const li = $(`.ev-ft[data-f="${f.id}"]`);
  if (li) { li.classList.toggle("guardada", on); const g = $(".ev-g", li); g.setAttribute("aria-pressed", on); if (on && !calma) g.animate([{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }], { duration: 300, easing: EASE }); }
  if (ENV.actual === f) $("#pf-amo").setAttribute("aria-pressed", on);
  cifrasEV(); tiraPF();
}
function iniciarEnVivo() {
  $("#ev-cam").addEventListener("click", async e => {
    const b = e.target.closest("#ev-con"); if (!b) return;
    if (!(await accion(b, { espera: "Buscando la cámara…", listo: "Conectada", ms: 1500 }))) return;
    ENV.conectada = true; ENV.pausa = false;
    setTimeout(() => { pintarEnVivo(); pintarSubnav("envivo"); aviso("Cámara conectada · <b>las fotos llegan solas</b>", { ic: "camara", sub: "Cada foto se guarda en el disco y en la nube" }); }, 500);
    siguienteEV(1800);
  });
  $("#ev-bts").addEventListener("click", async e => {
    const b = e.target.closest("[data-ev]"); if (!b) return;
    const k = b.dataset.ev;
    if (k === "pausa") { ENV.pausa = !ENV.pausa; if (ENV.pausa) clearTimeout(ENV.t); else siguienteEV(900); pintarEnVivo(); return; }
    if (k === "fam") return abrirPantalla();
    if (k === "fin") {
      const s = sesEnVivo(), g = ENV.fotos.filter(f => f.guardada && !f.borrada).length, tot = vivasEV().length;
      if (!(await accion(b, { espera: "Mandando…", listo: "Enviadas" }))) return;
      clearTimeout(ENV.t); ENV.conectada = false;
      simularWA({ texto: `Hola. ¡Gracias por la sesión de hoy! Ya les dejamos un primer vistazo de ${g || tot} fotos en su galería privada. Las demás se las mandamos editadas esta semana.`, respuesta: "¡Qué emoción! Ya las estamos viendo.", nota: "" });
      alFeed("images", `<b>${s.n}</b>: ${tot} fotos de hoy en su galería · ${g} favoritas`);
      aviso(`Fotos de hoy en su galería · <b>${tot}</b>`, { ic: "images", sub: `${s.n} · ${g} marcadas como favoritas` });
      setTimeout(() => { ENV.fotos = []; pintarEnVivo(); pintarSubnav("envivo"); }, 900);
    }
  });
  $("#ev-grid").addEventListener("click", e => {
    const li = e.target.closest(".ev-ft"); if (!li) return;
    const f = ENV.fotos.find(x => x.id === li.dataset.f);
    if (e.target.closest(".ev-g")) return guardarEV(f, !f.guardada);
    if (e.target.closest(".ev-x")) {
      f.borrada = true; cifrasEV(); tiraPF();
      const fin = () => { li.remove(); if (!vivasEV().length) pintarEnVivo(); };
      if (calma) fin(); else li.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(0.95)" }], { duration: 220, easing: EASE, fill: "forwards" }).onfinish = fin;
      deshacer(`Foto #${f.num} borrada`, () => { f.borrada = false; pintarEnVivo(); tiraPF(); });
    }
  });
  $("#deshacer-b").addEventListener("click", () => { if (desFn) desFn(); desFn = null; $("#deshacer").classList.remove("ver"); });
  $("#pf-salir").addEventListener("click", cerrarPantalla);
  $("#pf-amo").addEventListener("click", () => { const f = ENV.actual; if (f) guardarEV(f, !f.guardada); });
  $("#pf-tira").addEventListener("click", e => { const b = e.target.closest("[data-pf]"); if (b) pantallaFoto(ENV.fotos.find(x => x.id === b.dataset.pf), true); });
}
/* Pantalla grande para la familia (tele o tablet) */
let pfLado = 0;
function abrirPantalla() {
  const p = $("#pantalla-fam"), s = sesEnVivo();
  $("#pf-ses").textContent = `${s.t} · ${s.n}`;
  $("#pf-qr").hidden = !INV[s.id];
  if (INV[s.id]) cargarQR().then(() => { $("#pf-qr-svg").innerHTML = svgQR(); }).catch(() => {});
  ENV.fam = true; p.hidden = false; requestAnimationFrame(() => p.classList.add("ver"));
  document.documentElement.classList.add("con-hoja");
  const ult = vivasEV().pop(); if (ult) pantallaFoto(ult, true); else $("#pf-vacio").hidden = false;
  tiraPF();
  setTimeout(() => $("#pf-salir").focus({ preventScroll: true }), 80);
}
function cerrarPantalla() {
  const p = $("#pantalla-fam"); ENV.fam = false;
  p.classList.remove("ver"); setTimeout(() => { if (!ENV.fam) p.hidden = true; }, 320);
  bloquear();
  $('[data-ev="fam"]')?.focus({ preventScroll: true });
}
function pantallaFoto(f, manual) {
  if (!ENV.fam || !f) return;
  ENV.actual = f;
  const capas = [$("#pf-a"), $("#pf-b")];
  pfLado ^= 1;
  const nueva = capas[pfLado], vieja = capas[pfLado ^ 1];
  nueva.className = `foto pf-capa ${f.c}`; nueva.style.backgroundPosition = f.pos;
  requestAnimationFrame(() => { nueva.classList.add("on"); vieja.classList.remove("on"); });
  $("#pf-vacio").hidden = true;
  $("#pf-amo").setAttribute("aria-pressed", !!f.guardada);
  tiraPF();
}
function tiraPF() {
  if (!ENV.fam) return;
  $("#pf-tira").innerHTML = vivasEV().slice(-10).reverse().map(f => `<button type="button" data-pf="${f.id}" class="${ENV.actual === f ? "on" : ""}${f.guardada ? " amo" : ""}" aria-label="Ver la foto ${f.num}"><span class="foto ${f.c}" style="background-position:${f.pos}"></span></button>`).join("");
}

/* ---------- Hojas que suben desde abajo (como en el iPhone) ---------- */
const abiertas = new Set();
function velo(ver) {
  const v = $("#velo");
  if (ver) { v.hidden = false; requestAnimationFrame(() => v.classList.add("ver")); }
  else { v.classList.remove("ver"); setTimeout(() => { if (!v.classList.contains("ver")) v.hidden = true; }, 300); }
}
function bloquear() {
  const algo = abiertas.size > 0 || $("#cliente").classList.contains("abierto");
  document.documentElement.classList.toggle("con-hoja", algo || ENV.fam);
  velo(algo);
}
function abrirHoja(h) {
  if (abiertas.has(h)) return;
  h._foco = document.activeElement;
  h.inert = false; h.classList.add("abierta"); abiertas.add(h);
  bloquear();
  setTimeout(() => $(".hoja-listo", h).focus({ preventScroll: true }), 60);
}
function cerrarHoja(h, sinFoco = false) {
  if (!abiertas.has(h)) return;
  h.classList.remove("abierta"); h.inert = true; abiertas.delete(h);
  bloquear();
  if (!sinFoco && h._foco && document.contains(h._foco)) h._foco.focus({ preventScroll: true });
}
function arrastre(h) {
  const top = $(".hoja-top", h), panel = $(".hoja-panel", h);
  let y0 = null, dy = 0, t0 = 0;
  top.addEventListener("pointerdown", e => {
    if (e.target.closest("button") || !enCel()) return;
    y0 = e.clientY; dy = 0; t0 = performance.now(); panel.style.transition = "none"; top.setPointerCapture(e.pointerId);
  });
  top.addEventListener("pointermove", e => { if (y0 === null) return; dy = Math.max(0, e.clientY - y0); panel.style.transform = `translateY(${dy}px)`; });
  const fin = () => {
    if (y0 === null) return;
    const v = dy / Math.max(1, performance.now() - t0); y0 = null;
    panel.style.transition = "";
    if (dy > 110 || v > .6) cerrarHoja(h);
    panel.style.transform = "";
  };
  top.addEventListener("pointerup", fin); top.addEventListener("pointercancel", fin);
}
function iniciarHojas() {
  $$(".hoja").forEach(h => { $(".hoja-listo", h).addEventListener("click", () => cerrarHoja(h)); arrastre(h); });
  $("#velo").addEventListener("click", () => { [...abiertas].forEach(h => cerrarHoja(h)); cerrarCliente(); });
  addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!$("#llamada").hidden) return colgar();
    if (ENV.fam) return cerrarPantalla();
    const ult = [...abiertas].pop(); if (ult) return cerrarHoja(ult);
    cerrarImp(); cerrarCliente();
  });
  $("#ll-colgar").addEventListener("click", colgar);
}

/* ---------- Celular de la familia en pantallas medianas ---------- */
function abrirCliente() {
  const c = $("#cliente");
  c.classList.add("abierto"); c.inert = false; bloquear();
  $("#ver-cliente").setAttribute("aria-expanded", "true");
}
function cerrarCliente() {
  const c = $("#cliente");
  if (!c.classList.contains("abierto")) return;
  c.classList.remove("abierto"); if (modoHoja()) c.inert = true;
  bloquear();
  $("#ver-cliente").setAttribute("aria-expanded", "false");
}
function ajustarCliente() { const c = $("#cliente"); if (!modoHoja()) { c.inert = false; cerrarCliente(); } else if (!c.classList.contains("abierto")) c.inert = true; }

/* ---------- Pestañas ---------- */
const MAS = ["ofertas", "compartir", "pagina", "fotos", "respaldo"];
const SESV = ["agenda", "reservas", "envivo"];
const POS = {};
let VISTA = "hoy";
function irVista(v) {
  if (v === "mas" && !enCel()) v = "ofertas";
  if (v === VISTA) { scrollTo({ top: 0, behavior: calma ? "auto" : "smooth" }); return; }
  POS[VISTA] = scrollY;
  VISTA = v;
  $$(".vistas button").forEach(b => {
    const on = b.dataset.v === v || (b.dataset.v === "mas" && MAS.includes(v)) || (b.dataset.v === "agenda" && SESV.includes(v));
    b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
  });
  $$(".vista").forEach(s => s.hidden = s.id !== "v-" + v);
  $("#barra-sup-t").textContent = $("#v-" + v).dataset.titulo;
  if (v === "pagina") cargarWeb();
  if (v === "agenda") pintarAgenda();
  if (SESV.includes(v)) pintarSubnav(v);
  if (v === "reservas") { pintarReservas(); pintarRecordatorios(); }
  if (v === "envivo") pintarEnVivo();
  if (v === "compartir") pintarQR();
  if (v === "clientes") colocarFicha();
  scrollTo(0, MAS.includes(v) || SESV.includes(v) ? 0 : (POS[v] || 0));
  barraSup();
  if (!calma) $$("#v-" + v + " > *").forEach((el, i) => el.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 300, delay: Math.min(i, 6) * 40, easing: EASE, fill: "backwards" }));
}
function pestanas() {
  const bs = $$(".vistas button");
  bs.forEach(b => {
    b.addEventListener("click", () => { irVista(b.dataset.v); if (!calma) $(".ti", b).animate([{ transform: "scale(0.86)" }, { transform: "scale(1)" }], { duration: 260, easing: EASE }); });
    b.addEventListener("keydown", e => {
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!d) return; e.preventDefault();
      const vis = bs.filter(x => x.offsetParent), i = vis.indexOf(b), n = vis[(i + d + vis.length) % vis.length];
      n.focus(); irVista(n.dataset.v);
    });
  });
  document.addEventListener("click", e => { const b = e.target.closest("[data-ir]"); if (b) irVista(b.dataset.ir); });
}
function pintarMasCuenta() {
  const n = sinCopia() + webN, c = $("#cuenta-mas");
  c.textContent = n; c.classList.toggle("cero", !n);
}
function barraSup() { $("#barra-sup").classList.toggle("ver", scrollY > 64); }
window.antesDePalanca = id => {
  [...abiertas].forEach(h => cerrarHoja(h, true));
  if (id === "galeria") { if (modoHoja()) abrirCliente(); return; }
  if (modoHoja()) cerrarCliente();
  irVista(VISTA_DE[id]);
  const mp = { fechas: "fechas", cotizacion: "cobros", saldo: "cobros", resena: "resenas" }[id];
  if (mp) elegirMotivo(mp, true);
  if ((id === "proxima" || id === "referidos") && fichaEnHoja()) abrirHoja($("#hoja-cli"));
};

/* ---------- Su página dentro del sistema ---------- */
function cargarWeb() { const f = $("#web-frame"); if (!f.src) f.src = f.dataset.src; }
let webN = 0;
function llegoDeLaWeb(html, ic) {
  const ul = $("#llega"); $(".vacio", ul)?.remove();
  const li = document.createElement("li");
  li.innerHTML = `<span class="ic">${ico(ic, 16)}</span><span>${html}</span><time>${hora()}</time>`;
  ul.prepend(li);
  webN++; const c = $("#cuenta-web"); c.textContent = webN; c.classList.remove("cero");
  $("#mas-web").textContent = `${webN} ${webN === 1 ? "aviso nuevo" : "avisos nuevos"}`;
  pintarMasCuenta();
}
addEventListener("message", e => {
  const m = e.data;
  if (!m || typeof m !== "object" || !m.fgs) return;
  if (e.source !== $("#web-frame")?.contentWindow) return;
  if (m.fgs === "reserva") {
    const d = new Date(m.iso + "T12:00:00"), dia = Math.round((d - lunes()) / 864e5);
    const txt = `${m.paquete} · ${m.fecha} a las ${m.hora}`, id = "w" + Date.now();
    COBRAR.push({ id, n: "Reserva desde la página", t: m.paquete, que: "Anticipo", m: m.anticipo, f: "f-familia" });
    if (dia >= 0 && dia <= 6) AG.push({ id: "ag" + id, d: dia, h: m.hora, dur: "1 h", n: "Reserva desde la página", t: m.paquete, tipo: "familia", f: "f-familia", lugar: "En el estudio", a: 0, cob: id });
    pintarCobrar(); pintarCifras(); pintarAgenda();
    alFeed("calendar", `<b>Reserva desde su página</b> · ${txt} · falta anticipo ${Q(m.anticipo)}`);
    llegoDeLaWeb(`<b>Apartó fecha:</b> ${txt}<br><small>Falta el anticipo de ${Q(m.anticipo)}. Ya está en «Por cobrar».</small>`, "calendar");
    aviso(`Reserva nueva · <b>${m.fecha}</b>`, { ic: "calendar", sub: `${m.paquete} · falta anticipo ${Q(m.anticipo)}` });
  } else if (m.fgs === "contacto") {
    alFeed("users", `<b>Contacto nuevo</b> desde la página · ${m.que}`);
    llegoDeLaWeb(`<b>Contacto nuevo:</b> ${m.que}`, "users");
    aviso("Contacto nuevo · <b>desde su página</b>", { ic: "users", sub: m.que });
  } else if (m.fgs === "consulta") {
    alFeed("chat", `<b>Consulta nueva</b> desde la página · ${m.que}`);
    llegoDeLaWeb(`<b>Consulta:</b> ${m.que}`, "chat");
    aviso("Consulta nueva · <b>desde su página</b>", { ic: "chat", sub: m.que });
  }
});

/* ---------- El estudio en vivo ---------- */
const NOMBRES = ["Una familia de San Felipe", "Una quinceañera", "Una familia de Champerico", "Una pareja", "Una familia de Bella Aurora", "Una clienta nueva", "Una familia de Reu", "Un papá primerizo", "Una graduanda"];
const TIPOS = [["XV con video", 2900], ["XV en estudio", 2400], ["Familia en exterior", 850], ["Recién nacido", 950], ["Preboda en Champerico", 1200], ["Graduación", 650], ["Bautizo con video", 1500]];
const RESENAS = ["«Las fotos de los XV quedaron preciosas.»", "«Muy pacientes con los niños.»", "«Elegimos las fotos desde el celular. Súper fácil.»", "«El video de la boda nos hizo llorar otra vez.»"];
let nId = 0;
function evento() {
  if (document.hidden || abiertas.size || ENV.fam) return;
  const r = Math.random();
  if (r < .32) {
    const n = azar(NOMBRES), [t, m] = azar(TIPOS), a = Math.round(m / 2 / 25) * 25;
    COBRAR.push({ id: "n" + (++nId), n, t, que: "Anticipo", m: a, f: azar(["f-familia", "f-xv", "f-bebe", "f-pareja"]) });
    pintarCobrar(); pintarCifras(); entra($("#cobrar").lastElementChild);
    alFeed("calendar", `<b>${n}</b> apartó fecha · ${t} · falta anticipo ${Q(a)}`);
    aviso(`Fecha apartada · <b>${n}</b>`, { ic: "calendar", sub: `${t} · falta anticipo ${Q(a)}` });
  } else if (r < .52) {
    const c = COBRAR.filter(x => !x.pagado && x.id !== "c-castillo");
    if (!c.length) return;
    pagar(azar(c).id, { auto: true });
  } else if (r < .8) {
    const n = azar(NOMBRES), k = 2 + Math.floor(Math.random() * 5), m = k * P_EXTRA;
    venta(m, { extra: true });
    alFeed("images", `<b>${n}</b> compró ${k} fotos extra · ${Q(m)}`);
    aviso(`Fotos extra vendidas · <b>${Q(m)}</b>`, { ic: "images", sub: `${n} · ${k} fotos` });
  } else {
    const n = azar(NOMBRES);
    alFeed("star", `Opinión de 5 estrellas de <b>${n}</b>: ${azar(RESENAS)}`);
    aviso("Opinión nueva de <b>5 estrellas</b>", { ic: "star", sub: n + " · en Google" });
  }
}
function ciclo() { evento(); setTimeout(ciclo, 12000 + Math.random() * 6000); }

/* ---------- Arranque ---------- */
$("#fecha").textContent = new Date().toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long" });
{ const hh = new Date().getHours(); $("#saludo").textContent = hh < 12 ? "Buenos días." : hh < 19 ? "Buenas tardes." : "Buenas noches."; }
$("#k-mes-lbl").textContent = "Ganado en " + MES;
pintarIconos();
iniciarHojas();
iniciarCobrar();
pintarCifras();
pintarOport();
iniciarAgenda();
iniciarSesionHoja();
iniciarClientes();
pintarGaleria();
iniciarGalerias();
pintarCampana();
iniciarCompartir();
iniciarRespaldo();
iniciarReservas();
iniciarEnVivo();
alFeed("eye", "<b>La familia del parque</b> abrió sus fotos");
alFeed("cash", "Anticipo de <b>Colegio La Asunción</b> · Q 2,400.00");
$$("#feed li").forEach(li => li.classList.remove("nuevo"));
pestanas();
$("#ver-cliente").addEventListener("click", abrirCliente);
$("#cerrar-cliente").addEventListener("click", cerrarCliente);
matchMedia("(max-width: 1279px)").addEventListener("change", ajustarCliente);
ajustarCliente();
new ResizeObserver(() => { if (VISTA === "clientes") colocarFicha(); }).observe($("#principal"));
addEventListener("scroll", barraSup, { passive: true });

cintaDemo({ sistema: "Sistema completo", palancas: PALANCAS });

if (!calma) {
  $$("#v-hoy .titulo-v, #v-hoy .cifra, #prox-ses, #oport .op").forEach((el, i) => el.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 440, delay: 60 + Math.min(i, 8) * 45, easing: EASE, fill: "backwards" }));
  $(".cel").animate([{ opacity: 0, transform: "translateY(10px) scale(0.99)" }, { opacity: 1, transform: "none" }], { duration: 600, delay: 200, easing: EASE, fill: "backwards" });
}
setTimeout(ciclo, 14000);
