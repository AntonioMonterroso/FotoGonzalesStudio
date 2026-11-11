/* Demo · Tienda en línea — Foto González Studio
   Precios de muestra en quetzales. Todo lo «en vivo» se simula; en el sistema real lo hace Supabase Realtime. */
"use strict";

/* ---------- Datos de muestra ---------- */
const FOTOS = ["f-xv", "f-quince", "f-retrato", "f-xv", "f-familia", "f-xv", "f-quince", "f-retrato", "f-xv", "f-familia", "f-paisaje", "f-xv",
  "f-quince", "f-retrato", "f-xv", "f-familia", "f-quince", "f-xv", "f-pareja", "f-retrato", "f-xv", "f-paisaje", "f-quince", "f-familia"];
const FAVS = new Set([0, 3, 5, 8, 11, 14, 17, 20]); // las 8 que eligió en su galería
let fotoSel = 0;
const fotoCls = () => FOTOS[fotoSel];
const numFoto = () => String(fotoSel + 1).padStart(2, "0");

const ENVIO_GRATIS = 600, ENVIO = 35;
const TAM = {
  "30x40": { n: "30×40 cm", w: 40, h: 30, p: 350 },
  "40x60": { n: "40×60 cm", w: 60, h: 40, p: 525 },
  "60x90": { n: "60×90 cm", w: 90, h: 60, p: 890 }
};
const ACAB = {
  papel: { n: "Papel fine art", d: -40, s: "Enmarcado con paspartú" },
  canvas: { n: "Canvas", d: 0, s: "Tela sobre bastidor" },
  marco: { n: "Marco de nogal", d: 120, s: "Madera natural" }
};
const PAREDES = { hueso: ["Hueso", "#EDE6DA"], arena: ["Arena", "#D8C6AC"], salvia: ["Salvia", "#B8C1A9"], noche: ["Noche", "#4A4E58"] };
const cfg = { tam: "40x60", acab: "canvas", pared: "hueso" };
let stockNogal = 4;

const PRODUCTOS = [
  { id: "album", n: "Álbum 30×30", det: "20 páginas, tapa de lino", p: 1450, obj: "album" },
  { id: "mini", n: "Mini álbum para abuelos", det: "15×15, 10 páginas", p: 395, obj: "mini" },
  { id: "libro", n: "Fotolibro", det: "21×28, 24 páginas, tapa dura", p: 650, obj: "libro" },
  { id: "i57", n: "Impresión 5×7", det: "Papel lustre", p: 25, obj: "imp" },
  { id: "i810", n: "Impresión 8×10", det: "Papel lustre", p: 45, obj: "imp grande" }
];
const PACKS = [
  { id: "abuelos", n: "Pack Abuelos", det: "Mini álbum 15×15 y 3 impresiones 8×10 para que cada abuelo tenga la suya.", antes: 530, p: 450, v: "abuelos", fotos: 4 },
  { id: "triptico", n: "Tríptico de pared", det: "Tres cuadros canvas 30×40 que se cuelgan juntos. Escoge las fotos después.", antes: 1050, p: 890, v: "triptico", fotos: 3 },
  { id: "navidad", n: "Pack Regalo de Navidad", det: "Fotolibro, 5 impresiones 5×7 y caja de regalo lista para entregar.", antes: 775, p: 690, v: "navidad", fotos: 3 }
];
const MONTOS = [250, 500, 1000];
const OFERTAS = [
  { k: "mini", n: "Mini álbum para abuelos", txt: "¿Y para los abuelos? <b>Mini álbum 15×15</b> con esta misma foto en la portada.", p: 395, foto: true },
  { k: "i810x3", n: "3 impresiones 8×10", txt: "<b>3 impresiones 8×10</b> para repartir entre la familia.", p: 135, foto: true },
  { k: "regalo250", n: "Tarjeta de regalo", txt: "<b>Tarjeta de regalo de Q 250.00</b> para regalarle una sesión a otra familia.", p: 250, ic: "gift" }
];
const OTROS = [
  ["Familia Ruiz", "un álbum 30×30", 1450, "f-boda"],
  ["Andrea M.", "2 cuadros 40×60", 1050, "f-quince"],
  ["Familia Pérez", "el Pack Abuelos", 450, "f-familia"],
  ["Carlos y Ana", "una tarjeta de regalo de Q 500.00", 500, "f-pareja"],
  ["Familia Morales", "el Tríptico de pared", 890, "f-xv"],
  ["Sofía R.", "10 impresiones 5×7", 250, "f-retrato"],
  ["Familia Castillo", "un fotolibro", 650, "f-familia"]
];

const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const carrito = [];
let cupon = null;
let pedido = null;
const estudio = { ventas: 2340, pedidos: 5 };
let recordatorioVisto = false, timerOlvido = null, boleta = false;

/* ---------- Palancas de venta ---------- */
const PALANCAS = {
  vence: { t: "La galería vence, de verdad", d: "Cada galería tiene fecha de cierre y se ve arriba todo el tiempo. No es un reloj falso: al cerrar, las fotos se archivan y el pedido ya no se hace en línea.", e: "Le da a la familia una razón para decidir esta semana y no dejarlo para «algún día»." },
  propias: { t: "Sus propias fotos, no un catálogo", d: "Todo en la tienda sale con las fotos de la sesión de la clienta: el cuadro, el álbum, el mini álbum. Las 8 que eligió en su galería aparecen marcadas con un corazón.", e: "Nadie compra «un cuadro de 40×60». Compra a su hija con el vestido de XV, colgada en la sala." },
  pared: { t: "Verla en su pared antes de pagar", d: "El cuadro aparece sobre un sillón de dos plazas a escala real, en el color de pared que la clienta escoja. Al cambiar el tamaño se ve cuánto ocupa de verdad.", e: "Quita el miedo a «se va a ver pequeño» y hace más fácil escoger el tamaño grande." },
  precio: { t: "Precio y existencia a la vista", d: "El precio cambia al momento con cada tamaño y acabado. Los marcos de nogal muestran cuántos quedan, y el número baja en vivo cuando otra clienta compra uno.", e: "Nadie tiene que preguntar «¿y cuánto sale?» por chat. Y lo que se acabó deja de venderse solo, sin pedidos que después hay que cancelar." },
  packs: { t: "Paquetes que ahorran", d: "Combinaciones para lo que la familia ya pensaba hacer: regalar a los abuelos, llenar una pared, resolver Navidad. Se ve el precio de antes y cuánto se ahorra.", e: "Sube el valor de cada pedido: en vez de una pieza suelta, la familia se lleva tres." },
  regalo: { t: "Tarjeta de regalo que trae clientes", d: "La clienta le regala una sesión a otra familia. El estudio cobra hoy y la sesión se hace después, con alguien que llega recomendado.", e: "Cada tarjeta vendida es un cliente nuevo que ya viene pagado." },
  envio: { t: "Envío gratis desde Q 600.00", d: "La barra muestra cuánto le falta para que el envío en Retalhuleu le salga gratis. Recoger en el estudio siempre es gratis.", e: "Quien está a Q 80.00 del envío gratis tiene un buen motivo para agregar una impresión más." },
  cruzada: { t: "Venta cruzada de un toque", d: "El carrito sugiere una sola cosa que combina con lo que ya lleva, con su misma foto, y se agrega sin salir del carrito.", e: "La sugerencia llega cuando ya decidió comprar, que es cuando más fácil dice que sí. Sin presionar." },
  cupon: { t: "Cupón de temporada", d: "El estudio crea cupones para Navidad, Día de la Madre o graduaciones, con fecha de vencimiento. Se anuncian en Facebook y se usan aquí.", e: "Cada publicación en Facebook tiene un motivo concreto para entrar a comprar." },
  olvidado: { t: "Carrito olvidado", d: "Si alguien deja productos en el carrito y se va, le llega un WhatsApp del estudio con un enlace a su carrito tal como lo dejó.", e: "Recupera ventas que hoy se pierden con un «después lo pido» que nunca llega." },
  seguimiento: { t: "Todo en vivo", d: "Al pagar, la clienta ve su pedido avanzar: recibido, en impresión, listo, entregado. El estudio ve cada venta en ese mismo segundo. Los avisos de compras de otras familias salen, en el sistema real, de pedidos reales.", e: "Menos mensajes de «¿ya está?» y más confianza para volver a comprar." }
};
const EN_CARRITO = new Set(["envio", "cruzada", "cupon", "olvidado"]);
window.antesDePalanca = id => {
  if (EN_CARRITO.has(id)) { if (!abierto()) abrirCarrito(); else mostrarVista("carrito"); }
  else if (abierto()) cerrarCarrito(false);
};

/* ---------- Totales ---------- */
const subtotal = () => carrito.reduce((s, i) => s + i.p * i.c, 0);
const piezas = () => carrito.reduce((s, i) => s + i.c, 0);
function totales() {
  const sub = subtotal();
  const desc = cupon ? Math.round(sub * cupon.pct) / 100 : 0;
  const base = sub - desc;
  const recoger = $('input[name="entrega"]:checked')?.value === "recoger";
  const envio = base === 0 || recoger || base >= ENVIO_GRATIS ? 0 : ENVIO;
  return { sub, desc, base, envio, recoger, total: base + envio };
}

/* ---------- Tira de fotos ---------- */
function pintarTira() {
  $("#tira").innerHTML = FOTOS.map((f, i) => `
    <button type="button" class="miniatura foto ${f}" data-n="${i}" aria-pressed="${i === fotoSel}" aria-label="Foto ${i + 1}${FAVS.has(i) ? ", de sus favoritas" : ""}">
      ${FAVS.has(i) ? `<span class="fav">${ico("heart", 12)}</span>` : ""}<span class="num mono">${String(i + 1).padStart(2, "0")}</span>
    </button>`).join("");
  $$("#tira .miniatura").forEach(b => b.addEventListener("click", () => elegirFoto(Number(b.dataset.n))));
}
function elegirFoto(i) {
  if (i === fotoSel) return;
  fotoSel = i;
  $$("#tira .miniatura").forEach(b => b.setAttribute("aria-pressed", Number(b.dataset.n) === i));
  $("#foto-num").textContent = numFoto();
  // la foto nueva se funde sobre la anterior dentro del cuadro
  const capas = $("#capas-foto"), nueva = document.createElement("div");
  nueva.className = "capa-foto foto " + fotoCls();
  capas.append(nueva);
  const viejas = [...capas.children].slice(0, -1);
  if (calma) viejas.forEach(v => v.remove());
  else nueva.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: EASE }).onfinish = () => viejas.forEach(v => v.remove());
  // y en cada producto que lleva su foto
  $$("[data-su-foto]").forEach(el => { el.className = ("foto " + fotoCls() + " " + el.dataset.suFoto).trim(); });
  pintarCarrito();
}

/* ---------- Visualizador en la pared ---------- */
const precioCuadro = () => TAM[cfg.tam].p + ACAB[cfg.acab].d;
function pintarOpciones() {
  $("#tamanos").innerHTML = Object.entries(TAM).map(([k, t]) => `
    <label class="chip"><input type="radio" name="tam" value="${k}"${k === cfg.tam ? " checked" : ""}>${t.n}<small>${Q(t.p)}</small></label>`).join("");
  $("#acabados").innerHTML = Object.entries(ACAB).map(([k, a]) => `
    <label class="chip"><input type="radio" name="acab" value="${k}"${k === cfg.acab ? " checked" : ""}>${a.n}<small>${a.d ? (a.d > 0 ? "+" : "−") + Q(Math.abs(a.d)) : a.s}</small></label>`).join("");
  $("#colores").innerHTML = Object.entries(PAREDES).map(([k, [n, c]]) => `
    <label class="chip"><input type="radio" name="pared" value="${k}"${k === cfg.pared ? " checked" : ""}><span class="muestra" style="background:${c}"></span>${n}</label>`).join("");
  $$('input[name="tam"], input[name="acab"], input[name="pared"]').forEach(i => i.addEventListener("change", () => {
    cfg[i.name] = i.value; pintarCuadro();
  }));
}
function pintarCuadro() {
  const t = TAM[cfg.tam], c = $("#cuadro");
  c.style.transform = `translateX(-50%) scale(${t.w / 90}, ${t.h / 60})`;
  c.dataset.acab = cfg.acab;
  $("#pared-vista").dataset.pared = cfg.pared;
  odometro($("#precio"), precioCuadro());
  $("#pie-pared").textContent = `Cuadro de ${t.n} en ${ACAB[cfg.acab].n.toLowerCase()}, sobre un sillón de 2.10 m.`;
  pintarStock();
}
function pintarStock(saltar = false) {
  const el = $("#stock"), marco = $('input[name="acab"][value="marco"]');
  if (stockNogal <= 0) {
    el.innerHTML = "<i></i>Marcos de nogal agotados. Llegan más la otra semana.";
    marco.disabled = true;
    if (cfg.acab === "marco") { cfg.acab = "canvas"; $('input[name="acab"][value="canvas"]').checked = true; pintarCuadro(); return; }
  } else {
    el.innerHTML = `<i></i>Quedan <b>${stockNogal}</b> marco${stockNogal === 1 ? "" : "s"} de nogal`;
    marco.disabled = false;
  }
  el.classList.toggle("poco", stockNogal <= 2);
  if (saltar) { el.classList.remove("salta"); void el.offsetWidth; el.classList.add("salta"); }
}
function agregarCuadro() {
  if (cfg.acab === "marco" && stockNogal <= 0) return;
  const t = TAM[cfg.tam], a = ACAB[cfg.acab];
  agregar({ k: `cuadro-${cfg.tam}-${cfg.acab}-${fotoSel}`, n: `Cuadro ${t.n}`, det: `${a.n} · foto ${numFoto()}`, p: precioCuadro(), foto: fotoCls(), marco: cfg.acab === "marco" }, $("#cuadro"));
  if (cfg.acab === "marco") { stockNogal--; pintarStock(true); }
  confirmar($("#agregar-cuadro"), "Agregado al carrito");
}

/* ---------- Paquetes y catálogo ---------- */
function vistaPack(p) {
  if (p.v === "abuelos") return `<div class="foto ${fotoCls()} a1" data-su-foto="a1"></div>` + ["a2", "a3", "a4"].map((c, i) => `<div class="foto ${FOTOS[(i * 5 + 3) % 24]} ${c}"></div>`).join("");
  if (p.v === "triptico") return ["t1", "t2", "t3"].map((c, i) => i === 1 ? `<div class="foto ${fotoCls()} ${c}" data-su-foto="${c}"></div>` : `<div class="foto ${FOTOS[i * 7 + 1]} ${c}"></div>`).join("");
  return `<div class="foto ${fotoCls()} n1" data-su-foto="n1"></div><div class="foto ${FOTOS[6]} n2"></div><div class="foto ${FOTOS[9]} n3"></div><span class="caja-r"></span>`;
}
function pintarPacks() {
  $("#lista-packs").innerHTML = PACKS.map(p => `
    <article class="pack revela">
      <div class="vista v-${p.v}"><span class="ahorro">Ahorra ${Q(p.antes - p.p)}</span>${vistaPack(p)}</div>
      <div class="cuerpo">
        <h3>${p.n}</h3><p>${p.det}</p>
        <div class="precios"><b>${Q(p.p)}</b><s>${Q(p.antes)}</s></div>
        <button class="btn btn-tinta" type="button" data-pack="${p.id}"><span data-i="cart"></span><span>Agregar paquete</span></button>
      </div>
    </article>`).join("");
  $$("[data-pack]").forEach(b => b.addEventListener("click", () => {
    const p = PACKS.find(x => x.id === b.dataset.pack);
    agregar({ k: `pack-${p.id}-${fotoSel}`, n: p.n, det: `Ahorra ${Q(p.antes - p.p)} · foto ${numFoto()}`, p: p.p, foto: fotoCls() }, b.closest(".pack").querySelector(".vista"));
    confirmar(b, "Agregado");
  }));
}
function objeto(o) {
  const f = `<div class="foto ${fotoCls()}" data-su-foto></div>`;
  if (o === "album") return `<div class="obj-album">${f}</div>`;
  if (o === "mini") return `<div class="obj-mini">${f}</div>`;
  if (o === "libro") return `<div class="obj-libro">${f}</div>`;
  return `<div class="obj-${o.replace(" ", " obj-imp ")}"><div class="foto ${FOTOS[2]}"></div>${f}</div>`;
}
function pintarProductos() {
  $("#lista-productos").innerHTML = PRODUCTOS.map(p => `
    <article class="prod revela">
      <div class="vista">${objeto(p.obj)}</div>
      <div class="cuerpo">
        <h3>${p.n}</h3><p class="det">${p.det}</p>
        <div class="pie-prod"><b>${Q(p.p)}</b><button class="mas" type="button" data-prod="${p.id}" aria-label="Agregar ${p.n} al carrito">${ico("plus")}</button></div>
      </div>
    </article>`).join("");
  $$("[data-prod]").forEach(b => b.addEventListener("click", () => {
    const p = PRODUCTOS.find(x => x.id === b.dataset.prod);
    agregar({ k: `${p.id}-${fotoSel}`, n: p.n, det: `${p.det} · foto ${numFoto()}`, p: p.p, foto: fotoCls() }, b.closest(".prod").querySelector(".vista"));
    b.classList.add("ok"); b.innerHTML = ico("check");
    setTimeout(() => { b.classList.remove("ok"); b.innerHTML = ico("plus"); }, 1400);
  }));
}
function pintarRegalo() {
  $("#montos-regalo").innerHTML = MONTOS.map((m, i) => `<label class="chip"><input type="radio" name="monto" value="${m}"${i === 1 ? " checked" : ""}>${Q(m)}</label>`).join("");
  $$('input[name="monto"]').forEach(i => i.addEventListener("change", () => odometro($("#regalo-monto"), Number(i.value))));
  $("#regalo-monto").dataset.v = 500;
  $("#form-regalo").addEventListener("submit", () => {
    const m = Number($('input[name="monto"]:checked').value), para = esc($("#regalo-para").value.trim().slice(0, 40));
    agregar({ k: `regalo-${m}-${para}`, n: `Tarjeta de regalo ${Q(m)}`, det: para ? `Para ${para}` : "Se manda por WhatsApp", p: m, ic: "gift" }, $(".tarjeta-r"));
    confirmar($("#agregar-regalo"), "Agregada");
    $("#regalo-para").value = "";
  });
}
function confirmar(btn, txt) {
  const span = $$("span", btn).pop();
  if (!span || btn.dataset.ocupado) return;
  const antes = span.textContent; btn.dataset.ocupado = "1";
  span.textContent = txt;
  setTimeout(() => { span.textContent = antes; delete btn.dataset.ocupado; }, 1400);
}

/* ---------- Carrito ---------- */
function agregar(item, origen) {
  const ya = carrito.find(i => i.k === item.k);
  if (ya) ya.c++; else carrito.push({ ...item, c: 1 });
  const fin = () => { saltarCuenta(); pintarCarrito(); };
  if (origen && !abierto()) volar(origen, item.foto, fin); else fin();
  reiniciarOlvido();
}
function volar(origen, foto, fin) {
  const cart = $("#btn-carrito");
  if (calma) return fin();
  const a = origen.getBoundingClientRect(), b = cart.getBoundingClientRect(), s = 72;
  const v = document.createElement("div");
  v.className = "volador " + (foto ? "foto " + foto : "");
  if (!foto) { v.style.background = "var(--acento)"; v.style.borderRadius = "12px"; }
  Object.assign(v.style, { left: a.left + a.width / 2 - s / 2 + "px", top: a.top + a.height / 2 - s / 2 + "px", width: s + "px", height: s * 1.2 + "px" });
  document.body.append(v);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const anim = v.animate([
    { transform: "translate(0px, 0px) scale(1)", opacity: 1 },
    { transform: `translate(${dx * .5}px, ${dy * .5 - 40}px) scale(0.7)`, opacity: 1, offset: .55 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.25)`, opacity: .4 }
  ], { duration: 300, easing: EASE });
  let hecho = false;
  const terminar = () => { if (hecho) return; hecho = true; v.remove(); fin(); };
  anim.onfinish = terminar;
  setTimeout(terminar, 360); // por si la pestaña no dibuja
}
function saltarCuenta() {
  const c = $("#cuenta");
  c.classList.remove("salta"); void c.offsetWidth; c.classList.add("salta");
}
function pintarCarrito() {
  const n = piezas(), t = totales(), c = $("#cuenta");
  c.textContent = n; c.classList.toggle("hay", n > 0);
  $("#btn-carrito").setAttribute("aria-label", `Abrir el carrito, ${n} producto${n === 1 ? "" : "s"}`);

  // envío gratis
  const envio = $("#envio-txt").parentElement, falta = ENVIO_GRATIS - t.base;
  envio.classList.toggle("gratis", falta <= 0 && t.base > 0);
  $("#envio-txt").innerHTML = t.base === 0 ? `Agregue ${Q(ENVIO_GRATIS)} y el envío en Retalhuleu es gratis.`
    : falta > 0 ? `Le faltan <b>${Q(falta)}</b> para el envío gratis en Retalhuleu.` : "Su envío en Retalhuleu ya es gratis.";
  $("#envio-barra").style.transform = `scaleX(${Math.min(1, t.base / ENVIO_GRATIS)})`;

  // productos
  $("#items").innerHTML = carrito.length ? carrito.map(i => `
    <li class="item">
      ${i.foto ? `<span class="mini-f foto ${i.foto}"></span>` : `<span class="mini-f ic-f">${ico(i.ic || "gift")}</span>`}
      <div><b>${i.n}</b><small>${i.det}</small></div>
      <div class="lado"><b>${Q(i.p * i.c)}</b>
        <span class="cant"><button type="button" data-menos="${i.k}" aria-label="Quitar uno de ${i.n}">${ico(i.c === 1 ? "x" : "minus")}</button><span>${i.c}</span><button type="button" data-mas="${i.k}" aria-label="Agregar otro ${i.n}">${ico("plus")}</button></span>
      </div>
    </li>`).join("") : `<li class="vacio">Su carrito está vacío. Escoja una foto y véala en su pared.</li>`;
  $$("[data-mas]").forEach(b => b.addEventListener("click", () => cambiarCant(b.dataset.mas, 1)));
  $$("[data-menos]").forEach(b => b.addEventListener("click", () => cambiarCant(b.dataset.menos, -1)));

  // venta cruzada: solo una sugerencia, la primera que no lleve
  const of = carrito.length ? OFERTAS.find(o => !carrito.some(i => i.k.startsWith(o.k))) : null;
  $("#cruzada-cuerpo").innerHTML = of ? `
    <div class="sugiere">${of.foto ? `<span class="mini-f foto ${fotoCls()}"></span>` : `<span class="mini-f ic-f" style="background:var(--carta);color:var(--acento);display:grid;place-items:center">${ico(of.ic)}</span>`}
      <p>${of.txt}</p>
      <button class="btn btn-tinta" type="button" id="agregar-oferta"><span data-i="plus"></span>Agregar · ${Q(of.p)}</button></div>`
    : carrito.length ? "" : `<p class="sugiere-vacia">Cuando agregue algo, aquí le sugerimos una sola cosa que combine, con su misma foto.</p>`;
  if (of) {
    pintarIconos($("#cruzada-cuerpo"));
    $("#agregar-oferta").addEventListener("click", () => agregar({ k: `${of.k}-${fotoSel}`, n: of.n, det: of.foto ? `Con la foto ${numFoto()}` : "Se manda por WhatsApp", p: of.p, foto: of.foto ? fotoCls() : "", ic: of.ic }));
  }

  // totales
  const filas = `<dt>Subtotal</dt><dd>${Q(t.sub)}</dd>
    ${t.desc ? `<dt class="desc">Cupón ${cupon.cod}</dt><dd class="desc">−${Q(t.desc)}</dd>` : ""}
    <dt>${t.recoger ? "Recoger en el estudio" : "Envío en Retalhuleu"}</dt><dd>${t.envio ? Q(t.envio) : t.base ? "Gratis" : "—"}</dd>
    <dt class="tot">Total</dt><dd class="tot" data-tot>${Q(t.total)}</dd>`;
  $("#totales").innerHTML = filas;
  $("#totales-pago").innerHTML = filas;
  $("#ir-pagar").disabled = !carrito.length;
  $("#ir-pagar").textContent = carrito.length ? `Ir a pagar · ${Q(t.total)}` : "Ir a pagar";
  pintarMetodo();
}
function cambiarCant(k, d) {
  const i = carrito.find(x => x.k === k);
  if (!i || (d > 0 && i.marco && stockNogal <= 0)) return;
  i.c += d;
  if (i.marco) { stockNogal -= d; pintarStock(true); }
  if (i.c <= 0) carrito.splice(carrito.indexOf(i), 1);
  if (!carrito.length) cupon = null;
  pintarCarrito(); reiniciarOlvido();
}
function aplicarCupon(cod) {
  const c = (cod || "").trim().toUpperCase(), msg = $("#cupon-msg");
  if (!c) return;
  if (c === "NAVIDAD10") {
    cupon = { cod: c, pct: 10 };
    msg.className = "cupon-msg ok"; msg.textContent = "Listo: 10 % de descuento por Navidad, hasta el 24 de diciembre.";
  } else {
    cupon = null;
    msg.className = "cupon-msg mal"; msg.textContent = "Ese cupón no existe o ya venció.";
  }
  pintarCarrito();
}

/* ---------- Cajón del carrito ---------- */
const abierto = () => $("#carrito").classList.contains("abierto");
let focoPrevio = null;
function abrirCarrito() {
  focoPrevio = document.activeElement;
  mostrarVista("carrito");
  $("#carrito").classList.add("abierto"); $("#carrito").setAttribute("aria-hidden", "false");
  $("#velo").classList.add("ver");
  $("#btn-carrito").setAttribute("aria-expanded", "true");
  setTimeout(() => $("#cerrar-carrito").focus(), 60);
}
function cerrarCarrito(devolver = true) {
  if (!abierto()) return;
  $("#carrito").classList.remove("abierto"); $("#carrito").setAttribute("aria-hidden", "true");
  $("#velo").classList.remove("ver");
  $("#btn-carrito").setAttribute("aria-expanded", "false");
  if (devolver && focoPrevio && focoPrevio.focus) focoPrevio.focus();
  reiniciarOlvido();
}
function mostrarVista(v) {
  $("#vista-carrito").hidden = v !== "carrito";
  $("#vista-pago").hidden = v !== "pago";
  $("#carrito-titulo").textContent = v === "pago" ? "Pagar" : "Su carrito";
}
function trampaFoco(e) {
  if (e.key === "Escape") { if (!$(".globo.ver")) cerrarCarrito(); return; }
  if (e.key !== "Tab") return;
  const f = $$('button:not([disabled]), input:not([disabled]), a[href]', $("#carrito")).filter(x => x.offsetParent !== null);
  if (!f.length) return;
  const primero = f[0], ultimo = f[f.length - 1];
  if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
}

/* ---------- Pago simulado ---------- */
const METODOS = { tarjeta: "tarjeta", transferencia: "transferencia", entrega: "contra entrega" };
function pintarMetodo() {
  const m = $('input[name="metodo"]:checked').value, t = totales(), info = $("#metodo-info"), btn = $("#pagar");
  if (m === "tarjeta") info.innerHTML = "<p>En el sistema real aquí se abre la página segura de la pasarela de pago. En esta demo no se pide ningún dato.</p>";
  if (m === "transferencia") info.innerHTML = `<p>Transfiera ${Q(t.total)} a la cuenta del estudio (de muestra) y adjunte la foto de la boleta. El estudio la revisa y su pedido pasa a impresión.</p>
    <button class="btn btn-chico" type="button" id="adjuntar">${ico(boleta ? "check" : "images", 16)}<span>${boleta ? "Boleta adjunta (simulada)" : "Adjuntar foto de la boleta"}</span></button>`;
  if (m === "entrega") info.innerHTML = t.recoger ? "<p>Paga al recoger en el estudio, en efectivo o con tarjeta.</p>" : "<p>Paga en efectivo al recibir. El estudio le escribe para coordinar la entrega en Retalhuleu.</p>";
  $("#adjuntar")?.addEventListener("click", () => { boleta = true; pintarMetodo(); });
  btn.disabled = !carrito.length || (m === "transferencia" && !boleta) || !!btn.dataset.ocupado;
  if (!btn.dataset.ocupado) btn.textContent = (m === "tarjeta" ? "Pagar " : m === "transferencia" ? "Enviar pedido · " : "Confirmar pedido · ") + Q(t.total);
}
function pagar() {
  const btn = $("#pagar"), t = totales(), m = $('input[name="metodo"]:checked').value;
  btn.dataset.ocupado = "1"; btn.disabled = true; btn.textContent = "Procesando…";
  red(() => setTimeout(() => {
    const code = "FGS-" + (2200 + Math.floor(Math.random() * 700));
    pedido = { code, total: t.total, n: piezas(), lista: carrito.map(i => `${i.c > 1 ? i.c + " × " : ""}${i.n}`), estado: 0, metodo: METODOS[m], recoger: t.recoger };
    estudio.ventas += t.total; estudio.pedidos++;
    alFeed(`<b>Daniela</b> pagó ${Q(t.total)} · ${METODOS[m]}`, "cash", true);
    pintarEstudio();
    carrito.length = 0; cupon = null; boleta = false; clearTimeout(timerOlvido);
    $("#cupon-msg").textContent = ""; $("#cupon-txt").value = "";
    delete btn.dataset.ocupado;
    pintarCarrito(); pintarSeguimiento();
    cerrarCarrito(false);
    $("#seguimiento").scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" });
    aviso(`Pedido <b>${code}</b> recibido`, { ic: "check", sub: "Le avisamos en cada paso" });
    avanzarPedido();
  }, 600));
}
let avancePrevio = 0;
const PASOS = [["Recibido", "check"], ["En impresión", "images"], ["Listo", "package"], ["Entregado", "home"]];
function pintarSeguimiento() {
  const p = pedido, est = p ? p.estado : -1;
  $("#seg-cuerpo").innerHTML = `
    ${p ? `<div class="seg-cab"><div><small>Su pedido</small><b>${p.code}</b></div><div style="text-align:right"><small>${p.n} pieza${p.n === 1 ? "" : "s"} · ${p.metodo}</small><b>${Q(p.total)}</b></div></div>`
      : `<p class="seg-vacio">Cuando haga un pedido, aquí lo verá avanzar sin tener que preguntar por WhatsApp.</p>`}
    <ol class="pasos" style="--avance:${avancePrevio}">${PASOS.map(([n, i], k) => `<li class="${k <= est ? "hecho" : ""}${k === est ? " ahora" : ""}"><span class="bola">${ico(i, 16)}</span>${k === 3 && p?.recoger ? "Recogido" : n}</li>`).join("")}</ol>
    ${p ? `<p class="seg-items">${p.lista.join(" · ")}</p>` : ""}`;
  const ol = $("#seg-cuerpo .pasos"), nuevo = Math.max(0, est) / 3;
  avancePrevio = nuevo;
  requestAnimationFrame(() => requestAnimationFrame(() => ol.style.setProperty("--avance", nuevo)));
}
function avanzarPedido() {
  const p = pedido;
  setTimeout(function tic() {
    if (p !== pedido || p.estado >= 3) return;
    p.estado++;
    pintarSeguimiento();
    const n = p.estado === 3 && p.recoger ? "Recogido" : PASOS[p.estado][0];
    aviso(`Su pedido <b>${p.code}</b>: ${n.toLowerCase()}`, { ic: PASOS[p.estado][1], sub: "Actualizado por el estudio, en vivo" });
    alFeed(`Pedido ${p.code} pasó a <b>${n}</b>`, PASOS[p.estado][1], true);
    if (p.estado < 3) setTimeout(tic, 6500);
  }, 6500);
}

/* ---------- Lo que ve el estudio ---------- */
function pintarEstudio() {
  odometro($("#e-ventas"), estudio.ventas);
  odometro($("#e-pedidos"), estudio.pedidos, n => String(Math.round(n)));
  odometro($("#e-ticket"), Math.round(estudio.ventas / estudio.pedidos * 100) / 100);
  $$(".cifras-e b").forEach(b => { b.classList.remove("salta"); void b.offsetWidth; b.classList.add("salta"); });
}
function alFeed(html, ic = "bag", tuyo = false) {
  const ul = $("#e-feed"), li = document.createElement("li");
  if (tuyo) li.className = "tuyo";
  li.innerHTML = `<span class="ic">${ico(ic, 14)}</span><span>${html}</span><time>${hora()}</time>`;
  ul.prepend(li);
  while (ul.children.length > 5) ul.lastElementChild.remove();
}

/* ---------- Prueba social y existencia en vivo ---------- */
function otraCompra() {
  const [q, que, m, f] = azar(OTROS);
  aviso(`<b>${q}</b> pidió ${que}`, { foto: f, sub: "Hace un momento · Retalhuleu" });
  estudio.ventas += m; estudio.pedidos++;
  alFeed(`<b>${q}</b> · ${que} · ${Q(m)}`, "bag");
  pintarEstudio();
  setTimeout(otraCompra, 15000 + Math.random() * 10000);
}
function marcoVendido() {
  if (stockNogal > 1) {
    stockNogal--; pintarStock(true);
    alFeed("Se vendió un <b>marco de nogal</b>", "frame");
    setTimeout(marcoVendido, 38000 + Math.random() * 20000);
  }
}

/* ---------- Carrito olvidado ---------- */
function reiniciarOlvido() {
  clearTimeout(timerOlvido);
  if (!carrito.length || recordatorioVisto) return;
  timerOlvido = setTimeout(() => {
    if (!carrito.length) return;
    if (abierto() || $(".hoja-wa.ver")) return reiniciarOlvido();
    recordatorioVisto = true;
    mostrarRecordatorio();
  }, 25000);
}
function mostrarRecordatorio() {
  const lista = carrito.length ? carrito.map(i => i.n.toLowerCase()).slice(0, 3).join(", ") : "un cuadro 40×60 cm";
  const msg = `Hola, Daniela. Se le quedó en el carrito: ${lista}.\n\nSu galería sigue abierta 14 días más. Aquí termina su pedido, tal como lo dejó:\nfotogonzalezstudio.com/c/D4N1\n\nFoto González Studio`;
  simularWA({ texto: msg, nota: "Este mensaje sale solo, desde el WhatsApp del estudio, cuando alguien deja productos en el carrito. El enlace abre su carrito tal como lo dejó." });
  const chat = $("#hoja-wa .chat");
  if (chat) chat.innerHTML = `<p class="b">${msg}<small>${hora()}</small></p>`;
}

/* ---------- Arranque ---------- */
pintarTira();
pintarOpciones();
pintarPacks();
pintarProductos();
pintarRegalo();
pintarCuadro();
pintarCarrito();
pintarSeguimiento();
alFeed("<b>Familia Ruiz</b> · un álbum 30×30 · Q 1,450.00", "bag");
alFeed("<b>Andrea M.</b> abrió su galería", "eye");
$$("#e-feed li").forEach(li => li.style.animation = "none");
$("#btn-carrito").addEventListener("click", () => abierto() ? cerrarCarrito() : abrirCarrito());
$("#cerrar-carrito").addEventListener("click", () => cerrarCarrito());
$("#velo").addEventListener("click", () => cerrarCarrito());
$("#carrito").addEventListener("keydown", trampaFoco);
$("#agregar-cuadro").addEventListener("click", agregarCuadro);
$("#ir-pagar").addEventListener("click", () => { mostrarVista("pago"); pintarMetodo(); setTimeout(() => $("#volver-carrito").focus(), 30); });
$("#volver-carrito").addEventListener("click", () => mostrarVista("carrito"));
$$('input[name="metodo"], input[name="entrega"]').forEach(i => i.addEventListener("change", pintarCarrito));
$("#pagar").addEventListener("click", pagar);
$("#form-cupon").addEventListener("submit", () => aplicarCupon($("#cupon-txt").value));
$("#usar-temporada").addEventListener("click", () => { $("#cupon-txt").value = "NAVIDAD10"; aplicarCupon("NAVIDAD10"); });
$("#ver-recordatorio").addEventListener("click", () => { recordatorioVisto = true; clearTimeout(timerOlvido); mostrarRecordatorio(); });
setTimeout(otraCompra, 9000);
setTimeout(marcoVendido, 30000);

pintarIconos();
cintaDemo({ sistema: "Tienda en línea", palancas: PALANCAS });
revelar();
