const navLinks = document.querySelectorAll(".nav-link");
const toggler = document.querySelector(".navbar-toggler");
const collapsible = document.querySelectorAll(".collapsible-item");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((element) => element.classList.remove("active"));
    link.classList.add("active");

    collapsible.forEach((element) => element.classList.remove("show"));
    toggler.classList.add("collapsed");
  });
});
