// module exportant la liste des objets 3D
export const packages = [
  {
    id: 'porte-clefs-dragon',
    title: 'Porte-clés Dragon',
    description: 'Miniature de dragon imprimée en PLA, 5 cm de haut.',
    price: 8.90,
    image: '/assets/images/dragon-keychain.jpg'
  },
  {
    id: 'support-telephone',
    title: 'Support Téléphone',
    description: 'Support inclinable pour smartphone, design épuré.',
    price: 12.50,
    image: '/assets/images/phone-stand.jpg'
  },
  // ajoute autant d’objets que nécessaire
];

import { packages } from './package.js';

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const id = getQueryParam('id');
const pkg = packages.find(p => p.id === id);
const container = document.getElementById('product-detail');

if (!pkg) {
  container.innerHTML = '<p>Produit non trouvé.</p>';
} else {
  container.innerHTML = `
    <section class="detail-section">
      <img src="${pkg.image}" alt="${pkg.title}" class="detail-image"/>
      <div class="detail-info">
        <h1>${pkg.title}</h1>
        <p class="price">${pkg.price.toFixed(2)} €</p>
        <p>${pkg.description}</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>
    </section>
  `;
}

