// const contenedor = document.querySelector(".container");

document.addEventListener("click", (e) => {
  // console.log(e.target.dataset);

  if (e.target.id === "padre") {
    console.log("Diste click al padre");
  }

  if (e.target.matches(".border-secondary")) {
    console.log("Diste click al hijo");
  }

  if (e.target.dataset.div === "divNieto") {
    console.log("Diste click al nieto");
  }
});
