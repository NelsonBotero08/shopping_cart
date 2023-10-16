function ulApi() {
  const ulApi = document.querySelector("#ul__api");
  let initial = 1;
  let resultPage = [];
  let numElement = 6;

  async function productsApi() {
    const url = "https://ecommercebackend.fundamentos-29.repl.co/";
    const res = await fetch(url);

    try {
      const data = await res.json();
      const following = document.getElementById("following");
      const former = document.getElementById("former");
      const totalPages = data.length / numElement;
      resultPage = paginationData(data, numElement, initial);

      function paginationData(data, numElement, page) {
        let fromElement = numElement * page - numElement;
        let resPage = [];
        for (let i = fromElement; i < numElement * page; i++) {
          resPage.push(data[i]);
        }
        return resPage;
      }

      function toRender() {
        ulApi.innerHTML = "";
        for (const product of resultPage) {
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
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        start.textContent = initial;
        end.textContent = totalPages;

        if (initial <= 1) {
          former.style.display = "none";
        } else {
          former.style.display = "block";
        }

        if (initial === totalPages) {
          following.style.display = "none";
        } else {
          following.style.display = "block";
        }
      }

      function increment() {
        initial++;
        resultPage = paginationData(data, numElement, initial);
        toRender();
      }

      increment();

      following.addEventListener("click", increment);

      function decrement() {
        if (initial > 1) {
          initial--;
          resultPage = paginationData(data, numElement, initial);
          toRender();
        }
      }
      decrement();

      former.addEventListener("click", decrement);
    } catch (error) {
      console.log(error);
    }
  }

  productsApi();
}

export default ulApi;
