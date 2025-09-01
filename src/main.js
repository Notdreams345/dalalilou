// Animation d’entrée
gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from("#accueil h2", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
gsap.from("#accueil p", { duration: 1.5, y: 50, opacity: 0, delay: 0.8 });
