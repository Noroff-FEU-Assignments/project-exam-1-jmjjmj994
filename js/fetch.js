import { slide } from "./global.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";
const category = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories";




fetch(category)
.then((res => res.json()))
.then((data)=>{
 ts(data)
  /* sliderOne(data)  */  
 
})

fetch(url)
.then((res => res.json()))
.then((data)=>{
 
  sliderOne(data)  
 
})


function ts(data) {
 data.filter((ele, index)=>{

  const {slug,name} = ele
if(name === "Composer"){
  console.log(name)
}
 });
}




 function sliderOne(data){
slide.innerHTML = data.map((artist,index) =>{
 
    const  {id, date, type, title,guid}  = artist;  
    if(index > 7){
      return
    }
   let media = artist._embedded["wp:featuredmedia"][0].source_url  
  
 
  

return `
<div class="slide-card" style="background-image:url(${media})">
<div class="card-text">
  <p class="blog-card-date">${date}</p>
  <h2 class="blog-card-title">${title.rendered}</h2>
</div>

</div>


`
}).join("");
};  
 

