import { slide } from "./slider.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";


getData()
function getData(){
fetch(url)
.then((response) => {
  const data = response.json()
  return data
})
.then((data)=>{
 const storeData = data;

 destructureData(storeData);

   
  /* getSliderContent(data) */

})
}


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





/* function getSliderContent(value){
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
 */


