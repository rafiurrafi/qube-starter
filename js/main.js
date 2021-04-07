const menuDropdown = document.querySelector(".menu-dropdown-link");

const serviceMenu = document.querySelector(".menu-dropdown-content");
menuDropdown.addEventListener("mouseover", function () {
  serviceMenu.classList.add("menu-visible");
});
menuDropdown.addEventListener("mouseleave", function () {
  serviceMenu.classList.remove("menu-visible");
});
