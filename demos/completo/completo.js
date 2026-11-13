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
  tarjeta: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
  banco: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  recibo: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>',
  subir: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  celu: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  tableta: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 18h.01"/>',
  compu: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  copiar: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
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
const enCel = () => matchMedia("(max-width: 743px)").matches;
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
  odometro($("#cobrado-q"), S.cobradoHoy);
  if (typeof tablero === "function") tablero();
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
function feedLocal(ic, html, clave = "", rol = "") {
  const feed = $("#feed"), prev = feed.firstElementChild, quien = rol ? feedLocalDe(rol) : "";
  if (clave && prev && prev.dataset.clave === clave) {
    $(".txt", prev).innerHTML = html; $("time", prev).textContent = hora();
    prev.classList.add("nuevo"); clearTimeout(prev._t); prev._t = setTimeout(() => prev.classList.remove("nuevo"), 1600);
    return;
  }
  const li = document.createElement("li");
  li.className = "nuevo"; if (clave) li.dataset.clave = clave;
  li.innerHTML = `<span class="ico">${ico(ic, 15)}</span><span class="txt">${html}</span><span class="f-pie">${quien}<time>${hora()}</time></span>`;
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
  $("#op-total").textContent = pend.length ? `${pend.length} · ${Q(total)}` : "Todo enviado"; pendHoy();
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
  simularWA({ para: o.q, texto: o.wa, respuesta: o.resp, nota: "" });
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
  { id: "c-qmarzo", n: "Quinceañera de marzo", t: "XV con video", que: "Anticipo", m: 600, total: 2900, f: "f-quince" },
  { id: "c-castillo", n: "Novios de octubre", t: "Boda", que: "Saldo", m: 1200, f: "f-anillo" },
  { id: "c-primer", n: "Familia del primer año", t: "Primer año", que: "Anticipo", m: 325, total: 650, f: "f-primer" },
  { id: "c-grad", n: "Colegio La Asunción", t: "Graduación", que: "Saldo", m: 2400, f: "f-toga" }
];
const filaCobro = c => `<li class="cob" data-id="${c.id}">
  <div class="cob-fila"><span class="foto cob-f ${c.f}" aria-hidden="true"></span>
    <span class="cob-t"><b>${c.n}</b><small>${c.que} · ${c.t}</small></span><b class="cob-m">${Q(c.m)}</b></div>
  <div class="cob-bts">${c.recordado ? `<span class="cob-esp"><i></i>Recordado · esperando el pago</span>` : btn("Recordar", "send", "bt-0 bt-chico", 'data-cob="rec"')}${btn("Ya pagó", "check", "bt-2 bt-chico", 'data-cob="pago"')}</div></li>`;
function pintarCobrar() {
  const pend = COBRAR.filter(c => !c.pagado && !c.cancelada);
  const cc = $("#cuenta-cob"); cc.textContent = pend.length; cc.classList.toggle("cero", !pend.length); pendHoy();
  $("#cobrar").innerHTML = pend.length ? pend.map(filaCobro).join("") : `<li class="cob-vacio">${ico("check", 18)}Nadie le debe nada</li>`;
  $("#cob-n").textContent = pend.length ? `${pend.length} · ${Q(pend.reduce((s, c) => s + c.m, 0))}` : "";
}
function iniciarCobrar() {
  pintarCobrar();
  $("#cobrar").addEventListener("click", async e => {
    const b = e.target.closest("[data-cob]"); if (!b) return;
    const c = COBRAR.find(x => x.id === b.closest(".cob").dataset.id);
    if (b.dataset.cob === "rec") recordarPago(c, b);
    else abrirPago(c.id);
  });
}
async function recordarPago(c, b) {
  if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Recordado" }))) return;
  c.recordado = true;
  simularWA({ para: c.n, f: c.f, texto: `Hola. Le escribe Foto González Studio. Le recordamos ${c.que === "Anticipo" ? "el anticipo para dejar segura su fecha" : "el saldo de su sesión"} (${c.t.toLowerCase()}): ${Q(c.m)}. Puede pagarlo aquí: fotogonzalezstudio.com/pagar`, nota: "" });
  alFeed("send", `Recordatorio de pago a <b>${c.n}</b>`);
  setTimeout(() => { const li = $(`.cob[data-id="${c.id}"]`); if (li && !c.pagado) { const v = document.createElement("div"); v.innerHTML = filaCobro(c); li.querySelector(".cob-bts").replaceWith(v.firstElementChild.querySelector(".cob-bts")); } }, 900);
  setTimeout(() => pagar(c.id, { auto: true }), 5200 + Math.random() * 1800);
}
function pagar(id, { auto = false, silencio = false, forma = "Transferencia", boleta = "" } = {}) {
  const c = COBRAR.find(x => x.id === id); if (!c || c.pagado) return null;
  c.pagado = true;
  S.cobradoHoy += c.m; venta(c.m);
  const rec = nuevoRecibo({ n: c.n, concepto: `${c.que} · ${c.t}`, m: c.m, forma, boleta, saldo: c.total ? Math.max(0, c.total - c.m) : 0, f: c.f });
  const li = $(`.cob[data-id="${id}"]`);
  const fin = () => { pintarCobrar(); pintarCifras(); };
  if (li && !calma) {
    li.style.height = li.offsetHeight + "px";
    li.animate([{ opacity: 1, transform: "none", height: li.offsetHeight + "px" }, { opacity: 0, transform: "translateX(24px)", height: "0px", marginBottom: "-10px" }], { duration: 380, easing: EASE, fill: "forwards" }).onfinish = fin;
  } else fin();
  if (id.startsWith("res-")) reservaPagada(id.slice(4));
  // lo que depende del pago
  const s = AG.find(x => x.cob === id); if (s) pintarAgenda();
  if (SES && SES.cob === id && abiertas.has($("#hoja-ses"))) pintarSesion();
  if (id === "c-castillo") pagarCastillo();
  const o = OPORT.find(x => x.id === "castillo");
  if (id === "c-castillo" && !o.estado) { o.estado = "lograda"; o.logro = "Ya pagó"; pieCambia(o); pintarPendientes(); }
  if (!silencio) {
    alFeed("cash", `<b>${c.n}</b> pagó ${c.que.toLowerCase()} · ${Q(c.m)}`);
    aviso(`${c.que} recibido · <b>${Q(c.m)}</b>`, { ic: "cash", sub: `${auto ? `${c.n} pagó después del recordatorio` : c.n} · recibo No. ${numRec(rec.num)}` });
  }
  return rec;
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
  pintarProxSesion(); tablero();
}
function iniciarAgenda() {
  pintarAgenda();
  $("#semana").addEventListener("click", async e => {
    const s = e.target.closest("[data-ses]"); if (s) return abrirSesion(s.dataset.ses);
    const b = e.target.closest("[data-ofrecer]"); if (!b) return;
    const i = Number(b.dataset.ofrecer), f = new Date(lunes()); f.setDate(f.getDate() + i);
    const dia = DIAS[i].toLowerCase() + " " + f.getDate();
    if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Ofrecida" }))) return;
    simularWA({ para: "Lista de espera", texto: `Hola, le escribe Foto González Studio. Se nos liberó la tarde del ${dia}. Si quiere su sesión ese día, se la apartamos con el anticipo. ¿Le interesa?`, respuesta: "¡Sí! ¿A las 4 puede ser?", nota: "" });
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
  $("#prox-ses").dataset.sid = s.id; pendHoy();
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
      sync();
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
    hist: [["Dic 2025", "Cuatro generaciones", 1200, "f-familia"], ["Feb 2024", "Retrato de pareja", 450, "f-pareja"]],
    nota: "Vienen con hijos y nietos: 18 personas. Llevar silla para la abuela y hacer las fotos de grupo primero.",
    g: { col: [["#D9C9A3", "Beige"], ["#FFFFFF", "Blanco"]], ropa: "Guayabera blanca y vestido beige", ninos: "8 nietos de 2 a 14 años", mascota: "No", sitio: "El jardín de su casa", fav: ["f-familia", "Las cuatro generaciones juntas"] },
    prox: { ic: "heart", t: "Sesión de bodas de oro", por: "El 20 de febrero cumplen 50 años de casados.", m: 1500, album: "Familias",
      wa: "Hola. ¡El 20 de febrero cumplen 50 años de casados! Les proponemos una sesión de bodas de oro con toda la familia, en su jardín, por Q 1,500.00. ¿Le apartamos fecha?", resp: "¡Qué lindo! Sí, que sea un domingo para que vengan todos." },
    cod: "REF-0098", refs: ["Familia del parque", "Clienta frecuente", "Mamá primeriza"] },
  { id: "valeria", n: "Clienta frecuente", desde: "Clienta desde 2022 · Bella Aurora", tag: "Recomienda",
    fechas: [["cake", "Su cumpleaños", 1, 22], ["heart", "Aniversario de bodas", 3, 9], ["sparkles", "Nace su bebé", 12, 15]],
    hist: [["Oct 2026", "Maternidad en estudio", 950, "f-maternidad"], ["Mar 2025", "Aniversario en exterior", 850, "f-pareja"], ["Mar 2024", "Boda civil con video", 4200, "f-boda"], ["Dic 2023", "Mini sesión navideña", 350, "f-navidad"]],
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
    hist: [["Dic 2025", "Recién nacido", 950, "f-bebe"], ["Ago 2025", "Maternidad", 850, "f-maternidad"]],
    nota: "Viajan desde Champerico: darles horario después de las 10 de la mañana.",
    g: { col: [["#F4C9C0", "Rosado"], ["#FFFFFF", "Blanco"]], ropa: "Body blanco y tutú para el primer año", ninos: "El bebé y una prima", mascota: "No", sitio: "El set de circo del estudio", fav: ["f-bebe", "Dormido en la canasta"] },
    prox: { ic: "cake", t: "Sesión de primer año", por: "Le hicieron su recién nacido en diciembre y cumple 1 año el 1 de diciembre.", m: 650, album: "Primer año",
      wa: "Hola. ¡Su bebé ya va a cumplir su primer año! Tenemos el set de circo o el de pastel para su sesión, Q 650.00. ¿Le apartamos fecha antes del 1 de diciembre?", resp: "¡Sí! El de circo. ¿Puede ser el sábado 28?" },
    cod: "REF-0388", refs: ["Familia nueva"] },
  { id: "lopez", n: "Familia del parque", desde: "Clientes desde 2023 · San Sebastián", tag: "Eligiendo fotos",
    fechas: [["cake", "Cumpleaños de la hija", 2, 14], ["heart", "Aniversario de bodas", 6, 2]],
    hist: [["Nov 2026", "Familia en exterior", 850, "f-familia"], ["Jun 2026", "Sesión Mundial 2026", 350, "f-camisola"], ["Dic 2025", "Mini sesión navideña", 350, "f-navidad"], ["Feb 2024", "Primer año de la hija", 650, "f-primer"]],
    nota: "Siempre compran alguna impresión. Mejor sesiones cortas y antes de las 10.",
    g: { col: [["#2F5D3A", "Verde"], ["#F2E6D0", "Beige"], ["#3B5B8C", "Mezclilla"]], ropa: "Toda la familia en tonos tierra", ninos: "Una niña de 3 años: llevar juguete", mascota: "Un perrito café, quieren incluirlo", sitio: "El parque central, temprano", fav: ["f-familia", "Los tres caminando de la mano"] },
    prox: { ic: "book", t: "Álbum de la sesión que está eligiendo", por: "Está marcando sus fotos ahora. Es cuando más ganas tiene de llevárselas impresas.", m: 650, album: "Familias",
      wa: "Hola. Vimos que ya está eligiendo sus fotos. Con las que marcó le podemos armar un álbum 20×20 de tapa dura por Q 650.00. ¿Se lo preparamos?", resp: "¡Qué buena idea! Sí, porfa, con las del parque." },
    cod: "REF-0217", refs: [] },
  { id: "mama", n: "Mamá primeriza", desde: "Clienta desde 2026 · Retalhuleu", tag: "Bebé en enero",
    fechas: [["sparkles", "Nace su bebé", 1, 10]],
    hist: [["Oct 2026", "Maternidad", 950, "f-maternidad"]],
    nota: "Le da pena la cámara: platicarle y poner su música. Le encanta el blanco y negro.",
    g: { col: [["#FFFFFF", "Blanco"], ["#1C1B19", "Negro"]], ropa: "Vestido blanco ajustado", ninos: "Su primer bebé", mascota: "Una gata", sitio: "Estudio con fondo negro", fav: ["f-maternidad", "El perfil con luz dorada"] },
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
const fichaEnHoja = () => { const p = $("#principal"), cs = getComputedStyle(p); return p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) < 820; };
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
  $("#fc-acc").innerHTML = [["sms", "chat", "Mensaje"], ["llamar", "phone", "Llamar"], ["wa", "wa", "WhatsApp"], ["porta", "images", "Portafolio"], ["ofrecer", "gift", "Ofrecer"]]
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
  simularWA({ para: c.n, f: c.hist[0][3], texto: c.prox.wa, respuesta: c.prox.resp, nota: "" });
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
    if (a.dataset.fa === "sms") simularWA({ sms: true, para: c.n, f: c.hist[0][3], texto: "Hola, le saluda Foto González Studio. Le escribimos para saludarle y saber cómo están. Aquí estamos para lo que necesiten.", respuesta: "¡Hola! Muy bien, gracias por acordarse de nosotros." });
    else if (a.dataset.fa === "llamar") llamar(c.n, c.hist[0][3]);
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
      acc: GAL.publicadaBebe ? `<span class="hecho">${icoListo()}La familia ya la tiene</span>` : btn("Subir y mandar sus fotos", "subir", "bt-1 bt-full", 'data-gal="publicar"') }
  ];
  $("#galerias").innerHTML = filas.map(g => `<li class="gal${g.marca ? " con-marca" : ""}" data-gal-id="${g.id}">
    <div class="gal-portada">
      <span class="foto ${g.fotos[0]} g1" aria-hidden="true"></span><span class="foto ${g.fotos[1]} g2" aria-hidden="true"></span><span class="foto ${g.fotos[2]} g3" aria-hidden="true"></span>
      <span class="gal-marca" aria-hidden="true">FOTO GONZÁLEZ · FOTO GONZÁLEZ · FOTO GONZÁLEZ</span>
      <span class="gal-estado ${g.estado[0]}">${g.estado[2] === "dot" ? "<i></i>" : ico(g.estado[2], 13)}${g.estado[1]}</span>
      <span class="gal-total">${g.total} fotos</span>
    </div>
    <div class="gal-cuerpo">
      <div class="gal-nom"><div><b>${g.n}</b><small>${g.t}</small></div><button type="button" class="gal-enl${enlaceDe(g.id).activo ? " on" : ""}" data-enl-g="${g.id}" aria-label="Enlace de ${g.n}">${ico("link", 16)}<span>Enlace</span></button></div>
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
    const en = e.target.closest("[data-enl-g]"); if (en) return abrirEnlace(en.dataset.enlG);
    const b = e.target.closest("[data-gal]"); if (!b) return;
    const k = b.dataset.gal;
    if (k === "vivo") {
      irPortal("cel-scroll");
      if (modoHoja()) abrirCliente();
      else if (!calma) $("#cliente .cel").animate([{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 600, easing: EASE });
      aviso("La familia del parque está eligiendo sus fotos", { ic: "eye", sub: "Toque los corazones en el celular" });
      return;
    }
    if (k === "pago") return abrirPago("c-castillo");
    if (k === "publicar") return abrirSubida("bebe");
    const txt = { xv: ["Abriendo WhatsApp…", "Ofrecido"], resena: ["Abriendo WhatsApp…", "Pedida"], publicar: ["Mandando…", "Mandadas"] }[k];
    if (!(await accion(b, { espera: txt[0], listo: txt[1] }))) return;
    if (k === "xv") {
      simularWA({ para: "Quinceañera de noviembre", f: "f-xv", texto: "Hola. Su galería de XV cierra el viernes. Si quiere el álbum 30×30 con sus favoritas, este mes sale en Q 1,450.00 con la caja de regalo.", respuesta: "¡Sí lo queremos! ¿Le pagamos el anticipo por transferencia?", nota: "" });
      GAL.recordadoXV = true;
      setTimeout(() => { venta(1450); alFeed("book", "<b>Quinceañera de noviembre</b> pidió el álbum 30×30 · Q 1,450.00"); aviso("Álbum vendido · <b>Q 1,450.00</b>", { ic: "book", sub: "Quinceañera de noviembre" }); }, 4200);
    } else if (k === "resena") {
      simularWA({ para: "Novios de diciembre", f: "f-pareja", texto: "Hola. Gracias otra vez por dejarnos estar en su boda. Si les gustaron sus fotos, ¿nos ayudan con una reseña en Google? Les toma un minuto: g.page/fotogonzalez", respuesta: "¡Claro que sí! Ya se la dejamos.", nota: "" });
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

/* ---------- Ofertas por WhatsApp ---------- */
const SEG = [
  { id: "bebes", n: "Familias con bebé de 6 a 12 meses", c: 38, f: ["f-bebe", "f-pastel", "f-primer"] },
  { id: "mundial", n: "Las que vinieron a la sesión del Mundial", c: 27, f: ["f-camisola", "f-familia", "f-mundial"] },
  { id: "xv", n: "Quinceañeras de 2025 y 2026", c: 22, f: ["f-xv", "f-quince", "f-glam"] },
  { id: "inactivos", n: "Clientes que no vuelven desde 2025", c: 64, f: ["f-familia", "f-retrato", "f-pareja"] }
];
const OFR = [
  { id: "navidad", n: "Mini sesión navideña", d: "20 minutos · 8 fotos", p: 350, f: "f-navidad", vence: 15, msj: "Ya armamos el set navideño en el estudio: mini sesión de 20 minutos con 8 fotos editadas por {precio}. Quedan pocos espacios en diciembre. ¿Le apartamos uno?" },
  { id: "anio", n: "Sesión de primer año", d: "Con pastel · 15 fotos y video", p: 650, f: "f-primer", vence: 30, msj: "¡Su bebé ya va por su primer año! Le ofrecemos la sesión con pastel en el estudio, 15 fotos y un video corto, por {precio}. ¿Le apartamos fecha?" },
  { id: "cuadro", n: "Cuadro 40×60", d: "Su foto favorita · listo en 5 días", p: 375, f: "f-fuerza", vence: 7, msj: "¿Ya tiene su foto favorita en la pared? Este mes el cuadro 40×60 con marco de madera sale en {precio}. Solo díganos cuál y lo mandamos a imprimir." }
];
const HIST_OFR = [{ n: "Sesión Mundial 2026", f: "f-camisola", cuando: "Junio 2026", env: 112, apa: 27, q: 11630 }];
const CAM = { seg: "bebes", ofr: "navidad", corriendo: false, editando: false };
const FOTOS_OFR = ["f-navidad", "f-maracas", "f-primer", "f-fuerza", "f-xv", "f-familia", "f-pareja", "f-bebe", "f-boda"];
const msjDe = (o, nombre = "familia") => `Hola, ${nombre}. Le escribe Foto González Studio. ` + o.msj.replace("{precio}", Q(o.p));
function pintarOfertas() {
  pinta($("#ofe-ofr"), `<div class="ofe-cab"><h2>1. ¿Qué les ofrece?</h2>${btn("Nueva oferta", "plus", "bt-0 bt-chico", 'data-ofe="nueva"')}</div>
    <div class="ofe-grid" role="radiogroup" aria-label="Oferta">${OFR.map(o => `<button type="button" class="ofe-card" role="radio" aria-checked="${o.id === CAM.ofr}" data-ofr="${o.id}">
      <span class="foto ${o.f}" aria-hidden="true"></span><span class="ofe-ok">${o.id === CAM.ofr ? icoListo() : ""}</span>
      <span class="ofe-precio">${Q(o.p)}</span>
      <span class="ofe-txt"><b>${esc(o.n)}</b><small>${esc(o.d)}</small></span></button>`).join("")}
      <button type="button" class="ofe-card nueva" data-ofe="nueva"><span class="ofe-mas">${ico("plus", 26)}</span><b>Crear oferta</b><small>Con su foto, precio y mensaje</small></button></div>`);
  pinta($("#ofe-seg"), `<h2>2. ¿A quién?</h2>
    <div class="seg-lista" role="radiogroup" aria-label="Grupo">${SEG.map(s => `<button type="button" class="seg-card" role="radio" aria-checked="${s.id === CAM.seg}" data-seg="${s.id}">
      <span class="seg-avs">${s.f.map(f => `<span class="foto ${f}" aria-hidden="true"></span>`).join("")}</span>
      <span class="seg-t"><b>${s.n}</b><small>${s.c} familias</small></span><span class="seg-radio" aria-hidden="true"></span></button>`).join("")}</div>`);
  pintarVistaPrevia(); pintarHistOfr();
  if (!CAM.corriendo) $("#cam-enviar-txt").textContent = `Mandar a ${SEG.find(x => x.id === CAM.seg).c} familias`;
}
function pintarVistaPrevia() {
  const o = OFR.find(x => x.id === CAM.ofr);
  $("#ofe-prev").innerHTML = `<div class="ofe-cab"><h2>3. Así les llega</h2>${btn(CAM.editando ? "Listo" : "Editar mensaje", CAM.editando ? "check" : "tomas", "bt-0 bt-chico", 'data-ofe="editar"')}</div>
    <div class="wa-prev">
      <div class="wa-cab"><span class="av">FG</span><div><b>Foto González Studio</b><small>en línea</small></div></div>
      <div class="wa-chat"><div class="wa-burbuja"><span class="foto ${o.f}" aria-hidden="true"><em>${esc(o.n)} · ${Q(o.p)}</em></span>
        ${CAM.editando ? `<label class="wa-edit"><span class="sr">Mensaje de la oferta</span><textarea id="ofe-msj" rows="5" maxlength="400">${esc(o.msj)}</textarea><small>Escriba {precio} donde quiera que salga el precio. El nombre de cada familia se pone solo.</small></label>`
          : `<p>${esc(msjDe(o, "familia del parque"))}</p>`}<small class="wa-hora">${hora()} ✓✓</small></div></div>
    </div>`;
}
function pintarHistOfr() {
  $("#ofe-hist").innerHTML = `<h3>Ofertas que ya mandó</h3><div class="ofe-hist">${HIST_OFR.map(h => `<div class="pasada"><span class="foto ${h.f}" aria-hidden="true"></span><div><b>${esc(h.n)}</b><small class="tenue">${h.cuando}</small>
    <div class="nums"><span><strong>${h.env}</strong> la recibieron</span><span><strong>${h.apa}</strong> apartaron</span><span><strong>${Q(h.q)}</strong> ganado</span></div></div></div>`).join("")}</div>`;
}
function pintarCampana() {
  pintarOfertas();
  const caja = $("#ofe");
  caja.addEventListener("click", e => {
    const o = e.target.closest("[data-ofr]"), s = e.target.closest("[data-seg]"), a = e.target.closest("[data-ofe]");
    if (CAM.corriendo && (o || s)) return;
    if (o) { CAM.ofr = o.dataset.ofr; CAM.editando = false; $$("[data-ofr]", caja).forEach(b => { const on = b === o; b.setAttribute("aria-checked", on); $(".ofe-ok", b).innerHTML = on ? icoListo() : ""; }); pintarVistaPrevia(); entra($(".wa-burbuja")); return; }
    if (s) { CAM.seg = s.dataset.seg; $$("[data-seg]", caja).forEach(b => b.setAttribute("aria-checked", b === s)); if (!CAM.corriendo) $("#cam-enviar-txt").textContent = `Mandar a ${SEG.find(x => x.id === CAM.seg).c} familias`; return; }
    if (!a) return;
    if (a.dataset.ofe === "nueva") return abrirNuevaOferta();
    if (a.dataset.ofe === "editar") {
      if (CAM.editando) { const t = $("#ofe-msj").value.trim(); if (t) OFR.find(x => x.id === CAM.ofr).msj = t; }
      CAM.editando = !CAM.editando; pintarVistaPrevia(); if (CAM.editando) $("#ofe-msj").focus();
    }
  });
  $("#cam-enviar").addEventListener("click", enviarCampana);
  $("#ofr-cuerpo").addEventListener("input", previaNuevaOferta);
  $("#ofr-cuerpo").addEventListener("click", e => {
    const f = e.target.closest("[data-of-f]"), v = e.target.closest("[data-of-v]");
    if (f) { NOF.f = f.dataset.ofF; $$("[data-of-f]").forEach(b => b.setAttribute("aria-pressed", b === f)); previaNuevaOferta(); return; }
    if (v) { NOF.vence = Number(v.dataset.ofV); $$("[data-of-v]").forEach(b => b.setAttribute("aria-pressed", b === v)); return; }
    if (e.target.closest("#of-guardar")) guardarOferta(e.target.closest("#of-guardar"));
  });
}
/* Crear una oferta nueva */
const NOF = {};
function abrirNuevaOferta() {
  Object.assign(NOF, { f: "f-xv", vence: 15 });
  $("#ofr-cuerpo").innerHTML = `
    <div class="of-prev" id="of-prev"></div>
    <label class="nr-campo"><span>Nombre de la oferta</span><input id="of-n" type="text" maxlength="40" autocomplete="off" placeholder="Ej.: Sesión de San Valentín"></label>
    <div class="of-dos">
      <label class="nr-campo"><span>Precio</span><span class="of-q"><b>Q</b><input id="of-p" type="number" inputmode="decimal" min="0" step="25" placeholder="450"></span></label>
      <label class="nr-campo"><span>Qué incluye</span><input id="of-d" type="text" maxlength="50" autocomplete="off" placeholder="Ej.: 30 min · 10 fotos"></label>
    </div>
    <p class="nr-campo-t">Foto de la oferta</p>
    <div class="of-fotos">${FOTOS_OFR.map(f => `<button type="button" class="foto ${f}" data-of-f="${f}" aria-pressed="${f === NOF.f}" aria-label="Usar esta foto"></button>`).join("")}</div>
    <p class="nr-campo-t">Vale por</p>
    <div class="of-vence">${[7, 15, 30].map(d => `<button type="button" class="chip-b" data-of-v="${d}" aria-pressed="${d === NOF.vence}">${d} días</button>`).join("")}</div>
    ${btn("Guardar oferta", "check", "bt-1 bt-full", 'id="of-guardar" disabled')}`;
  previaNuevaOferta();
  abrirHoja($("#hoja-ofr")); $("#ofr-cuerpo").scrollTop = 0;
  setTimeout(() => $("#of-n").focus({ preventScroll: true }), 350);
}
function previaNuevaOferta() {
  const n = ($("#of-n")?.value || "").trim(), p = Number($("#of-p")?.value || 0), d = ($("#of-d")?.value || "").trim();
  $("#of-prev").innerHTML = `<span class="foto ${NOF.f}" aria-hidden="true"></span><span class="ofe-precio">${p ? Q(p) : "Q 0.00"}</span><span class="ofe-txt"><b>${esc(n || "Nombre de la oferta")}</b><small>${esc(d || "Qué incluye")}</small></span>`;
  const ok = $("#of-guardar"); if (ok) ok.disabled = !(n.length > 2 && p > 0);
}
async function guardarOferta(b) {
  const n = $("#of-n").value.trim(), p = Number($("#of-p").value), d = $("#of-d").value.trim() || "Oferta del estudio";
  if (!(await accion(b, { espera: "Guardando…", listo: "Guardada", ms: 360 }))) return;
  const o = { id: "o" + Date.now(), n, d, p, f: NOF.f, vence: NOF.vence, msj: `Tenemos algo especial para usted: ${n.toLowerCase()} (${d.toLowerCase()}) por {precio}. Vale por ${NOF.vence} días. ¿Le apartamos un espacio?` };
  OFR.unshift(o); CAM.ofr = o.id; CAM.editando = false;
  alFeed("sparkles", `Oferta nueva: <b>${esc(n)}</b> · ${Q(p)}`);
  setTimeout(() => {
    cerrarHoja($("#hoja-ofr"), true); pintarOfertas();
    const c = $(`[data-ofr="${o.id}"]`); if (c && !calma) c.animate([{ opacity: 0, transform: "scale(0.95)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: EASE });
  }, 420);
}
function enviarCampana() {
  if (CAM.corriendo) return;
  const s = SEG.find(x => x.id === CAM.seg), o = OFR.find(x => x.id === CAM.ofr), b = $("#cam-enviar");
  CAM.corriendo = true; b.disabled = true; b.classList.add("cargando"); $("#cam-enviar-txt").textContent = "Mandando…";
  $("#ofe").classList.add("corriendo");
  const res = $("#cam-res"); res.hidden = false; entra(res);
  res.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "nearest" });
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
    if (k === 6) alFeed("chat", `Oferta «${esc(o.n)}»: <b>${val.res}</b> ya contestaron`, "cam");
    if (k < 12) return setTimeout(tic, 750);
    const total = meta.apa * o.p;
    venta(total);
    HIST_OFR.unshift({ n: o.n, f: o.f, cuando: "Hoy", env: meta.env, apa: meta.apa, q: total });
    pintarHistOfr(); entra($(".ofe-hist .pasada"));
    alFeed("cash", `Oferta «${esc(o.n)}»: <b>${meta.apa} apartaron</b> · ${Q(total)}`, "cam");
    aviso(`Oferta «${esc(o.n)}» · <b>${meta.apa} apartaron</b>`, { ic: "send", sub: `${Q(total)} ganados` });
    CAM.corriendo = false; b.disabled = false; b.classList.remove("cargando"); $("#cam-enviar-txt").textContent = "Mandar otra oferta";
    $("#ofe").classList.remove("corriendo");
  };
  setTimeout(tic, 500);
}

/* ---------- Mi contacto y portafolio ---------- */
const URL_PAG = new URL("../pagina/", location.href).href;
const urlPorta = albs => URL_PAG + "#portafolio";
const ALBUMES = [["XV años", "f-xv", 48], ["Bodas", "f-boda", 64], ["Bebés", "f-bebe", 36], ["Familias", "f-familia", 40], ["Primer año", "f-primer", 28], ["Graduaciones", "f-toga2", 52]];
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
  pintarMas();
  pintarMasCuenta();
  pintarAvisoResp();
}
function pintarAvisoResp() {
  pendHoy();
  const n = sinCopia(), el = $("#hoy-resp"); if (!el) return;
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

/* ---------- Celular de la familia: su galería privada ---------- */
const FOTOS = ["f-familia", "f-primer", "f-camisola", "f-pastel", "f-familia", "f-bebe", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia", "f-primer", "f-camisola", "f-familia", "f-pastel", "f-bebe", "f-familia"];
const POSF = ["50% 30%", "35% 45%", "60% 35%", "45% 60%", "70% 40%", "30% 30%", "55% 55%", "40% 25%", "65% 60%", "50% 45%", "25% 50%", "75% 30%"];
const posF = i => POSF[(i * 5) % POSF.length];
const TAMF = ["cover", "170%", "240%", "135%"];
const tamF = i => TAMF[Math.floor(i / 6) % TAMF.length];
const INCL = 10, P_EXTRA = 35, P_TODA = 450;
const G = { sel: [], pagadas: new Set(), completa: false, extraVendido: 0, avisoMas: false, vista: "fotos", visor: 0 };
const PRODS = [["Impresión 20×30", "Papel lustre profesional", 95], ["Cuadro 40×60", "Marco de madera natural", 375], ["Lienzo 60×90", "Listo para colgar", 650]];
const libre = i => { if (G.completa || G.pagadas.has(i)) return true; const k = G.sel.indexOf(i); return k > -1 && k < INCL; };
const extrasPend = () => G.completa ? [] : G.sel.slice(INCL).filter(i => !G.pagadas.has(i));
function tileFam(f, i) {
  return `<div class="ft" data-n="${i}">
    <span class="foto ${f}" style="background-position:${posF(i)};background-size:${tamF(i)}" aria-hidden="true"></span>
    <span class="wm" aria-hidden="true"><span>FOTO GONZÁLEZ</span><span>FOTO GONZÁLEZ</span><span>FOTO GONZÁLEZ</span></span>
    <span class="extra-tag">EXTRA</span>
    <button class="abrir" type="button" aria-label="Ver en grande la foto ${i + 1}"></button>
    <button class="corazon" type="button" aria-pressed="false" aria-label="Elegir la foto ${i + 1}"><span>${ico("heart", 15)}</span></button></div>`;
}
function pintarGaleria() {
  $("#galeria").innerHTML = FOTOS.map(tileFam).join("");
  $("#galeria").addEventListener("click", ev => {
    const t = ev.target.closest(".ft"); if (!t) return;
    const i = Number(t.dataset.n);
    if (ev.target.closest(".corazon")) corazon(i, ev.target.closest(".corazon"));
    else if (ev.target.closest(".abrir")) abrirVisor(i);
  });
  $("#fam-seg").addEventListener("click", e => { const b = e.target.closest("[data-fv]"); if (b) vistaFam(b.dataset.fv); });
  $("#fam-pagos").addEventListener("click", e => { const b = e.target.closest("[data-rnum]"); if (b) abrirRecibo(Number(b.dataset.rnum)); });
  $("#of-unas").addEventListener("click", () => comprar("unas"));
  $("#of-toda").addEventListener("click", () => comprar("toda"));
  $("#hi-cerrar").addEventListener("click", cerrarImp);
  // visor: deslizar con el dedo o con las flechas
  $("#vs-x").addEventListener("click", cerrarVisor);
  $("#vs-izq").addEventListener("click", () => moverVisor(-1));
  $("#vs-der").addEventListener("click", () => moverVisor(1));
  $("#vs-amo").addEventListener("click", () => corazon(G.visor, $(`#galeria .ft[data-n="${G.visor}"] .corazon`)));
  $("#vs-imp").addEventListener("click", () => abrirImp(G.visor));
  $("#vs-desc").addEventListener("click", () => {
    if (!libre(G.visor)) { toastCel("Esta foto se libera al pagar. Márquela con el corazón."); return; }
    toastCel(`Foto ${G.visor + 1} descargada en alta resolución.`);
  });
  const foto = $("#vs-foto"); let x0 = null, dx = 0;
  foto.addEventListener("pointerdown", e => { if (e.target.closest("button")) return; x0 = e.clientX; dx = 0; foto.setPointerCapture(e.pointerId); $("#vs-a").style.transition = "none"; });
  foto.addEventListener("pointermove", e => { if (x0 === null) return; dx = e.clientX - x0; $("#vs-a").style.transform = `translateX(${dx}px)`; });
  const fin = () => { if (x0 === null) return; x0 = null; const a = $("#vs-a"); a.style.transition = ""; a.style.transform = ""; if (Math.abs(dx) > 50) moverVisor(dx < 0 ? 1 : -1, dx); };
  foto.addEventListener("pointerup", fin); foto.addEventListener("pointercancel", fin);
  actualizarGaleria(); pintarFamPagos();
}
function vistaFam(v) {
  G.vista = v;
  const seg = $("#fam-seg"), bs = $$("[data-fv]", seg);
  bs.forEach(b => b.setAttribute("aria-selected", b.dataset.fv === v));
  seg.style.setProperty("--i", ["fotos", "fav", "pagos"].indexOf(v));
  $("#cel-galeria").hidden = v === "pagos"; $("#fam-pagos").hidden = v !== "pagos";
  $$("#galeria .ft").forEach(t => { t.hidden = v === "fav" && !G.sel.includes(Number(t.dataset.n)); });
  if (v === "pagos") pintarFamPagos();
  const cu = v === "pagos" ? $("#fam-pagos") : $("#galeria");
  if (!calma) cu.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: EASE });
}
function pintarFamPagos() {
  const mios = RECIBOS.filter(r => r.n === "Familia del parque");
  const tot = mios.reduce((t, r) => t + r.m, 0);
  $("#fam-pagos").innerHTML = `<div class="fpg-total"><small>Pagado al estudio</small><b>${Q(tot)}</b></div>
    <ul class="fpg-lista">${mios.map(r => `<li><button type="button" data-rnum="${r.num}"><span class="fpg-ic">${ico("recibo", 16)}</span><span><b>${r.concepto}</b><small>No. ${String(r.num).padStart(6, "0")} · ${fechaCorta(r.fecha)}</small></span><b>${Q(r.m)}</b></button></li>`).join("")}</ul>`;
}
function actualizarGaleria() {
  $$("#galeria .ft").forEach(t => {
    const i = Number(t.dataset.n), k = G.sel.indexOf(i);
    t.classList.toggle("libre", libre(i));
    t.classList.toggle("extra", k >= INCL && !libre(i));
    $(".corazon", t).setAttribute("aria-pressed", k > -1);
    if (G.vista === "fav") t.hidden = k < 0;
  });
  const n = G.sel.length, ext = extrasPend();
  $("#c-cuenta").textContent = Math.min(n, INCL);
  $("#c-extra").textContent = G.completa ? "Galería completa" : n > INCL ? `+${n - INCL} extra` : "";
  $("#c-barra").style.transform = `scaleX(${Math.min(1, n / INCL)})`;
  const fn = $("#fav-n"); fn.textContent = n || "";
  const of = $("#oferta"), ver = ext.length > 0 && PORTAL.pant === "cel-scroll";
  if (ver) {
    const m = ext.length * P_EXTRA;
    $("#of-t").innerHTML = `Eligió <b>${ext.length} ${ext.length === 1 ? "foto" : "fotos"} más</b> de las que trae su paquete.`;
    $("#of-unas").innerHTML = `Llevar ${ext.length === 1 ? "la extra" : "las " + ext.length} por <span class="nw">${Q(m)}</span>`;
    $("#of-toda").innerHTML = `Toda la galería (24) por <span class="nw">${Q(P_TODA)}</span>`;
    $("#of-toda").classList.toggle("conviene", ext.length >= 6);
  }
  of.classList.toggle("ver", ver); of.inert = !ver;
  if ($("#visor").classList.contains("ver")) pintarVisor();
}
function corazon(i, b) {
  const k = G.sel.indexOf(i);
  if (k > -1) G.sel.splice(k, 1); else G.sel.push(i);
  if (!calma && b) $("span", b).animate([{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }], { duration: 300, easing: EASE });
  if (!calma && $("#visor").classList.contains("ver") && i === G.visor) $("#vs-amo").animate([{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }], { duration: 300, easing: EASE });
  actualizarGaleria();
  red(() => {
    const n = G.sel.length;
    alFeed("heart", `La familia del parque lleva <b>${n}</b> ${n === 1 ? "foto elegida" : "fotos elegidas"}${n > INCL ? ` · <b>${n - INCL} más</b> que su paquete` : ""}`, "sel-lopez");
    pintarGalerias();
    if (n > INCL && !G.avisoMas) { G.avisoMas = true; aviso("La familia del parque quiere <b>más fotos</b>", { ic: "sparkles", sub: "Ya le apareció la oferta en su celular" }); }
  });
}
function abrirVisor(i) {
  G.visor = i; pintarVisor(true);
  const v = $("#visor"); v.inert = false; v.classList.add("ver");
  setTimeout(() => $("#vs-x").focus({ preventScroll: true }), 60);
}
function cerrarVisor() { const v = $("#visor"); v.classList.remove("ver"); v.inert = true; }
function pintarVisor() {
  const i = G.visor, a = $("#vs-a");
  a.className = `foto vs-capa ${FOTOS[i]}`; a.style.backgroundPosition = posF(i); a.style.backgroundSize = tamF(i);
  $("#vs-n").textContent = `${i + 1} de ${FOTOS.length}`;
  $("#vs-amo").setAttribute("aria-pressed", G.sel.includes(i));
  $("#vs-wm").hidden = libre(i);
  $("#vs-desc-t").textContent = libre(i) ? "Descargar" : "Se libera al pagar";
  $("#vs-desc").classList.toggle("bloq", !libre(i));
}
function moverVisor(d, desde = 0) {
  G.visor = (G.visor + d + FOTOS.length) % FOTOS.length;
  const a = $("#vs-a"), w = $("#vs-foto").offsetWidth;
  pintarVisor();
  if (!calma) a.animate([{ transform: `translateX(${desde ? desde * 0.4 : d * w * 0.35}px)`, opacity: .2 }, { transform: "none", opacity: 1 }], { duration: 320, easing: EASE });
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
    const que = tipo === "toda" ? "la galería completa" : `${ext.length} ${ext.length === 1 ? "foto extra" : "fotos extra"}`;
    nuevoRecibo({ n: "Familia del parque", concepto: `Fotos extra · ${que}`, m: monto, forma: "Tarjeta", saldo: 0, f: "f-familia" });
    toastCel("Pago aprobado. Su recibo está en «Mis pagos».");
    red(() => {
      venta(monto, { extra: true });
      alFeed("cash", `La familia del parque compró <b>${que}</b> · ${Q(monto)}`);
      aviso(`Venta en la galería · <b>${Q(monto)}</b>`, { ic: "cash", sub: `La familia del parque compró ${que}` });
      pintarGalerias();
    });
  }, 700);
}
let impFoto = 0;
function abrirImp(i) {
  impFoto = i;
  $("#hi-foto").className = "foto hi-foto " + FOTOS[i]; $("#hi-foto").style.backgroundPosition = posF(i); $("#hi-foto").style.backgroundSize = tamF(i);
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
  nuevoRecibo({ n: "Familia del parque", concepto: `${n} · foto ${impFoto + 1}`, m: p, forma: "Tarjeta", saldo: 0, f: "f-familia" });
  toastCel(`Pedido recibido: ${n}. Su recibo está en «Mis pagos».`);
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
      simularWA({ para: s.n, f: s.f, texto: `Hola. Le escribe Foto González Studio. Quedó cancelada su sesión (${s.t.toLowerCase()}). Cuando quiera la volvemos a apartar, aquí estamos.`, nota: "" });
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
  simularWA({ para: s.n, f: s.f, texto: `Hola. Le escribe Foto González Studio. Movimos su sesión (${s.t.toLowerCase()}) al ${fechaTxt(d)} a las ${hora12(s.h)}. ¡Los esperamos!`, respuesta: "¡Perfecto, gracias por avisar!", nota: "" });
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
  pendHoy();
  const n = RES.filter(r => r.estado === "nueva").length, el = $("#hoy-res"); if (!el) return;
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
const TIPOS_RES = [["retrato", "Retrato", 450, "f-retrato"], ["familia", "Familia", 850, "f-familia"], ["bebe", "Recién nacido", 950, "f-bebe"], ["primer", "Primer año", 650, "f-primer"], ["xv", "XV años", 2400, "f-xv"], ["pareja", "Pareja", 850, "f-pareja"], ["boda", "Boda", 5800, "f-boda"], ["grad", "Graduación", 650, "f-toga"]];
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
    if (link) simularWA({ para: quien, f: t[3], texto: `Hola. Le escribe Foto González Studio. Le apartamos su sesión (${t[1].toLowerCase()}) el ${fechaTxt(fechaEn(k))} a las ${hora12(hh)}. Para dejarla segura, el anticipo es de ${Q(an)}: fotogonzalezstudio.com/pagar`, respuesta: "¡Gracias! Ahorita lo pago.", nota: "" });
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
      simularWA({ para: r.n, f: r.f, texto: `Hola. Gracias por escribirnos. Para su sesión (${r.t.toLowerCase()}) tenemos libre el ${fechaTxt(fechaEn(r.k))} a las ${hora12(r.h)}. ¿Le queda bien?`, respuesta: "¡Sí, perfecto! Apártenmelo, porfa.", nota: "" });
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
      simularWA({ para: r.n, f: r.f, texto: `Hola. ¡Su fecha está libre! ${r.t} el ${fechaTxt(fechaEn(r.k))} a las ${hora12(r.h)}. Para apartarla, el anticipo es de ${Q(anticipoDe(r))}. Puede pagarlo aquí: fotogonzalezstudio.com/pagar`, respuesta: "¡Gracias! Ahorita lo pago.", nota: "" });
      r.estado = "anticipo"; r.horas = 24; r.otras = null; COBRAR.push(cobroRes(r)); pintarCobrar(); pintarCifras();
      alFeed("check", `Reserva confirmada a <b>${r.n}</b> · se pidió el anticipo`);
      setTimeout(() => cambiaRes(r), 800);
      return;
    }
    if (k === "rec") { const c = COBRAR.find(x => x.id === "res-" + r.id); if (c && !c.recordado) { await recordarPago(c, b); setTimeout(() => cambiaRes(r), 900); } return; }
    if (k === "pago") abrirPago("res-" + r.id);
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
const FOTOS_TIPO = { pareja: ["f-pareja", "f-anillo", "f-boda"], boda: ["f-boda", "f-anillo", "f-pareja"], xv: ["f-xv", "f-quince", "f-glam"], bebe: ["f-bebe", "f-pastel", "f-producto"], primer: ["f-primer", "f-pastel"], familia: ["f-familia", "f-camisola"], retrato: ["f-retrato", "f-glam", "f-fuerza"], grad: ["f-toga", "f-graduacion", "f-toga2", "f-maracas", "f-cacao", "f-maestra", "f-paisaje"] };
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
    <div class="ev-hud" id="ev-hud">${ENV.camDe && ENV.camDe !== YO.id ? `${ico("link", 14)}La cámara está conectada en otro aparato del equipo` : `${ico("zap", 14)}Esperando la primera foto…`}</div>
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
  if (!ENV.conectada || ENV.pausa || ENV.camDe !== YO.id) return;
  if (document.hidden) return siguienteEV();
  const s = sesEnVivo(), lista = FOTOS_TIPO[s.tipo] || ["f-familia"];
  const f = { id: "ev" + (++ENV.n), mb: (18 + Math.random() * 12).toFixed(1), num: String(1200 + ENV.n).padStart(4, "0"), c: azar(lista), pos: `${20 + Math.round(Math.random() * 60)}% ${15 + Math.round(Math.random() * 45)}%`, h: hora(), guardada: false, borrada: false, nube: false };
  ENV.fotos.push(f);
  if (VISTA === "envivo") {
    const g = $("#ev-grid"); $(".ev-vacio", g)?.remove();
    const v = document.createElement("div"); v.innerHTML = tileEV(f); const li = v.firstElementChild; g.prepend(li);
    if (!calma) {
      li.classList.add("llegando"); $(".ev-num", li).textContent = `Recibiendo #${f.num} · ${f.mb} MB`;
      li.animate([{ opacity: 0, transform: "scale(0.95)" }, { opacity: 1, transform: "none" }], { duration: 300, easing: EASE });
      setTimeout(() => { li.classList.remove("llegando"); li.classList.add("revela"); $(".ev-num", li).textContent = `#${f.num} · ${f.h}`; }, 750);
    }
    ENV.ult = { num: f.num, mb: f.mb, t: Date.now() }; hudEV();
  }
  cifrasEV(); pantallaFoto(f); sync();
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
  cifrasEV(); tiraPF(); sync();
}
function iniciarEnVivo() {
  $("#ev-cam").addEventListener("click", async e => {
    const b = e.target.closest("#ev-con"); if (!b) return;
    if (!(await accion(b, { espera: "Buscando la cámara…", listo: "Conectada", ms: 1500 }))) return;
    ENV.conectada = true; ENV.pausa = false; ENV.camDe = YO.id; ENV.inicio = Date.now();
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
      simularWA({ para: s.n, f: s.f, texto: `Hola. ¡Gracias por la sesión de hoy! Ya les dejamos un primer vistazo de ${g || tot} fotos en su galería privada. Las demás se las mandamos editadas esta semana.`, respuesta: "¡Qué emoción! Ya las estamos viendo.", nota: "" });
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
      f.borrada = true; cifrasEV(); tiraPF(); sync();
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

/* ---------- Recibos del estudio ---------- */
const diaHace = k => { const d = new Date(); d.setHours(10, 30, 0, 0); d.setDate(d.getDate() - k); return d.toISOString(); };
const fechaCorta = iso => new Date(iso).toLocaleDateString("es-GT", { day: "numeric", month: "short", year: "numeric" }).replace(".", "");
const fechaLarga = iso => new Date(iso).toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const numRec = n => String(n).padStart(6, "0");
let NUM_REC = 123;
const RECIBOS = [
  { num: 123, fecha: diaHace(3), n: "Familia del parque", concepto: "Saldo · Familia en exterior", m: 425, forma: "Transferencia", boleta: "77410", saldo: 0, f: "f-familia" },
  { num: 122, fecha: diaHace(4), n: "Quinceañera de noviembre", concepto: "Saldo · XV en estudio con video", m: 1200, forma: "Efectivo", saldo: 0, f: "f-xv" },
  { num: 121, fecha: diaHace(6), n: "Colegio La Asunción", concepto: "Anticipo · Desfile y graduación", m: 2400, forma: "Depósito", boleta: "884512", saldo: 2400, f: "f-graduacion" },
  { num: 120, fecha: diaHace(8), n: "Novios de diciembre", concepto: "Anticipo · Boda con video", m: 3900, forma: "Transferencia", boleta: "51208", saldo: 3900, f: "f-boda" },
  { num: 118, fecha: diaHace(10), n: "Familia del parque", concepto: "Anticipo · Familia en exterior", m: 425, forma: "Tarjeta", saldo: 425, f: "f-familia" }
];
const FORMAS = [["Efectivo", "cash"], ["Transferencia", "banco"], ["Tarjeta", "tarjeta"], ["Depósito", "recibo"]];
function letras(n) {
  const U = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  const D = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const C = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  const cien = x => { if (x === 100) return "cien"; const c = Math.floor(x / 100), r = x % 100; let t = C[c]; if (r) t += (t ? " " : "") + (r < 30 ? U[r] : D[Math.floor(r / 10)] + (r % 10 ? " y " + U[r % 10] : "")); return t; };
  const ent = Math.floor(n), cent = Math.round((n - ent) * 100), mil = Math.floor(ent / 1000), r = ent % 1000;
  let t = ent === 0 ? "cero" : (mil ? (mil === 1 ? "mil" : cien(mil).replace(/uno$/, "un") + " mil") : "") + (r ? (mil ? " " : "") + cien(r) : "");
  t = t.replace(/uno$/, "un");
  return t.charAt(0).toUpperCase() + t.slice(1) + (ent === 1 ? " quetzal" : " quetzales") + ` con ${String(cent).padStart(2, "0")}/100`;
}
function nuevoRecibo(o) {
  const r = { num: ++NUM_REC, fecha: new Date().toISOString(), boleta: "", ...o };
  RECIBOS.unshift(r);
  pintarRecibos(); pintarFamPagos(); sync();
  return r;
}
function reciboHTML(r, nuevo) {
  return `<article class="recibo${nuevo ? " nuevo" : ""}" aria-label="Recibo número ${numRec(r.num)}">
    <header class="rc-cab">
      <span class="rc-logo"><img class="fg-mono" src="../../img/monograma-fg.png" alt=""></span>
      <div class="rc-est"><b>Foto González Studio</b><small>Fotografía y video</small><small>Residenciales Bella Aurora, zona 6, Retalhuleu</small><small>+502 5016 8853 · premiumdesigngt@gmail.com</small></div>
    </header>
    <div class="rc-titulo"><span>Recibo de pago</span><b>No. ${numRec(r.num)}</b></div>
    <dl class="rc-datos">
      <div><dt>Fecha</dt><dd>${fechaLarga(r.fecha)}</dd></div>
      <div><dt>Recibimos de</dt><dd>${r.n}</dd></div>
      <div><dt>La cantidad de</dt><dd>${letras(r.m)}</dd></div>
      <div><dt>Por concepto de</dt><dd>${r.concepto}</dd></div>
      <div><dt>Forma de pago</dt><dd>${r.forma}${r.boleta ? ` · referencia ${esc(r.boleta)}` : ""}</dd></div>
    </dl>
    <div class="rc-total"><span>Total recibido</span><b>${Q(r.m)}</b></div>
    <div class="rc-saldo${r.saldo ? "" : " ok"}"><span>Saldo pendiente</span><b>${r.saldo ? Q(r.saldo) : "Q 0.00 · cancelado"}</b></div>
    <div class="rc-sello" aria-hidden="true"><span>Pagado</span><small>${fechaCorta(r.fecha)}</small></div>
    <footer class="rc-pie">
      <div class="rc-firma"><span></span><small>Foto González Studio</small></div>
      <p>Gracias por confiar en nosotros.</p>
      <p class="rc-legal">Este recibo no sustituye la factura electrónica.</p>
    </footer>
  </article>`;
}
let RECIBO_ACT = null;
function abrirRecibo(num, nuevo = false) {
  const r = RECIBOS.find(x => x.num === num); if (!r) return;
  RECIBO_ACT = r;
  $("#recibo-t").textContent = `Recibo No. ${numRec(r.num)}`;
  $("#recibo-cuerpo").innerHTML = reciboHTML(r, nuevo) + `<div class="rc-bts">
    ${btn("Mandar por WhatsApp", "wa", "bt-1 bt-full", 'data-rc="wa"')}
    <div class="rc-bts2">${btn("Compartir", "share", "bt-0", 'data-rc="comp"')}${btn("Imprimir o PDF", "printer", "bt-0", 'data-rc="imp"')}</div></div>`;
  abrirHoja($("#hoja-recibo")); $("#recibo-cuerpo").scrollTop = 0;
}
function imprimirRecibo(r) {
  const c = $("#imprimir"); c.innerHTML = reciboHTML(r);
  document.documentElement.classList.add("imprimiendo");
  const fin = () => { document.documentElement.classList.remove("imprimiendo"); c.innerHTML = ""; removeEventListener("afterprint", fin); };
  addEventListener("afterprint", fin);
  setTimeout(() => { window.print(); setTimeout(() => { if (document.documentElement.classList.contains("imprimiendo")) fin(); }, 1500); }, 60);
}
let REC_F = "hoy", REC_Q = "";
function pintarRecibos() {
  const ul = $("#recibos"); if (!ul) return;
  const hoy = new Date(), q = normal(REC_Q.trim());
  const vis = RECIBOS.filter(r => {
    const d = new Date(r.fecha);
    if (REC_F === "hoy" && d.toDateString() !== hoy.toDateString()) return false;
    if (REC_F === "mes" && (d.getMonth() !== hoy.getMonth() || d.getFullYear() !== hoy.getFullYear())) return false;
    return !q || normal([numRec(r.num), r.num, r.n, r.concepto, r.forma].join(" ")).includes(q);
  });
  ul.innerHTML = vis.length ? vis.map(r => `<li><button type="button" class="rec-fila" data-rnum="${r.num}">
      <span class="rec-num">No.<b>${numRec(r.num)}</b></span>
      <span class="cob-t"><b>${r.n}</b><small>${r.concepto} · ${r.forma}</small></span>
      <span class="rec-m"><b>${Q(r.m)}</b><small>${fechaCorta(r.fecha)}</small></span></button></li>`).join("")
    : `<li class="vacio">${REC_F === "hoy" && !q ? "Todavía no hay recibos hoy." : "Ningún recibo coincide."}</li>`;
  const tot = vis.reduce((t, r) => t + r.m, 0);
  $("#rec-n").textContent = vis.length ? `${vis.length} · ${Q(tot)}` : "";
}
function iniciarRecibos() {
  pintarRecibos();
  $("#recibos").addEventListener("click", e => { const b = e.target.closest("[data-rnum]"); if (b) abrirRecibo(Number(b.dataset.rnum)); });
  $("#rec-q").addEventListener("input", e => { REC_Q = e.target.value; pintarRecibos(); });
  $("#rec-seg").addEventListener("click", e => {
    const b = e.target.closest("[data-rf]"); if (!b) return;
    REC_F = b.dataset.rf;
    $$("[data-rf]").forEach(x => x.setAttribute("aria-selected", x === b));
    $("#rec-seg").style.setProperty("--i", ["hoy", "mes", "todos"].indexOf(REC_F));
    pintarRecibos(); $$("#recibos li").forEach((li, i) => entra(li, i * 25));
  });
  $("#recibo-cuerpo").addEventListener("click", async e => {
    const b = e.target.closest("[data-rc]"); if (!b || !RECIBO_ACT) return;
    const r = RECIBO_ACT;
    if (b.dataset.rc === "wa") {
      if (!(await accion(b, { espera: "Abriendo WhatsApp…", listo: "Enviado" }))) return;
      simularWA({ para: r.n, f: r.f, texto: `Hola. Le compartimos su recibo No. ${numRec(r.num)} por ${Q(r.m)} (${r.concepto}).${r.saldo ? ` Saldo pendiente: ${Q(r.saldo)}.` : " Su cuenta quedó cancelada."} ¡Gracias por su pago!`, respuesta: "¡Recibido, muchas gracias!", nota: "" });
    } else if (b.dataset.rc === "comp") {
      const texto = `Foto González Studio · Recibo No. ${numRec(r.num)}\n${r.n}\n${r.concepto}\nTotal recibido: ${Q(r.m)}`;
      try { if (navigator.share) await navigator.share({ title: `Recibo No. ${numRec(r.num)}`, text: texto }); else simularWA({ texto, nota: "" }); } catch (er) { /* cerró la hoja */ }
    } else imprimirRecibo(r);
  });
}
/* Registrar un pago: forma de pago y recibo */
let PAGO = null;
function abrirPago(id) {
  const c = COBRAR.find(x => x.id === id); if (!c || c.pagado) return;
  PAGO = { id, forma: "Transferencia" };
  $("#pago-cuerpo").innerHTML = `
    <div class="pg-cab"><span class="foto ${c.f}" aria-hidden="true"></span><div><small>${c.que} · ${c.t}</small><b>${c.n}</b></div></div>
    <p class="pg-monto">${Q(c.m)}</p>
    <h4 class="grupo-t">¿Cómo pagó?</h4>
    <div class="pg-formas" role="radiogroup" aria-label="Forma de pago">${FORMAS.map(([f, ic]) => `<button type="button" role="radio" aria-checked="${f === PAGO.forma}" data-forma="${f}">${ico(ic, 22)}<span>${f}</span></button>`).join("")}</div>
    <label class="nr-campo pg-bol"><span>Número de boleta o referencia</span><input id="pg-bol" type="text" inputmode="numeric" maxlength="20" autocomplete="off" placeholder="Opcional"></label>
    ${btn("Registrar y hacer recibo", "recibo", "bt-1 bt-full", 'id="pg-ok"')}`;
  abrirHoja($("#hoja-pago"));
}
function iniciarPago() {
  $("#pago-cuerpo").addEventListener("click", async e => {
    const f = e.target.closest("[data-forma]");
    if (f) {
      PAGO.forma = f.dataset.forma;
      $$("[data-forma]").forEach(x => x.setAttribute("aria-checked", x === f));
      $(".pg-bol").hidden = PAGO.forma === "Efectivo";
      if (!calma) f.animate([{ transform: "scale(0.95)" }, { transform: "scale(1)" }], { duration: 200, easing: EASE });
      return;
    }
    const ok = e.target.closest("#pg-ok"); if (!ok) return;
    if (!(await accion(ok, { espera: "Guardando…", listo: "Recibo listo", ms: 500 }))) return;
    const boleta = PAGO.forma === "Efectivo" ? "" : ($("#pg-bol").value || "").trim();
    const r = pagar(PAGO.id, { forma: PAGO.forma, boleta });
    setTimeout(() => { cerrarHoja($("#hoja-pago"), true); if (r) setTimeout(() => abrirRecibo(r.num, true), 260); }, 450);
  });
}

/* ---------- Pendientes de hoy, arriba de todo ---------- */
let pendRAF = 0;
function pendHoy() { cancelAnimationFrame(pendRAF); pendRAF = requestAnimationFrame(pintarPendHoy); }
function pintarPendHoy() {
  const caja = $("#pendientes"); if (!caja) return;
  const cob = COBRAR.filter(c => !c.pagado && !c.cancelada), resN = RES.filter(r => r.estado === "nueva").length, sc = sinCopia();
  const ops = OPORT.filter(o => !o.estado).length, tar = TAREAS.filter(t => !t.hecha && (!t.para || t.para === YO.rol)).length;
  const ps = proxima(), mt = maletaDe(ps).length + (UTIL[ps.tipo] || []).length, mh = (MAL[ps.id] || new Set()).size;
  const items = [
    cob.length && { id: "cob", ic: "cash", c: "#2F7D4F", n: cob.length, t: cob.length === 1 ? "Cobro pendiente" : "Cobros pendientes", s: Q(cob.reduce((t, c) => t + c.m, 0)), ir: "cobrar" },
    ops && { id: "msg", ic: "wa", c: "#8E2234", n: ops, t: ops === 1 ? "Mensaje por mandar" : "Mensajes por mandar", s: "Ventas posibles", ir: "msg" },
    resN && { id: "res", ic: "calendar", c: "#7A5C8E", n: resN, t: resN === 1 ? "Reserva por confirmar" : "Reservas por confirmar", s: "De la página y WhatsApp", ir: "reservas" },
    ps.d === hoyIdx() && mh < mt && { id: "mal", ic: "maleta", c: "#A24A24", n: `${mh}/${mt}`, t: "Maleta de hoy", s: ps.t, ir: "maleta" },
    sc && { id: "resp", ic: "sd", c: "#B7792A", n: sc, t: sc === 1 ? "Tarjeta sin respaldo" : "Tarjetas sin respaldo", s: "No las borre todavía", ir: "respaldo" },
    tar && { id: "tar", ic: "tomas", c: "#1F3A5F", n: tar, t: tar === 1 ? "Tarea para usted" : "Tareas para usted", s: "Del equipo", ir: "tar" }
  ].filter(Boolean);
  const antes = new Set($$("[data-pend]", caja).map(b => b.dataset.pend));
  caja.innerHTML = `<div class="pend-cab"><h2 id="h-pend">Pendientes de hoy</h2><span class="tenue chico">${items.length ? items.length : ""}</span></div>
    ${items.length ? `<div class="pend-grid">${items.map(x => `<button type="button" class="pend" data-pend="${x.id}" data-pir="${x.ir}" style="--c:${x.c}">
      <span class="pend-ic">${ico(x.ic, 20)}</span><b class="pend-n">${x.n}</b><span class="pend-t">${x.t}</span><small>${x.s}</small>${ico("chev", 16)}</button>`).join("")}</div>`
      : `<p class="pend-ok">${icoListo()}Todo al día. Buen trabajo.</p>`}`;
  $$("[data-pend]", caja).forEach((b, i) => { if (antes.size && !antes.has(b.dataset.pend)) entra(b, i * 30); });
}
function iniciarPendientes() {
  pintarPendHoy();
  $("#pendientes").addEventListener("click", e => {
    const b = e.target.closest("[data-pir]"); if (!b) return;
    const k = b.dataset.pir;
    if (k === "msg") return $("#oport").closest(".bloque").scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "start" });
    if (k === "tar") return $("#tareas-b").scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "start" });
    if (k === "maleta") return abrirSesion(proxima().id, "maleta");
    irVista(k);
  });
}

/* ---------- Buscador para todo ---------- */
const GAL_LISTA = [["parque", "Familia del parque", "Familia en exterior · 24 fotos", "f-familia"], ["xv", "Quinceañera de noviembre", "XV en estudio · 180 fotos", "f-xv"], ["oct", "Novios de octubre", "Boda · 420 fotos", "f-boda"], ["dic", "Novios de diciembre", "Boda con video · 610 fotos", "f-pareja"], ["bebe", "Familia del recién nacido", "Recién nacido · 38 fotos", "f-bebe"]];
const PANTALLAS = [["Nueva reserva", "Apartar una fecha paso a paso", "plus", "nueva"], ["Cámara en vivo", "Conectar la cámara", "camara", "envivo"], ["Subir fotos", "A la galería de una familia", "subir", "subir"], ["Ofertas por WhatsApp", "A un grupo de clientes", "send", "ofertas"], ["Contacto y portafolio", "Compartir con un toque", "contacto", "compartir"], ["Tarjetas y respaldo", "Disco y nube", "sd", "respaldo"], ["Recibos", "Todos los pagos", "recibo", "cobrar"]];
const SUGIERE = ["XV", "Champerico", "Saldo", "Boda", "Bebé", "Recibo"];
function indiceBusca() {
  const L = [];
  CLI.forEach(c => L.push({ g: "Clientes", t: c.n, s: c.prox.t, f: c.hist[0][3], txt: [c.n, c.desde, c.tag, c.nota, c.prox.t, ...c.hist.map(h => h[1]), c.g.sitio].join(" "), ir: () => { irVista("clientes"); elegirCliente(c.id); if (fichaEnHoja()) { $("#cli-cuerpo").scrollTop = 0; abrirHoja($("#hoja-cli")); } } }));
  AG.forEach(s => L.push({ g: "Sesiones", t: s.t, s: `${cuandoTxt(s.d)} · ${hora12(s.h)} · ${s.n}`, f: s.f, txt: [s.t, s.n, s.lugar, s.tipo, DIAS[s.d], cuandoTxt(s.d)].join(" "), ir: () => { irVista("agenda"); abrirSesion(s.id); } }));
  RES.filter(r => r.estado !== "lista").forEach(r => L.push({ g: "Reservas", t: r.t, s: `${r.n} · ${fechaTxt(fechaEn(r.k))}`, f: r.f, txt: [r.t, r.n, r.origen, "reserva"].join(" "), ir: () => irVista("reservas") }));
  COBRAR.filter(c => !c.pagado && !c.cancelada).forEach(c => L.push({ g: "Por cobrar", t: `${c.n}`, s: `${c.que} · ${c.t} · ${Q(c.m)}`, f: c.f, txt: [c.n, c.que, c.t, "saldo cobro anticipo debe"].join(" "), ir: () => { irVista("cobrar"); setTimeout(() => { const li = $(`.cob[data-id="${c.id}"]`); if (li) { li.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" }); li.classList.add("resalta"); setTimeout(() => li.classList.remove("resalta"), 1600); } }, 80); } }));
  RECIBOS.forEach(r => L.push({ g: "Recibos", t: `Recibo No. ${numRec(r.num)}`, s: `${r.n} · ${Q(r.m)} · ${fechaCorta(r.fecha)}`, ic: "recibo", txt: [numRec(r.num), r.n, r.concepto, r.forma, "recibo pago"].join(" "), ir: () => abrirRecibo(r.num) }));
  GAL_LISTA.forEach(([id, n, s, f]) => L.push({ g: "Galerías", t: n, s, f, txt: [n, s, "galería fotos enlace"].join(" "), ir: () => { irVista("fotos"); setTimeout(() => $(`[data-gal-id="${id}"]`)?.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" }), 80); } }));
  PANTALLAS.forEach(([t, s, ic, k]) => L.push({ g: "Ir a", t, s, ic, txt: t + " " + s, ir: () => k === "nueva" ? (irVista("reservas"), abrirNuevaReserva()) : k === "subir" ? (irVista("fotos"), abrirSubida()) : irVista(k) }));
  return L;
}
let BU_RES = [];
function marcar1(t, q) {
  if (!q) return esc(t);
  const n = normal(t), w = q.split(/\s+/)[0], i = n.indexOf(w);
  if (i < 0) return esc(t);
  return esc(t.slice(0, i)) + "<mark>" + esc(t.slice(i, i + w.length)) + "</mark>" + esc(t.slice(i + w.length));
}
function pintarBusca() {
  const raw = $("#bu-q").value, q = normal(raw.trim()), c = $("#bu-cuerpo");
  if (!q) {
    c.innerHTML = `<p class="bu-et">Pruebe con</p><div class="bu-sug">${SUGIERE.map(x => `<button type="button" data-sug="${x}">${x}</button>`).join("")}</div>
      <p class="bu-et">Ir rápido a</p><div class="bu-grupo">${PANTALLAS.map((p, i) => filaBu({ t: p[0], s: p[1], ic: p[2] }, "p" + i, "")).join("")}</div>`;
    BU_RES = indiceBusca().filter(x => x.g === "Ir a");
    return;
  }
  const ws = q.split(/\s+/), todo = indiceBusca().filter(x => ws.every(w => normal(x.txt).includes(w)));
  BU_RES = todo;
  if (!todo.length) { c.innerHTML = `<p class="bu-nada">${ico("search", 28)}<span>Nada con «${esc(raw.trim())}».<br>Pruebe con un nombre, un lugar o un tipo de sesión.</span></p>`; return; }
  const grupos = {};
  todo.forEach((x, i) => (grupos[x.g] ||= []).push([x, i]));
  c.innerHTML = Object.entries(grupos).map(([g, xs]) => `<p class="bu-et">${g} <span>${xs.length}</span></p><div class="bu-grupo">${xs.slice(0, 5).map(([x, i]) => filaBu(x, i, q)).join("")}</div>`).join("");
  $$(".bu-fila", c).forEach((b, i) => entra(b, Math.min(i, 8) * 20));
}
function filaBu(x, i, q) {
  return `<button type="button" class="bu-fila" data-bi="${i}">${x.f ? `<span class="foto bu-f ${x.f}" aria-hidden="true"></span>` : `<span class="bu-ic">${ico(x.ic, 18)}</span>`}
    <span class="bu-t"><b>${marcar1(x.t, q)}</b><small>${esc(x.s)}</small></span>${ico("chev", 16)}</button>`;
}
function abrirBusca() {
  const b = $("#busca"); if (!b.hidden) return;
  b._foco = document.activeElement;
  b.hidden = false; requestAnimationFrame(() => b.classList.add("ver"));
  document.documentElement.classList.add("con-hoja");
  $("#bu-q").value = ""; pintarBusca();
  setTimeout(() => $("#bu-q").focus(), 30);
}
function cerrarBusca() {
  const b = $("#busca"); if (b.hidden) return;
  b.classList.remove("ver"); setTimeout(() => { if (!b.classList.contains("ver")) b.hidden = true; }, 260);
  bloquear();
}
function iniciarBusca() {
  document.addEventListener("click", e => { if (e.target.closest("[data-buscar]")) abrirBusca(); });
  addEventListener("keydown", e => {
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName))) { e.preventDefault(); abrirBusca(); }
    if (e.key === "Escape" && !$("#busca").hidden) { e.stopImmediatePropagation(); cerrarBusca(); }
  }, true);
  $("#bu-q").addEventListener("input", pintarBusca);
  $("#bu-q").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); const x = BU_RES[0]; if (x) { cerrarBusca(); setTimeout(x.ir, 120); } }
    if (e.key === "ArrowDown") { e.preventDefault(); $(".bu-fila", $("#bu-cuerpo"))?.focus(); }
  });
  $("#bu-cuerpo").addEventListener("keydown", e => {
    if (!/Arrow(Up|Down)/.test(e.key)) return;
    const fs = $$(".bu-fila", $("#bu-cuerpo")), i = fs.indexOf(document.activeElement); if (i < 0) return;
    e.preventDefault(); const n = fs[i + (e.key === "ArrowDown" ? 1 : -1)]; (n || $("#bu-q")).focus();
  });
  $("#bu-cuerpo").addEventListener("click", e => {
    const s = e.target.closest("[data-sug]"); if (s) { $("#bu-q").value = s.dataset.sug; pintarBusca(); $("#bu-q").focus(); return; }
    const f = e.target.closest("[data-bi]"); if (!f) return;
    const k = f.dataset.bi, x = k.startsWith("p") ? BU_RES[Number(k.slice(1))] : BU_RES[Number(k)];
    if (x) { cerrarBusca(); setTimeout(x.ir, 140); }
  });
  $("#bu-cancel").addEventListener("click", cerrarBusca);
  $("#busca").addEventListener("click", e => { if (e.target.id === "busca") cerrarBusca(); });
}

/* ---------- Tiempo real: varios teléfonos y aparatos a la vez ---------- */
const ROLES = { "Dueño": ["D", "#111111", "iPhone"], "Recepción": ["R", "#4A4A4A", "iPad"], "Editor": ["E", "#7A7A7A", "computadora"], "Asistente": ["A", "#9A9A9A", "iPhone"] };
const qs = new URLSearchParams(location.search);
const EMBED = qs.get("embed") === "1";
function tipoAparato() {
  if (qs.get("aparato")) return qs.get("aparato");
  const ua = navigator.userAgent;
  if (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "iPad";
  if (matchMedia("(pointer: coarse)").matches) return Math.min(screen.width, screen.height) < 600 ? "iPhone" : "tablet";
  return "computadora";
}
const YO = { id: Math.random().toString(36).slice(2, 9), t: Date.now() + Math.random(), rol: ROLES[qs.get("rol")] ? qs.get("rol") : "Dueño", aparato: tipoAparato() };
const PEERS = new Map();
let canal = null; try { canal = new BroadcastChannel("fgs-sistema-completo"); } catch (e) { canal = null; }
let REMOTO = false, syncT = 0;
const icoAparato = a => a === "iPhone" ? "celu" : a === "iPad" || a === "tablet" ? "tableta" : "compu";
const aparatoTxt = a => a === "computadora" ? "la computadora" : `el ${a}`;
function enviar(tipo, datos = {}) { if (!canal || REMOTO) return; try { canal.postMessage({ tipo, de: YO.id, rol: YO.rol, aparato: YO.aparato, t: YO.t, datos }); } catch (e) { /* sin canal */ } }
const lider = () => [...PEERS.values()].every(p => p.t > YO.t);
function sync() { if (REMOTO || !canal || !PEERS.size) return; clearTimeout(syncT); syncT = setTimeout(() => enviar("estado", estado()), 160); }
const setArr = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, [...v]]));
function estado() {
  return { S: { ...S }, NUM_REC, COBRAR, RECIBOS, AG, RES, TAREAS, TARJ: TARJ.map(t => ({ ...t, copiando: null })),
    OP: OPORT.map(o => [o.id, o.estado || null, o.logro]), MAL: setArr(MAL), TOM: setArr(TOM), AGO: [...AG_OFRECIDO], CLE: [...CL.enviadas],
    GAL: { ...GAL }, INV: { ...INV }, REC: { ...REC }, ENL: ENLACES,
    G: { sel: G.sel, pagadas: [...G.pagadas], completa: G.completa, extraVendido: G.extraVendido, avisoMas: G.avisoMas },
    ENV: { ses: ENV.ses, conectada: ENV.conectada, pausa: ENV.pausa, fotos: ENV.fotos, n: ENV.n, camDe: ENV.camDe } };
}
const reemplazar = (arr, nuevo) => arr.splice(0, arr.length, ...nuevo);
function aplicar(e) {
  REMOTO = true;
  try {
    Object.assign(S, e.S); NUM_REC = e.NUM_REC;
    reemplazar(COBRAR, e.COBRAR); reemplazar(RECIBOS, e.RECIBOS); reemplazar(AG, e.AG); reemplazar(RES, e.RES); reemplazar(TAREAS, e.TAREAS); reemplazar(TARJ, e.TARJ);
    e.OP.forEach(([id, est, logro]) => { const o = OPORT.find(x => x.id === id); if (o) { o.estado = est || undefined; if (logro) o.logro = logro; } });
    [[MAL, e.MAL], [TOM, e.TOM]].forEach(([dst, src]) => { Object.keys(dst).forEach(k => delete dst[k]); Object.entries(src).forEach(([k, v]) => dst[k] = new Set(v)); });
    AG_OFRECIDO.clear(); e.AGO.forEach(x => AG_OFRECIDO.add(x)); CL.enviadas = new Set(e.CLE);
    Object.assign(GAL, e.GAL); Object.assign(INV, e.INV); Object.assign(REC, e.REC); Object.assign(ENLACES, e.ENL);
    Object.assign(G, { sel: e.G.sel, pagadas: new Set(e.G.pagadas), completa: e.G.completa, extraVendido: e.G.extraVendido, avisoMas: e.G.avisoMas });
    const nuevas = e.ENV.fotos.length > ENV.fotos.length;
    Object.assign(ENV, { ses: e.ENV.ses, conectada: e.ENV.conectada, pausa: e.ENV.pausa, fotos: e.ENV.fotos, n: e.ENV.n, camDe: e.ENV.camDe });
    if (ENV.camDe !== YO.id) clearTimeout(ENV.t);
    repintar(nuevas);
  } finally { REMOTO = false; }
}
function repintar(fotosNuevas) {
  pintarCifras();
  OPORT.forEach(o => { const li = $(`.op[data-id="${o.id}"]`); if (li) { li.classList.toggle("lograda", o.estado === "lograda"); $(".op-pie", li).innerHTML = pieOp(o); } });
  pintarPendientes(); pintarCobrar(); pintarRecibos(); pintarAgenda(); pintarAvisoRes();
  if (VISTA === "reservas") { pintarReservas(); pintarRecordatorios(); }
  pintarClientes(); elegirCliente(CL.sel); pintarGalerias(); actualizarGaleria(); pintarFamPagos(); pintarRespaldo(); pintarTareas(); pintarMas();
  if (VISTA === "envivo") pintarEnVivo(); else cifrasEV();
  if (SESV.includes(VISTA)) pintarSubnav(VISTA);
  if (SES) { SES = AG.find(x => x.id === SES.id) || null; if (SES && abiertas.has($("#hoja-ses"))) pintarSesion(); else if (!SES) cerrarHoja($("#hoja-ses"), true); }
  if (fotosNuevas && ENV.fam) pantallaFoto(vivasEV().pop());
  pendHoy();
}
function miembros() {
  const reales = [{ ...YO, yo: true }, ...[...PEERS.entries()].map(([id, p]) => ({ id, ...p }))];
  const usados = new Set(reales.map(m => m.rol));
  const sim = ["Dueño", "Recepción", "Editor"].filter(r => !usados.has(r)).map(r => ({ rol: r, aparato: ROLES[r][2], sim: true }));
  return [...reales, ...sim];
}
function avatarEq(m, chico) {
  const [ini, c] = ROLES[m.rol] || ["?", "#5B574F"];
  return `<span class="av-eq${chico ? " chico" : ""}" style="--c:${c}" title="${m.rol} · ${m.aparato}"><b>${ini}</b><i>${ico(icoAparato(m.aparato), 10)}</i></span>`;
}
function pintarEquipo() {
  const ms = miembros(), reales = ms.filter(m => !m.sim).length;
  const tira = $("#equipo-vivo");
  if (tira) tira.innerHTML = `<div class="eq-lista">${ms.map(m => `<span class="eq-m${m.yo ? " yo" : ""}">${avatarEq(m)}<span><b>${m.yo ? "Usted" : m.rol}</b><small>${m.yo ? `${m.rol} · ` : ""}${m.aparato === "computadora" ? "compu" : m.aparato}</small></span></span>`).join("")}</div>
    <div class="eq-acc"><span class="eq-vivo"><i></i>${ms.length} en línea${reales > 1 ? ` · ${reales} aparatos de verdad` : ""}</span>
    ${EMBED ? "" : `${btn("Ver en dos teléfonos", "celu", "bt-0 bt-chico", 'data-dos="1"')}${btn("Abrir otra ventana", "share", "bt-0 bt-chico eq-otra", 'data-otra-v="1"')}`}</div>`;
  const lado = $("#equipo-lado");
  tablero();
  if (lado) lado.innerHTML = `<p class="mono">EN LÍNEA</p><div class="eq-avs">${ms.map(m => avatarEq(m, true)).join("")}</div>`;
}
function feedLocalDe(rol) { const [ini, c] = ROLES[rol] || ["?", "#5B574F"]; return `<span class="quien" style="--c:${c}" title="${rol}">${ini}</span>`; }
function alFeed(ic, html, clave = "") { feedLocal(ic, html, clave, YO.rol); enviar("feed", { ic, html, clave }); sync(); }
function alFeedDe(rol, ic, html) { feedLocal(ic, html, "", rol); enviar("feed", { ic, html, quien: rol }); sync(); }
const avisoLocal = aviso;
aviso = (html, op = {}) => { const el = avisoLocal(html, op); enviar("aviso", { html, op }); sync(); return el; };
function iniciarTiempoReal() {
  pintarEquipo();
  if (EMBED) document.documentElement.classList.add("embed");
  document.addEventListener("click", e => {
    if (e.target.closest("[data-dos]")) abrirDosTel();
    if (e.target.closest("[data-otra-v]")) {
      const libres = Object.keys(ROLES).filter(r => !miembros().some(m => !m.sim && m.rol === r));
      window.open(`${location.pathname}?rol=${encodeURIComponent(libres[0] || "Asistente")}`, "_blank");
    }
  });
  if (!canal) return;
  canal.onmessage = ({ data: m }) => {
    if (!m || m.de === YO.id) return;
    const nuevo = !PEERS.has(m.de);
    if (m.tipo === "adios") { PEERS.delete(m.de); pintarEquipo(); pendHoy(); return; }
    PEERS.set(m.de, { rol: m.rol, aparato: m.aparato, t: m.t, visto: Date.now() });
    if (m.rol === YO.rol && m.t < YO.t) { const libre = Object.keys(ROLES).find(r => r !== m.rol && ![...PEERS.values()].some(p => p.rol === r)); if (libre) { YO.rol = libre; enviar("hola"); } }
    if (nuevo) {
      enviar("hola");
      if (lider()) setTimeout(() => enviar("estado", estado()), 250);
      avisoLocal(`Se conectó <b>${m.rol}</b>`, { ic: icoAparato(m.aparato), sub: `Desde ${aparatoTxt(m.aparato)}: lo que haga se ve aquí al instante` });
      pintarEquipo(); pendHoy();
    }
    if (m.tipo === "estado") aplicar(m.datos);
    else if (m.tipo === "feed") feedLocal(m.datos.ic, m.datos.html, m.datos.clave, m.datos.quien || m.rol);
    else if (m.tipo === "aviso") avisoLocal(m.datos.html, { ...m.datos.op, sub: `${m.datos.op?.sub ? m.datos.op.sub + " · " : ""}desde ${aparatoTxt(m.aparato)} de ${m.rol}` });
    else if (m.tipo === "tarea" && m.datos.para === YO.rol) avisoLocal(`Le asignaron: <b>${esc(m.datos.t)}</b>`, { ic: "tomas", sub: `${m.rol} se la pasó desde ${aparatoTxt(m.aparato)}` });
  };
  enviar("hola");
  setInterval(() => {
    enviar("hola");
    const ya = Date.now(); let cambio = false;
    PEERS.forEach((p, k) => { if (ya - p.visto > 11000) { PEERS.delete(k); cambio = true; } });
    if (cambio) { pintarEquipo(); pendHoy(); }
  }, 4000);
  addEventListener("pagehide", () => enviar("adios"));
}
/* Dos teléfonos lado a lado (cada uno es el sistema de verdad, conectado al otro) */
function abrirDosTel() {
  const d = $("#dos-tel"), tels = $("#dt-tels");
  tels.innerHTML = [["Recepción", "iPhone"], ["Editor", "iPhone"]].map(([rol, ap]) => `<figure class="dt-marco"><div class="dt-esc"><iframe title="Teléfono de ${rol}" src="${location.pathname}?embed=1&rol=${encodeURIComponent(rol)}&aparato=${ap}"></iframe></div><figcaption>${avatarEq({ rol, aparato: ap }, true)}<span>Teléfono de <b>${rol}</b></span></figcaption></figure>`).join("");
  d.hidden = false; requestAnimationFrame(() => d.classList.add("ver"));
  document.documentElement.classList.add("con-hoja");
  escalarDosTel(); setTimeout(() => $("#dt-x").focus({ preventScroll: true }), 80);
}
function escalarDosTel() {
  const tels = $("#dt-tels"); if (!tels || $("#dos-tel").hidden) return;
  const W = tels.clientWidth, H = tels.clientHeight - 40, n = 2, gap = 16;
  const esc2 = Math.min(1, (W - gap * (n - 1) - 16 * n) / n / 390, (H - 16) / 844);
  $$(".dt-esc", tels).forEach(x => { x.style.setProperty("--e", esc2.toFixed(3)); });
}
function cerrarDosTel() {
  const d = $("#dos-tel"); d.classList.remove("ver");
  setTimeout(() => { d.hidden = true; $("#dt-tels").innerHTML = ""; }, 280);
  bloquear();
}

/* ---------- Tareas del equipo ---------- */
const TAREAS = [
  { id: "t1", t: "Editar las 38 fotos del recién nacido", para: "Editor", hecha: false },
  { id: "t2", t: "Confirmar las reservas nuevas", para: "Recepción", hecha: false },
  { id: "t3", t: "Llamar a los novios de octubre por el saldo", para: null, hecha: false },
  { id: "t4", t: "Recoger el álbum 30×30 en el laboratorio", para: null, hecha: false }
];
let TAR_ASIG = null;
function pintarTareas() {
  const ul = $("#tareas"); if (!ul) return;
  const orden = [...TAREAS].sort((a, b) => a.hecha - b.hecha);
  ul.innerHTML = orden.map(t => `<li class="tar${t.hecha ? " hecha" : ""}" data-tid="${t.id}">
    <button type="button" class="chk tar-chk" role="checkbox" aria-checked="${t.hecha}" aria-label="Marcar como hecha: ${esc(t.t)}"><span class="caja">${t.hecha ? icoListo() : ""}</span></button>
    <span class="tar-t">${esc(t.t)}</span>
    ${t.para ? `<button type="button" class="tar-para" data-asig="1" aria-label="Cambiar a quién le toca">${avatarEq({ rol: t.para, aparato: (miembros().find(m => m.rol === t.para) || {}).aparato || ROLES[t.para][2] }, true)}<span>${t.para}</span></button>`
      : `<button type="button" class="tar-para vacia" data-asig="1">${ico("userplus", 15)}<span>Asignar</span></button>`}
    ${TAR_ASIG === t.id ? `<div class="tar-asig">${Object.keys(ROLES).slice(0, 3).map(r => `<button type="button" class="chip-b" data-a="${r}">${r}</button>`).join("")}</div>` : ""}
  </li>`).join("");
  const pend = TAREAS.filter(t => !t.hecha).length;
  $("#tar-n").textContent = pend ? `${pend} por hacer` : "Todo hecho";
  pendHoy(); tablero();
}
function iniciarTareas() {
  pintarTareas();
  $("#tareas").addEventListener("click", e => {
    const li = e.target.closest(".tar"); if (!li) return;
    const t = TAREAS.find(x => x.id === li.dataset.tid);
    if (e.target.closest(".tar-chk")) {
      t.hecha = !t.hecha;
      if (t.hecha) alFeed("check", `Tarea hecha: <b>${esc(t.t)}</b>`); else sync();
      const c = $(".tar-chk .caja", li); c.innerHTML = t.hecha ? icoListo() : ""; li.classList.toggle("hecha", t.hecha); $(".tar-chk", li).setAttribute("aria-checked", t.hecha);
      setTimeout(() => { pintarTareas(); $$("#tareas .tar").forEach((x, i) => entra(x, i * 20)); }, 420);
      return;
    }
    if (e.target.closest("[data-asig]")) { TAR_ASIG = TAR_ASIG === t.id ? null : t.id; pintarTareas(); entra($(".tar-asig", $(`.tar[data-tid="${t.id}"]`))); return; }
    const a = e.target.closest("[data-a]");
    if (a) {
      t.para = a.dataset.a; TAR_ASIG = null; pintarTareas();
      const m = miembros().find(x => x.rol === t.para);
      enviar("tarea", { t: t.t, para: t.para });
      alFeed("tomas", `Tarea para <b>${t.para}</b>: ${esc(t.t)}`);
      avisoLocal(`Le llegó a <b>${t.para}</b>`, { ic: icoAparato(m?.aparato), sub: `En ${aparatoTxt(m?.aparato || ROLES[t.para][2])}${m && !m.sim ? " · al instante" : ""}` });
    }
  });
  $("#tar-form").addEventListener("submit", e => {
    e.preventDefault();
    const v = $("#tar-in").value.trim(); if (v.length < 3) { $("#tar-in").focus(); return; }
    TAREAS.unshift({ id: "t" + Date.now(), t: v, para: null, hecha: false });
    $("#tar-in").value = ""; pintarTareas(); entra($("#tareas .tar"));
    alFeed("plus", `Tarea nueva: <b>${esc(v)}</b>`);
  });
}

/* ---------- Más: mosaico con fotos y datos en vivo ---------- */
function pintarMas() {
  const m = $("#mosaico"); if (!m) return;
  const sc = sinCopia(), eligiendo = 1, sinEnviar = GAL.publicadaBebe ? 0 : 1;
  const tiles = [
    { ir: "fotos", t: "Galerías", f: "f-xv", d: `${eligiendo} familia eligiendo ahora`, vivo: true, x: sinEnviar ? `${sinEnviar} por mandar` : "" },
    { ir: "compartir", t: "Portafolio", f: "f-boda", d: "6 álbumes para mandar" },
    { ir: "ofertas", t: "Ofertas", f: "f-camisola", d: "27 apartaron con la última" },
    { ir: "respaldo", t: "Respaldo", f: "f-graduacion", d: sc ? `${sc} ${sc === 1 ? "tarjeta" : "tarjetas"} sin copia` : "Todo en dos lugares", alerta: !!sc },
    { ir: "pagina", t: "Su página", f: "f-familia", d: webN ? `${webN} ${webN === 1 ? "aviso nuevo" : "avisos nuevos"}` : "Lo que ven en internet", ancho: true }
  ];
  m.innerHTML = tiles.map(x => `<button type="button" class="mos${x.ancho ? " ancho" : ""}${x.alerta ? " alerta" : ""}" data-ir="${x.ir}">
    <span class="foto ${x.f}" aria-hidden="true"></span><span class="mos-som" aria-hidden="true"></span>
    ${x.x ? `<span class="mos-x">${x.x}</span>` : ""}
    <span class="mos-txt"><b>${x.t}</b><small>${x.vivo ? "<i></i>" : x.alerta ? ico("alerta", 13) : ""}${x.d}</small></span></button>`).join("")
    + `<button type="button" class="mos ancho eq" data-dos="1"><span class="mos-eq">${miembros().map(x => avatarEq(x)).join("")}</span><span class="mos-txt"><b>Equipo en vivo</b><small><i></i>${miembros().length} en línea · véalo en dos teléfonos</small></span></button>`;
}

/* ---------- Subir fotos a la galería de una familia ---------- */
const SUB = { gal: "bebe", fotos: [], fase: "elegir", url: [] };
const GAL_SUB = GAL_LISTA.filter(g => g[0] !== "oct");
function abrirSubida(gal) {
  SUB.url.forEach(u => URL.revokeObjectURL(u)); Object.assign(SUB, { gal: gal || SUB.gal || "bebe", fotos: [], fase: "elegir", url: [] });
  pintarSubida(); abrirHoja($("#hoja-sub")); $("#sub-cuerpo").scrollTop = 0;
}
function pintarSubida() {
  const c = $("#sub-cuerpo"), g = GAL_LISTA.find(x => x[0] === SUB.gal);
  if (SUB.fase === "elegir") {
    c.innerHTML = `<h4 class="grupo-t">¿A qué galería?</h4>
      <div class="sub-gals">${GAL_SUB.map(([id, n, s, f]) => `<button type="button" class="nr-cli" data-sg="${id}" aria-pressed="${id === SUB.gal}"><span class="foto av ${f}" aria-hidden="true"></span><b>${n}</b></button>`).join("")}</div>
      <label class="sub-zona" id="sub-zona" for="sub-in"><span class="sub-zic">${ico("subir", 30)}</span><b>Elegir fotos del aparato</b><small>Del carrete del iPhone, del iPad o de la compu. También puede arrastrarlas aquí.</small>
        <input id="sub-in" type="file" accept="image/*" multiple class="sr"></label>
      ${btn("Usar 24 fotos de muestra", "images", "bt-0 bt-full", 'id="sub-muestra"')}
      <p class="sub-nota">${ico("lock", 14)}En el demo las fotos no salen de su aparato.</p>`;
    return;
  }
  const tot = SUB.fotos.length, listas = SUB.fotos.filter(f => f.fase === "lista").length;
  c.innerHTML = `<div class="sub-cab"><span class="foto ${g[3]}" aria-hidden="true"></span><div><small>Subiendo a</small><b>${g[1]}</b></div></div>
    <div class="sub-pasos"><span class="on" id="sp-1">${ico("subir", 14)}Subir</span><span id="sp-2">${ico("lock", 14)}Marca de agua</span><span id="sp-3">${ico("check", 14)}Lista</span></div>
    <div class="sub-stats"><b id="sub-n">${listas} de ${tot}</b><span id="sub-vel">Preparando…</span></div>
    <div class="prog sub-prog"><i id="sub-barra" style="transform:scaleX(${listas / tot})"></i></div>
    <ul class="sub-grid" id="sub-grid">${SUB.fotos.map((f, i) => `<li class="sub-ft ${f.fase}" data-si="${i}"><span class="foto ${f.c || ""}" style="${f.url ? `background-image:url('${f.url}')` : `background-position:${f.pos}`}" aria-hidden="true"></span>
      <svg class="sub-anillo" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15" class="an-pista"/><circle cx="18" cy="18" r="15" class="an-lleno" stroke-dasharray="94.25" stroke-dashoffset="94.25"/></svg>
      <span class="sub-wm" aria-hidden="true">FOTO GONZÁLEZ</span><span class="sub-ok">${ico("check", 12)}</span></li>`).join("")}</ul>
    <div class="sub-fin" id="sub-fin" hidden></div>`;
}
function empezarSubida(lista) {
  SUB.fotos = lista; SUB.fase = "subiendo"; pintarSubida();
  let i = 0, activas = 0, bytes = 0; const t0 = performance.now(), total = lista.length;
  const grid = $("#sub-grid");
  const paso = () => {
    while (activas < 3 && i < total) {
      const k = i++, f = SUB.fotos[k], li = $(`[data-si="${k}"]`, grid), ring = $(".an-lleno", li), dur = calma ? 200 : 650 + Math.random() * 700;
      activas++; f.fase = "subiendo"; li.className = "sub-ft subiendo";
      const ini = performance.now();
      const anima = ahora => {
        const p = Math.min(1, (ahora - ini) / dur);
        ring.style.strokeDashoffset = 94.25 * (1 - p);
        if (p < 1) return requestAnimationFrame(anima);
        f.fase = "marca"; li.className = "sub-ft marca"; bytes += f.mb;
        setTimeout(() => {
          f.fase = "lista"; li.className = "sub-ft lista"; activas--;
          const listas = SUB.fotos.filter(x => x.fase === "lista").length, seg = (performance.now() - t0) / 1000;
          $("#sub-n").textContent = `${listas} de ${total}`;
          $("#sub-vel").textContent = listas < total ? `${(bytes / seg).toFixed(1)} MB/s · quedan ${Math.max(1, Math.round((total - listas) * seg / listas))} s` : `${bytes.toFixed(0)} MB en ${seg.toFixed(1)} s`;
          $("#sub-barra").style.transform = `scaleX(${listas / total})`;
          if (listas > total / 3) $("#sp-2").classList.add("on");
          if (listas === total) terminarSubida(bytes); else paso();
        }, calma ? 60 : 420);
      };
      requestAnimationFrame(anima);
    }
  };
  paso();
}
function terminarSubida(mb) {
  $("#sp-3").classList.add("on");
  const g = GAL_LISTA.find(x => x[0] === SUB.gal), n = SUB.fotos.length, fin = $("#sub-fin");
  fin.innerHTML = `<p class="todo-listo">${icoListo()}${n} fotos listas, con marca de agua</p>
    ${btn("Mandar el enlace a la familia", "link", "bt-1 bt-full", 'id="sub-mandar"')}`;
  fin.hidden = false; entra(fin); fin.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "nearest" });
  alFeed("subir", `${n} fotos subidas a la galería de <b>${g[1]}</b>`);
  aviso(`Fotos subidas · <b>${n}</b>`, { ic: "subir", sub: `${g[1]} · ${mb.toFixed(0)} MB` });
}
function iniciarSubida() {
  $("#subir-fotos").addEventListener("click", () => abrirSubida());
  const c = $("#sub-cuerpo");
  c.addEventListener("click", async e => {
    const sg = e.target.closest("[data-sg]");
    if (sg) { SUB.gal = sg.dataset.sg; $$("[data-sg]", c).forEach(b => b.setAttribute("aria-pressed", b === sg)); return; }
    if (e.target.closest("#sub-muestra")) {
      const g = GAL_LISTA.find(x => x[0] === SUB.gal), lista = Array.from({ length: 24 }, (_, i) => ({ c: azar(FOTOS_TIPO[{ parque: "familia", xv: "xv", dic: "boda", bebe: "bebe" }[SUB.gal]] || [g[3]]), pos: posF(i + 3), mb: 18 + Math.random() * 14, fase: "espera" }));
      return empezarSubida(lista);
    }
    if (e.target.closest("#sub-mandar")) {
      const b = e.target.closest("#sub-mandar");
      if (!(await accion(b, { espera: "Creando el enlace…", listo: "Enlace listo" }))) return;
      if (SUB.gal === "bebe") GAL.publicadaBebe = true;
      ENLACES[SUB.gal] = { ...enlaceDe(SUB.gal), activo: true };
      pintarGalerias(); pintarMas();
      setTimeout(() => { cerrarHoja($("#hoja-sub"), true); setTimeout(() => abrirEnlace(SUB.gal, true), 260); }, 500);
    }
  });
  c.addEventListener("change", e => {
    if (e.target.id !== "sub-in") return;
    const fs = [...e.target.files].filter(f => f.type.startsWith("image/")).slice(0, 60);
    if (!fs.length) return;
    const lista = fs.map(f => { const url = URL.createObjectURL(f); SUB.url.push(url); return { url, mb: f.size / 1048576 || 8, fase: "espera" }; });
    empezarSubida(lista);
  });
  ["dragover", "dragleave", "drop"].forEach(t => c.addEventListener(t, e => {
    const z = $("#sub-zona"); if (!z) return;
    e.preventDefault(); z.classList.toggle("sobre", t === "dragover");
    if (t === "drop") { const inp = $("#sub-in"); inp.files = e.dataTransfer.files; inp.dispatchEvent(new Event("change", { bubbles: true })); }
  }));
}

/* ---------- Enlace individual de cada familia ---------- */
const ENLACES = { parque: { activo: true, pin: true, desc: false, dias: 21, visitas: 14 }, xv: { activo: true, pin: true, desc: false, dias: 3, visitas: 52 }, oct: { activo: true, pin: true, desc: false, dias: 14, visitas: 31 }, dic: { activo: true, pin: false, desc: true, dias: 0, visitas: 88 }, bebe: { activo: false, pin: true, desc: false, dias: 21, visitas: 0 } };
const CODIGOS = { parque: "parque-7K2", xv: "xv-noviembre-4QM", oct: "boda-octubre-9TD", dic: "boda-diciembre-2HX", bebe: "recien-nacido-5RB" };
const PINES = { parque: "4821", xv: "1503", oct: "7710", dic: "2512", bebe: "3094" };
const enlaceDe = id => ENLACES[id] || (ENLACES[id] = { activo: false, pin: true, desc: false, dias: 21, visitas: 0 });
const urlFam = id => `fotogonzalezstudio.com/g/${CODIGOS[id]}`;
function abrirEnlace(id, recien = false) {
  const e = enlaceDe(id), g = GAL_LISTA.find(x => x[0] === id);
  $("#enl-t").textContent = "Enlace de la familia";
  $("#enl-cuerpo").innerHTML = `
    <div class="enl-cab"><span class="foto ${g[3]}" aria-hidden="true"></span><div><b>${g[1]}</b><small>${g[2]}</small></div></div>
    <div class="enl-tarjeta${e.activo ? " on" : ""}${recien ? " recien" : ""}">
      <div class="enl-qr" id="enl-qr" aria-hidden="true"></div>
      <div class="enl-datos"><small>${e.activo ? "Enlace activo" : "Enlace apagado"}</small><b class="enl-url">${urlFam(id)}</b>
        ${e.pin ? `<span class="enl-pin">PIN <b>${PINES[id]}</b></span>` : `<span class="enl-pin">Sin PIN</span>`}
        <span class="enl-vis">${ico("eye", 13)}${e.visitas} ${e.visitas === 1 ? "visita" : "visitas"}${e.dias ? ` · vence en ${e.dias} días` : ""}</span></div>
    </div>
    <div class="grupo-ios enl-aj">
      ${[["activo", "Galería visible para la familia", "Si lo apaga, el enlace deja de abrir"], ["pin", "Pedir PIN para entrar", "Solo entra quien tenga el número"], ["desc", "Permitir descargar en alta", "Normalmente se libera al pagar el saldo"]].map(([k, t, d]) => `<button type="button" class="sw-fila" role="switch" aria-checked="${!!e[k]}" data-enl="${k}"><span class="txt">${t}<small>${d}</small></span><span class="switch" aria-hidden="true"><i></i></span></button>`).join("")}
      <div class="enl-dias"><span class="txt">Se cierra en<small>Después de esa fecha ya no abre</small></span><div class="enl-dias-bts">${[7, 21, 60].map(d => `<button type="button" class="chip-b" data-dias="${d}" aria-pressed="${e.dias === d}">${d} días</button>`).join("")}</div></div>
    </div>
    <div class="rc-bts">
      ${btn(e.activo ? "Mandar enlace y PIN por WhatsApp" : "Activar y mandar a la familia", "wa", "bt-1 bt-full", 'data-ea="wa"')}
      <div class="rc-bts2">${btn("Copiar enlace", "copiar", "bt-0", 'data-ea="copiar"')}${btn("Verla como la familia", "eye", "bt-0", 'data-ea="ver"')}</div>
    </div>`;
  $("#enl-cuerpo").dataset.gid = id;
  cargarQR().then(() => { const q = qrcode(0, "M"); q.addData("https://" + urlFam(id)); q.make(); $("#enl-qr").innerHTML = q.createSvgTag({ cellSize: 3, margin: 0, scalable: true }); }).catch(() => { $("#enl-qr").innerHTML = ico("qr", 40); });
  abrirHoja($("#hoja-enlace")); $("#enl-cuerpo").scrollTop = 0;
}
function iniciarEnlace() {
  const c = $("#enl-cuerpo");
  c.addEventListener("click", async ev => {
    const id = c.dataset.gid, e = enlaceDe(id);
    const sw = ev.target.closest("[data-enl]");
    if (sw) {
      const k = sw.dataset.enl; e[k] = !e[k]; sw.setAttribute("aria-checked", e[k]); sync();
      if (k === "activo" || k === "pin") setTimeout(() => { abrirEnlace(id); }, 220);
      return;
    }
    const d = ev.target.closest("[data-dias]");
    if (d) { e.dias = Number(d.dataset.dias); $$("[data-dias]", c).forEach(x => x.setAttribute("aria-pressed", x === d)); $(".enl-vis", c).innerHTML = `${ico("eye", 13)}${e.visitas} visitas · vence en ${e.dias} días`; sync(); return; }
    const a = ev.target.closest("[data-ea]"); if (!a) return;
    const g = GAL_LISTA.find(x => x[0] === id);
    if (a.dataset.ea === "wa") {
      if (!(await accion(a, { espera: "Abriendo WhatsApp…", listo: "Enviado" }))) return;
      e.activo = true; if (id === "bebe") GAL.publicadaBebe = true;
      simularWA({ para: g[1], f: g[3], texto: `Hola. ¡Sus fotos ya están listas! Las puede ver y elegir aquí: ${urlFam(id)}${e.pin ? `\nSu PIN: ${PINES[id]}` : ""}\nMarque con el corazón sus favoritas. La galería está abierta ${e.dias} días.`, respuesta: "¡Ya las estamos viendo! Están preciosas.", nota: "" });
      alFeed("link", `Enlace enviado a <b>${g[1]}</b>`);
      setTimeout(() => { e.visitas++; pintarGalerias(); pintarMas(); sync(); }, 3000);
      pintarGalerias();
    } else if (a.dataset.ea === "copiar") {
      try { await navigator.clipboard.writeText("https://" + urlFam(id)); } catch (er) { /* sin permiso */ }
      await accion(a, { espera: "Copiando…", listo: "Copiado", ms: 200 });
      setTimeout(() => { a.disabled = false; a.classList.remove("listo"); a.style.minWidth = ""; poner(a, `${ico("copiar", 20)}<span>Copiar enlace</span>`); }, 1500);
    } else {
      cerrarHoja($("#hoja-enlace"), true);
      PORTAL.dentro = false; PORTAL.pin = ""; pintarPin(); irPortal("pt-pin", true);
      if (modoHoja()) abrirCliente(); else if (!calma) $("#cliente .cel").animate([{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 600, easing: EASE });
      avisoLocal("Así la ve la familia", { ic: "eye", sub: "Su galería privada, con su enlace y su PIN" });
    }
  });
}

/* ---------- WhatsApp como en el iPhone ---------- */
let WA_T = [];
simularWA = function ({ texto, respuesta = "", para = "Cliente", f = "", sms = false } = {}) {
  const w = $("#wa"); WA_T.forEach(clearTimeout); WA_T = [];
  w.classList.toggle("sms", sms); $("#wa-dia-t") && ($("#wa-dia-t").textContent = "");
  $("#wa-n").textContent = para; $("#wa-est").textContent = "en línea";
  const av = $("#wa-av");
  av.className = "wa-av" + (f ? " foto " + f : "");
  av.textContent = f ? "" : (para.match(/\p{L}+/gu) || ["F"]).slice(0, 2).map(x => x[0]).join("").toUpperCase();
  const chat = $("#wa-chat"); chat.innerHTML = `<span class="wa-dia">Hoy</span>`;
  const burbuja = (txt, yo) => {
    const b = document.createElement("div"); b.className = "wa-b" + (yo ? " yo" : "");
    b.innerHTML = `<p></p><small><span class="h"></span>${yo ? '<span class="tk">✓</span>' : ""}</small>`;
    $("p", b).textContent = txt; $(".h", b).textContent = hora();
    chat.append(b); if (!calma) b.animate([{ opacity: 0, transform: `translateY(10px) scale(0.98)` }, { opacity: 1, transform: "none" }], { duration: 320, easing: EASE });
    chat.scrollTop = chat.scrollHeight; return b;
  };
  const yo = burbuja(texto, true);
  const t = (ms, fn) => WA_T.push(setTimeout(fn, calma ? Math.min(ms, 300) : ms));
  t(450, () => { $(".tk", yo).textContent = "✓✓"; });
  t(1100, () => { $(".tk", yo).classList.add("leido"); });
  if (respuesta) {
    let esc2;
    t(1500, () => { $("#wa-est").textContent = "escribiendo…"; esc2 = document.createElement("div"); esc2.className = "wa-b escribe"; esc2.innerHTML = "<i></i><i></i><i></i>"; chat.append(esc2); chat.scrollTop = chat.scrollHeight; });
    t(3100, () => { esc2?.remove(); $("#wa-est").textContent = "en línea"; burbuja(respuesta, false); });
  }
  if (w.hidden) {
    w._foco = document.activeElement;
    w.hidden = false; requestAnimationFrame(() => w.classList.add("ver"));
    document.documentElement.classList.add("con-hoja");
    setTimeout(() => $("#wa-atras").focus({ preventScroll: true }), 60);
  }
};
function cerrarWA() {
  const w = $("#wa"); if (w.hidden) return;
  WA_T.forEach(clearTimeout); WA_T = [];
  w.classList.remove("ver"); setTimeout(() => { if (!w.classList.contains("ver")) w.hidden = true; }, 320);
  bloquear();
  if (w._foco && document.contains(w._foco)) w._foco.focus({ preventScroll: true });
}
function iniciarWA() {
  $("#wa-atras").addEventListener("click", cerrarWA);
  $("#wa").addEventListener("click", e => { if (e.target.id === "wa") cerrarWA(); });
  const top = $(".wa-top"), panel = $(".wa-panel"); let y0 = null, dy = 0;
  top.addEventListener("pointerdown", e => { if (e.target.closest("button") || !enCel()) return; y0 = e.clientY; dy = 0; panel.style.transition = "none"; top.setPointerCapture(e.pointerId); });
  top.addEventListener("pointermove", e => { if (y0 === null) return; dy = Math.max(0, e.clientY - y0); panel.style.transform = `translateY(${dy}px)`; });
  const fin = () => { if (y0 === null) return; y0 = null; panel.style.transition = ""; panel.style.transform = ""; if (dy > 110) cerrarWA(); };
  top.addEventListener("pointerup", fin); top.addEventListener("pointercancel", fin);
}

/* ---------- Portal de la familia: entra con su PIN y ve todas sus sesiones ---------- */
const PORTAL = { dentro: false, pant: "pt-pin", pin: "", proxPagada: false };
const SES_FAM = [
  { id: "activa", t: "Familia en exterior", fecha: "Noviembre 2026", f: "f-familia", activa: true },
  { id: "mundial", t: "Sesión Mundial 2026", fecha: "Junio 2026", f: "f-camisola", n: 12, fotos: ["f-camisola", "f-mundial", "f-familia"] },
  { id: "navidad", t: "Mini sesión navideña", fecha: "Diciembre 2025", f: "f-navidad", n: 8, fotos: ["f-navidad", "f-familia", "f-pastel"] },
  { id: "primer", t: "Primer año de la hija", fecha: "Febrero 2024", f: "f-primer", n: 15, fotos: ["f-primer", "f-pastel", "f-bebe"] }
];
const PANTS = ["pt-pin", "pt-ini", "cel-scroll", "pt-ses"];
function irPortal(id, atras = false) {
  if (id !== "pt-pin" && !PORTAL.dentro) { PORTAL.dentro = true; pintarPortalIni(); }
  if (id === PORTAL.pant) return;
  const de = $("#" + PORTAL.pant), a = $("#" + id);
  PORTAL.pant = id;
  $$(".pt-pant").forEach(p => { if (p !== de && p !== a) { p.classList.remove("activa"); p.inert = true; } });
  a.inert = false; de.inert = true;
  if (calma) { de.classList.remove("activa"); a.classList.add("activa"); }
  else {
    a.classList.add("activa");
    a.animate([{ transform: `translateX(${atras ? -30 : 100}%)` }, { transform: "none" }], { duration: 380, easing: EASE });
    de.animate([{ transform: "none", opacity: 1 }, { transform: `translateX(${atras ? 100 : -30}%)`, opacity: atras ? 1 : .6 }], { duration: 380, easing: EASE }).onfinish = () => de.classList.remove("activa");
  }
  $("#cel-sub").textContent = id === "pt-pin" ? "Su portal privado" : "Familia del parque";
  a.scrollTop = 0;
  actualizarGaleria(); if (id === "pt-ini") pintarPortalIni();
}
function pintarPin(error) {
  $("#pin-puntos").innerHTML = [0, 1, 2, 3].map(i => `<i class="${i < PORTAL.pin.length ? "on" : ""}"></i>`).join("");
  $("#pin-msj").textContent = error ? "Ese PIN no es. Pruebe otra vez." : "Llegó por WhatsApp junto con su enlace.";
  $("#pin-msj").classList.toggle("error", !!error);
}
function teclaPin(d) {
  if (d === "x") PORTAL.pin = PORTAL.pin.slice(0, -1);
  else if (PORTAL.pin.length < 4) PORTAL.pin += d;
  pintarPin();
  if (PORTAL.pin.length === 4) setTimeout(() => {
    if (PORTAL.pin === PINES.parque) {
      $("#pin-puntos").classList.add("ok");
      setTimeout(() => { PORTAL.pin = ""; pintarPin(); $("#pin-puntos").classList.remove("ok"); irPortal("pt-ini"); }, 420);
      alFeed("eye", "<b>La familia del parque</b> entró a su portal con su PIN");
    } else {
      PORTAL.pin = ""; pintarPin(true);
      if (!calma) $("#pin-puntos").animate([{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(8px)" }, { transform: "translateX(-5px)" }, { transform: "translateX(0)" }], { duration: 380, easing: EASE });
    }
  }, 180);
}
function pintarPortalIni() {
  const mios = RECIBOS.filter(r => r.n === "Familia del parque"), tot = mios.reduce((t, r) => t + r.m, 0);
  $("#pt-ini").innerHTML = `
    <div class="pti-hola"><small>${new Date().toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long" })}</small><h2>Hola, familia del parque</h2></div>
    <div class="pti-prox"><span class="foto f-maracas" aria-hidden="true"></span><div class="pti-prox-t"><small>Su próxima sesión</small><b>Mini sesión navideña 2026</b><span>Sábado 12 de diciembre · 10:00 a. m.</span>
      ${PORTAL.proxPagada ? `<em class="ok">${ico("check", 12)}Anticipo pagado</em>` : `<button type="button" class="pti-pagar" data-pt="pagar">Pagar anticipo · ${Q(175)}</button>`}</div></div>
    <p class="pti-et">Sus sesiones</p>
    <div class="pti-lista">${SES_FAM.map(s => `<button type="button" class="pti-ses" data-pts="${s.id}"><span class="foto ${s.f}" aria-hidden="true"></span>
      <span class="pti-ses-t"><b>${s.t}</b><small>${s.fecha}</small></span>
      <em class="${s.activa ? "vivo" : ""}">${s.activa ? `<i></i>Elija sus fotos` : `${ico("check", 11)}${s.n} fotos`}</em></button>`).join("")}</div>
    <button type="button" class="pti-pagos" data-pt="pagos"><span class="fpg-ic">${ico("recibo", 16)}</span><span><b>Mis pagos y recibos</b><small>${mios.length} recibos · ${Q(tot)}</small></span>${ico("chev", 15)}</button>
    <button type="button" class="pti-salir" data-pt="salir">${ico("lock", 13)}Salir del portal</button>`;
}
function abrirSesFam(id) {
  const s = SES_FAM.find(x => x.id === id);
  if (s.activa) { vistaFam("fotos"); return irPortal("cel-scroll"); }
  $("#pt-ses").innerHTML = `
    <div class="fam-portada"><span class="foto ${s.f}" aria-hidden="true"></span><button type="button" class="pt-atras" data-pt="ini" aria-label="Volver a mis sesiones">${ico("back", 18)}</button>
      <div class="fpo-txt"><small>${s.fecha}</small><h2 class="cel-t">${s.t}</h2><p>${s.n} fotos · entregada</p></div></div>
    <div class="pts-bts"><button type="button" class="btn btn-chico btn-acento" data-pt="bajar">${ico("download", 15)}Descargar todas</button><button type="button" class="btn btn-chico" data-pt="imprimir">${ico("frame", 15)}Pedir impresas</button></div>
    <div class="galeria pts-grid">${Array.from({ length: s.n }, (_, i) => `<div class="ft libre"><span class="foto ${s.fotos[i % s.fotos.length]}" style="background-position:${posF(i + 2)}" aria-hidden="true"></span></div>`).join("")}</div>`;
  irPortal("pt-ses");
}
function iniciarPortal() {
  $("#pin-teclas").innerHTML = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "x"].map(d => d ? `<button type="button" data-tecla="${d}" aria-label="${d === "x" ? "Borrar" : d}">${d === "x" ? ico("back", 20) : d}</button>` : "<span></span>").join("");
  pintarPin();
  $("#pt-pin").addEventListener("click", e => {
    const t = e.target.closest("[data-tecla]");
    if (t) { if (!calma) t.animate([{ transform: "scale(0.9)" }, { transform: "scale(1)" }], { duration: 200, easing: EASE }); return teclaPin(t.dataset.tecla); }
    if (e.target.closest("#pin-muestra")) { PORTAL.pin = ""; [..."4821"].forEach((d, i) => setTimeout(() => teclaPin(d), calma ? 0 : 140 + i * 170)); }
  });
  $(".pantalla").addEventListener("click", async e => {
    const s = e.target.closest("[data-pts]"); if (s) return abrirSesFam(s.dataset.pts);
    const b = e.target.closest("[data-pt]"); if (!b) return;
    const k = b.dataset.pt;
    if (k === "ini") return irPortal("pt-ini", true);
    if (k === "salir") { PORTAL.dentro = false; return irPortal("pt-pin", true); }
    if (k === "pagos") { vistaFam("pagos"); return irPortal("cel-scroll"); }
    if (k === "bajar") { b.disabled = true; b.textContent = "Descargando…"; setTimeout(() => { b.disabled = false; b.innerHTML = `${ico("check", 15)}Descargadas`; toastCel("Fotos guardadas en su carrete, en alta resolución."); }, 1200); return; }
    if (k === "imprimir") return toastCel("Elija una foto y el tamaño. Llega en 5 días.");
    if (k === "pagar" && !PORTAL.proxPagada) {
      b.disabled = true; b.textContent = "Pagando…";
      setTimeout(() => {
        PORTAL.proxPagada = true;
        nuevoRecibo({ n: "Familia del parque", concepto: "Anticipo · Mini sesión navideña 2026", m: 175, forma: "Tarjeta", saldo: 175, f: "f-navidad" });
        pintarPortalIni(); toastCel("Anticipo pagado. Su fecha quedó segura.");
        red(() => { venta(175); alFeed("cash", "<b>La familia del parque</b> pagó el anticipo de la mini sesión navideña · Q 175.00"); aviso("Anticipo pagado desde el portal · <b>Q 175.00</b>", { ic: "cash", sub: "Familia del parque · mini sesión navideña" }); });
      }, 800);
    }
  });
  PANTS.forEach(id => { const p = $("#" + id); p.inert = id !== PORTAL.pant; p.classList.toggle("activa", id === PORTAL.pant); });
  if (qs.get("portal") === "1") setTimeout(() => { if (modoHoja()) abrirCliente(); else if (!calma) $("#cliente .cel").animate([{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 600, easing: EASE }); }, 400);
}

/* ---------- Tablero de Hoy: línea de sesiones, avance del mes y equipo ---------- */
let RANGO = "semana", tabRAF = 0;
const META_MES = 50000;
function tablero() { cancelAnimationFrame(tabRAF); tabRAF = requestAnimationFrame(() => { pintarLinea(); pintarAvance(); pintarEquipoTablero(); }); }
function pintarLinea() {
  const el = $("#linea"); if (!el) return;
  const hoy = hoyIdx();
  const ses = AG.filter(s => RANGO === "hoy" ? s.d === hoy : true).sort((a, b) => a.d - b.d || hNum(a.h) - hNum(b.h));
  if (!ses.length) { el.innerHTML = `<p class="linea-vacia">${ico("calendar", 22)}<span>Sin sesiones hoy.</span><button type="button" class="chip-b" data-rango-ir="semana">Ver la semana</button></p>`; return; }
  el.innerHTML = ses.map(s => {
    const x = Math.max(0, Math.min(1, (hNum(s.h) - 8) / 10)), tipo = pendiente(s) ? "bla" : s.luz ? "gri" : "neg";
    const [hh, mm] = s.h.split(":");
    return `<div class="ln-fila${s.d === hoy ? " hoy" : ""}"><span class="ln-h">${RANGO === "semana" ? `<small>${s.d === hoy ? "Hoy" : DIAS[s.d].slice(0, 3)}</small>` : ""}${hh.padStart(2, "0")}:${mm}</span>
      <span class="ln-raya" aria-hidden="true"></span>
      <button type="button" class="ln-pil ${tipo}" data-lses="${s.id}" style="--x:${(x * 34).toFixed(1)}%"><span class="ln-t">${s.t}</span><span class="ln-av foto ${s.f}" aria-hidden="true"></span></button></div>`;
  }).join("");
}
function pintarAvance() {
  const el = $("#av-pct"); if (!el) return;
  const pct = Math.min(100, S.ingresos / META_MES * 100);
  odometro(el, pct, n => n.toFixed(1));
  $("#av-meta").textContent = S.ingresos >= META_MES ? `¡Meta de ${Q(META_MES)} cumplida!` : `de la meta de ${Q(META_MES)} · faltan ${Q(META_MES - S.ingresos)}`;
  const serie = [.30, .36, .33, .45, .41, .52, .49, .58, .55, .63, .60, pct / 100];
  const W = 200, H = 70, pts = serie.map((v, i) => [i / (serie.length - 1) * W, H - 6 - v * (H - 14)]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], cx = (x0 + x1) / 2; d += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`; }
  $("#av-path").setAttribute("d", d);
}
const PAPEL_EQ = { "Dueño": ["Tomar fotos y vender", ["f-xv", "f-boda"], 18, 22, 4], "Recepción": ["Agenda y cobros", ["f-familia", "f-bebe"], 24, 30, 7], "Editor": ["Editar y entregar", ["f-pareja", "f-primer"], 12, 16, 3] };
function pintarEquipoTablero() {
  const st = $("#tb-eq-stats"), ng = $("#tb-eq-negro"); if (!st || !ng) return;
  const ses = 10 + AG.length, porEnt = GAL.publicadaBebe ? 2 : 3, ent = GAL.publicadaBebe ? 12 : 11;
  const linea = v => `<svg viewBox="0 0 40 10" aria-hidden="true"><path d="M0 ${10 - v} C10 ${8 - v} 14 ${2 + v / 3} 22 ${6 - v / 4} S34 ${3} 40 ${5 - v / 5}"/></svg>`;
  st.innerHTML = [["Sesiones del mes", ses, 6], ["Por entregar", porEnt, 3], ["Entregadas", ent, 8]].map(([t, n, v]) => `<div><small>${t}</small><b>${n}</b>${linea(v)}</div>`).join("");
  const ms = miembros();
  ng.innerHTML = Object.entries(PAPEL_EQ).map(([rol, [que, fotos, hBase, tBase, cli]]) => {
    const mias = TAREAS.filter(t => t.para === rol), hechas = hBase + mias.filter(t => t.hecha).length, tot = tBase + mias.length;
    const m = ms.find(x => x.rol === rol), pct = Math.round(hechas / tot * 100);
    return `<div class="eqn">
      <div class="eqn-cab"><b>${rol}</b><small>${que}</small></div>
      <div class="eqn-avs">${avatarEq(m || { rol, aparato: ROLES[rol][2] })}${fotos.map(f => `<span class="foto ${f}" aria-hidden="true"></span>`).join("")}</div>
      <div class="eqn-prog"><span>Progreso</span><span>${pct} %</span></div>
      <div class="eqn-barra"><i style="transform:scaleX(${pct / 100})"></i></div>
      <div class="eqn-pie"><span>${ico("check", 15)}${hechas}</span><span>${ico("users", 15)}${cli}</span><span class="eqn-on"><i></i>${m && !m.sim && !m.yo ? "Conectado" : m && m.yo ? "Usted" : "En línea"}</span></div>
    </div>`;
  }).join("");
}
function iniciarTablero() {
  tablero();
  $("#tb-rango").addEventListener("click", e => {
    const b = e.target.closest("[data-rango]"); if (!b) return;
    RANGO = b.dataset.rango;
    $$("[data-rango]").forEach(x => x.setAttribute("aria-selected", x === b));
    $("#tb-rango").style.setProperty("--i", RANGO === "hoy" ? 0 : 1);
    pintarLinea(); $$("#linea .ln-fila").forEach((f, i) => entra(f, i * 30));
  });
  $("#linea").addEventListener("click", e => {
    const p = e.target.closest("[data-lses]"); if (p) return abrirSesion(p.dataset.lses);
    if (e.target.closest("[data-rango-ir]")) $('[data-rango="semana"]').click();
  });
  $("#tb-campana").addEventListener("click", () => {
    const u = $("#ultimo-b"); u.scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "start" });
    u.classList.add("resalta"); setTimeout(() => u.classList.remove("resalta"), 1400);
  });
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
    if (!$("#wa").hidden) return cerrarWA();
    if (!$("#llamada").hidden) return colgar();
    if (!$("#dos-tel").hidden) return cerrarDosTel();
    if ($("#visor").classList.contains("ver")) return cerrarVisor();
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
  if (v === "mas") pintarMas();
  if (v === "cobrar") pintarRecibos();
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
  const n = sinCopia() + webN, c = $("#cuenta-mas"); if (!c) return;
  c.textContent = n; c.classList.toggle("cero", !n);
}
function barraSup() { $("#barra-sup").classList.toggle("ver", scrollY > 64); }
window.antesDePalanca = id => {
  [...abiertas].forEach(h => cerrarHoja(h, true));
  if (id === "galeria") { irPortal("cel-scroll"); if (modoHoja()) abrirCliente(); return; }
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
  pintarMas();
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
  if (document.hidden || abiertas.size || ENV.fam || !lider()) return;
  const r = Math.random();
  const deEquipo = TAREAS.filter(t => !t.hecha && t.para && miembros().some(m => m.sim && m.rol === t.para));
  if (r < .22 && deEquipo.length) {
    const t = azar(deEquipo); t.hecha = true; pintarTareas();
    alFeedDe(t.para, "check", `<b>${t.para}</b> terminó: ${esc(t.t)}`);
    aviso(`<b>${t.para}</b> terminó una tarea`, { ic: "check", sub: `${esc(t.t)} · desde ${aparatoTxt(ROLES[t.para][2])}` });
    return;
  }
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
/* ---------- Cámara: datos de la última foto ---------- */
function hudEV() {
  const h = $("#ev-hud"); if (!h || !ENV.ult) return;
  const vivas = ENV.fotos.length, min = Math.max(1, (Date.now() - (ENV.inicio || Date.now())) / 60000);
  h.innerHTML = `${ico("zap", 14)}Última: <b>#${ENV.ult.num}</b> · ${ENV.ult.mb} MB · llegó en 0.8 s · <b>${Math.round(vivas / min)}</b> fotos por minuto`;
}

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
iniciarRecibos();
iniciarPago();
iniciarTareas();
iniciarSubida();
iniciarEnlace();
iniciarBusca();
iniciarTiempoReal();
iniciarTablero();
iniciarWA();
iniciarPortal();
iniciarPendientes();
pintarMas();
$("#dt-x").addEventListener("click", cerrarDosTel);
addEventListener("resize", escalarDosTel);
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

if (!EMBED) cintaDemo({ sistema: "Sistema completo", palancas: PALANCAS });

if (!calma) {
  $$("#v-hoy .titulo-v, #v-hoy .cifra, #prox-ses, #oport .op").forEach((el, i) => el.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 440, delay: 60 + Math.min(i, 8) * 45, easing: EASE, fill: "backwards" }));
  $(".cel").animate([{ opacity: 0, transform: "translateY(10px) scale(0.99)" }, { opacity: 1, transform: "none" }], { duration: 600, delay: 200, easing: EASE, fill: "backwards" });
}
setTimeout(ciclo, 14000);
