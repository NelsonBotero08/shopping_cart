import toggleVisibilityOnClick from "../cart/toggleVisibilityOnClick.js";
import localStorageCart from "./localStorageCart.js";

function detail() {
  const params = window.location.search;
  // obtener el id
  const productId = parseInt(params.split("=")[1]);

  const sectionDetail = document.querySelector("#section_detail");

  const ul = document.createElement("ul");
  ul.classList.add("section_ul");
  ul.classList.add("ul");

  const li = document.createElement("li");
  li.classList.add("ul__li--detail");

  async function productApi() {
    const url = "https://ecommercebackend.fundamentos-29.repl.co/";
    const res = await fetch(url);
    try {
      const data = await res.json();

      for (const product of data) {
        if (product.id === productId) {
          li.innerHTML += `
          <div class="ul__div--li">
          <h1 class="ul__h1--div">${product.name}</h1>
          <h2 class="ul__h2--div">$${product.price}.00</h2>
          <p class="ul__p--div">Colores</p>
          <img src=${product.image} alt=${product.name} class="ul__img--div">
          <div class="ul__div--div">
            <h3 class="ul__h3--div">Tallas</h3>
            <h4 class="ul__h4--div">Guía de tallas</h4>
          </div>
          <div class="ul__div--buttons div">
            <button class="div__button--sizes"> S </button>
            <button class="div__button--sizes"> M </button>
            <button class="div__button--sizes"> L </button>
            <button class="div__button--sizes"> XL </button>
            <button class="div__button--sizes"> 2XL </button>
            <button class="div__button--sizes"> 3XL </button>
          </div>
          <button class="ul__button--div">
            Añadir al carrito
          </button>
      </div>
      <figure class="ul__figure">
        <img src=${product.image} alt=${product.name} class="ul__img--figure">
      </figure>

          `;

          const divButtonSizes = document.querySelectorAll(
            ".div__button--sizes"
          );

          let size = null;

          divButtonSizes.forEach((button) => {
            button.addEventListener("click", function () {
              divButtonSizes.forEach((btn) => {
                btn.classList.remove("div__button--active");
              });
              button.classList.add("div__button--active");
              size = button.textContent;
            });
          });

          const ulButtonDiv = document.querySelector(".ul__button--div");

          ulButtonDiv.addEventListener("click", () => {
            localStorageCart(
              size,
              divButtonSizes,
              productId,
              product.name,
              product.price,
              product.image
            );
            size = null;

            const cartDisplay = document.querySelector("#menu_cart");
            cartDisplay.classList.add("main__section--cartActive");
          });
        }
      }

      const productFiltered = data.filter(
        (product) => product.id === productId
      );

      const productPrice = productFiltered[0].price;
      const productName = productFiltered[0].name;

      const recommendedProducts = data.filter(
        (products) =>
          products.price === productPrice && products.name != productName
      );
      if (recommendedProducts.length >= 1) {
        const seccionrecommnededul = document.querySelector(
          "#seccionrecommneded--ul"
        );

        const h2Element = document.createElement("h2");
        h2Element.textContent = "Productos Recomendados";
        h2Element.classList.add("ul__h2--recommended");

        seccionrecommnededul.appendChild(h2Element);

        for (const product of recommendedProducts) {
          const li = document.createElement("li");
          li.classList.add("ul__li");

          li.innerHTML += `
            <img src="${product.image}" alt="${product.name}" class="ul__img">
            <div class="ul__div">
                <h2 class="ul__h2">${product.name}</h2>
                <h3 class="ul__h3">$${product.price}.00</h3>
            </div>
          `;

          seccionrecommnededul.appendChild(li);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  ul.innerHTML += `
  `;

  sectionDetail.appendChild(ul);
  ul.appendChild(li);

  productApi();
}

export default detail;
