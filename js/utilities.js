export { slide, mainLeftContainer, mainRightContainer,largeLoader,largeError }

const largeError = document.querySelector(".large-error");

const largeLoader = document.querySelector(".large-loader");
const mainLeftContainer = document.querySelector(".large-post--left");
const mainRightContainer = document.querySelector(".large-post--right");
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slideWidth = 880;

nextBtn.onclick = (e) => {
slideContainer.scrollLeft +=slideWidth
};
prevBtn.onclick = (e) => {
    slideContainer.scrollLeft -=slideWidth};


