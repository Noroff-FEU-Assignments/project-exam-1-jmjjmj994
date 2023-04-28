import { slide, slideOne, slideTwo } from "./global.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"




fetch(url)
.then((res => res.json()))
.then((data)=>{
  sliderOne(data)   
 sliderTwo(data)
})







function sliderOne(data){
slideOne.innerHTML = data.map((artist,index) =>{
 
    const  {id, date, type, title,guid}  = artist;  
    let media = artist._embedded["wp:featuredmedia"][0].source_url
   console.log(media);
/*   if(index > 3) {
    return
  } */
  

return `
<div class="card">
<div class="card-img">
   <img src="${media}"/>
</div>
<div class="card-text">
  <p class="blog-card-date">${date}</p>
  <h2 class="blog-card-title">${title.rendered}</h2>
</div>

</div>


`
}).join("");
};  


function sliderTwo(data){
    slideTwo.innerHTML = data.map((artist,index) =>{
     
        const  {id, date, type, title,guid}  = artist;  
        let media = artist._embedded["wp:featuredmedia"][0].source_url
       console.log(media);
      if(index < 6) {
        return
      }
      
    
    return `
    <div class="card">
    <div class="card-img">
       <img src="${media}"/>
    </div>
    <div class="card-text">
      <p class="blog-card-date">${date}</p>
      <h2 class="blog-card-title">${title.rendered}</h2>
    </div>
    
    </div>
    
    
    `
    }).join("");
    };  