const slideContainer = document.querySelector(".slide-container");
export const slide = document.querySelector(".slide");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const slideWidth = 880;


nextBtn.onclick = (e) => {
slideContainer.scrollLeft +=slideWidth
};
prevBtn.onclick = (e) => {
    slideContainer.scrollLeft -=slideWidth
    };

