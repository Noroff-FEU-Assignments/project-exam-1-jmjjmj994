import { slide } from "./slider.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";




fetch(url)
.then((res => res.json()))
.then((data)=>{
 

getSliderContent(data)

})

function getSliderContent(value){
const displayContent = slide.innerHTML = value.map((data, index)=> {
  const  {id, date, type, title,guid}  = data;  
  const media = data._embedded["wp:featuredmedia"][0].source_url  
  const altText = data._embedded["wp:featuredmedia"][0].alt_text
  if(index > 7){
    return
  }
  return `
  <div class="slide-card">
  <div class="slide-card--img" >
  <img src="${media}" alt="${altText}">
  </div>
  <span class="slide-card--header">${title.rendered}</span>
  <a href="/specific.html?id=${id}" class="slider-href"> </a>
  </div>
  
  `
  

}).join("");
}



