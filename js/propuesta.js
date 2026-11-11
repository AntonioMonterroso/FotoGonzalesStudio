/* Propuesta Foto González Studio — Monterroso Dev Studio
   Precios: cambiar en PRECIOS y EXTRAS. Todo en quetzales, sin IVA. */
"use strict";

const WA = "50237645139";
const CAMBIO = 7.7; // US$1 = Q7.70
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const Q = n => "Q " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const calma = matchMedia("(prefers-reduced-motion: reduce)").matches;
const EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

/* ---------- Íconos (Lucide, ISC) ---------- */
const ICO = {
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

/* ---------- Datos de la propuesta ---------- */
const PRECIOS = {
  pagina: {
    n: "Página del estudio", tipo: "Landing page", ini: 1500, mes: 300, plazo: "1 a 2 semanas",
    para: "Para que los encuentren, vean su trabajo y aparten fecha.",
    vista: "land",
    x: ["<b>Portafolio por categoría</b>: bodas, XV años, bebés, familia, estudio, graduaciones", "<b>«Encuentre su sesión en 3 toques»</b>: recomienda el paquete y deja el mensaje escrito", "<b>Fechas libres en vivo</b>: «quedan 3 sábados» es cierto y empuja a decidir", "Paquetes con el del medio destacado y anticipo para apartar", "Reseñas, promoción del mes con fecha límite y guía gratis a cambio del WhatsApp", "Panel sencillo para subir fotos y cambiar paquetes; lista para Google"],
    desglose: [["Supabase Pro (US$25)", 195], ["Hospedaje, soporte y cambios", 105]]
  },
  tienda: {
    n: "Tienda en línea", tipo: "E-commerce", ini: 3600, mes: 490, plazo: "3 a 4 semanas",
    para: "Para vender impresiones, álbumes y sesiones sin estar en el chat.",
    vista: "tienda",
    x: ["<b>Todo lo de la página</b>", "<b>«Véala en su pared»</b>: el cliente ve su foto a escala y se anima al tamaño grande", "Impresiones, cuadros, álbumes, fotolibros y <b>tarjetas de regalo</b>", "<b>Fotos de desfiles y eventos</b>: cada familia busca a su hijo y compra la foto, con precio menor desde 5", "Paquetes que ahorran, <b>envío gratis desde un monto</b> y venta cruzada de un toque", "Carrito y cobro: tarjeta, transferencia con boleta o contra entrega", "<b>Recordatorio de carrito olvidado</b> por WhatsApp y cupones de temporada", "Pedido con código que el cliente sigue al instante; aviso al estudio en cuanto entra"],
    desglose: [["Supabase Pro (US$25)", 195], ["Fotos y descargas (hasta 150 GB)", 35], ["Hospedaje, soporte y pedidos", 260]]
  },
  completo: {
    n: "Sistema completo con landing", tipo: "Sistema web + página", ini: 6800, mes: 790, plazo: "5 a 7 semanas", rec: true,
    para: "Para manejar todo el estudio, de la reserva a la entrega.",
    vista: "sis",
    x: ["<b>La página y la tienda, incluidas</b>", "<b>Ventas que el sistema le encuentra cada día</b>: cumpleaños, aniversarios, galerías por vencer, cotizaciones sin respuesta", "<b>Galería que vende fotos extra</b>: al pasar del paquete, la oferta sale sola", "Entrega en alta resolución, <b>con marca de agua hasta pagar el saldo</b>", "Reservas con anticipo y embudo con lo que vale cada etapa", "<b>Campañas por WhatsApp</b> a un grupo de clientes, referidos con premio y reseña pedida al entregar", "Clientes con historial, contratos, caja y reportes; usuarios por puesto", "Se instala en el celular como una app"],
    desglose: [["Supabase Pro (US$25)", 195], ["Servidor más grande (US$5)", 40], ["Fotos y descargas (hasta 400 GB)", 65], ["Hospedaje y soporte prioritario", 490]]
  }
};
/* Demos y lo que vende cada sistema */
const DEMOS = {
  pagina: { url: "demos/pagina/", gancho: "Convierte al que mira en el que aparta.", palancas: [
    ["sparkles", "Cuestionario de 3 toques", "Recomienda el paquete y deja el mensaje escrito. Llega una consulta lista para cerrar, no un «info»."],
    ["calendar", "Fechas libres en vivo", "«Quedan 3 sábados en diciembre» es cierto. La gente decide antes cuando ve que se acaba."],
    ["star", "El paquete del medio, destacado", "Junto al Premium, el Clásico se ve como la compra sensata. Casi nadie escoge el más barato."],
    ["users", "Reseñas y reservas reales a la vista", "Ver que otras familias apartan esta semana quita el miedo a pagar el anticipo."],
    ["gift", "Guía gratis a cambio del WhatsApp", "El que todavía no está listo deja su número, y el estudio le vuelve a ofrecer en la temporada."]
  ] },
  tienda: { url: "demos/tienda/", gancho: "Cada galería termina en algo impreso.", palancas: [
    ["frame", "Su foto, en su pared", "El cliente ve su propia foto a escala junto a un sillón. Así se anima al 60×90 en vez del 30×40."],
    ["package", "Paquetes que ahorran", "Pack abuelos, tríptico de pared, regalo de Navidad: una compra se vuelve tres piezas."],
    ["cart", "Envío gratis desde Q 600 y venta cruzada", "«Le faltan Q 80 para el envío gratis» y el mini álbum se agrega con un toque."],
    ["clock", "La galería vence", "Con fecha de vencimiento, el pedido de impresiones no se queda para «después»."],
    ["users", "Desfiles y eventos que se venden", "El estudio ya cubre desfiles, bandas y actos. Cada familia busca a su hijo en la galería del evento y compra la foto; desde 5, más baratas."],
    ["send", "Recordatorio de carrito olvidado", "Si dejó dos cuadros sin pagar, le llega un WhatsApp con el carrito listo para terminar."],
    ["gift", "Tarjetas de regalo", "Un cliente le regala una sesión a otra familia: el estudio cobra hoy y gana un cliente nuevo."]
  ] },
  completo: { url: "demos/completo/", gancho: "Le encuentra ventas al estudio cada mañana.", palancas: [
    ["bell", "Ventas que le encuentra cada día", "Cumpleaños del bebé, aniversario de boda, galería por vencer, cotización sin respuesta. Con el mensaje listo para mandar."],
    ["heart", "Galería que vende fotos extra", "El paquete trae 10 y la familia quiere 14. La oferta de las extras sale sola, sin que nadie la ofrezca por chat."],
    ["lock", "Marca de agua hasta pagar", "El saldo se cobra sin perseguir: al pagar, las fotos se liberan solas."],
    ["send", "Campañas a quien sí le interesa", "Mini sesiones navideñas solo a las familias con bebé fotografiado este año. Las respuestas se ven en vivo."],
    ["users", "Referidos y reseñas", "Cada cliente trae su código para recomendar, y la reseña se pide justo al entregar, cuando está más contento."]
  ] }
};
/* Calculadora: supuestos editables (no son promesas) */
const CALC = [
  { id: "ses", n: "Sesiones al mes hoy", min: 2, max: 60, paso: 1, v: 12, fmt: v => v },
  { id: "ticket", n: "Precio promedio de una sesión", min: 300, max: 6000, paso: 50, v: 850, fmt: Q },
  { id: "nuevas", n: "Sesiones nuevas al mes por la página", min: 0, max: 15, paso: 1, v: 2, fmt: v => v, de: "pagina" },
  { id: "imp", n: "Clientes que compran impresiones o cuadros", min: 0, max: 80, paso: 5, v: 25, fmt: v => v + " %", de: "tienda" },
  { id: "compra", n: "Compra promedio en la tienda", min: 100, max: 2500, paso: 25, v: 450, fmt: Q, de: "tienda" },
  { id: "extra", n: "Clientes que compran fotos extra", min: 0, max: 80, paso: 5, v: 30, fmt: v => v + " %", de: "completo" },
  { id: "vuelven", n: "Sesiones al mes por recordatorios y campañas", min: 0, max: 10, paso: 1, v: 1, fmt: v => v, de: "completo" }
];
const FOTO_EXTRA = 175; // 5 fotos extra × Q 35
const COMPRA_UNICA = { ini: 19500, mes: 350 };

const EXTRAS = [
  { id: "com", n: "Dominio .com", d: "fotogonzalezstudio.com", ini: 120, anual: true, on: true },
  { id: "gt", n: "Dominio .com.gt", d: "fotogonzalezstudio.com.gt", ini: 380, anual: true },
  { id: "pasarela", n: "Cobro con tarjeta", d: "Configurar la pasarela de pago. La comisión por venta la cobra la pasarela.", ini: 600, solo: ["tienda", "completo"] },
  { id: "fel", n: "Factura electrónica FEL", d: "Cada venta sale con su factura certificada.", mes: 350 },
  { id: "carga", n: "Pasar su portafolio de Facebook", d: "Hasta 300 fotos, ordenadas por categoría.", ini: 500 },
  { id: "capa", n: "Capacitación extra", d: "Otra sesión de 2 horas para el equipo.", ini: 350 }
];

const TIEMPO_REAL = [
  ["Fechas libres del calendario", "Al apartar una fecha, desaparece para todos.", "reservas", 1, 1, 1],
  ["Paquetes y precios publicados", "El estudio cambia un precio y la página ya lo muestra.", "paquetes", 1, 1, 1],
  ["Reseñas nuevas", "Aparecen en cuanto el estudio las aprueba.", "resenas", 1, 1, 1],
  ["Inventario de productos", "«Quedan 3» baja con cada venta.", "productos", 0, 1, 1],
  ["Estado del pedido para el cliente", "En impresión, listo, entregado.", "pedidos", 0, 1, 1],
  ["Aviso de pedido o pago nuevo al estudio", "Suena en el panel y en el celular del dueño.", "pagos", 0, 1, 1],
  ["Selección de fotos del cliente", "Cada corazón llega al estudio con la foto exacta.", "selecciones", 0, 0, 1],
  ["Quién está viendo su galería", "Saber que la familia está eligiendo ahora mismo.", "presencia", 0, 0, 1],
  ["Flujo de edición y entregas", "El editor termina y el cliente ya puede descargar.", "galerias", 0, 0, 1],
  ["Caja del día y anticipos", "Cada cobro suma al momento en el panel.", "pagos", 0, 0, 1],
  ["Mensajes dentro de la galería", "«Esta sin el flash, por favor», junto a la foto.", "mensajes", 0, 0, 1]
];

/* Lo que guarda la base, en palabras del estudio (sin nombres técnicos); planes: p = página, t = tienda, c = completo */
const BD = [
  { g: "El estudio", t: [
    ["Datos del estudio", "Logo, colores, WhatsApp y horario.", "ptc", 0],
    ["Paquetes y precios", "Lo que se ofrece y cuánto cuesta.", "ptc", 1],
    ["Portafolio", "Las mejores fotos, por categoría.", "ptc", 1],
    ["Reseñas", "Lo que dicen los clientes, ya aprobado.", "ptc", 1],
    ["Fechas y reservas", "Qué día está libre y quién apartó.", "ptc", 1],
    ["Equipo", "Quién entra y qué puede ver.", "ptc", 0]
  ] },
  { g: "Ventas", t: [
    ["Clientes", "Nombre, teléfono, NIT y cumpleaños.", "tc", 0],
    ["Productos", "Impresiones, cuadros, álbumes y cuántos quedan.", "tc", 1],
    ["Pedidos", "Qué compró cada quien y cómo va.", "tc", 1],
    ["Pagos", "Anticipos, saldos y boletas.", "tc", 1],
    ["Cupones", "Descuentos de temporada.", "tc", 0],
    ["Fotos de eventos", "Desfiles y actos, para que cada familia compre la suya.", "tc", 1]
  ] },
  { g: "Sesiones y entregas", t: [
    ["Contratos", "Condiciones y firma en el celular.", "c", 0],
    ["Galerías privadas", "Una por cliente, con enlace y PIN.", "c", 1],
    ["Fotos de cada sesión", "Versión liviana y en alta, con marca de agua.", "c", 0],
    ["Favoritas del cliente", "Cada corazón, con su nota.", "c", 1],
    ["Mensajes", "Comentarios junto a cada foto.", "c", 1],
    ["Historial", "Quién hizo qué y cuándo.", "c", 0]
  ] }
];
const BD_COSTO = {
  pagina: { usd: 25, q: 195, lineas: [["Plan Pro", "US$25"], ["Servidor Micro", "Incluido"], ["Fotos del portafolio", "≈ 5 GB, incluido"]] },
  tienda: { usd: 30, q: 230, lineas: [["Plan Pro", "US$25"], ["Servidor Micro", "Incluido"], ["Fotos y descargas hasta 150 GB", "≈ US$5"]] },
  completo: { usd: 39, q: 300, lineas: [["Plan Pro", "US$25"], ["Servidor Small", "US$5"], ["Fotos y descargas hasta 400 GB", "≈ US$9"]] }
};

const COMP_COLS = ["WhatsApp y Drive", "Plataforma extranjera", "Su sistema"];
const COMP = [
  ["Página con su nombre y su dominio", 0, 1, 1],
  ["El cliente elige sus fotos en una galería", 0, 1, 1],
  ["Reservas con anticipo y calendario en vivo", 0, 1, 1],
  ["Tienda de impresiones y álbumes en quetzales", 0, 0, 1],
  ["Precio en quetzales, sin comisión por foto o venta", 1, 0, 1],
  ["Todo en español, pensado para Guatemala", 1, 0, 1],
  ["Respaldo diario de clientes y pedidos", 0, 1, 1],
  ["Ofrece solo fotos extra, impresiones y la próxima sesión", 0, 0, 1],
  ["Le avisa a quién venderle hoy, con el mensaje listo", 0, 0, 1],
  ["Soporte por WhatsApp, en Guatemala", 0, 0, 1]
];

const FAQ = [
  ["¿Cómo sabemos que de verdad va a vender más?", "Lo medimos. El panel cuenta las consultas que entran por la página, lo que se vende en la tienda y en las galerías, y cuántos clientes vuelven por los recordatorios. A los tres meses vemos los números juntos y, si algo no está vendiendo, lo cambiamos."],
  ["¿Qué es Supabase y por qué el plan Pro?", "Es el servicio en la nube que guarda la información y hace que todo se actualice en vivo. El plan Pro cuesta US$25 al mes y ya va dentro de su mensualidad. Lo usamos porque no se pausa, guarda respaldo diario y aguanta a cientos de clientes conectados a la vez."],
  ["¿Qué pasa si se llena el espacio de las fotos?", "Cada plan trae espacio de sobra para empezar. Si el estudio crece más allá, Supabase cobra cerca de Q 0.17 por GB al mes y se lo pasamos al mismo precio, sin ganancia. Además guardamos una versión liviana de cada foto para la página, así gasta menos."],
  ["¿El dominio es nuestro?", "Sí. Se registra a nombre del estudio. Si un día deciden irse con otra persona, el dominio se va con ustedes."],
  ["¿Podemos empezar con la página y después subir?", "Sí, para eso los tres usan la misma base de datos. Lo que pagaron de arranque se abona al siguiente sistema y solo pagan la diferencia."],
  ["¿Qué significa que todo sea en tiempo real?", "Que nadie tiene que recargar. Si un cliente aparta el sábado, a otro ya le sale ocupado. Si el estudio pasa el álbum a «Listo», al cliente le cambia en ese segundo."],
  ["¿Tenemos que dejar WhatsApp?", "No. El sistema les arma los mensajes con el enlace de la galería o del pedido y ustedes los mandan por WhatsApp como siempre."],
  ["¿Y si el cliente comparte las fotos sin pagar el saldo?", "En el sistema completo, la galería sale con marca de agua y sin descarga en alta hasta que el saldo esté pagado. Al registrar el pago se libera sola."],
  ["¿Cuánto cobra la pasarela de tarjeta?", "La comisión la pone el banco o la pasarela, no nosotros. Al escogerla con ustedes les decimos el porcentaje exacto."]
];

/* ---------- Utilidades ---------- */
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
  setTimeout(() => { if (Number(el.dataset.v) === valor) el.textContent = fmt(valor); }, dur + 80); // por si la pestaña no dibuja
}
function destello() {
  if (calma) return;
  $("#destello").animate([{ opacity: .75 }, { opacity: 0 }], { duration: 320, easing: EASE });
}

/* ---------- Intro: diafragma ---------- */
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

/* ---------- Visor: el punto de enfoque busca, fija y dispara; al tocarlo, dispara al momento ---------- */
function visor() {
  const fotos = ["f-xv", "f-bebe", "f-boda", "f-primer", "f-maracas", "f-quince", "f-familia", "f-retrato", "f-camisola", "f-pareja", "f-graduacion", "f-fuerza"];
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
        // flash suave dentro del visor
        if (!calma) flash.animate([{ opacity: 0 }, { opacity: .9, offset: .18 }, { opacity: 0 }], { duration: 620, easing: EASE });
        // la foto vieja se desvanece sobre la nueva
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

/* ---------- Tres sistemas ---------- */
function miniVista(tipo) {
  if (tipo === "land") return `<div class="mini m-land"><div class="top"><i></i><i></i><i></i></div><div class="lienzo"><div class="hero foto f-xv"></div><span class="titulo"></span><span class="titulo"></span><div class="tiras"><span class="foto f-quince"></span><span class="foto f-bebe"></span><span class="foto f-familia"></span><span class="foto f-retrato"></span></div></div></div>`;
  if (tipo === "tienda") return `<div class="mini m-tienda"><div class="top"><i></i><i></i><i></i></div><div class="lienzo"><span class="carrito">3</span><div class="rej">${["f-producto", "f-boda", "f-familia", "f-quince", "f-paisaje", "f-bebe"].map(f => `<div class="prod"><span class="foto ${f}"></span><i></i></div>`).join("")}</div></div></div>`;
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
        <div class="desde"><span style="color:var(--tinta2)">Desde</span><span><b>${Q(p.ini)}</b> + ${Q(p.mes)}/mes</span></div>
        <a class="btn btn-tinta btn-demo" href="${DEMOS[id].url}">${ico("play", 16)} Abrir la demo</a>
      </div>
    </article>`).join("");
}

/* ---------- Demos: cómo vende cada sistema ---------- */
function pintarVitrinas() {
  $("#vitrinas").innerHTML = Object.entries(PRECIOS).map(([id, p], i) => {
    const d = DEMOS[id];
    return `<article class="vitrina revela${i % 2 ? " al-reves" : ""}">
      <a class="vit-vista" href="${d.url}" aria-label="Abrir la demo de ${p.n}">${miniVista(p.vista)}<span class="vit-play">${ico("play", 18)} Abrir demo</span></a>
      <div class="vit-cuerpo">
        <p class="tipo mono">${String(i + 1).padStart(2, "0")} · ${p.tipo.toUpperCase()}</p>
        <h3>${p.n}</h3>
        <p class="gancho">${d.gancho}</p>
        <ol class="palancas">${d.palancas.map(([ic, t, x]) => `<li><span class="ic">${ico(ic, 16)}</span><div><b>${t}</b><span>${x}</span></div></li>`).join("")}</ol>
        <div class="vit-acciones">
          <a class="btn btn-tinta" href="${d.url}">${ico("play", 16)} Abrir la demo</a>
          <a class="btn" href="${d.url}#vende">${ico("trend", 16)} Abrirla con lo que vende marcado</a>
        </div>
      </div>
    </article>`;
  }).join("");
}
function pintarCalc() {
  const f = $("#calc-form");
  f.innerHTML = CALC.map(c => `<label class="deslizador${c.de ? " de-" + c.de : ""}">
      <span class="fila-d"><span>${c.n}${c.de ? `<small>${PRECIOS[c.de].n}</small>` : ""}</span><output id="o-${c.id}">${c.fmt(c.v)}</output></span>
      <input type="range" id="c-${c.id}" min="${c.min}" max="${c.max}" step="${c.paso}" value="${c.v}">
    </label>`).join("");
  $$("input", f).forEach(i => i.addEventListener("input", calcular));
  $("#calc-res").innerHTML = Object.entries(PRECIOS).map(([id, p]) => `
    <div class="res${p.rec ? " rec" : ""}" data-res="${id}">
      <span class="mono">${p.n.toUpperCase()}</span>
      <b data-v="0">${Q(0)}</b><small>en ventas extra al mes</small>
      <div class="barra-res"><i></i><em></em></div>
      <p></p>
    </div>`).join("") + `<p class="calc-nota">Cada sistema suma lo del anterior: la tienda trae la página y el completo trae los tres. Las fotos extra se calculan a ${Q(FOTO_EXTRA)} por cliente (5 fotos a Q 35).</p>`;
  calcular();
}
function calcular() {
  const v = {};
  CALC.forEach(c => { v[c.id] = Number($("#c-" + c.id).value); $("#o-" + c.id).textContent = c.fmt(v[c.id]); });
  const clientes = v.ses + v.nuevas;
  const pagina = v.nuevas * v.ticket;
  const tienda = pagina + clientes * v.imp / 100 * v.compra;
  const completo = tienda + clientes * v.extra / 100 * FOTO_EXTRA + v.vuelven * v.ticket;
  const r = { pagina, tienda, completo }, tope = Math.max(completo, 1);
  Object.entries(r).forEach(([id, monto]) => {
    const el = $(`[data-res="${id}"]`), mes = PRECIOS[id].mes;
    odometro($("b", el), Math.round(monto));
    $(".barra-res i", el).style.transform = `scaleX(${Math.min(1, monto / tope)})`;
    $(".barra-res em", el).style.left = Math.min(100, mes / tope * 100) + "%";
    const veces = monto / mes;
    $("p", el).innerHTML = monto <= 0 ? "Muevan los números de arriba." :
      veces >= 1 ? `La mensualidad de ${Q(mes)} se cubre <b>${veces.toFixed(1).replace(".0", "")} veces</b>.` :
      `Cubre el ${Math.round(veces * 100)} % de la mensualidad de ${Q(mes)}.`;
  });
}

/* ---------- Tiempo real ---------- */
function pintarTiempoReal() {
  const cel = v => v ? `<span class="si" aria-label="Sí">${ico("check")}</span>` : `<span class="no" aria-label="No">—</span>`;
  $("#rt-tabla tbody").innerHTML = TIEMPO_REAL.map(([q, d, canal, a, b, c]) => `
    <tr><td><b>${q}</b><span>${d}</span></td>
    <td data-p="Página">${cel(a)}</td><td data-p="Tienda">${cel(b)}</td><td data-p="Completo">${cel(c)}</td></tr>`).join("");
}

/* ---------- Base de datos ---------- */
function pintarBD(plan) {
  const letra = { pagina: "p", tienda: "t", completo: "c" }[plan];
  $("#bd-mapa").innerHTML = BD.map(gr => `
    <div class="grupo revela visto"><small class="mono">${gr.g}</small>
      ${gr.t.map(([n, campos, planes, rt]) => `
        <div class="tabla-bd${planes.includes(letra) ? "" : " apagada"}">
          <div class="nom"><span>${n}</span>${rt ? '<span class="rt" title="Se actualiza al instante"></span>' : ""}</div>
          <div class="campos">${campos}</div>
        </div>`).join("")}
    </div>`).join("");
  const c = BD_COSTO[plan];
  const total = c.q;
  $("#bd-costo").innerHTML = `<h3>Supabase en el plan ${PRECIOS[plan].n.toLowerCase()}</h3>
    <dl>${c.lineas.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join("")}
    <dt class="total">Costo estimado al mes</dt><dd class="total">US$${c.usd} ≈ ${Q(total)}</dd></dl>
    <p>Ya va dentro de su mensualidad. Se calcula a US$1 = Q 7.70; si crece el uso, se lo decimos antes de cobrar nada.</p>`;
  $$("#bd-tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.plan === plan));
}

/* ---------- Dominio: se escribe solo ---------- */
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

/* ---------- Precios ---------- */
function pintarPlanes() {
  const k = iva();
  $("#planes").innerHTML = Object.entries(PRECIOS).map(([id, p]) => `
    <article class="plan revela visto${p.rec ? " recomendado" : ""}">
      ${p.rec ? '<span class="cinta">Recomendado</span>' : ""}
      <div><p class="mono tinta2">${p.tipo.toUpperCase()}</p><h3 style="margin-top:6px">${p.n}</h3></div>
      <div class="monto"><b data-odo="mes-${id}">${Q(p.mes * k)}</b><span>/ mes</span></div>
      <p class="arranque">Arranque: <b data-odo="ini-${id}">${Q(p.ini * k)}</b> · ${p.plazo}</p>
      <dl class="desglose">${p.desglose.map(([a, v]) => `<dt>${a}</dt><dd>${Q(v * k)}</dd>`).join("")}</dl>
      <a class="btn" href="#plan-form" data-elige="${id}">Escoger este</a>
    </article>`).join("");
  $$("[data-odo]").forEach(el => { const [t, id] = el.dataset.odo.split("-"); el.dataset.v = PRECIOS[id][t] * k; });
  $$("[data-elige]").forEach(a => a.addEventListener("click", () => {
    $(`#plan-form input[value="${a.dataset.elige}"]`).checked = true; resumen();
  }));
}
function actualizarPlanes() {
  const k = iva();
  $$("[data-odo]").forEach(el => { const [t, id] = el.dataset.odo.split("-"); odometro(el, PRECIOS[id][t] * k); });
  $$(".plan").forEach((pl, i) => {
    const p = Object.values(PRECIOS)[i];
    $$(".desglose dd", pl).forEach((dd, j) => dd.textContent = Q(p.desglose[j][1] * k));
  });
  $("#cu-precio").textContent = Q(COMPRA_UNICA.ini * k);
  $("#cu-mes").textContent = Q(COMPRA_UNICA.mes * k);
  $$(".dom-op .p[data-q]").forEach(el => el.textContent = Q(el.dataset.q * k));
}
function pintarExtras() {
  $("#extras").innerHTML = EXTRAS.map(e => `
    <label data-id="${e.id}"><input type="checkbox" value="${e.id}"${e.on ? " checked" : ""}>
      <span>${e.n}<small>${e.d}</small></span>
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
  });
  const elegidos = EXTRAS.filter(e => { const i = $(`#extras input[value="${e.id}"]`); return i.checked && !i.disabled; });
  const ini = p.ini + elegidos.filter(e => e.ini).reduce((s, e) => s + e.ini, 0);
  const mes = p.mes + elegidos.filter(e => e.mes).reduce((s, e) => s + e.mes, 0);
  const anual = elegidos.filter(e => e.anual).reduce((s, e) => s + e.ini, 0);
  $("#resumen").innerHTML = `
    <div><dt>Al arrancar</dt><dd data-r="ini"></dd></div>
    <div><dt>Cada mes</dt><dd data-r="mes"></dd></div>
    <div><dt>Plazo${k > 1 ? " · con IVA" : " · sin IVA"}</dt><dd style="font-size:1rem;font-family:inherit;font-weight:600">${p.plazo}</dd></div>
    <div><dt>Incluye</dt><dd style="font-size:1rem;font-family:inherit;font-weight:600">Supabase Pro${anual ? " · dominio" : ""}</dd></div>`;
  [["ini", ini * k], ["mes", mes * k]].forEach(([r, v]) => {
    const el = $(`[data-r="${r}"]`); el.dataset.v = resumenPrevio[r] || v; resumenPrevio[r] = v; odometro(el, v);
  });
  const txt = `Hola Antonio, soy de Foto González Studio. Me interesa el ${p.n.toLowerCase()}${elegidos.length ? " con " + elegidos.map(e => e.n).join(", ") : ""}: ${Q(ini * k)} al arrancar y ${Q(mes * k)} al mes${k > 1 ? " (con IVA)" : ""}. ¿Cuándo empezamos?`;
  $("#plan-wa").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(txt);
}

/* ---------- Comparativa y preguntas ---------- */
function pintarComp() {
  const cel = (v, suyo, col) => `<td data-p="${col}"${suyo ? ' class="suyo"' : ""}>${v ? `<span class="si">${ico("check")}</span>` : '<span class="no">—</span>'}</td>`;
  $("#comp").innerHTML = `<thead><tr><th></th>${COMP_COLS.map((c, i) => `<th${i === 2 ? ' class="suyo"' : ""}>${c}</th>`).join("")}</tr></thead>
    <tbody>${COMP.map(([q, ...v]) => `<tr><td>${q}</td>${v.map((x, i) => cel(x, i === 2, COMP_COLS[i])).join("")}</tr>`).join("")}</tbody>`;
}
function pintarFAQ() {
  $("#faq").innerHTML = FAQ.map(([q, a]) => `<details class="revela"><summary>${q}</summary><p>${a}</p></details>`).join("");
}

/* ---------- Demo en vivo ---------- */
const FOTOS_DEMO = ["f-familia", "f-bebe", "f-retrato", "f-paisaje", "f-familia", "f-boda", "f-bebe", "f-retrato", "f-quince", "f-familia", "f-paisaje", "f-bebe", "f-retrato", "f-familia", "f-graduacion", "f-paisaje", "f-bebe", "f-familia", "f-retrato", "f-boda", "f-familia", "f-paisaje", "f-bebe", "f-quince"];
const PAQ_DEMO = [{ n: "Sesión de estudio", p: 450 }, { n: "Familia en exterior", p: 850 }, { n: "XV años", p: 2400 }];
const ESTADOS = [["Recibido", "Pagó el anticipo"], ["En edición", "Retoque y color"], ["En impresión", "Laboratorio"], ["Listo para recoger", "En el estudio"], ["Entregado", "¡Gracias!"]];
const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const demo = { sel: [], estado: 0, caja: 1250, reservas: [], fecha: null, paq: 1 };
const red = fn => setTimeout(fn, 180 + Math.random() * 220); // simula el viaje por internet

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
    red(() => { $("#presencia span:last-child").textContent = "La familia del parque " + donde; });
  }));
}
function iniciarDemo() {
  pintarGaleria(); pintarSeleccionPanel(); pintarFechas(); pintarOpciones(); pintarSemana(); pintarRuta(); pestanas();
  $("#p-caja").dataset.v = demo.caja; $("#p-caja").textContent = Q(demo.caja);
  $("#reservar").addEventListener("click", reservar);
  $("#avanzar").addEventListener("click", avanzar);
  alFeed("eye", "La familia del parque abrió su galería");
  alFeed("bag", "Pedido en línea · <b>2 cuadros 40×60</b>");
  $$("#feed li").forEach(li => li.classList.remove("nuevo"));
}

/* ---------- Revelado al hacer scroll ---------- */
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

/* ---------- Barra y menú ---------- */
function barra() {
  const b = $("#barra"), menu = $("#menu"), btn = $("#menu-btn");
  addEventListener("scroll", () => b.classList.toggle("con-borde", scrollY > 20), { passive: true });
  btn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  });
  $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); }));
  const secciones = $$("main > section[id]");
  const io = new IntersectionObserver(ents => ents.forEach(e => {
    if (!e.isIntersecting) return;
    $$("a", menu).forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  secciones.forEach(s => io.observe(s));
}

/* ---------- Arranque ---------- */
pintarIconos();
pintarSistemas();
pintarVitrinas();
pintarCalc();
pintarTiempoReal();
pintarBD("completo");
$$("#bd-tabs button").forEach(b => b.addEventListener("click", () => pintarBD(b.dataset.plan)));
pintarPlanes();
pintarExtras();
pintarComp();
pintarFAQ();
resumen();
actualizarPlanes();
$("#iva").addEventListener("change", () => { actualizarPlanes(); resumen(); });
$$('#plan-form input[name="paq"]').forEach(i => i.addEventListener("change", resumen));
$("#cierre-wa").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent("Hola Antonio, vi la propuesta para Foto González Studio y quiero hablar.");
$$(".wa").forEach(a => a.addEventListener("click", destello));
iniciarDemo();
escribirDominio();
barra();
revelar();
intro();
visor();
pintarIconos();
