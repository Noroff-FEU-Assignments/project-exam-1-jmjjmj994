import { slide,topContainer } from "./global.js";

const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";
const category = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories/22";





fetch(url)
.then((res => res.json()))
.then((data)=>{
 
  sliderOne(data)  
/*  topContentContainer(data) */
})


/* function topContentContainer(data) {
topContainer.innerHTML = data.filter((content, index) => {

  const  {id, date, type, title,guid}  = content;  
  let media = content._embedded["wp:featuredmedia"][0].source_url 




return `


<div class="top-content-card t-left">
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card b-left"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card span-card"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card t-right"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card b-right"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>



`

});




} */


/*  <div class="top-content-card t-left">
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card b-left"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card span-card"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card t-right"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
    <div class="top-content-card b-right"> 
        <img src="/Screenshot 2023-04-28 at 10-28-45 marvin gaye and tammi terrell- the happy picture of young love.png" alt="">
    </div>
 */




/*  function sliderOne(data){
slide.innerHTML = data.map((artist,index) =>{

    const  {id, date, type, title,guid}  = artist;  
    let media = artist._embedded["wp:featuredmedia"][0].source_url  
   
    if(index > 7){
      return
    }

 
  

return `
<div class="slide-card">
<img src="${media}}">
<div class="card-text">
  <p class="blog-card-date">${date}</p>
  <h2 class="blog-card-title">${title.rendered}</h2>
</div>

</div>


`
}).join("");
};  
 

 */


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
<div class="card-text">
  <p class="blog-card-date">${date}</p>
  <h2 class="blog-card-title">${title.rendered}</h2>
</div>

</div>


`
}).join("");
};  
 

 