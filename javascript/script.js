
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
const container = document.getElementById("toast-container");

function createToast(type, message) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  toast.innerHTML = `
    <span>${message}</span>
    <button>&times;</button>
  `;

  container.appendChild(toast);

  // Animation trigger
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Auto remove after 3 sec
  const autoRemove = setTimeout(() => {
    removeToast(toast);
  }, 3000);

  // Manual close
  toast.querySelector("button").addEventListener("click", () => {
    clearTimeout(autoRemove);
    removeToast(toast);
  });
}

function removeToast(toast) {
  toast.classList.remove("show");

  setTimeout(() => {
    toast.remove(); // DOM cleanup (IMPORTANT)
  }, 400);
}

/* Button Events */
document.getElementById("success-btn").addEventListener("click", () => {
  createToast("success", "Success: Project saved!");
});

document.getElementById("error-btn").addEventListener("click", () => {
  createToast("error", "Error: Failed to fetch data.");
});