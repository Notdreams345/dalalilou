// app.js
const products = [
  {
    name: "Fidget Spirale petit",
    price: "1,5€",
    img: "https://cdn-acop.makeronline.com/asop/2024-10/10/webp/172850401991196900-6706e0d3dea6.webp"
  },
  {
    name: "Fidget Morph",
    price: "1,5€",
    img: "https://makerworld.bblmw.com/makerworld/model/USb1a131172987e6/design/2024-11-14_afcd1659f051b.jpeg"
  },
  // Ajoute les autres produits ici...
];

const grid = document.getElementById('product-grid');
products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `<img src="${p.img}" alt="${p.name}" /><h3>${p.name}</h3><p>${p.price}</p>`;
  grid.appendChild(div);
});
