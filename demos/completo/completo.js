/* Demo · Sistema completo — Foto González Studio (Monterroso Dev Studio)
   Todo es de muestra y se simula en el navegador; en el sistema real lo mueve Supabase Realtime. */
"use strict";

/* ---------- Palancas de venta ---------- */
const PALANCAS = {
  vivo: { t: "El panel se mueve solo", d: "Cada anticipo, cada foto extra y cada consulta suma aquí en el mismo segundo, venga de la página, de la galería o de la tienda. el dueño ve cómo va el mes sin pedir cuentas ni abrir un Excel.", e: "Si a mediados de mes las cifras van bajas, se nota ese mismo día y se lanza una campaña." },
  ventas: { t: "Ventas que el sistema encuentra cada día", d: "Cada mañana el sistema revisa clientes, fechas, galerías y saldos, y arma la lista de a quién escribir y qué ofrecerle. Cada tarjeta trae el mensaje escrito: un toque y sale por WhatsApp.", e: "Los clientes que ya tiene el estudio vuelven a comprar sin que nadie tenga que acordarse de ellos." },
  fechas: { t: "Una fecha importante trae la siguiente sesión", d: "El sistema guarda cumpleaños, aniversarios y la edad de los bebés que el estudio fotografió. Avisa con semanas de anticipación para ofrecer el primer año, el aniversario o la foto de diciembre.", e: "Una familia que ya confió en el estudio es la más fácil de volver a atender." },
  cotizacion: { t: "Ninguna cotización se queda en visto", d: "Si alguien pidió precio y no respondió, a los 3 días aparece aquí con un recordatorio amable y las fechas que quedan libres.", e: "Recupera reservas que hoy se pierden solo porque nadie volvió a escribir." },
  saldo: { t: "Marca de agua hasta que paguen el saldo", d: "La familia ve su galería completa, pero con marca de agua y sin descarga en alta hasta que se registra el pago. El recordatorio de saldo sale con un toque.", e: "La familia quiere sus fotos, así que paga antes y el estudio no tiene que cobrar de forma incómoda." },
  resena: { t: "La reseña se pide en el momento justo", d: "El estudio todavía no tiene opiniones en Google ni en Facebook. Al día siguiente de cada entrega, el sistema propone pedirla, cuando la familia está contenta con sus fotos.", e: "Quien busca «fotógrafo en Retalhuleu» confía más en el estudio con reseñas recientes." },
  embudo: { t: "El embudo con montos", d: "Cada cliente está en una columna, de la consulta a la entrega, y cada columna dice cuánto dinero hay en ella. Se ve de un vistazo qué está por cerrarse.", e: "Se atiende primero lo que está más cerca de convertirse en dinero." },
  galeria: { t: "La galería que vende fotos extra", d: "El paquete trae 10 fotos. Si la familia marca más, en su celular le aparece la oferta de llevarse las extra o la galería completa, y paga ahí mismo. Desde cada foto puede pedir el cuadro.", e: "Es la venta más natural del estudio: la familia ya está enamorada de esas fotos." },
  anticipo: { t: "La fecha se aparta con anticipo", d: "Quien reserva en línea paga el anticipo para apartar. Si no paga en 24 horas, la fecha se libera sola para otra familia.", e: "Menos sábados perdidos por quien no llega, y más fechas para quien sí paga." },
  referidos: { t: "Referidos con premio", d: "Cada cliente tiene su código. La familia nueva recibe un descuento y quien la recomendó gana impresiones. El sistema lleva la cuenta.", e: "En Reu todos se conocen: los clientes contentos traen a los siguientes." },
  campanas: { t: "Campañas a quien sí le interesa", d: "Se escoge un grupo, por ejemplo familias con bebé fotografiado hace 6 a 12 meses, y una oferta. El mensaje le llega a cada uno con su nombre y los resultados entran en vivo. Así funcionó la sesión del Mundial.", e: "Llenar diciembre o una semana floja ya no depende de publicar y esperar." }
};
const VISTA_DE = { vivo: "hoy", ventas: "hoy", fechas: "hoy", cotizacion: "hoy", saldo: "hoy", resena: "hoy", embudo: "hoy", galeria: null, anticipo: "agenda", referidos: "clientes", campanas: "campanas" };

/* ---------- Estado ---------- */
const S = { ingresos: 38450, ventasN: 24, extra: 3115, consultas: 31, reservas: 13 };
const modoHoja = () => matchMedia("(max-width: 1279px)").matches;
const MES = new Date().toLocaleDateString("es-GT", { month: "long" });

/* ---------- Cifras ---------- */
function pintarCifras() {
  odometro($("#k-ing"), S.ingresos);
  odometro($("#k-ticket"), S.ingresos / S.ventasN);
  odometro($("#k-extra"), S.extra);
  odometro($("#k-conv"), Math.round(S.reservas / S.consultas * 100), n => Math.round(n) + " %");
}
function flotar(sel, monto) {
  if (calma) return;
  const caja = $(sel).parentElement, f = document.createElement("span");
  f.className = "flota"; f.textContent = "+" + Q(monto);
  caja.append(f);
  f.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)", offset: .25 }, { opacity: 0, transform: "translateY(-14px)" }], { duration: 1400, easing: EASE }).onfinish = () => f.remove();
}
function venta(m, { extra = false, cuenta = true } = {}) {
  S.ingresos += m; if (cuenta) S.ventasN++; if (extra) S.extra += m;
  pintarCifras(); flotar("#k-ing", m); if (extra) flotar("#k-extra", m);
}

/* ---------- Actividad ---------- */
function alFeed(ic, html, clave = "") {
  const feed = $("#feed");
  const prev = feed.firstElementChild;
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
  while (feed.children.length > 7) feed.lastElementChild.remove();
}

/* ---------- Ventas encontradas hoy ---------- */
const OPORT = [
  { id: "perez", pal: "fechas", ic: "cake", t: "Un bebé de su clientela cumple 1 año en 3 semanas", d: "Le hicieron su sesión de recién nacido en diciembre del año pasado. Es el momento de ofrecerle la sesión de primer año.", monto: 650,
    wa: "Hola. ¡Su bebé ya va a cumplir su primer año! ¿Le hacemos su sesión con pastel aquí en el estudio? Tenemos sábados libres en diciembre. Sesión de primer año: Q 650.00, con 15 fotos editadas.",
    resp: "¡Sí! Justo estábamos pensando en eso. ¿Tienen el sábado 13 en la mañana?", logro: "Respondió · apartó" },
  { id: "ruiz", ic: "heart", t: "Primer aniversario de unos novios: 5 de diciembre", d: "El estudio hizo su boda hace un año. Una sesión de aniversario con video corto es un buen regalo.", monto: 950,
    wa: "Hola. ¡Ya casi cumplen un año de casados! Para celebrarlo tenemos la sesión de aniversario con un video corto de 1 minuto: Q 950.00. ¿Les apartamos una fecha?",
    resp: "Qué bonito detalle. Sí, el domingo 7 por la tarde nos queda bien.", logro: "Respondió · apartó" },
  { id: "morales", ic: "images", t: "Una galería de XV vence en 3 días", d: "La familia eligió 32 fotos y todavía no ha pedido impresiones ni álbum.", monto: 1450,
    wa: "Hola. La galería de los XV está abierta hasta el viernes. Si quieren el álbum 30×30 con sus favoritas, este mes sale en Q 1,450.00 con la caja de regalo incluida.",
    resp: "Sí lo queremos, con la foto del vestido en la portada. ¿Cómo pagamos?", logro: "Pidió el álbum" },
  { id: "daniela", pal: "cotizacion", ic: "clock", t: "Una cotización de XV sin respuesta", d: "Se la mandaron hace 3 días: XV en estudio con video, Q 2,900.00. Quedan 2 sábados libres en marzo.", monto: 2900,
    wa: "Hola. ¿Pudo ver la cotización de los XV con video? Le cuento que de marzo solo nos quedan 2 sábados. Si le sirve, con Q 500.00 de anticipo se la apartamos hoy.",
    resp: "Perdón, se me pasó. Sí, apártenos el sábado 21. Ahorita le mando la boleta.", logro: "Respondió · apartó" },
  { id: "castillo", pal: "saldo", ic: "lock", t: "Saldo pendiente de una boda: Q 1,200.00", d: "Su galería de boda ya está lista, con marca de agua hasta que paguen el saldo.", monto: 1200,
    wa: "Hola. ¡Su galería de boda ya está lista! Pueden verla con su PIN. Al cancelar el saldo de Q 1,200.00 se quita la marca de agua y se habilita la descarga en alta.",
    resp: "¡Qué emoción! Ya hice la transferencia, le mando la boleta.", logro: "Pagó el saldo" },
  { id: "resena", pal: "resena", ic: "star", t: "Aún sin reseñas en Google: pídalas al entregar", d: "Tres familias recibieron sus fotos ayer. Es el mejor momento para pedirles su opinión.", monto: 0,
    wa: "Hola. Gracias por confiar en Foto González Studio. Si les gustaron sus fotos, ¿nos ayudan con una reseña en Google? Les toma un minuto: g.page/fotogonzalez",
    resp: "¡Claro que sí! Ya la dejamos, quedamos encantados.", logro: "2 reseñas de 5 estrellas" }
];
function pintarOport() {
  $("#oport").innerHTML = OPORT.map(o => `
    <li class="op" data-id="${o.id}"${o.pal ? ` data-palanca="${o.pal}"` : ""}>
      <span class="op-ic">${ico(o.ic, 20)}</span>
      <div class="op-txt"><b>${o.t}</b><p>${o.d}</p></div>
      <div class="op-acc">
        <span class="op-monto">${o.monto ? `Venta posible<b>${Q(o.monto)}</b>` : "Para atraer clientes nuevos<b>Reseñas</b>"}</span>
        <button class="btn btn-acento btn-chico op-btn" type="button">${ico("chat", 16)}Mandar por WhatsApp</button>
        <span class="op-estado"><i></i><span class="op-estado-txt"></span></span>
      </div>
    </li>`).join("");
  $$("#oport .op-btn").forEach(b => b.addEventListener("click", () => mandarOport(b.closest(".op").dataset.id)));
  pintarPendientes();
}
function pintarPendientes() {
  const pend = OPORT.filter(o => !o.hecha);
  $("#n-op").textContent = pend.length;
  const c = $("#cuenta-op"); c.textContent = pend.length; c.classList.toggle("cero", !pend.length);
  const total = pend.reduce((s, o) => s + o.monto, 0);
  $("#op-total").textContent = total ? Q(total) + " por cerrar" : "Todo enviado por hoy";
}
function mandarOport(id) {
  const o = OPORT.find(x => x.id === id), li = $(`.op[data-id="${id}"]`);
  if (o.hecha) return;
  o.hecha = true;
  simularWA({ texto: o.wa, respuesta: o.resp, nota: "En el sistema real el botón abre WhatsApp con este mensaje, directo al número de la familia. Sale desde el +502 5016 8853 del estudio." });
  li.classList.add("enviada");
  $(".op-estado-txt", li).textContent = "Enviado · esperando respuesta";
  pintarPendientes();
  alFeed("send", `Mensaje enviado a <b>${o.t.split(" ").slice(0, 2).join(" ")}</b>`);
  setTimeout(() => lograr(o, li), 4200 + Math.random() * 2600);
}
function lograr(o, li) {
  li.classList.remove("enviada"); li.classList.add("lograda");
  $(".op-estado", li).insertAdjacentHTML("afterbegin", ico("check", 16));
  $(".op-estado-txt", li).textContent = o.monto ? `${o.logro} · ${Q(o.monto)}` : o.logro;
  if (!calma) li.animate([{ transform: "scale(0.99)" }, { transform: "scale(1)" }], { duration: 260, easing: EASE });
  if (o.monto) venta(o.monto);
  if (o.id === "castillo") pagarCastillo(false);
  const msg = o.monto ? `<b>${o.logro}</b> · ${Q(o.monto)}` : `<b>${o.logro}</b> en Google`;
  alFeed(o.monto ? "cash" : "star", msg + `<br><span class="tenue">${o.t}</span>`);
  aviso(o.monto ? `${o.logro} · <b>${Q(o.monto)}</b>` : `<b>${o.logro}</b> en Google`, { ic: o.monto ? "cash" : "star", sub: o.t });
}

/* ---------- Embudo ---------- */
const COLS = ["Consulta", "Cotizada", "Anticipo", "Sesión", "Selección", "Entregada"];
const EMB = [
  { id: "e1", n: "Familia nueva", t: "Familia en el parque central", m: 850, c: 0 },
  { id: "e2", n: "Pareja de preboda", t: "Preboda en Champerico", m: 1200, c: 0 },
  { id: "e3", n: "Quinceañera de marzo", t: "XV con video", m: 2900, c: 1 },
  { id: "e4", n: "Familia del recién nacido", t: "Recién nacido", m: 950, c: 1 },
  { id: "e5", n: "Colegio La Asunción", t: "Graduación 2026", m: 4800, c: 2 },
  { id: "e6", n: "Mamá primeriza", t: "Maternidad", m: 950, c: 2 },
  { id: "e7", n: "Quinceañera de noviembre", t: "XV en estudio", m: 2400, c: 3 },
  { id: "e8", n: "Familia del parque", t: "Familia en exterior", m: 850, c: 4 },
  { id: "e9", n: "Novios de diciembre", t: "Boda con video", m: 7800, c: 4 },
  { id: "e10", n: "Novios de octubre", t: "Boda", m: 5800, c: 5 },
  { id: "e11", n: "Clienta de retrato", t: "Retrato en estudio", m: 450, c: 5 }
];
let nId = 20;
const tarjeta = e => `<article class="tj${e.nueva ? " nueva" : ""}" draggable="true" data-id="${e.id}">
  <b>${e.n}</b><span class="t">${e.t}</span><span class="m">${Q(e.m)}</span>
  ${e.c < 5 ? `<button class="tj-av" type="button" aria-label="Avanzar a ${COLS[e.c + 1]}">Avanzar ${ico("arrow", 13)}</button>` : ""}</article>`;
function pintarEmbudo(movido) {
  const caja = $("#embudo");
  const antes = new Map($$(".tj", caja).map(el => [el.dataset.id, el.getBoundingClientRect()]));
  caja.innerHTML = COLS.map((c, i) => {
    const cs = EMB.filter(e => e.c === i);
    return `<div class="col" data-c="${i}"><div class="col-cab"><b>${c}</b><span>${cs.length} · ${Q(cs.reduce((s, e) => s + e.m, 0))}</span></div><div class="col-cuerpo">${cs.map(tarjeta).join("")}</div></div>`;
  }).join("");
  EMB.forEach(e => delete e.nueva);
  if (calma) return;
  $$(".tj", caja).forEach(el => {
    const a = antes.get(el.dataset.id), b = el.getBoundingClientRect();
    if (!a) { if (antes.size) el.animate([{ opacity: 0, transform: "scale(0.95) translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: EASE }); return; }
    const dx = a.left - b.left, dy = a.top - b.top;
    if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }], { duration: el.dataset.id === movido ? 280 : 220, easing: EASE });
  });
}
function moverA(id, destino) {
  const e = EMB.find(x => x.id === id);
  if (!e || destino === e.c || destino < 0 || destino > 5) return;
  const desde = e.c; e.c = destino;
  pintarEmbudo(id);
  if (desde < 2 && destino >= 2) {
    const a = Math.round(e.m / 2); S.reservas++;
    venta(a);
    alFeed("cash", `Anticipo de <b>${e.n}</b> · ${Q(a)} · fecha apartada`);
  }
  if (desde < 5 && destino === 5) {
    const s = e.m - Math.round(e.m / 2);
    venta(s, { cuenta: false });
    alFeed("check", `<b>${e.n}</b> recibió sus fotos · saldo ${Q(s)}`);
    aviso(`Entregado: <b>${e.n}</b>`, { ic: "star", sub: "Mañana el sistema le propone pedirle la reseña" });
  }
}
function iniciarEmbudo() {
  const caja = $("#embudo");
  caja.addEventListener("click", ev => {
    const b = ev.target.closest(".tj-av"); if (!b) return;
    const id = b.closest(".tj").dataset.id, e = EMB.find(x => x.id === id);
    moverA(id, e.c + 1);
  });
  caja.addEventListener("dragstart", ev => { const t = ev.target.closest(".tj"); if (t) ev.dataTransfer.setData("text/plain", t.dataset.id); });
  caja.addEventListener("dragover", ev => { const col = ev.target.closest(".col"); if (!col) return; ev.preventDefault(); $$(".col.sobre", caja).forEach(c => c !== col && c.classList.remove("sobre")); col.classList.add("sobre"); });
  caja.addEventListener("dragleave", ev => { const col = ev.target.closest(".col"); if (col && !col.contains(ev.relatedTarget)) col.classList.remove("sobre"); });
  caja.addEventListener("drop", ev => { const col = ev.target.closest(".col"); if (!col) return; ev.preventDefault(); col.classList.remove("sobre"); moverA(ev.dataTransfer.getData("text/plain"), Number(col.dataset.c)); });
  pintarEmbudo();
}

/* ---------- Agenda ---------- */
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const AG = [
  { d: 0, h: "9:00", dur: "1 h", n: "Clienta de retrato", t: "Retrato en estudio", f: "f-retrato", a: 225 },
  { d: 1, h: "16:00", dur: "2 h", n: "Familia del recién nacido", t: "Recién nacido", f: "f-bebe", a: 475 },
  { d: 2, h: "10:00", dur: "1 h", n: "Quinceañera de marzo", t: "XV · prueba de vestido", f: "f-quince", a: 0, pend: true, debe: 600 },
  { d: 3, h: "15:00", dur: "2 h", n: "Pareja de preboda", t: "Sesión de pareja", f: "f-pareja", a: 600 },
  { d: 4, h: "8:00", dur: "4 h", n: "Colegio La Asunción", t: "Desfile y graduación", f: "f-graduacion", a: 2400 },
  { d: 5, h: "9:00", dur: "3 h", n: "Quinceañera de noviembre", t: "XV en estudio con video", f: "f-xv", a: 1200 },
  { d: 5, h: "16:00", dur: "1 h", n: "Familia del primer año", t: "Primer año · tema circo", f: "f-primer", a: 0, pend: true, debe: 325 },
  { d: 6, h: "17:00", dur: "6 h", n: "Novios de diciembre", t: "Boda · ceremonia y fiesta", f: "f-boda", a: 3900 }
];
const AG_OFRECIDO = new Set(), AG_RECORDADO = new Set();
function lunes() { const h = new Date(); const k = (h.getDay() + 6) % 7; h.setDate(h.getDate() - k); return h; }
function pintarAgenda() {
  const l = lunes(), hoy = (new Date().getDay() + 6) % 7;
  let libres = 0;
  $("#semana").innerHTML = DIAS.map((d, i) => {
    const f = new Date(l); f.setDate(l.getDate() + i);
    const ses = AG.filter(s => s.d === i).sort((x, y) => parseInt(x.h) - parseInt(y.h));
    const tardeLibre = !ses.some(s => parseInt(s.h) >= 13) && i >= hoy;
    if (tardeLibre && !AG_OFRECIDO.has(i)) libres++;
    const pasado = i < hoy;
    return `<div class="dia${i === hoy ? " hoy" : ""}${pasado ? " pasado" : ""}">
      <div class="dia-cab"><small>${d}</small><b>${f.getDate()}</b>${i === hoy ? '<span class="hoy-et">Hoy</span>' : ""}</div>
      <div class="lista">${ses.map((s, k) => {
        const id = i + "-" + k;
        const estado = s.pend
          ? (AG_RECORDADO.has(s.n) ? `<span class="est pend">${ico("clock", 13)}Recordatorio enviado</span>` : `<span class="est pend">${ico("clock", 13)}Falta anticipo · ${Q(s.debe)}</span><button type="button" class="mini-btn" data-recordar="${s.n}">${ico("send", 13)}Recordar</button>`)
          : `<span class="est ok">${ico("check", 13)}Anticipo ${Q(s.a)}</span>`;
        return `<article class="ses${s.pend ? " pend" : ""}${s.nueva ? " nueva" : ""}">
          <span class="ses-foto foto ${s.f}" aria-hidden="true"></span>
          <div class="ses-txt"><span class="h">${s.h} · ${s.dur}</span><b>${s.t}</b><small>${s.n}</small><div class="ses-est">${estado}</div></div>
        </article>`;
      }).join("")}${tardeLibre ? (AG_OFRECIDO.has(i)
        ? `<div class="libre ofrecido">${ico("check", 14)}<span>Tarde ofrecida a la lista de espera</span></div>`
        : `<div class="libre"><span>${ses.length ? "Tarde libre" : "Día libre"}</span><button type="button" class="mini-btn" data-ofrecer="${i}">${ico("sparkles", 13)}Ofrecer</button></div>`)
        : (!ses.length ? `<div class="libre pasado-txt"><span>Sin sesiones</span></div>` : "")}</div>
    </div>`;
  }).join("");
  AG.forEach(s => delete s.nueva);
  const ok = AG.filter(s => !s.pend);
  $("#ag-n").textContent = AG.length;
  $("#ag-p").textContent = AG.filter(s => s.pend && !AG_RECORDADO.has(s.n)).length;
  $("#ag-l").textContent = libres;
  odometro($("#ag-q"), ok.reduce((s, x) => s + x.a, 0));
  $$("[data-ofrecer]").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.ofrecer), f = new Date(lunes()); f.setDate(f.getDate() + i);
    const dia = DIAS[i].toLowerCase() + " " + f.getDate();
    simularWA({ texto: `Hola, le escribe Foto González Studio. Se nos liberó la tarde del ${dia}. Si quiere su sesión ese día, se la apartamos con el anticipo. ¿Le interesa?`, respuesta: "¡Sí! ¿A las 4 puede ser?", nota: "Se manda a las familias en lista de espera. En el sistema real sale desde el +502 5016 8853 del estudio." });
    AG_OFRECIDO.add(i); pintarAgenda();
    alFeed("send", `Tarde del <b>${dia}</b> ofrecida a 6 familias en lista de espera`);
  }));
  $$("[data-recordar]").forEach(b => b.addEventListener("click", () => {
    const s = AG.find(x => x.n === b.dataset.recordar);
    simularWA({ texto: `Hola. Le escribe Foto González Studio. Su fecha (${s.t.toLowerCase()}) sigue apartada hasta mañana. Para dejarla segura falta el anticipo de ${Q(s.debe)}. Aquí puede pagarlo: fotogonzalezstudio.com/pagar`, nota: "Si no entra el anticipo, la fecha se libera sola y vuelve a la página." });
    AG_RECORDADO.add(s.n); pintarAgenda();
    setTimeout(() => {
      s.pend = false; s.a = s.debe; s.nueva = true; venta(s.debe); pintarAgenda();
      alFeed("cash", `<b>${s.n}</b> pagó el anticipo · ${Q(s.debe)}`);
      aviso(`Anticipo recibido · <b>${s.n}</b>`, { ic: "cash", sub: `${Q(s.debe)} · la fecha ya quedó segura` });
    }, 5200);
  }));
}
function reservaEnVivo() {
  AG.push({ d: 6, h: "9:00", dur: "1 h", n: "Familia nueva", t: "Familia en el parque", f: "f-familia", a: 425, nueva: true });
  const e = EMB.find(x => x.id === "e1"); if (e && e.c < 2) { e.c = 2; pintarEmbudo("e1"); }
  S.reservas++; venta(425);
  pintarAgenda();
  alFeed("calendar", "<b>Reserva en línea</b> · una familia apartó el domingo · anticipo Q 425.00");
  aviso("Reserva nueva en línea · <b>familia en el parque</b>", { ic: "calendar", sub: "Pagó Q 425.00 de anticipo · domingo 9:00" });
}

/* ---------- Clientes ---------- */
const CLI = [
  { id: "valeria", n: "Clienta frecuente", ini: "CF", col: "#7A5C8E", desde: "Clienta desde 2022 · Residenciales Bella Aurora", fechas: [["cake", "Su cumpleaños", "22 de enero"], ["heart", "Aniversario de bodas", "9 de marzo"]],
    hist: [["Oct 2026", "Maternidad en estudio", 950], ["Mar 2025", "Aniversario · exterior", 850], ["Mar 2024", "Boda civil con video", 4200], ["Dic 2023", "Mini sesión navideña", 350]], cod: "REF-0142", refs: ["Familia del recién nacido", "Pareja de preboda"], tag: "Recomienda" },
  { id: "lopez", n: "Familia del parque", ini: "FP", col: "#8E2234", desde: "Clientes desde 2023 · San Sebastián", fechas: [["cake", "Cumpleaños de la hija", "14 de febrero"], ["heart", "Aniversario de bodas", "2 de junio"]],
    hist: [["Nov 2026", "Familia en exterior", 850], ["Jun 2026", "Sesión Mundial 2026", 350], ["Dic 2025", "Mini sesión navideña", 350], ["Feb 2024", "Primer año de la hija", 650]], cod: "REF-0217", refs: [], tag: "Eligiendo fotos" },
  { id: "perez", n: "Familia del bebé", ini: "FB", col: "#2F7D4F", desde: "Clientes desde 2025 · Champerico", fechas: [["cake", "El bebé cumple 1 año", "1 de diciembre"]],
    hist: [["Dic 2025", "Recién nacido", 950], ["Ago 2025", "Maternidad", 850]], cod: "REF-0388", refs: ["Familia nueva"], tag: "Cumple en 3 sem." },
  { id: "ruiz", n: "Novios de diciembre", ini: "ND", col: "#B7893A", desde: "Clientes desde 2025 · Retalhuleu", fechas: [["heart", "Aniversario de bodas", "5 de diciembre"], ["cake", "Cumpleaños de la novia", "18 de abril"]],
    hist: [["Dic 2025", "Boda con video", 7800], ["Oct 2025", "Preboda en Champerico", 1200]], cod: "REF-0451", refs: [], tag: "Aniversario" },
  { id: "morales", n: "Familia de la quinceañera", ini: "FQ", col: "#5B6B8C", desde: "Clientes desde 2024 · San Felipe", fechas: [["cake", "Cumpleaños de la quinceañera", "3 de noviembre"]],
    hist: [["Nov 2026", "XV en estudio con video", 2400], ["Nov 2025", "Retrato de cumpleaños", 450]], cod: "REF-0293", refs: [], tag: "Galería vence" },
  { id: "castillo", n: "Novios de octubre", ini: "NO", col: "#6B4A44", desde: "Clientes desde 2026 · Nuevo San Carlos", fechas: [["heart", "Boda", "17 de octubre"]],
    hist: [["Oct 2026", "Boda", 5800]], cod: "REF-0510", refs: [], tag: "Saldo pendiente" }
];
function pintarClientes() {
  $("#cli-n").textContent = "418 en total · " + CLI.length + " con algo hoy";
  $("#lista-cli").innerHTML = CLI.map(c => {
    const tot = c.hist.reduce((s, h) => s + h[2], 0);
    return `<li><button type="button" data-cli="${c.id}"><span class="av" style="background:${c.col}">${c.ini}</span>
      <span><b>${c.n}</b><small>${c.hist.length} ${c.hist.length === 1 ? "sesión" : "sesiones"} · ${Q(tot)}</small>${c.tag ? `<br><span class="tag">${c.tag}</span>` : ""}</span></button></li>`;
  }).join("");
  $$("#lista-cli button").forEach(b => b.addEventListener("click", () => elegirCliente(b.dataset.cli, true)));
}
function elegirCliente(id, anima) {
  const c = CLI.find(x => x.id === id), tot = c.hist.reduce((s, h) => s + h[2], 0);
  $$("#lista-cli button").forEach(b => b.setAttribute("aria-current", b.dataset.cli === id));
  const av = $("#fc-av"); av.textContent = c.ini; av.style.background = c.col;
  $("#fc-n").textContent = c.n; $("#fc-sub").textContent = c.desde;
  $("#fc-cifras").innerHTML = `<div><small>Total gastado</small><b>${Q(tot)}</b></div><div><small>Sesiones</small><b>${c.hist.length}</b></div><div><small>Ticket promedio</small><b>${Q(tot / c.hist.length)}</b></div>`;
  $("#fc-fechas").innerHTML = c.fechas.map(([i, t, f]) => `<li><span class="i">${ico(i, 15)}</span><span>${t}<small>${f} · el sistema avisa 3 semanas antes</small></span></li>`).join("");
  $("#fc-hist").innerHTML = c.hist.map(([f, t, m]) => `<li><span>${t}<small>${f}</small></span><span>${Q(m)}</span></li>`).join("");
  $("#fc-ref-in").innerHTML = `<div class="ref-fila"><div><h4 style="margin:0 0 6px">Código para recomendar</h4><span class="ref-cod">${c.cod}</span></div>
      <button class="btn btn-chico" type="button" id="ref-wa">${ico("share", 16)}Mandar su código</button></div>
    <p class="ref-txt">${c.refs.length ? `Esta clienta recomendó a <b>${c.refs.length} ${c.refs.length === 1 ? "familia" : "familias"}</b> y ganó <b>${Q(c.refs.length * 100)}</b> en impresiones.` : "Todavía no ha recomendado a nadie. Cada familia que llegue con su código le da Q 100.00 en impresiones."}</p>
    ${c.refs.length ? `<div class="ref-chips">${c.refs.map(r => `<span>${r}</span>`).join("")}</div>` : ""}`;
  $("#ref-wa").addEventListener("click", () => simularWA({
    texto: `Hola. Gracias por ser parte de Foto González Studio. Este es su código: ${c.cod}. Si una familia lo usa al reservar, ella recibe 10 % de descuento y usted gana Q 100.00 en impresiones.`,
    respuesta: "¡Qué bien! Se lo voy a pasar a mi hermana, que quiere fotos de los XV de su hija.",
    nota: "El sistema reconoce el código al reservar y le suma el premio a quien recomendó." }));
  if (anima && !calma) { const f = $("#ficha-cli"); f.classList.remove("cambia"); void f.offsetWidth; f.classList.add("cambia"); }
}

/* ---------- Galerías ---------- */
const GAL = { castilloPagada: false };
function pintarGalerias() {
  const n = G.sel.length;
  const filas = [
    { f: "f-familia", n: "Familia del parque", t: "Familia en exterior · 24 fotos",
      chips: `<span class="chip vivo"><i></i>Eligiendo ahora · ${n} de 10</span>${G.extraVendido ? `<span class="chip">${ico("cash", 12)}Compró extra</span>` : ""}`,
      der: `<small>Ventas extra <b>${Q(G.extraVendido)}</b></small>` },
    { f: "f-xv", n: "Quinceañera de noviembre", t: "XV en estudio con video · 180 fotos",
      chips: `<span class="chip alerta">${ico("clock", 12)}Vence en 3 días</span><span class="chip">Sin pedido de impresiones</span>`,
      der: `<small>Ventas extra <b>Q 0.00</b></small>` },
    { f: "f-boda", n: "Novios de octubre", t: "Boda · 420 fotos",
      chips: GAL.castilloPagada ? `<span class="chip vivo">${ico("unlock", 12)}Saldo pagado · descarga en alta</span>` : `<span class="chip lock">${ico("lock", 12)}Marca de agua · saldo ${Q(1200)}</span>`,
      der: GAL.castilloPagada ? `<small>Saldo <b>${Q(0)}</b></small>` : `<button class="btn btn-chico btn-tinta" type="button" id="pagar-castillo">Registrar pago</button>` },
    { f: "f-pareja", n: "Novios de diciembre", t: "Boda con video · 610 fotos",
      chips: `<span class="chip">${ico("check", 12)}Entregada</span><span class="chip">Álbum 30×30 pedido</span>`,
      der: `<small>Ventas extra <b>${Q(1975)}</b></small>` },
    { f: "f-bebe", n: "Familia del recién nacido", t: "Recién nacido · en edición",
      chips: `<span class="chip">El editor la está trabajando</span>`, der: `<small>Se publica <b>jueves</b></small>` }
  ];
  $("#galerias").innerHTML = filas.map(g => `<li class="gal"><span class="foto ${g.f}" aria-hidden="true"></span>
    <div><b>${g.n}</b><small>${g.t}</small><div class="chips">${g.chips}</div></div><div class="der">${g.der}</div></li>`).join("");
  $("#pagar-castillo")?.addEventListener("click", () => pagarCastillo(true));
}
function pagarCastillo(desdeGaleria) {
  if (GAL.castilloPagada) return;
  GAL.castilloPagada = true;
  pintarGalerias();
  if (desdeGaleria) {
    venta(1200, { cuenta: false });
    alFeed("unlock", "<b>Los novios de octubre</b> pagaron el saldo · se quitó la marca de agua");
    const o = OPORT.find(x => x.id === "castillo");
    if (!o.hecha) { o.hecha = true; const li = $('.op[data-id="castillo"]'); li.classList.add("lograda"); $(".op-estado", li).insertAdjacentHTML("afterbegin", ico("check", 16)); $(".op-estado-txt", li).textContent = "Pagó en el estudio · " + Q(1200); o.monto && pintarPendientes(); }
  } else {
    alFeed("unlock", "Se quitó la marca de agua de la galería de la boda");
  }
}

/* ---------- Campañas ---------- */
const SEG = [
  { id: "bebes", n: "Familias con bebé fotografiado hace 6 a 12 meses", c: 38 },
  { id: "mundial", n: "Familias que vinieron a la sesión Mundial 2026", c: 27 },
  { id: "inactivos", n: "Clientes que no vuelven desde 2025", c: 64 }
];
const OFR = [
  { id: "navidad", n: "Mini sesión navideña", d: "20 minutos en estudio · 8 fotos editadas", p: 350, msj: () => `Hola. Le escribe Foto González Studio. Ya armamos el set navideño en el estudio: mini sesión de 20 minutos con 8 fotos editadas por Q 350.00. Quedan pocos espacios en diciembre. ¿Le apartamos uno?` },
  { id: "anio", n: "Sesión de primer año", d: "Con pastel · 15 fotos y video corto", p: 650, msj: () => `Hola. ¡Su bebé ya va por su primer año! Le ofrecemos la sesión con pastel en el estudio, 15 fotos y un video corto, por Q 650.00. ¿Le apartamos fecha?` },
  { id: "cuadro", n: "Cuadro 40×60 de su foto favorita", d: "Listo en 5 días", p: 375, msj: () => `Hola. ¿Ya tiene su foto favorita en la pared? Este mes el cuadro 40×60 con marco de madera sale en Q 375.00. Solo díganos cuál y lo mandamos a imprimir.` }
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
  const s = SEG.find(x => x.id === CAM.seg), o = OFR.find(x => x.id === CAM.ofr);
  $("#cam-msj").textContent = o.msj();
  if (!CAM.corriendo) $("#cam-enviar-txt").textContent = `Enviar a ${s.c} por WhatsApp`;
}
function enviarCampana() {
  if (CAM.corriendo) return;
  const s = SEG.find(x => x.id === CAM.seg), o = OFR.find(x => x.id === CAM.ofr), btn = $("#cam-enviar");
  CAM.corriendo = true; btn.disabled = true; $("#cam-enviar-txt").textContent = "Enviando…";
  $$("#cam-seg input, #cam-ofr input").forEach(i => i.disabled = true);
  const res = $("#cam-res"); res.hidden = false;
  const meta = { env: s.c, lei: Math.round(s.c * .84), res: Math.round(s.c * .29), apa: Math.max(1, Math.round(s.c * .11)) };
  const val = { env: 0, lei: 0, res: 0, apa: 0 };
  ["env", "lei", "res", "apa"].forEach(k => { $("#n-" + k).dataset.v = 0; $("#n-" + k).textContent = "0"; $("#r-" + k).style.transform = "scaleX(0)"; });
  $("#n-q").dataset.v = 0; $("#n-q").textContent = Q(0);
  const pasos = 12; let k = 0;
  const tic = () => {
    k++;
    const avance = { env: Math.min(1, k / 3), lei: Math.min(1, k / 7), res: Math.min(1, Math.max(0, (k - 2) / 8)), apa: Math.min(1, Math.max(0, (k - 4) / 8)) };
    Object.keys(meta).forEach(m => {
      const v = Math.round(meta[m] * avance[m]);
      if (v !== val[m]) { val[m] = v; odometro($("#n-" + m), v, n => String(Math.round(n))); }
      $("#r-" + m).style.transform = `scaleX(${v / s.c})`;
    });
    odometro($("#n-q"), val.apa * o.p);
    if (k === 6) alFeed("chat", `Campaña «${o.n}»: <b>${val.res}</b> ya respondieron`, "cam");
    if (k < pasos) return setTimeout(tic, 750);
    const total = meta.apa * o.p;
    S.ventasN += meta.apa - 1; venta(total);
    S.reservas += meta.apa; pintarCifras();
    alFeed("cash", `Campaña «${o.n}»: <b>${meta.apa} reservas</b> · ${Q(total)}`, "cam");
    aviso(`Campaña «${o.n}» · <b>${meta.apa} reservas</b>`, { ic: "send", sub: `${Q(total)} generados en reservas` });
    CAM.corriendo = false; btn.disabled = false; $("#cam-enviar-txt").textContent = "Enviar otra campaña";
    $$("#cam-seg input, #cam-ofr input").forEach(i => i.disabled = false);
  };
  setTimeout(tic, 500);
}

/* ---------- Celular: la galería que vende ---------- */
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
function corazon(i, btn) {
  const k = G.sel.indexOf(i);
  if (k > -1) G.sel.splice(k, 1); else G.sel.push(i);
  if (!calma) $("span", btn).animate([{ transform: "scale(1)" }, { transform: "scale(1.22)" }, { transform: "scale(1)" }], { duration: 240, easing: EASE });
  actualizarGaleria();
  red(() => {
    const n = G.sel.length;
    alFeed("heart", `La familia del parque lleva <b>${n}</b> ${n === 1 ? "foto elegida" : "fotos elegidas"}${n > INCL ? ` · <b>${n - INCL} más</b> que su paquete` : ""}`, "sel-lopez");
    pintarGalerias();
    if (n > INCL && !G.avisoMas) { G.avisoMas = true; aviso("La familia del parque quiere <b>más fotos</b> de las que trae su paquete", { ic: "sparkles", sub: "Ya le apareció la oferta en su celular" }); }
  });
}
function toastCel(txt) {
  const t = $("#toast-cel"); $("#toast-cel-txt").textContent = txt;
  t.classList.add("ver"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("ver"), 2800);
}
function comprar(tipo) {
  const ext = extrasPend(); if (!ext.length) return;
  const monto = tipo === "toda" ? P_TODA : ext.length * P_EXTRA;
  const btn = $(tipo === "toda" ? "#of-toda" : "#of-unas"); btn.disabled = true; btn.textContent = "Pagando…";
  setTimeout(() => {
    if (tipo === "toda") G.completa = true; else ext.forEach(i => G.pagadas.add(i));
    G.extraVendido += monto;
    btn.disabled = false;
    actualizarGaleria();
    toastCel("Pago aprobado. Sus fotos ya están sin marca de agua.");
    red(() => {
      venta(monto, { extra: true });
      const que = tipo === "toda" ? "la galería completa" : `${ext.length} ${ext.length === 1 ? "foto extra" : "fotos extra"}`;
      alFeed("cash", `La familia del parque compró <b>${que}</b> · ${Q(monto)}`);
      aviso(`Venta extra en la galería · <b>${Q(monto)}</b>`, { ic: "cash", sub: `La familia del parque compró ${que}` });
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
  toastCel(`Pedido recibido: ${n}. Lo sigue en «Mi pedido».`);
  red(() => {
    venta(p);
    alFeed("frame", `La familia del parque pidió <b>${n}</b> de la foto ${impFoto + 1} · ${Q(p)}`);
    aviso(`Pedido de impresión · <b>${Q(p)}</b>`, { ic: "bag", sub: `Familia del parque · ${n} · foto ${impFoto + 1}` });
  });
}

/* ---------- Vista del cliente (hoja en pantallas medianas) ---------- */
function abrirCliente() {
  const c = $("#cliente"), v = $("#velo");
  c.classList.add("abierto"); c.inert = false; v.hidden = false; requestAnimationFrame(() => v.classList.add("ver"));
  $("#ver-cliente").setAttribute("aria-expanded", "true");
}
function cerrarCliente() {
  const c = $("#cliente"), v = $("#velo");
  if (!c.classList.contains("abierto")) return;
  c.classList.remove("abierto"); if (modoHoja()) c.inert = true;
  v.classList.remove("ver"); setTimeout(() => { if (!v.classList.contains("ver")) v.hidden = true; }, 260);
  $("#ver-cliente").setAttribute("aria-expanded", "false");
}
function ajustarCliente() { const c = $("#cliente"); if (!modoHoja()) { c.inert = false; cerrarCliente(); } else if (!c.classList.contains("abierto")) c.inert = true; }

/* ---------- Pestañas ---------- */
function irVista(v) {
  const actual = $(".vistas [aria-selected='true']").dataset.v;
  $$(".vistas button").forEach(b => { const on = b.dataset.v === v; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; });
  $$(".vista").forEach(s => s.hidden = s.id !== "v-" + v);
  if (actual !== v) {
    if (v === "agenda") pintarAgenda();
    if (!calma) $$("#v-" + v + " > *").forEach((el, i) => el.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: i * 50, easing: EASE, fill: "backwards" }));
    if (scrollY > 120) scrollTo({ top: 0, behavior: calma ? "auto" : "smooth" });
  }
}
function pestanas() {
  const bs = $$(".vistas button");
  bs.forEach((b, i) => {
    b.addEventListener("click", () => irVista(b.dataset.v));
    b.addEventListener("keydown", e => {
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!d) return; e.preventDefault();
      const n = bs[(i + d + bs.length) % bs.length]; n.focus(); irVista(n.dataset.v);
    });
  });
}
window.antesDePalanca = id => {
  if (id === "galeria") { if (modoHoja()) abrirCliente(); return; }
  if (modoHoja()) cerrarCliente();
  irVista(VISTA_DE[id]);
};

/* ---------- Simulación: el estudio en vivo ---------- */
const NOMBRES = ["Una familia de San Felipe", "Una quinceañera", "Una familia de Champerico", "Una pareja", "Una familia de Bella Aurora", "Una clienta nueva", "Una familia de Reu", "Un papá primerizo", "Una graduanda"];
const TIPOS = [["XV con video", 2900], ["XV en estudio", 2400], ["Familia en exterior", 850], ["Recién nacido", 950], ["Preboda en Champerico", 1200], ["Graduación", 650], ["Bautizo con video", 1500]];
const ORIGEN = ["vino de Google", "vino de Facebook", "con un código de referido", "vino de Instagram"];
const RESENAS = ["«Las fotos de los XV quedaron preciosas y nos llegaron antes de lo que dijeron.»", "«Muy pacientes con los niños. Ya apartamos la de Navidad.»", "«Elegimos las fotos desde el celular. Súper fácil.»", "«El video de la boda nos hizo llorar otra vez.»"];
function evento() {
  if (document.hidden) return;
  const r = Math.random();
  if (r < .34) {
    const n = azar(NOMBRES), [t, m] = azar(TIPOS), o = azar(ORIGEN);
    EMB.push({ id: "n" + (++nId), n, t, m, c: 0, nueva: true }); pintarEmbudo();
    S.consultas++; pintarCifras();
    alFeed("chat", `Consulta nueva desde la página: <b>${n}</b> · ${t}`);
    aviso(`Consulta nueva · <b>${n}</b>`, { ic: "chat", sub: `${t} · ${o}` });
  } else if (r < .6) {
    const e = EMB.find(x => x.c === 1);
    if (!e) return evento();
    moverA(e.id, 2);
    aviso(`Anticipo pagado · <b>${e.n}</b>`, { ic: "cash", sub: `${e.t} · ${Q(Math.round(e.m / 2))}` });
  } else if (r < .85) {
    const n = azar(NOMBRES), k = 2 + Math.floor(Math.random() * 5), m = k * P_EXTRA;
    venta(m, { extra: true });
    alFeed("images", `<b>${n}</b> compró ${k} fotos extra de su galería · ${Q(m)}`);
    aviso(`Venta extra en galería · <b>${Q(m)}</b>`, { ic: "images", sub: `${n} · ${k} fotos` });
  } else {
    const n = azar(NOMBRES);
    alFeed("star", `Reseña nueva de 5 estrellas de <b>${n}</b>: ${azar(RESENAS)}`);
    aviso(`Reseña nueva de <b>5 estrellas</b>`, { ic: "star", sub: n + " · en Google" });
  }
}
function ciclo() { evento(); setTimeout(ciclo, 8000 + Math.random() * 4000); }

/* ---------- Arranque ---------- */
$("#fecha").textContent = new Date().toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long" }) + " · Retalhuleu";
{ const hh = new Date().getHours(); $("#saludo").textContent = hh < 12 ? "Buenos días." : hh < 19 ? "Buenas tardes." : "Buenas noches."; }
$("#k-mes-lbl").textContent = "Ingresos de " + MES;
pintarCifras();
pintarOport();
iniciarEmbudo();
pintarAgenda();
pintarClientes();
elegirCliente("valeria");
pintarGaleria();
pintarGalerias();
pintarCampana();
alFeed("calendar", "<b>La quinceañera de marzo</b> vio la cotización de XV con video");
alFeed("cash", "Anticipo de <b>Colegio La Asunción</b> · Q 2,400.00");
alFeed("eye", "<b>La familia del parque</b> abrió su galería");
$$("#feed li").forEach(li => li.classList.remove("nuevo"));
pestanas();
$("#ver-cliente").addEventListener("click", abrirCliente);
$("#cerrar-cliente").addEventListener("click", cerrarCliente);
$("#velo").addEventListener("click", cerrarCliente);
addEventListener("keydown", e => { if (e.key === "Escape") { cerrarImp(); cerrarCliente(); } });
matchMedia("(max-width: 1279px)").addEventListener("change", ajustarCliente);
ajustarCliente();

pintarIconos();
cintaDemo({ sistema: "Sistema completo", palancas: PALANCAS });
revelar();

if (!calma) {
  $$(".cabeza, .cifras .cifra, #oport .op").forEach((el, i) => el.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 420, delay: 80 + i * 45, easing: EASE, fill: "backwards" }));
  $(".cel").animate([{ opacity: 0, transform: "translateY(16px) scale(0.98)" }, { opacity: 1, transform: "none" }], { duration: 600, delay: 200, easing: EASE, fill: "backwards" });
}
setTimeout(reservaEnVivo, 7000);
setTimeout(ciclo, 12000);
