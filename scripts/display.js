function showProductCards(containerId) {
  const container = document.getElementById(containerId);
  products.forEach(product => {
    container.innerHTML += `
      <div class="card reveal">
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="package.html?id=${product.id}">Voir</a>
      </div>
    `;
  });
}

function showProductDetail(product) {
  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <div class="detail-card reveal">
      <img src="${product.img}" alt="${product.name}" />
      <button>Acheter</button>
    </div>
    <div class="detail-info reveal">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Prix :</strong> ${product.price}</p>
      <a href="index.html">← Retour</a>
    </div>
  `;
}
