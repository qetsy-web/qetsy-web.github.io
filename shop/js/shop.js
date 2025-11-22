// shop/js/shop.js

// Ejemplo de productos y servicios
const shopProducts = [
  { title: "Objeto físico 1", type: "producto", price: "USD 15", url: "#" },
  { title: "Objeto digital 1", type: "digital", price: "Gratis", url: "#" }
];

const shopServices = [
  { title: "Servicio 1", type: "servicio", price: "USD 50", url: "#" },
  { title: "Servicio 2", type: "servicio", price: "USD 30", url: "#" }
];

function loadShopItems() {
  const container = document.getElementById("items-container");

  function createCard(item) {
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>Tipo: ${item.type}</p>
      <p>Precio: ${item.price}</p>
      <a href="${item.url}" target="_blank">Ver más</a>
    `;
    return card;
  }

  [...shopProducts, ...shopServices].forEach(item => {
    container.appendChild(createCard(item));
  });
}

document.addEventListener("DOMContentLoaded", loadShopItems);
