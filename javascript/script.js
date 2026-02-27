
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
 const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent reload

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a search term.");
  } else {
    console.log("Searching for:", value);
  }
});