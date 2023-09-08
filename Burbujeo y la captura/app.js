const cajitas = document.querySelectorAll(".border");

console.log(cajitas);

cajitas.forEach((caja) => {
  caja.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("me diste click");
  });
});
