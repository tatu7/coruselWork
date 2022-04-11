const slider = tns({
  container: ".slider__list",
  items: 3,
  slideBy: "page",
  mouseDrag: true,
  swipeAngle: false,
  speed: 600,
  autoplay: true,
  controlsContainer: ".control__button",
  autoplayTimeout: 2400,
  autoplayButtonOutput: false,
  nav: false,
});
// btn
let elNavList = document.querySelector(".menues");
let elOpenBtn = document.querySelector(".openBtn");
let elCloseBtn = document.querySelector(".closeBtn");
let ochish = document.getElementById("plus");
function och() {
  ochish.classList.add("openMenu");
  elNavList.style.display = "flex";
}
function yop() {
  ochish.classList.remove("openMenu");
}
let link = document.querySelector(".home");

link.addEventListener("click", () => {
  elNavList.style.display = "none";
  // elOpenBtn.style.display = "block";
  // elCloseBtn.style.display = "none";
  ochish.classList.remove("openMenu");
});
let link1 = document.querySelector(".about");

link1.addEventListener("click", () => {
  elNavList.style.display = "none";
  // elOpenBtn.style.display = "block";
  elCloseBtn.style.display = "none";
  ochish.classList.remove("openMenu");
});

let link2 = document.querySelector(".skills1");

link2.addEventListener("click", () => {
  elNavList.style.display = "none";
  // elOpenBtn.style.display = "block";
  elCloseBtn.style.display = "none";
  ochish.classList.remove("openMenu");
});
