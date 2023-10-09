function mostrarMenu() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "src/imgs/1783255.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "src/imgs/nav_x.svg";
  }
}
