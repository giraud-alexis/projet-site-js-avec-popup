//const nav = document.querySelector("#navbar");
//const improvise = document.querySelector("#imgImprovise");
//const popup = document.querySelector("#popup");
//const clic = document.querySelector("#closeBtn");

//window.addEventListener("scroll", () => {
//  if (window.scrollY > 40) {
//    nav.style.height = "50px";
//  } else {
//    nav.style.height = "90px";
//  }
//});

//window.addEventListener("scroll", () => {
//  if (window.scrollY > 370) {
//    improvise.style.opacity = 1;
//    improvise.style.transform = "none";
//  } else {
//    improvise.style.opacity = 0;
//    improvise.style.transform = "else";
//  }
//});

//window.addEventListener("scroll", () => {
//  if (window.scrollY > 1350) {
//    popup.style.opacity = 1;
//    popup.style.transform = "none";
//  }
//});

//clic.addEventListener("click", () => {
//  popup.style.opacity = 0;
//});
//-------------------------------------------------------------------------
//connaitre le pourcentage de scroll
//console.log([window.scrollY + window.innerHeight] / document.body.offsetHeight);
//-------------------------------------------------------------------------

//solution secondaire et plus propre de faire de faire -----------
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  //console.log(scrollValue);

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  if (scrollValue > 0.85 && playone) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playone = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
//-------------------------------------------------------------
//faire en sorte que la popup ne revienne jamais
let playone = true;
//suite de cette fonction dans if/scrollValue/popup
