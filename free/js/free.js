// free/js/free.js

// Lista de recursos gratuitos (ejemplo)
const freeItems = [
  { title: "Mini eBook: Escritura Creativa", url: "recursos/ebook1.pdf" },
  { title: "Plantilla de Diario", url: "recursos/diario.pdf" },
  { title: "Guía de Inspiración", url: "recursos/guia.pdf" }
];

function loadFreeContent() {
  const list = document.getElementById("free-list");
  freeItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.title;
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadFreeContent);
