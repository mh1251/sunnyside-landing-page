let menuBtn = document.getElementById("hamburger-menu");
let nav = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {

  if ((nav.style.visibility == "visible")) {
    nav.style.visibility = "hidden";
  } else {
    nav.style.visibility = "visible";
  }
});
