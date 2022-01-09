window.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const arrowIcon = document.getElementById("arrow-icon");
    let showMenu = document.querySelector(".navbar-3");
    let smallMenu = document.querySelector(".small-navbar-3");

    menuIcon.addEventListener("click", () => {
        showMenu.style.display = "none";
        smallMenu.style.display = "flex";
    });

    arrowIcon.addEventListener("click", () => {
        showMenu.style.display = "flex";
        smallMenu.style.display = "none";
    });
});

