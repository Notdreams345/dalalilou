function applyBackgroundGradient() {
  document.body.style.background = "linear-gradient(-45deg, #f0f4ff, #d0eaff, #c0dfff, #e0f7ff)";
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradientFlow 15s ease infinite";
}

function animateCardsOnHover() {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.boxShadow = "0 0 30px rgba(0, 170, 255, 0.6)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 0 20px rgba(0, 170, 255, 0.3)";
    });
  });
}
