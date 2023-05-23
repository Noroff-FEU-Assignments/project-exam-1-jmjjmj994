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



