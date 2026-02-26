console.log("day 1 task loaded");
const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");

  toggle.textContent = navbar.classList.contains("nav-open") ? "✖" : "☰";
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
    toggle.textContent = "☰";
  });
});