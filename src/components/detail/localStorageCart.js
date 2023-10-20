function localStorageCart(size, buttons, productId, name, price, image) {
  if (!size) {
    alert("Seleccione la talla a ingresar al carrito de compras");
    throw new console.error("No size assigned ✖️");
  }

  const carGet = localStorage.getItem("cart");
  const arrayCart = JSON.parse(carGet) || [];

  const matched = arrayCart.find(
    (product) => product.productId === productId && product.size === size
  );

  if (matched) {
    matched.quantity++;
  } else {
    arrayCart.push({ size, productId, name, price, image, quantity: 1 });
  }

  // guardar el carrito actializado en el localStorage
  const arrayJSON = JSON.stringify(arrayCart);
  localStorage.setItem("cart", arrayJSON);

  buttons.forEach((btn) => {
    btn.classList.remove("div__button--active");
  });
}

export default localStorageCart;
