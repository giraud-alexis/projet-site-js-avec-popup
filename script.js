const nav = document.querySelector("#navbar");
const improvise = document.querySelector("#imgImprovise");
const popup = document.querySelector("#popup");
const clic = document.querySelector("#closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.height = "50px";
  } else {
    nav.style.height = "90px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 370) {
    improvise.style.opacity = 1;
    improvise.style.transform = "none";
  } else {
    improvise.style.opacity = 0;
    improvise.style.transform = "else";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1350) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});

clic.addEventListener("click", () => {
  popup.style.opacity = 0;
});
// Bonus : quand on clicke sur la popup elle disparait pour toujours
