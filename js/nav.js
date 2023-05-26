const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav-ul");
let menuOpen = false;
hamburger.onclick = () => {
  if (!menuOpen) {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    navUl.classList.toggle("active");
    menuOpen = true;
  } else {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    navUl.classList.toggle("active");
    menuOpen = false;
  }
};
