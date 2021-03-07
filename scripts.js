const navLinks = document.querySelectorAll(".nav-link");
const toggler = document.querySelector(".navbar-toggler");
const collapsible = document.querySelectorAll(".collapsible-item");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    navLinks.forEach((e) => e.classList.remove("active"));
    l.classList.add("active");

    collapsible.forEach((e) => e.classList.remove("show"));
    toggler.classList.add("collapsed");
  });
});
