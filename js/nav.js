const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav-ul")
let menuOpen = false;

hamburger.onclick = () => {
    if(!menuOpen){
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
        navUl.classList.toggle("active");
menuOpen = true
    }
    else {
        hamburger.classList.toggle("active")
        nav.classList.toggle("active");
        navUl.classList.toggle("active");
        menuOpen = false
    }
}








/* 
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-sidebar");

let menuOpen = false;
hamburger.onclick = (e) => {
if(!menuOpen){
    hamburger.classList.toggle("active");
   hamburger.style.cssText="background-color:white"
    navbar.classList.toggle("active");
    document.body.style.cssText = "overflow:hidden"
    menuOpen = true;
}  else {
    hamburger.classList.toggle("active");
    hamburger.style.cssText="background-color:none"
    navbar.classList.toggle("active");
    document.body.style.cssText = "overflow:scroll"
    menuOpen = false
}

};


 */