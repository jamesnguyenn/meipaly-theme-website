let navbar = document.querySelector(".navbar-toggler");
let menu = document.querySelector(".menu");
let menuCancel = document.querySelector(".cancel-icon");
let logo = document.querySelector(".header__logo");
let ul = document.querySelector("ul");
let icon = document.querySelector(".navbar-toggler i");
let header = document.querySelector(".header");
let iconLogo = document.querySelector(".header__logo i");

let check = ul.classList.contains("is-active");

// function navBar() {
//   let rotate = icon.classList.toggle("active");
//   return rotate;
// }

function active() {
  let result = menu.classList.toggle("is-active");
  return result;
}

function noScroll() {
  let body = document.body.classList.toggle("scroll-body");
  return body;
}

function noLogo() {
  let removeLogo = logo.classList.toggle("header-active-menu");
  return removeLogo;
}

function removeBg() {
  let removeBg = header.classList.toggle("header-remove-backgroun");
}

function addBg() {
  let add = header.classList.add("header-add-bg");
  return add;
}

function removeBg() {
  let remove = header.classList.remove("header-add-bg");
  return remove;
}

icon.addEventListener("click", function () {
  icon.classList.toggle("active");
});

navbar.addEventListener("click", active);
navbar.addEventListener("click", noScroll);
navbar.addEventListener("click", noLogo);

function showMenu() {
  if (document.documentElement.scrollTop > 50) {
    addBg();
  } else {
    removeBg();
  }
}

function backTop() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", showMenu);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnLink = $$(".btn-arrow-link");

btnLink.forEach((item) => {
  item.onclick = function () {
    $(".btn-arrow-link.link-active").classList.remove("link-active");

    item.classList.add("link-active");
  };
});

function statistic(id, start, end, duration) {
  const item = $(id);

  let timer = setInterval(function () {
    start = start + 11;

    item.innerHTML = start;
    if (start > end) {
      clearInterval(timer);
      item.innerHTML = end;
    }
  }, duration);
}

let counted = false;
const data = $(".data-counter");
function run() {
  const stastic = 3700;

  let windowHeight = Math.ceil(window.scrollY);

  if (windowHeight > stastic && !counted) {
    counted = true;
    statistic(".number__item1", 7000, 8705, 0.1);

    statistic(".number__item2", 300, 480, 50);

    statistic(".number__item3", 500, 625, 60);

    statistic(".number__item4", 8000, 9774, 0.1);
  }
}
window.addEventListener("scroll", run);
