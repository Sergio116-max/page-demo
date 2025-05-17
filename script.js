
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  // Ejecutar al cargar y al hacer scroll
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Menú responsive
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
