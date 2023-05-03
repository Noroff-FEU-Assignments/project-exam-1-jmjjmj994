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
    let media = artist._embedded["wp:featuredmedia"][0].source_url  
  
  
    if(index > 7){
      return
    }

 
  

return `
<div class="slide-card">
<div class="slide-card--top">

    <img src="${media}" alt="" class="card-main--img">
</div>
<div class="slide-card--bottom">
   <h1 class="slide-card-header">
 
    <span class="slide-card-secondary">${title.rendered}</span>
   
   
   </h1>
   <div class="slide-card--btn">
    <a href="html/specific.html?id=${id}" class="read-more">read more</a> 
    <i class="fa-brands fa-spotify spotify card-spotify"></i>
   </div>
</div>
</div>

`
}).join("");
};  
 

 