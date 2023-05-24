import { slide } from "./slider.js";
const mainLeftContainer = document.querySelector(".main-container-left--column");
const mainRightContainer = document.querySelector(".main-container-right--column");

/* const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"; */
const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";




getData()
function getData(){
fetch(url)
.then((response) => {
const data = response.json()
return data;
})
.then((data)=>{
const storeData = data;
const sliderCards = storeData.slice(0, 10);
sliderCards.map(({title, id, _embedded}) => sliderContent(title, id, _embedded));
largePost(data);
})};






function sliderContent(title, id, _embedded){
    const media = _embedded["wp:featuredmedia"][0].source_url; 
    const altText = _embedded["wp:featuredmedia"][0].alt_text;
  slide.innerHTML += `
  <div class="slide-card">
  <div class="slide-card--img" >
  <img src="${media}" alt="${altText}">
  </div>
  <span class="slide-card--header">${title.rendered}</span>
  <a href="/specific.html?id=${id}" class="slider-href"> </a>
  </div>
  
  `};



function largePost(data){
const largePostData = data;

largePostData.filter(({title, id, _embedded, date})=>{
  const image = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  const alt = _embedded["wp:featuredmedia"][0].alt_text;
  const cardDate = new Date(date);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
if(id === 47){
mainLeftContainer.innerHTML = `

<img src="${image}" alt="${alt}">

`

mainRightContainer.innerHTML = `
<div class="main-right-content">
<div class="main-right-header">
<i class="fa-regular fa-calendar"></i>
<p> ${norwegianDate} </p>
</div>
<div class="main-right-text">
<h1> ${title.rendered}</h1>
<span> "From Compton to Cultural Icon: Kendrick Lamar's Journey as a Musical Maverick and Social Activist" </span>
</div>
<div class="main-right-footer">
<a href="/specific.html?id=${id}">Read Post </a>
</div>




</div>




`


}});};



/* 
function destructureData(obj){

return obj.map(({id, title, _embedded}) => sliderContent(id, title, _embedded)).join("")
};

function sliderContent(id, title, _embedded){
  const media = _embedded["wp:featuredmedia"][0].source_url; 
  const altText = _embedded["wp:featuredmedia"][0].alt_text;
slide.innerHTML += `
<div class="slide-card">
<div class="slide-card--img" >
<img src="${media}" alt="${altText}">
</div>
<span class="slide-card--header">${title.rendered}</span>
<a href="/specific.html?id=${id}" class="slider-href"> </a>
</div>

`

}





fetch(urlTwo)
.then(response => response.json())
.then((data) => {


renderLargePost(data)
});


function renderLargePost(data){
  
  
const myData = data;
myData.filter(({title, id, _embedded, date})=>{
  const image = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  const alt = _embedded["wp:featuredmedia"][0].alt_text;
  const cardDate = new Date(date);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
if(id === 47){
mainLeftContainer.innerHTML = `

<img src="${image}" alt="${alt}">

`

mainRightContainer.innerHTML = `
<div class="main-right-content">
<div class="main-right-header">
<i class="fa-regular fa-calendar"></i>
<p> ${norwegianDate} </p>
</div>
<div class="main-right-text">
<h1> ${title.rendered}</h1>
<span> "From Compton to Cultural Icon: Kendrick Lamar's Journey as a Musical Maverick and Social Activist" </span>
</div>
<div class="main-right-footer">
<a href="/specific.html?id=${id}">Read Post </a>
</div>




</div>




`

};
})
}

 */