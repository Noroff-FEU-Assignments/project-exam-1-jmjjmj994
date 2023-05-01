"use strict";
/*Hamburger*/
export const slide = document.querySelector(".slide");
export const topContainer = document.querySelector(".top-content-container")

const hamburgerMenu = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu")

let menuOpen = false;
hamburgerMenu.onclick = () => {
if(!menuOpen) {
    hamburgerMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("active")
    menuOpen = true;
} else {
    hamburgerMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("active")
    menuOpen = false;
}

};



const sliderContainer = document.querySelector(".slider-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
/* const slideWidth = slide.clientWidth; */
const slideWidth = 880;
console.log(slideWidth);

nextBtn.onclick = (e) => {
sliderContainer.scrollLeft += slideWidth

};
prevBtn.onclick = (e) => {
    sliderContainer.scrollLeft -= slideWidth
    };

