let form = document.querySelector("form");

// change and value property
let nameInput = document.querySelector("#name-input");
let greeting = document.querySelector("#greeting");
nameInput.addEventListener("change", () => {
  greeting.textContent = `Hello, ${nameInput.value}`;
});

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("form submitted!");
});
