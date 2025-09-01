// Simulation d'ajout au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert("Produit ajouté au panier !");
    // Tu peux ici connecter à Stripe ou stocker dans localStorage
  });
});
