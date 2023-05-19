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

   
largeColumns(storeData)

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

/* id 86:, id:84 */ 
function largeColumns(data){
  const centerTopColumn = document.querySelector(".center-m-column--top");
  const centerBottomColumn = document.querySelector(".center-m-column--bottom");
const filteredData = data.filter(({id, title, _embedded})=>{
  const media = _embedded["wp:featuredmedia"][0].source_url; 
  const altText = _embedded["wp:featuredmedia"][0].alt_text;
if(id === 86){
  centerTopColumn.innerHTML = `
  <img src="${media}">
  
  `;}
if(id === 84){
centerBottomColumn.innerHTML = `

<img src="${media}">

`

}
});

};



