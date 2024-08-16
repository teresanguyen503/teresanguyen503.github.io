// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.getElementById(targetId.substring(1));

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
