import cart from "./src/components/cart/cart.js";
import header from "./src/components/header/header.js";
import nav from "./src/components/nav/nav.js";
import ulApi from "./src/components/ulApi/ulApi.js";
import toggleVisibilityOnClick from "./src/components/cart/toggleVisibilityOnClick.js";

nav();
header();
ulApi();
cart();

const cartNav = document.querySelector("#cart");
const menuCart = document.querySelector("#menu_cart");
const close = document.querySelector("#close");

toggleVisibilityOnClick(cartNav, menuCart);

toggleVisibilityOnClick(close, menuCart);
