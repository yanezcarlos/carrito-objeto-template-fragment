const lista = document.getElementById("lista");

const paises = ["Peru", "Bolivia", "Chile"];

// let template = "";

// paises.forEach((pais) => {
//   template += `<li class="list"> <b>Pais:</b> <span class="text-primary">${pais}</span> </li>`;
// });

// lista.innerHTML = template;

{
  /* <li class="list">
  <b>Pais:</b>
  <span class="text-primary">${pais}</span>
</li>; */
}

// const fragment = document.createDocumentFragment();
// // crea un nuevo nodo vacío, pero no lo añade al DOM hasta

// paises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.className = "list";

//   const b = document.createElement("b");
//   b.textContent = "Pais: ";

//   const span = document.createElement("span");
//   span.className = "text-primary";
//   span.textContent = `${pais}`;

//   li.appendChild(b);
//   li.appendChild(span);

//   fragment.appendChild(li);
// });

// lista.appendChild(fragment);

///////////////////////////////////  Template

const liTemplate = document.getElementById("liTemplate");

const fragment = document.createDocumentFragment();

const clickPais = (e) => {
  console.log("me diste click", e.target);
};

paises.forEach((pais) => {
  const clone = liTemplate.content.firstElementChild.cloneNode(true);

  clone.querySelector("span").textContent = `${pais}`;

  clone.addEventListener("click", clickPais);
  //   clone.addEventListener("click", (e) => {
  //     console.log("click", e.target);
  //   });

  fragment.appendChild(clone);
});

lista.appendChild(fragment);
