import back from "./src/components/back/back.js";
import cart from "./src/components/cart/cart.js";
import detail from "./src/components/detail/detail.js";
import nav from "./src/components/nav/nav.js";
import toggleVisibilityOnClick from "./src/components/cart/toggleVisibilityOnClick.js";

nav();
back();
detail();
cart();

const cartNav = document.querySelector("#cart");
const menuCart = document.querySelector("#menu_cart");
const close = document.querySelector("#close");

toggleVisibilityOnClick(cartNav, menuCart);

toggleVisibilityOnClick(close, menuCart);
