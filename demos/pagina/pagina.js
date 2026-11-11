/* Demo 1 · Página del estudio — Foto González Studio (Monterroso Dev Studio)
   Datos de muestra. En el sistema real salen de Supabase (paquetes, portafolio, reservas, reseñas). */
"use strict";

/* ---------- Palancas de venta (en el orden de la página) ---------- */
const PALANCAS = {
  urgencia: { t: "Urgencia real, no inventada", d: "El aviso cuenta los sábados que de verdad quedan libres en el calendario. Cuando alguien aparta uno, el número baja solo.", e: "El que estaba «pensándolo» aparta hoy en vez de dejarlo para después, y el sábado no se va con otro fotógrafo." },
  quiz: { t: "Un cuestionario que califica", d: "En tres toques la persona dice qué quiere fotografiar, cuántos son y qué se quiere llevar. Le sale el paquete exacto, con precio.", e: "Al estudio le escribe gente que ya sabe qué quiere y cuánto cuesta. Y en el último paso se le ofrece la impresión o el álbum." },
  portafolio: { t: "Portafolio por categoría", d: "Cada quien va directo a lo suyo: la novia a bodas, la mamá a bebés. Ve trabajo parecido al que necesita.", e: "Se imagina su propia sesión y confía más rápido. Ya no tiene que bajar entre cientos de fotos de Facebook." },
  ancla: { t: "Precio ancla", d: "El Premium a la par hace que el Clásico se vea como la mejor compra, y el Clásico va marcado como «el más elegido». Abajo sale cuánto cuesta cada foto.", e: "Mucha gente escoge el del medio en vez del más barato, y sube lo que deja cada sesión." },
  anticipo: { t: "Anticipo que compromete", d: "Cada paquete dice desde el principio cuánto es el anticipo. Apartar cuesta poco y deja la fecha amarrada.", e: "Menos citas que se caen a última hora y menos «después le confirmo»." },
  promo: { t: "Promoción con fecha de vencimiento", d: "La promoción del mes tiene un reloj que llega a cero el último día y cupos que se van llenando.", e: "Le da a la gente una razón para decidir esta semana. El estudio la cambia cada mes desde su panel: Día de la Madre, graduaciones, Navidad." },
  social: { t: "Prueba social en vivo", d: "La lista de lo apartado hace poco y los avisos de abajo muestran que otras familias están reservando. En el sistema real salen de las reservas reales del estudio, nunca inventadas, y solo con el nombre de pila.", e: "Nadie quiere ser el primero. Ver que otros confían le quita el miedo a dar el anticipo." },
  wa: { t: "El mensaje va ya escrito", d: "Al tocar el botón se abre WhatsApp con la fecha, la hora, la sesión y el anticipo ya escritos. La persona solo toca enviar.", e: "Se pierde menos gente entre el «me interesa» y escribir. Al estudio le llega en un solo mensaje todo lo que necesita para cerrar." },
  resenas: { t: "Reseñas a la vista", d: "En Facebook el estudio todavía no tiene opiniones. Estas son de muestra: así se verán cuando el sistema las pida solo al entregar cada galería, justo cuando la familia está más contenta.", e: "Lo que cuenta otra mamá pesa más que lo que el estudio dice de sí mismo. Cada entrega deja una reseña nueva, y salen en la página en cuanto el estudio las aprueba." },
  iman: { t: "Imán de contactos", d: "La guía gratis de vestuario se cambia por un nombre y un WhatsApp. El que todavía no está listo para apartar igual deja su contacto.", e: "El estudio arma su lista de interesados para avisarles de la próxima promoción. Antes esas ventas se perdían." }
};

/* ---------- Datos de muestra ---------- */
const PAQS = [
  { id: "estudio", n: "Sesión de estudio", p: 450, a: 150 },
  { id: "familia", n: "Familia en exterior", p: 850, a: 250 },
  { id: "album", n: "Familia + álbum", p: 1650, a: 500 },
  { id: "bebe", n: "Bebé o embarazo", p: 950, a: 300 },
  { id: "grad", n: "Evento o desfile", p: 550, a: 150 },
  { id: "xv", n: "XV años · foto y video", p: 2400, a: 700 },
  { id: "boda", n: "Boda · foto y video", p: 6500, a: 2000, desde: true },
  { id: "navidad", n: "Mini sesión navideña", p: 350, a: 100 }
];
const paq = id => PAQS.find(p => p.id === id);
const precioTxt = p => (p.desde ? "desde " : "") + Q(p.p);

const NIVELES = [
  { id: "estudio", n: "Esencial", x: ["30 minutos en el estudio", "10 fotos editadas", "Galería privada por 30 días"], fotos: 10 },
  { id: "familia", n: "Clásico", estrella: true, x: ["1 hora en exterior o en el estudio", "25 fotos editadas", "Dos cambios de ropa", "Galería privada por 90 días", "Una impresión 8×10 de regalo"], fotos: 25 },
  { id: "album", n: "Premium", x: ["Todo lo del Clásico", "40 fotos editadas", "Álbum 20×20 de 20 páginas", "Video corto para redes"], fotos: 40, aparte: 1850 }
];
const EVENTOS = [["bebe", "f-bebe", "Recién nacidos, embarazo y primer año"], ["xv", "f-xv", "Estudio con círculo de luz, fiesta y video"], ["boda", "f-boda", "Preparación, ceremonia, fiesta y video"]];

const CATS = { todo: "Todo", bodas: "Bodas", xv: "XV años", bebes: "Bebés", familia: "Familia", estudio: "Estudio", grad: "Desfiles y eventos" };
const PORTA = [
  ["f-xv", "xv", "XV · círculo de luz", "alto"], ["f-boda", "bodas", "Pedida de mano · Retalhuleu", ""], ["f-bebe", "bebes", "Recién nacido · 10 días", ""],
  ["f-familia", "familia", "Con la camisola del Mundial 2026", "ancho2"], ["f-retrato", "estudio", "Retrato en estudio", ""], ["f-graduacion", "grad", "Desfile escolar · Retalhuleu", ""],
  ["f-pareja", "bodas", "Sesión de pareja", ""], ["f-quince", "xv", "XV · vestido corinto", "alto"], ["f-pastel", "bebes", "Primer año · tema circo", ""],
  ["f-paisaje", "grad", "Banda de marcha · desfile nocturno", "ancho2"], ["f-camisola", "familia", "Cada quien con su camisola", ""], ["f-cacao", "grad", "Baile folclórico", ""],
  ["f-fuerza", "estudio", "Retrato con actitud", ""], ["f-maracas", "grad", "Con sus maracas, en el desfile", ""], ["f-producto", "estudio", "Recuerdos de baby shower", ""],
  ["f-anillo", "bodas", "El anillo", "ancho2"], ["f-glam", "xv", "Golden Glam", ""], ["f-primer", "bebes", "Primer cumpleaños", "ancho2"]
];

const RESENAS = [
  ["f-familia", "Familia de San Sebastián", "Sesión familiar", "Mi mamá lloró cuando vio el álbum. Escogimos las fotos desde el celular, cada quien en su casa, y en una semana ya estaban listas."],
  ["f-quince", "Quinceañera de Reu", "XV años", "Me avisaron por WhatsApp cuando estaban las fotos. Ni tuve que preguntar."],
  ["f-bebe", "Papás primerizos", "Recién nacido", "Mucha paciencia con el bebé. Tres horas y ni un mal gesto."],
  ["f-boda", "Novios de Champerico", "Pedida y boda", "Apartamos la fecha en línea un domingo en la noche. El lunes ya teníamos el contrato."],
  ["f-graduacion", "Familia de Bella Aurora", "Desfile escolar", "Encontramos a nuestra hija en la galería del desfile y pedimos tres fotos esa misma noche."]
];

const FAQ = [
  ["¿Cuánto tardan las fotos?", "Le mandamos las primeras 10 en 48 horas. La galería completa, en 7 a 10 días hábiles; en bodas, hasta 4 semanas."],
  ["¿Puedo pagar con tarjeta?", "Sí: tarjeta, transferencia o depósito. El anticipo aparta la fecha y el resto se paga el día de la sesión."],
  ["¿Y si quiero cambiar la fecha?", "Una vez, sin costo, avisando con 72 horas. El anticipo pasa completo a la nueva fecha."],
  ["¿Qué pasa si llueve en una sesión de exterior?", "La pasamos al estudio ese mismo día o a otra fecha libre, lo que usted prefiera."],
  ["¿Van a eventos fuera de la ciudad?", "Sí, a todo el país. El viaje se cotiza aparte según el lugar."]
];

/* ---------- Barra y menú ---------- */
function barra() {
  const b = $("#barra"), menu = $("#menu"), btn = $("#menu-btn");
  addEventListener("scroll", () => b.classList.toggle("con-borde", scrollY > 20), { passive: true });
  const cerrar = () => { menu.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Abrir el menú"); };
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const abierto = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
    btn.setAttribute("aria-label", abierto ? "Cerrar el menú" : "Abrir el menú");
  });
  $$("a", menu).forEach(a => a.addEventListener("click", cerrar));
  document.addEventListener("click", e => { if (!menu.contains(e.target)) cerrar(); });
  addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
  const io = new IntersectionObserver(ents => ents.forEach(e => {
    if (!e.isIntersecting) return;
    $$("a", menu).forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main > section[id]").forEach(s => io.observe(s));
}

/* ---------- Portada ---------- */
function entrarPortada() {
  if (calma) return;
  $$("#titulo .linea > span").forEach((s, i) => s.animate(
    [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
    { duration: 800, delay: 120 + i * 80, easing: EASE, fill: "backwards" }));
  $$(".portada .chip-vivo, .portada .bajada, .portada .acciones, .portada .sellos").forEach((el, i) => el.animate(
    [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 700, delay: 380 + i * 70, easing: EASE, fill: "backwards" }));
  $("#foto-portada").animate(
    [{ opacity: 0, transform: "scale(1.05)", filter: "blur(14px) saturate(.4)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px) saturate(1)" }],
    { duration: 900, delay: 60, easing: EASE, fill: "backwards" });
  $(".portada-fotos .chica").animate(
    [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 800, delay: 520, easing: EASE, fill: "backwards" });
}

/* ---------- Transición entre pasos (cuestionario) ---------- */
function cambiar(caja, html, dir = 1, alListo) {
  const viejo = caja.firstElementChild;
  const poner = () => {
    caja.innerHTML = html; pintarIconos(caja);
    const nuevo = caja.firstElementChild;
    if (alListo) alListo(nuevo);
    nuevo.animate(calma ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: `translateX(${16 * dir}px)` }, { opacity: 1, transform: "translateX(0)" }], { duration: 240, easing: EASE });
  };
  if (!viejo) return poner();
  const a = viejo.animate(calma ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: `translateX(${-16 * dir}px)` }], { duration: 160, easing: EASE, fill: "forwards" });
  let hecho = false; const sigue = () => { if (!hecho) { hecho = true; poner(); } };
  a.onfinish = sigue; setTimeout(sigue, 220);
}

/* ---------- Cuestionario: encuentre su sesión ---------- */
const BASE = {
  boda: { p: "boda", inc: ["Preparación, ceremonia y fiesta", "400 fotos editadas", "Video de 3 a 5 minutos", "Galería privada en línea"] },
  xv: { p: "xv", inc: ["Sesión en estudio con círculo de luz", "150 fotos de la fiesta", "Video resumen", "Galería privada en línea"] },
  bebe: { p: "bebe", inc: ["1 hora en el estudio", "20 fotos editadas", "Accesorios incluidos"] },
  familia: { p: "familia", inc: ["1 hora en exterior", "25 fotos editadas", "Dos cambios de ropa"] },
  estudio: { p: "estudio", inc: ["30 minutos en el estudio", "10 fotos editadas", "Fondo a escoger"] },
  grad: { p: "grad", inc: ["Cobertura del acto o desfile", "Galería en línea para las familias", "Cada familia compra sus fotos"] }
};
const PASOS = [
  { k: "tipo", q: "¿Qué quiere fotografiar?", ops: [
    ["xv", "XV años", "Estudio, fiesta y video", "f-xv"], ["boda", "Una boda", "Del «sí» al último baile, con video", "f-boda"],
    ["bebe", "Bebé o embarazo", "Recién nacido, panza, primer año", "f-bebe"], ["familia", "En familia", "Exterior o en el estudio", "f-familia"],
    ["estudio", "Retrato", "Perfil profesional o personal", "f-retrato"], ["grad", "Evento o desfile", "Colegios, bandas y actos", "f-graduacion"]] },
  { k: "gente", q: "¿Cuántas personas salen en las fotos?", ops: [
    ["1", "Una o dos", "Retrato o pareja", "users"], ["3", "De 3 a 5", "La familia de la casa", "users"], ["6", "6 o más", "Con abuelos, tíos y primos", "users"]] },
  { k: "llevar", q: "¿Qué se quiere llevar?", ops: [
    ["dig", "Fotos digitales", "En alta, para compartir", "images"], ["imp", "Digitales e impresas", "4 impresiones 8×10 para enmarcar", "frame"], ["alb", "Digitales y álbum", "Álbum de tapa dura", "book"]] }
];
const quiz = { paso: 0, r: {} };
function calcularQuiz() {
  const b = BASE[quiz.r.tipo], pq = paq(b.p), lineas = [[pq.n + (pq.desde ? " (desde)" : ""), pq.p]];
  const grande = quiz.r.gente === "6" && !["boda", "xv"].includes(quiz.r.tipo);
  if (grande) lineas.push(["Grupo grande, con luz extra", 200]);
  if (quiz.r.llevar === "imp") lineas.push(["4 impresiones 8×10", 180]);
  if (quiz.r.llevar === "alb") lineas.push([quiz.r.tipo === "boda" ? "Álbum 30×30 de 40 páginas" : "Álbum 20×20 de 20 páginas", quiz.r.tipo === "boda" ? 1200 : 650]);
  const total = lineas.reduce((s, l) => s + l[1], 0);
  const extra = { imp: " con impresiones", alb: " con álbum" }[quiz.r.llevar] || "";
  return { pq, b, lineas, total, nombre: pq.n + extra };
}
function pintarQuiz(dir = 1) {
  const caja = $("#quiz-cuerpo"), atras = $("#quiz-atras");
  atras.hidden = quiz.paso === 0;
  $("#quiz-barra").style.width = ((Math.min(quiz.paso, 2) + 1) / 3 * 100) + "%";
  if (quiz.paso < 3) {
    const p = PASOS[quiz.paso];
    $("#quiz-paso").textContent = `Paso ${quiz.paso + 1} de 3`;
    cambiar(caja, `<div class="quiz-paso"><h3>${p.q}</h3><div class="quiz-ops">${p.ops.map(([v, t, s, f]) =>
      `<button class="quiz-op" type="button" data-v="${v}">${f.startsWith("f-") ? `<span class="foto ${f}" aria-hidden="true"></span>` : `<span class="ic">${ico(f)}</span>`}<span>${t}<small>${s}</small></span></button>`).join("")}</div></div>`, dir,
      el => {
        $$(".quiz-op", el).forEach(b => b.addEventListener("click", () => { quiz.r[p.k] = b.dataset.v; quiz.paso++; pintarQuiz(1); }));
        if (dir !== 0 && quiz.paso > 0) setTimeout(() => $(".quiz-op", el)?.focus({ preventScroll: true }), 60);
      });
    return;
  }
  $("#quiz-paso").textContent = "Su sesión";
  const c = calcularQuiz();
  const sube = quiz.r.llevar === "dig" ? `<p class="nota" style="margin:0 0 14px">Con <b>${Q(180)}</b> más se lleva 4 impresas listas para enmarcar. <button class="quiz-atras" type="button" id="quiz-sube" style="display:inline-flex;color:var(--acento);font-weight:600;padding:0 6px">Agregarlas</button></p>` : "";
  cambiar(caja, `<div class="quiz-res" style="display:flex;flex-direction:column;flex:1">
      <div class="paq"><div><p class="mono tinta2" style="margin:0">LE RECOMENDAMOS</p><h3>${c.nombre}</h3></div><span class="total" data-v="${quiz.ultimo || 0}" id="quiz-total">${Q(quiz.ultimo || 0)}</span></div>
      <ul>${c.lineas.map(([a, v]) => `<li><span>${a}</span><b>${Q(v)}</b></li>`).join("")}</ul>
      <div class="incluye">${c.b.inc.map(t => `<span>${t}</span>`).join("")}</div>
      ${sube}
      <div class="botones">
        <button class="btn btn-acento" type="button" id="quiz-wa"><span data-i="chat"></span>Pedir esta sesión</button>
        <a class="btn" href="#fechas" id="quiz-fechas">Ver fechas libres</a>
      </div>
      <p class="nota">Se aparta con ${Q(c.pq.a)} de anticipo. <button class="quiz-atras" type="button" id="quiz-otra" style="display:inline-flex;padding:0 6px;min-height:32px">Empezar de nuevo</button></p>
    </div>`, dir, el => {
      odometro($("#quiz-total", el), c.total); quiz.ultimo = c.total;
      $("#quiz-wa", el).addEventListener("click", () => simularWA({
        texto: `Hola, hice el cuestionario de su página. Me interesa: ${c.nombre}, para ${{ 1: "1 o 2 personas", 3: "3 a 5 personas", 6: "6 o más personas" }[quiz.r.gente]}. Total aproximado ${Q(c.total)}. ¿Qué fechas tienen libres?`,
        respuesta: `¡Hola! Qué gusto. Para ${c.pq.n.toLowerCase()} tenemos libre el próximo sábado. ¿Se lo aparto? Es un anticipo de ${Q(c.pq.a)}.`
      }));
      $("#quiz-fechas", el).addEventListener("click", () => { $("#res-paq").value = c.pq.id; pintarReserva(); });
      $("#quiz-otra", el).addEventListener("click", () => { quiz.paso = 0; quiz.r = {}; quiz.ultimo = 0; pintarQuiz(-1); });
      $("#quiz-sube", el)?.addEventListener("click", () => { quiz.r.llevar = "imp"; pintarQuiz(0); aviso("Se agregaron 4 impresiones 8×10", { ic: "frame", dur: 3000 }); });
    });
}

/* ---------- Portafolio ---------- */
let filtro = "todo";
function pintarPortafolio() {
  const cuenta = c => c === "todo" ? PORTA.length : PORTA.filter(p => p[1] === c).length;
  $("#filtros").innerHTML = Object.entries(CATS).map(([k, n]) => `<button class="filtro" type="button" data-c="${k}" aria-pressed="${k === filtro}">${n}<span class="c">${cuenta(k)}</span></button>`).join("");
  $("#porta").innerHTML = PORTA.map(([f, c, t, tam], i) => `<button class="tile ${tam}" type="button" data-c="${c}" data-n="${i}" aria-label="Ver foto: ${t}"><span class="foto ${f}"></span><span class="lbl"><span>${t}</span><span class="mono">${CATS[c]}</span></span></button>`).join("");
  $$(".filtro").forEach(b => b.addEventListener("click", () => filtrar(b.dataset.c)));
  $$(".tile").forEach(t => t.addEventListener("click", () => abrirVisor(t)));
}
function filtrar(c) {
  if (c === filtro) return;
  filtro = c;
  $$(".filtro").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === c));
  const tiles = $$(".tile");
  const visibles = tiles.filter(t => t.style.display !== "none");
  visibles.forEach(t => t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: EASE, fill: "forwards" }));
  setTimeout(() => {
    let n = 0;
    tiles.forEach(t => {
      const ver = c === "todo" || t.dataset.c === c;
      t.style.display = ver ? "" : "none";
      t.getAnimations().forEach(a => a.cancel());
      // en filtros cortos, todas del mismo tamaño para que no queden huecos
      t.classList.toggle("plano", c !== "todo");
      if (ver) t.animate(calma ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: "scale(0.95)" }, { opacity: 1, transform: "scale(1)" }], { duration: 260, delay: Math.min(n++, 10) * 35, easing: EASE, fill: "backwards" });
    });
  }, 130);
}

/* Visor ampliado */
let visorLista = [], visorI = 0, visorOrigen = null;
function abrirVisor(tile) {
  visorLista = $$(".tile").filter(t => t.style.display !== "none");
  visorI = visorLista.indexOf(tile); visorOrigen = tile;
  const v = $("#visor");
  v.hidden = false; mostrarFoto(0);
  requestAnimationFrame(() => v.classList.add("ver"));
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#v-cerrar").focus(), 30);
}
function mostrarFoto(dir) {
  const t = visorLista[visorI], [f, c, txt] = PORTA[t.dataset.n], img = $("#v-img");
  img.className = "foto v-img " + f;
  $("#v-txt").textContent = txt;
  $("#v-num").textContent = `${CATS[c]} · ${visorI + 1} de ${visorLista.length}`;
  if (dir) img.animate(calma ? [{ opacity: .3 }, { opacity: 1 }] : [{ opacity: .3, transform: `translateX(${14 * dir}px)` }, { opacity: 1, transform: "translateX(0)" }], { duration: 220, easing: EASE });
}
function moverVisor(d) { visorI = (visorI + d + visorLista.length) % visorLista.length; mostrarFoto(d); }
function cerrarVisor() {
  const v = $("#visor");
  if (v.hidden) return;
  v.classList.remove("ver");
  document.body.style.overflow = "";
  setTimeout(() => { v.hidden = true; }, 200);
  visorOrigen?.focus({ preventScroll: true });
}
function visor() {
  $("#v-cerrar").addEventListener("click", cerrarVisor);
  $("#v-prev").addEventListener("click", () => moverVisor(-1));
  $("#v-next").addEventListener("click", () => moverVisor(1));
  $("#visor").addEventListener("click", e => { if (e.target.id === "visor") cerrarVisor(); });
  addEventListener("keydown", e => {
    if ($("#visor").hidden) return;
    if (e.key === "Escape") cerrarVisor();
    else if (e.key === "ArrowRight") moverVisor(1);
    else if (e.key === "ArrowLeft") moverVisor(-1);
    else if (e.key === "Tab") { // el foco no se sale del visor
      const f = [$("#v-cerrar"), $("#v-prev"), $("#v-next")], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
}

/* ---------- Paquetes ---------- */
function irAFechas(id) {
  $("#res-paq").value = id; pintarReserva();
  $("#fechas").scrollIntoView({ behavior: calma ? "auto" : "smooth" });
  setTimeout(() => { ($(".dia.libre") || $("#cal")).focus({ preventScroll: true }); aviso("Ahora escoja su día en el calendario", { ic: "calendar", dur: 3200 }); }, calma ? 0 : 600);
}
function pintarPaquetes() {
  $("#niveles").innerHTML = NIVELES.map(nv => {
    const p = paq(nv.id);
    const ahorro = nv.aparte ? `Separado le saldría en ${Q(nv.aparte)}` : `${Q(p.p / nv.fotos)} por foto`;
    return `<article class="nivel revela${nv.estrella ? " estrella" : ""}">
      ${nv.estrella ? '<span class="cinta">El más elegido</span>' : ""}
      <div><p class="mono tinta2" style="margin:0">${nv.n.toUpperCase()}</p><h3 style="margin-top:6px">${p.n}</h3></div>
      <div class="precio">${Q(p.p)}</div>
      <p class="ahorro" style="margin:0">${ahorro}</p>
      <ul>${nv.x.map(t => `<li>${ico("check")}<span>${t}</span></li>`).join("")}</ul>
      <button class="btn${nv.estrella ? "" : " btn-tinta"}" type="button" data-apartar="${p.id}"${nv.estrella ? ' data-palanca="anticipo"' : ""}>Apartar con ${Q(p.a)} de anticipo</button>
    </article>`;
  }).join("");
  $("#eventos").innerHTML = EVENTOS.map(([id, f, d]) => {
    const p = paq(id);
    return `<div class="evento revela"><span class="foto ${f}" aria-hidden="true"></span><div><b>${p.n}</b><span class="p">${precioTxt(p)}</span><span class="tinta2" style="display:block;font-size:.88rem;line-height:1.35">${d}</span>
      <button type="button" data-apartar="${id}">Ver fechas libres${ico("arrow")}</button></div></div>`;
  }).join("");
  $$("[data-apartar]").forEach(b => b.addEventListener("click", () => irAFechas(b.dataset.apartar)));
}

/* ---------- Promoción del mes ---------- */
const promo = { cupos: 7, total: 20 };
function reloj() {
  const fin = new Date(); fin.setMonth(fin.getMonth() + 1, 1); fin.setHours(0, 0, 0, 0);
  const prev = {};
  const tic = () => {
    let s = Math.max(0, Math.floor((fin - Date.now()) / 1000));
    const v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
    Object.entries(v).forEach(([k, n]) => {
      const el = $(`[data-r="${k}"]`), txt = String(n).padStart(2, "0");
      if (prev[k] === txt) return;
      prev[k] = txt; el.textContent = txt;
      if (!calma && k !== "d") { el.classList.remove("tic"); void el.offsetWidth; el.classList.add("tic"); }
    });
  };
  tic(); setInterval(tic, 1000);
  pintarCupos();
  $("#promo-btn").addEventListener("click", () => {
    simularWA({ texto: `Hola, quiero un cupo para la mini sesión navideña (${Q(350)}). ¿Qué horarios les quedan?`, respuesta: `¡Hola! Le quedan cupos el sábado en la mañana. Se aparta con ${Q(100)} y le mandamos la confirmación.` });
    if (promo.cupos > 1) { promo.cupos--; pintarCupos(); }
  });
}
function pintarCupos() {
  const n = $("#cupos-n"); n.textContent = promo.cupos;
  if (!calma) { n.classList.remove("salta"); void n.offsetWidth; n.classList.add("salta"); }
  $("#cupos-barra").style.width = ((promo.total - promo.cupos) / promo.total * 100) + "%";
}

/* ---------- Calendario de fechas libres ---------- */
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const DIAS_L = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const DIAS_C = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const HORAS = ["8:00", "10:00", "14:00", "16:00"];
const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
const MESES_CAL = [0, 1].map(k => { const d = new Date(hoy.getFullYear(), hoy.getMonth() + k, 1); return { y: d.getFullYear(), m: d.getMonth() }; });
const est = {}; // clave → "ocupado" | "suyo"
const recienTachado = new Set();
let mesVista = 0;
const sel = { k: null, hora: null };
const clave = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const deClave = k => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m, d); };
const diasDe = ({ y, m }) => Array.from({ length: new Date(y, m + 1, 0).getDate() }, (_, i) => new Date(y, m, i + 1));
const estadoDe = d => d <= hoy ? "pasado" : d.getDay() === 0 ? "cerrado" : est[clave(d)] || "libre";
const fechaTxt = d => `${DIAS_L[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`;
const fechaCorta = d => `${DIAS_C[d.getDay()]} ${d.getDate()}`;

function sembrar() {
  MESES_CAL.forEach((mc, i) => diasDe(mc).forEach(d => {
    if (d <= hoy || d.getDay() === 0) return;
    const h = (d.getDate() * 37 + d.getMonth() * 11 + (d.getDay() === 6 ? 3 : 0)) % 10;
    if (d.getDay() !== 6 && h < 3) est[clave(d)] = "ocupado";
    if (d.getDay() === 6 && i === 0 && h < 6) est[clave(d)] = "ocupado";
  }));
  // el mes que viene: los sábados casi llenos (quedan dos)
  const sabs = diasDe(MESES_CAL[1]).filter(d => d.getDay() === 6);
  sabs.forEach((d, i) => { if (i !== 1 && i !== sabs.length - 1) est[clave(d)] = "ocupado"; });
}
const sabadosLibres = () => diasDe(MESES_CAL[1]).filter(d => d.getDay() === 6 && estadoDe(d) === "libre").length;
function pintarChip() {
  const n = sabadosLibres(), mes = MESES[MESES_CAL[1].m], previo = $("#libres-n")?.textContent;
  $("#chip-txt").innerHTML = n ? `${n === 1 ? "Queda" : "Quedan"} <b id="libres-n">${n}</b> ${n === 1 ? "sábado libre" : "sábados libres"} en ${mes}` : `Los sábados de ${mes} se llenaron <b id="libres-n" class="sr">0</b>· vea otros días`;
  if (previo !== undefined && previo !== String(n) && !calma) $("#libres-n").classList.add("salta");
  $("#chip-libres").setAttribute("aria-label", `${n === 1 ? "Queda" : "Quedan"} ${n} ${n === 1 ? "sábado libre" : "sábados libres"} en ${mes}. Ver el calendario`);
}
function pintarMeses() {
  $("#cal-meses").innerHTML = MESES_CAL.map((mc, i) => `<button type="button" role="tab" aria-selected="${i === mesVista}" data-m="${i}">${MESES[mc.m]}</button>`).join("");
  $$("#cal-meses button").forEach(b => b.addEventListener("click", () => { mesVista = Number(b.dataset.m); pintarMeses(); pintarCal(true); }));
}
function pintarCal(cambioMes) {
  const mc = MESES_CAL[mesVista], dias = diasDe(mc), vacios = (dias[0].getDay() + 6) % 7, cal = $("#cal");
  cal.setAttribute("role", "group");
  const etiqueta = { libre: "libre", ocupado: "ocupado", cerrado: "cerrado", pasado: "ya pasó", suyo: "apartado por usted" };
  cal.innerHTML = "<span class='dia vacio' aria-hidden='true'></span>".repeat(vacios) + dias.map(d => {
    const e = estadoDe(d), k = clave(d), sab = d.getDay() === 6;
    const peq = e === "suyo" ? "suyo" : (e === "libre" && sab ? "libre" : "");
    const cls = ["dia", e, sab ? "sab" : "", sel.k === k ? "elegido" : "", recienTachado.has(k) ? "se-tacha" : ""].join(" ");
    return `<button type="button" class="${cls}" data-k="${k}"${e === "libre" ? "" : " disabled"} aria-pressed="${sel.k === k}" aria-label="${fechaTxt(d)}, ${etiqueta[e]}">${d.getDate()}${peq ? `<small>${peq}</small>` : ""}</button>`;
  }).join("");
  recienTachado.clear();
  $$(".dia.libre", cal).forEach(b => b.addEventListener("click", () => elegirDia(b.dataset.k)));
  if (cambioMes && !calma) cal.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 240, easing: EASE });
}
function elegirDia(k) {
  sel.k = k; sel.hora = null;
  pintarCal(); pintarReserva();
  const b = $(`.dia[data-k="${k}"]`); b?.focus({ preventScroll: true });
  if (innerWidth < 900) $(".reserva-caja").scrollIntoView({ behavior: calma ? "auto" : "smooth", block: "center" });
}
function horasOcupadas(k) { const d = deClave(k); return [HORAS[(d.getDate() + d.getMonth()) % HORAS.length]]; }
function pintarReserva() {
  const p = paq($("#res-paq").value);
  const fs = $("#horas"), btn = $("#res-btn");
  if (!sel.k) {
    $("#res-dia").textContent = "Toque un día libre del calendario";
    fs.disabled = true; $("#horas-chips").innerHTML = HORAS.map(h => `<button type="button" class="chip" disabled aria-pressed="false">${h}</button>`).join("");
  } else {
    const d = deClave(sel.k), tomadas = horasOcupadas(sel.k);
    $("#res-dia").textContent = fechaTxt(d).replace(/^./, c => c.toUpperCase());
    fs.disabled = false;
    $("#horas-chips").innerHTML = HORAS.map(h => `<button type="button" class="chip" data-h="${h}" aria-pressed="${sel.hora === h}"${tomadas.includes(h) ? ' disabled aria-label="' + h + ', ocupada"' : ""}>${h}</button>`).join("");
    $$("#horas-chips .chip:not(:disabled)").forEach(c => c.addEventListener("click", () => { sel.hora = c.dataset.h; pintarReserva(); $(`#horas-chips [data-h="${sel.hora}"]`).focus(); }));
  }
  $("#res-anticipo").innerHTML = `${p.n} · ${precioTxt(p)}. Se aparta con <b>${Q(p.a)}</b> de anticipo; el resto, el día de la sesión.`;
  const listo = sel.k && sel.hora;
  btn.disabled = !listo;
  $("#res-btn-txt").textContent = !sel.k ? "Escoja un día" : !sel.hora ? "Ahora escoja la hora" : `Apartar el ${fechaCorta(deClave(sel.k))} a las ${sel.hora}`;
}
function reservar() {
  if (!sel.k || !sel.hora) return;
  const d = deClave(sel.k), p = paq($("#res-paq").value), hr = sel.hora;
  simularWA({
    texto: `Hola, quiero apartar el ${fechaTxt(d)} a las ${hr} para ${p.n} (${precioTxt(p)}). ¿Cómo hago el anticipo de ${Q(p.a)}?`,
    respuesta: `¡Hola! Se la guardamos 24 horas. El anticipo de ${Q(p.a)} puede ser por transferencia o con tarjeta; le mando el enlace.`
  });
  est[sel.k] = "suyo";
  sel.k = null; sel.hora = null;
  pintarCal(); pintarReserva(); pintarChip();
  agregarReciente("Usted", `${p.n} · ${fechaCorta(d)}`, "ahora", "#1C1B19");
  setTimeout(() => aviso(`Fecha guardada 24 horas`, { ic: "check", sub: "Mientras se confirma el anticipo, nadie más la puede tomar", dur: 4200 }), 600);
}
function pintarSelectPaq() {
  $("#res-paq").innerHTML = PAQS.map(p => `<option value="${p.id}">${p.n} · ${precioTxt(p)}</option>`).join("");
  $("#res-paq").value = "familia";
  $("#res-paq").addEventListener("change", pintarReserva);
  $("#res-btn").addEventListener("click", reservar);
}

/* ---------- Apartado hace poco ---------- */
const COLORES = ["#8E2234", "#2F7D4F", "#B7893A", "#5B574F", "#7A4E8C"];
function agregarReciente(quien, que, cuando, color) {
  const ul = $("#recientes"), li = document.createElement("li");
  const ini = quien.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase();
  li.innerHTML = `<span class="av" style="background:${color || azar(COLORES)}">${ini}</span><span><b>${quien}</b> · ${que}<small>${cuando}</small></span>`;
  ul.prepend(li);
  if (ul.children.length > 1) li.classList.add("nuevo");
  while (ul.children.length > 4) ul.lastElementChild.remove();
}

/* ---------- Actividad en vivo (simulada) ---------- */
const NOMBRES = ["Una quinceañera", "Una familia de Reu", "Una mamá", "Unos novios", "Una familia de San Felipe", "Una clienta nueva", "Una familia de Champerico", "Una graduanda"];
const OTROS = [
  ["Una familia eligió sus 25 fotos", "images", "Desde su galería privada"],
  ["Alguien pidió la guía de vestuario", "book", "Hace un momento"],
  ["Una familia dejó 5 estrellas en Google", "star", "Sesión familiar"],
  ["Otra familia apartó su mini sesión navideña", "gift", "Quedan pocos cupos"]
];
let turno = 0;
function botAparta() {
  const libres = MESES_CAL.flatMap((mc, i) => diasDe(mc).filter(d => estadoDe(d) === "libre" && clave(d) !== sel.k && !(i === 1 && d.getDay() === 6 && sabadosLibres() <= 1)));
  if (!libres.length) return false;
  const d = azar(libres), k = clave(d), p = azar(PAQS.slice(0, 6)), quien = azar(NOMBRES);
  est[k] = "ocupado"; recienTachado.add(k);
  const enVista = d.getMonth() === MESES_CAL[mesVista].m;
  pintarCal(); if (!enVista) recienTachado.clear();
  pintarChip();
  agregarReciente(quien, `${p.n} · ${fechaCorta(d)}`, "ahora mismo");
  aviso(`<b>${quien}</b> ${quien.includes(" y ") ? "apartaron" : "apartó"} el ${fechaTxt(d)}`, { ic: "calendar", sub: `${p.n} · hace un momento` });
  return true;
}
function vida() {
  const siguiente = () => setTimeout(() => {
    if (!document.hidden) {
      if (turno % 2 === 0) { if (!botAparta()) aviso(...OTROS[0].slice(0, 1), { ic: OTROS[0][1] }); }
      else { const o = OTROS[(turno >> 1) % OTROS.length]; aviso(o[0], { ic: o[1], sub: o[2] }); if (o[1] === "gift" && promo.cupos > 2) { promo.cupos--; pintarCupos(); } }
      turno++;
    }
    siguiente();
  }, 15000 + Math.random() * 10000);
  setTimeout(() => { botAparta(); turno = 1; siguiente(); }, 7000);
}

/* ---------- Reseñas ---------- */
function pintarResenas() {
  const est5 = `<span class="estrellas" aria-label="5 de 5 estrellas">${ico("star").repeat(5)}</span>`;
  $("#lista-resenas").innerHTML = RESENAS.slice(0, 5).map(([f, n, s, t], i) => `
    <figure class="resena revela">
      ${i === 0 ? `<div class="foto ${f} revelado" aria-hidden="true"></div>` : ""}
      ${est5}
      <blockquote>«${t}»</blockquote>
      <figcaption><span class="foto ${f}" aria-hidden="true"></span><span><b>${n}</b><small>${s} · reseña de muestra</small></span></figcaption>
    </figure>`).join("");
  $$(".estrellas:empty").forEach(e => e.innerHTML = ico("star").repeat(5));
}

/* ---------- Guía gratis (imán de contactos) ---------- */
const esc = t => t.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function guia() {
  const f = $("#form-guia"), err = $("#g-error");
  f.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = esc(f.nombre.value.trim()), tel = f.tel.value.replace(/\D/g, "");
    f.nombre.removeAttribute("aria-invalid"); f.tel.removeAttribute("aria-invalid");
    if (!nombre) { err.textContent = "Escriba su nombre."; f.nombre.setAttribute("aria-invalid", "true"); f.nombre.focus(); return; }
    if (tel.length !== 8) { err.textContent = "El WhatsApp lleva 8 números."; f.tel.setAttribute("aria-invalid", "true"); f.tel.focus(); return; }
    err.textContent = "";
    const btn = $(".btn", f); btn.disabled = true; btn.lastChild.textContent = "Enviando…";
    red(() => {
      f.hidden = true;
      const ok = $("#guia-ok");
      ok.innerHTML = `<span class="ic">${ico("check")}</span><div><b>Listo, ${nombre.split(" ")[0]}. La guía va en camino.</b><p>Se la mandamos al +502 ${tel.slice(0, 4)} ${tel.slice(4)} con consejos para ${f.tipo.value.toLowerCase()}. Si quiere, de una vez le apartamos fecha.</p><a class="btn btn-chico btn-tinta" href="#fechas" style="margin-top:12px">Ver fechas libres</a></div>`;
      ok.hidden = false; ok.focus();
      setTimeout(() => aviso("Contacto nuevo en el panel del estudio", { ic: "users", sub: `${nombre.split(" ")[0]} · ${f.tipo.value} · así lo ve el estudio` }), 900);
    });
  });
}

/* ---------- Preguntas ---------- */
function pintarFAQ() {
  $("#faq").innerHTML = FAQ.map(([q, a]) => `<details class="revela"><summary>${q}</summary><p>${a}</p></details>`).join("");
}

/* ---------- Botones de WhatsApp generales ---------- */
function whatsapp() {
  const abrir = () => simularWA({ texto: "Hola, vi su página y quiero información para una sesión.", respuesta: "¡Hola! Con gusto. ¿Qué tipo de sesión busca? Le paso precios y fechas libres." });
  $("#wa-flota").addEventListener("click", abrir);
  $("#visita-btn").addEventListener("click", abrir);
}

/* ---------- Antes de mostrar cada palanca ---------- */
window.antesDePalanca = id => {
  if (id === "wa" && !sel.k) { // deja lista una fecha para que se vea el mensaje armado
    const libre = $(".dia.libre"); if (libre) { elegirDia(libre.dataset.k); sel.hora = $("#horas-chips .chip:not(:disabled)")?.dataset.h || null; pintarReserva(); }
  }
};

/* ---------- Arranque ---------- */
pintarIconos();
barra();
sembrar();
pintarSelectPaq();
pintarMeses();
pintarCal();
pintarReserva();
pintarChip();
[["Una quinceañera", "XV años", "hace 4 min"], ["Una familia", "Familia en exterior", "hace 22 min"], ["Unos novios", "Boda", "hace 1 hora"]].reverse().forEach(([q, s, c]) => agregarReciente(q, s, c));
pintarQuiz(0);
pintarPortafolio();
visor();
pintarPaquetes();
reloj();
pintarResenas();
guia();
pintarFAQ();
whatsapp();
pintarIconos();
cintaDemo({ sistema: "Página del estudio", palancas: PALANCAS });
revelar();
entrarPortada();
vida();
