// Animate on scroll
AOS.init({
  once: true,
  duration: 700,
  easing: "ease-out-cubic",
});

// Typed hero roles
new Typed("#typed", {
  strings: ["Building ML products", "Designing crisp UX", "Shipping production code"],
  typeSpeed: 50,
  backSpeed: 35,
  loop: true,
  backDelay: 1600,
});

// Lock to dark theme
document.body.classList.remove("light");

// Highlight nav items on scroll
const navLinks = document.querySelectorAll("nav a");
const sections = Array.from(document.querySelectorAll("section, header#hero"));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          link.classList.toggle("active", href === `#${entry.target.id}`);
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach(section => observer.observe(section));


// Mock form submission
const form = document.querySelector(".contact-form");
form?.addEventListener("submit", e => {
  e.preventDefault();
  form.reset();
  alert("Thanks for reaching out! I will reply via email.");
});