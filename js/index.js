window.onload = function () {
    let nav = document.getElementById('nav');
    let openMenu = document.querySelector('#open');
    let closeMenu = document.getElementById('close');

    openMenu.addEventListener("click", () => {
        console.log('hola')
        nav.classList.remove("hide-menu");
    });

    closeMenu.addEventListener("click", () => {
        nav.classList.add("hide-menu");
    });
}