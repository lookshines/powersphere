document.addEventListener("DOMContentLoaded", function () {
  // Parallax effect for hero card
  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    heroCard.addEventListener("mousemove", (e) => {
      const { offsetWidth: width, offsetHeight: height } = heroCard;
      const { offsetX: x, offsetY: y } = e;
      const rotateX = ((y / height) - 0.5) * 20;
      const rotateY = ((x / width) - 0.5) * -20;
      heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform = "rotateX(0) rotateY(0)";
    });
  }

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
