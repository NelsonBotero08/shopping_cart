function nav() {
  const nav = document.getElementById("nav");

  nav.innerHTML += `
    <ul class="nav__ul">

      <li class="nav__li">
        <img class="nav__img" src="../../../src/assets/logo_nombre.png" alt="logo Academlo">

      </li>

      <li class="nav__li nav__li--quantity">
        <i id="cart" class='bx bx-cart '></i><p class="nav__p--quantity" id="quantityProduct"></p>
      </li>

    </ul>
  `;

  const navImg = document.querySelector(".nav__img");

  navImg.addEventListener("click", function () {
    scroll({ top: 0, left: 0, behavior: "smooth" });
  });
}

export default nav;
