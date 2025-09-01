function setupBuyButton() {
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Fonction d’achat à venir !");
    });
  }
}

function setupScrollReveal() {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });
}

function onReady(callback) {
  window.addEventListener("DOMContentLoaded", callback);
}
