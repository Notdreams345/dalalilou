const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id === id);

const container = document.getElementById('product-detail');

if (product) {
  container.innerHTML = `
    <div class="product">
      <img src="${product.img}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p><strong>Prix :</strong> ${product.price}</p>
      <p>${product.description}</p>
      <a href="index.html">← Retour</a>
    </div>
  `;
} else {
  container.innerHTML = `<p>Produit introuvable.</p><a href="index.html">← Retour</a>`;
}
