function localStorageCart(size, buttons, productId, name, price, image) {
  if (!size) {
    throw new console.error("No size assigned ✖️");
  }

  //obtener el carrito del localstorage y en caso que no exista vamos a crear uno

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

  console.log(matched);

  // guardar el carrito actializado en el localStorage
  const arrayJSON = JSON.stringify(arrayCart);
  localStorage.setItem("cart", arrayJSON);

  buttons.forEach((btn) => {
    btn.classList.remove("div__button--active");
  });
}

export default localStorageCart;
