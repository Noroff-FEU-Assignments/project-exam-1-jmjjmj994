
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


