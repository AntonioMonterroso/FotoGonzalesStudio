/* Tipografías para elegir — Sistema completo (Foto González Studio)
   La usan letras.html (muestrario) y el sistema completo con ?letra=<id>. */
"use strict";
const LETRAS = [
  { id: "bodoni", n: "Bodoni Moda + Jost", v: "La que tenía antes", d: "Títulos de alto contraste, como de revista de moda; texto geométrico y limpio.",
    serif: "Bodoni Moda", sans: "Jost", q: "Bodoni+Moda:opsz,wght@6..96,400..800&family=Jost:wght@300..700" },
  { id: "cormorant", n: "Cormorant Garamond + DM Sans", v: "Elegante de estudio", d: "Títulos finos y clásicos, muy de fotografía de bodas y XV; texto redondo y fácil de leer.",
    serif: "Cormorant Garamond", sans: "DM Sans", q: "Cormorant+Garamond:ital,wght@0,500..700;1,500..700&family=DM+Sans:opsz,wght@9..40,300..800" },
  { id: "playfair", n: "Playfair Display + Lato", v: "Tradicional", d: "La combinación clásica de invitaciones y estudios: títulos con mucho carácter y texto neutro.",
    serif: "Playfair Display", sans: "Lato", q: "Playfair+Display:ital,wght@0,400..800;1,400..700&family=Lato:wght@300;400;700;900" },
  { id: "instrument", n: "Instrument Serif + Figtree", v: "De revista", d: "Títulos delgados y modernos, como portada de revista; texto amable y compacto.", uno: true,
    serif: "Instrument Serif", sans: "Figtree", q: "Instrument+Serif:ital@0;1&family=Figtree:wght@300..800" },
  { id: "dmserif", n: "DM Serif Display + Outfit", v: "Clásica con fuerza", d: "Títulos gruesos que se notan de lejos; texto moderno y redondo.", uno: true,
    serif: "DM Serif Display", sans: "Outfit", q: "DM+Serif+Display:ital@0;1&family=Outfit:wght@300..800" },
  { id: "marcellus", n: "Marcellus + Mulish", v: "Grabada, como placa", d: "Títulos que recuerdan letras talladas en piedra; texto suave y muy legible.", uno: true,
    serif: "Marcellus", sans: "Mulish", q: "Marcellus&family=Mulish:wght@300..800" },
  { id: "lora", n: "Lora + Work Sans", v: "Tranquila", d: "Títulos con serifa cálida y sin exagerar; texto sobrio de trabajo diario.",
    serif: "Lora", sans: "Work Sans", q: "Lora:ital,wght@0,400..700;1,400..700&family=Work+Sans:wght@300..800" },
  { id: "jakarta", n: "Plus Jakarta Sans", v: "App moderna, una sola letra", d: "Todo con la misma letra sin serifa: se ve como app de gestión, ordenada y sobria.",
    serif: "Plus Jakarta Sans", sans: "Plus Jakarta Sans", q: "Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800" },
  { id: "bricolage", n: "Bricolage Grotesque", v: "Moderna con carácter, una sola letra", d: "Sin serifa pero con personalidad en los títulos; fresca y diferente.",
    serif: "Bricolage Grotesque", sans: "Bricolage Grotesque", q: "Bricolage+Grotesque:opsz,wght@12..96,300..800" }
];
/* Colores para probar desde la propuesta (?color=<id>) */
const COLORES = [
  { id: "corinto", n: "Corinto", a: "#8E2234", o: "#741A2A", s: "#F2DDE0" },
  { id: "azul", n: "Azul noche", a: "#1F3A5F", o: "#172C49", s: "#DDE5EF" },
  { id: "olivo", n: "Verde olivo", a: "#4A6530", o: "#3A5025", s: "#E3EBD9" },
  { id: "terracota", n: "Terracota", a: "#A24A24", o: "#843B1C", s: "#F5E2D8" },
  { id: "ciruela", n: "Ciruela", a: "#6B3F7A", o: "#563163", s: "#ECE0F0" },
  { id: "grafito", n: "Grafito", a: "#2B2A28", o: "#1A1918", s: "#E6E3DE" }
];
const varsColor = c => ({ "--acento": c.a, "--acento-osc": c.o, "--acento-suave": c.s });
const urlLetras = lista => "https://fonts.googleapis.com/css2?family=" + lista.map(l => l.q).join("&family=") + "&display=swap";
function cargarLetras(lista) {
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = urlLetras(lista); document.head.append(l);
}
function varsLetra(l) {
  return { "--serif": `"${l.serif}", Georgia, serif`, "--sans": `"${l.sans}", ui-sans-serif, sans-serif`, "--mono": `"${l.sans}", ui-sans-serif, sans-serif` };
}

/* En el sistema completo: ?letra=<id> y ?color=<id> lo pintan así y dejan un aviso para volver */
(function () {
  if (!document.querySelector("script[data-letra-sistema]")) return;
  const q = new URLSearchParams(location.search);
  const l = LETRAS.find(x => x.id === q.get("letra"));
  const c = COLORES.find(x => x.id === q.get("color"));
  if (!l && !c) return;
  const r = document.documentElement;
  if (l) {
    cargarLetras([l]);
    Object.entries(varsLetra(l)).forEach(([k, v]) => r.style.setProperty(k, v));
    if (l.uno) r.style.fontSynthesis = "none";
  }
  if (c) Object.entries(varsColor(c)).forEach(([k, v]) => r.style.setProperty(k, v));
  const dePropuesta = q.get("de") === "propuesta";
  document.addEventListener("DOMContentLoaded", () => {
    const a = document.createElement("a");
    a.className = "letra-viendo";
    a.href = dePropuesta ? "../../#medida" : "letras.html" + (l ? "#" + l.id : "");
    const nombre = [l && l.n, c && c.n].filter(Boolean).join(" · ");
    a.innerHTML = `<small>Viendo con</small><b>${nombre}</b><span>${dePropuesta ? "Volver a la propuesta" : "Otras letras"}</span>`;
    document.body.append(a);
  });
})();
