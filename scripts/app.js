onReady(() => {
  applyBackgroundGradient();
  setupScrollReveal();

  if (document.getElementById("packages")) {
    showProductCards("packages");
    animateCardsOnHover();
  }

  if (document.getElementById("product-detail")) {
    const id = getQueryParam("id");
    const product = getProductById(id);
    if (product) {
      showProductDetail(product);
      setupBuyButton();
    }
  }
});
