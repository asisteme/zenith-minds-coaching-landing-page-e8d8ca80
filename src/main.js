/* Zenith Minds Coaching – Main JS */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Handle booking form submission
document.getElementById("booking-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "¡Gracias por tu interés! Nuestro equipo se pondrá en contacto contigo muy pronto."
  );
  e.target.reset();
});

// Handle contact form submission
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensaje enviado. Te responderemos lo antes posible.");
  e.target.reset();
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
