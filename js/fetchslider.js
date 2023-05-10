import { slide } from "./global.js";
console.log(slide)
const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";
const category = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories/47";



fetch(url)
.then((res => res.json()))
.then((data)=>{
 
  sliderOne(data)  

})

slide.innerHTML = "Loading"
function sliderOne(data){
slide.innerHTML = data.map((artist,index) =>{


    const  {id, date, type, title,guid}  = artist;  
    const media = artist._embedded["wp:featuredmedia"][0].source_url  
    const altText = artist._embedded["wp:featuredmedia"][0].alt_text
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
};  
 

 