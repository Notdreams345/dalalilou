function getProductById(id) {
  return products.find(p => p.id === id);
}

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}
