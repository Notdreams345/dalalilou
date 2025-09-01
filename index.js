const grid = document.getElementById('product-grid');

products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `<img src="${p.img}" alt="${p.name}" /><h3>${p.name}</h3><p>${p.price}</p>`;
  div.onclick = () => {
    window.location.href = `package.html?id=${p.id}`;
  };
  grid.appendChild(div);
});
