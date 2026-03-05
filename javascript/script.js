
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
  event.preventDefault(); 

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a search term.");
  } else {
    console.log("Searching for:", value);
  }
});


 document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("toast-container");
  const successBtn = document.getElementById("success-btn");
  const errorBtn = document.getElementById("error-btn");

  function createToast(type, message) {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    let icon = type === "success" ? "✔️" : "⚠️";

    toast.innerHTML = `
      <span>${icon} ${message}</span>
      <button>&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);

    const autoRemove = setTimeout(() => removeToast(toast), 3000);

    toast.querySelector("button").addEventListener("click", () => {
      clearTimeout(autoRemove);
      removeToast(toast);
    });
  }

  function removeToast(toast) {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }


  successBtn.addEventListener("click", () => {
    createToast("success", "Success: Project saved!");
  });

  errorBtn.addEventListener("click", () => {
    createToast("error", "Error: Failed to fetch data.");
  });
});
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const submitBtn = document.getElementById("submitBtn");

function validateForm(){

let nameValid=false;
let emailValid=false;
let messageValid=false;



if(nameInput.value.length < 3){
nameInput.classList.add("error");
nameInput.classList.remove("success");
nameError.textContent="Name must be at least 3 characters long.";
}else{
nameInput.classList.remove("error");
nameInput.classList.add("success");
nameError.textContent="";
nameValid=true;
}



if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
emailInput.classList.add("error");
emailInput.classList.remove("success");
emailError.textContent="Enter a valid email.";
}else{
emailInput.classList.remove("error");
emailInput.classList.add("success");
emailError.textContent="";
emailValid=true;
}



if(messageInput.value.trim()===""){
messageInput.classList.add("error");
messageError.textContent="Message cannot be empty.";
}else{
messageInput.classList.remove("error");
messageInput.classList.add("success");
messageError.textContent="";
messageValid=true;
}



if(nameValid && emailValid && messageValid){
submitBtn.disabled=false;
}else{
submitBtn.disabled=true;
}

}



nameInput.addEventListener("input",validateForm);
emailInput.addEventListener("input",validateForm);
messageInput.addEventListener("input",validateForm);