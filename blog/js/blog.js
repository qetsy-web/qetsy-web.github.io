// blog/js/blog.js

// Configuración: carpeta de entradas y extensión
const folder = 'entradas/';
const extension = '.txt';

// Estado actual
let current = 1;
let maxEntry = 0;

// Función para cargar la lista de entradas y determinar la última
async function loadMaxEntry() {
  let i = 1;
  while (true) {
    try {
      const res = await fetch(`${folder}${String(i).padStart(3,'0')}${extension}`);
      if (!res.ok) break; // no hay más archivos
      i++;
    } catch {
      break;
    }
  }
  maxEntry = i - 1;
}

// Función para cargar una entrada específica
async function loadEntry(num) {
  const formatted = String(num).padStart(3,'0');
  try {
    const res = await fetch(`${folder}${formatted}${extension}`);
    if (!res.ok) {
      document.getElementById('post-content').innerText = 'Entrada no encontrada.';
      return;
    }
    const text = await res.text();
    document.getElementById('post-content').innerText = text;
    current = num;
    updateNavigation();
  } catch (e) {
    document.getElementById('post-content').innerText = 'Error al cargar la entrada.';
    console.error(e);
  }
}

// Actualizar botones de navegación
function updateNavigation() {
  document.getElementById('prev-btn').disabled = current <= 1;
  document.getElementById('next-btn').disabled = current >= maxEntry;
}

// Botones de navegación
function prevEntry() { if(current>1) loadEntry(current-1); }
function nextEntry() { if(current<maxEntry) loadEntry(current+1); }

// Inicializar blog
async function initBlog() {
  await loadMaxEntry();
  if(maxEntry>0) loadEntry(maxEntry); // cargar la última entrada por defecto
}

document.addEventListener('DOMContentLoaded', initBlog);
