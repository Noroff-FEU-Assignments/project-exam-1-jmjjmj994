"use strict";
/*Hamburger*/
export const slideOne = document.querySelector(".slide-one");
export const slideTwo = document.querySelector(".slide-two");
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
/*Hamburger*/


const sliderContainer = document.querySelector(".slider-container");
export const slide = document.querySelector(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slideWidth = slide.clientWidth;
console.log(slideWidth);

nextBtn.onclick = (e) => {
sliderContainer.scrollLeft += slideWidth

};
prevBtn.onclick = (e) => {
    sliderContainer.scrollLeft -= slideWidth
    };

/* window.onclick = (e) => {
    if (e.target !== main){
        dropdownMenu.classList.toggle("active")
      }
}
 */




    
  
/* const posts = [
{name:"Austin Wintory", date:"2023-04-26T08:04:29", img:"exam-img/Austin_Wintory_with_LSO.jpg", role:"composer"},
{name:"Nat King Cole", date:"2023-04-26T08:04:29", img:"exam-img/1091911_nat_king_cole_sepia_portrait.jpg", role:"artist"},
{name:"Frank Sinatra", date:"2023-04-26T08:04:29", img:"exam-img/frank-sinatra-1945-willinger-portrait-c8e0bd-1024.jpg", role:"artist"},
{name:"Giacomo Puccini", date:"2023-04-26T08:04:29", img:"exam-img/giacomo-puccini-640.jpg", role:"composer"}
]



const carouselContainer = document.querySelector(".carousel-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

carouselContainer.innerHTML = posts.map((person, slideIndex) =>{
const{name, date, img, role} = person;
let position = "next";
if(slideIndex === 0){
    position="active";
}
if(slideIndex === person.length - 1){
    position === "last"
}
return ` <article class="slide ${position} ">
<img src="${img}"/>
<h4>${name}
</h4>
<p class="title">${role}</p>
<p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores mollitia atque odit cum? Ad repudiandae optio ea labore harum beatae, neque rem facilis doloremque. Cum eaque atque impedit dolorum?</p>
<p class="date"> ${date}</p>
</article>`
}).join(""); */
 
//slides
