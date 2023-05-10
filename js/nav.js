
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-sidebar");

let menuOpen = false;
hamburger.onclick = (e) => {
if(!menuOpen){
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    document.body.style.cssText = "overflow:hidden"
    menuOpen = true;
}  else {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    document.body.style.cssText = "overflow:scroll"
    menuOpen = false
}

};
