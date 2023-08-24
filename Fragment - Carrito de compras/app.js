const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const btnsBotones = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
  //   console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  carritoObjeto[producto.titulo] = producto;

  //   console.log(carritoObjeto);

  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";

  console.log(carritoObjeto);
  const arregloCarrito = Object.values(carritoObjeto);
  console.log(arregloCarrito);

  arregloCarrito.forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnsBotones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito);
});
