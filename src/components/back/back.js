function back() {
  const back = document.querySelector("#back");
  back.innerHTML = `
        <a class="main__a--back" href="../../../index.html">
            <i class='bx bx-arrow-back'></i> <span> Academlo - tienda oficial</span>
        </a>
    `;
}

export default back;
