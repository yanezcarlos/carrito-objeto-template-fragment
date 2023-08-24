const inputColor = document.querySelector("#inputColor");
const btn = document.querySelector("#btn");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

console.log(inputColor.value);

btn.addEventListener("click", () => {
  console.log(inputColor.value);
  parrafoExa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
});
