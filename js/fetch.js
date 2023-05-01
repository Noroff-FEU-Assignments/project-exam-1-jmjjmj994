/* import { slide,topContainer } from "./global.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";
const category = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories/47";











fetch(url)
.then((res => res.json()))
.then((data)=>{
 
  sliderOne(data)  

})


 function sliderOne(data){
slide.innerHTML = data.map((artist,index) =>{

    const  {id, date, type, title,guid}  = artist;  
    let media = artist._embedded["wp:featuredmedia"][0].source_url  
   
    if(index > 7){
      return
    }

 
  

return `
<div class="slide-card">
<img src="${media}}">
<div class="card-text-container">
 
  <h2 class="blog-card-title">${title.rendered}</h2>
</div>

</div>


`
}).join("");
};  
 

 */