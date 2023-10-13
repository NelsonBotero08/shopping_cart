function ulApi() {
  const ulApi = document.querySelector("#ul__api");
  async function productsApi() {
    const url = "https://ecommercebackend.fundamentos-29.repl.co/";
    const res = await fetch(url);
    try {
      const data = await res.json();

      for (const product of data) {
        const li = document.createElement("li");
        li.classList.add("ul__li");

        li.innerHTML += `
          <img src="${product.image}" alt="${product.name}" class="ul__img">
          <div class="ul__div">
              <h2 class="ul__h2">${product.name}</h2>
              <h3 class="ul__h3">$${product.price}.00</h3>
          </div>
        `;

        ulApi.appendChild(li);

        li.addEventListener("click", () => {
          localStorage.setItem("productModal", `${product.id}`);
          window.location.href = `../../../detail.html?id=${product.id}`;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  productsApi();
}

export default ulApi;
