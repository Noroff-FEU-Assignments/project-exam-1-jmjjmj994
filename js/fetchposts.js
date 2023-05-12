
const urlPageOne = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=1";
const urlPageTwo = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=2";
const categories = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories?page=1"












/* const button = document.querySelector("[data-id-all]")
button.addEventListener("click", waitOn)

function waitOn(){
fetch(urlPageOne)
.then(res => res.json())
.then((data) => {
valueOfData(data)
})

fetch(urlPageTwo)
.then(res => res.json())
.then((data) => {
valueOfData(data)
})





function valueOfData(obj){

    pageOneSection.innerHTML = obj.map((value, index) => {
   if(value.categories == 22){
     value.artist = "artist"
     console.log(value)
        const {title,excerpt,id } = value;
        const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
        const date = value.date;
        const d = new Date(date).toLocaleDateString('en-EU', {
        day: 'numeric',
         month: 'long',    
        year: 'numeric',
            
            });
        
        return `
        
        <div class="posts-card">
        
        <div class="posts-card--title"><h1>${title.rendered}</h1></div>
        <div class="posts-card--img"><img src="${media}"> </div>
        <div class="posts-card--content"><p>${d}</p></div>
        <div class="posts-card--footer">
            <a href="/specific.html?id=${id}" class="posts-href"></a>
        </div>
        </div>
        `
        
        }}).join("");
        


}
} */




fetch(urlPageOne)
.then(res => res.json())
.then((data)=>{
 pageOne(data)


}) 
fetch(urlPageTwo)
.then(res => res.json())
.then((data)=>{
 pageTwo(data)
}) 




function pageOne(data){

pageOneSection.innerHTML = data.map((value, index) => {
   
const {title,excerpt,id } = value;
const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
const date = value.date;
const d = new Date(date).toLocaleDateString('en-EU', {
day: 'numeric',
 month: 'long',    
year: 'numeric',
    
    });

return `

<div class="posts-card">

<div class="posts-card--title"><h1>${title.rendered}</h1></div>
<div class="posts-card--img"><img src="${media}"> </div>
<div class="posts-card--content"><p>${d}</p></div>
<div class="posts-card--footer">
    <a href="/specific.html?id=${id}" class="posts-href"></a>
</div>
</div>
`

}).join("");


}


function pageTwo(data){
    pageTwoSection.innerHTML = data.map((value, index) => {
      
    const {title,excerpt, id } = value;

    const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const date = value.date;
const d = new Date(date).toLocaleDateString('en-EU', {

    day: 'numeric',
    
 month: 'long',
    
year: 'numeric',
    
    });
    return `
    
    <div class="posts-card">
    
    <div class="posts-card--title"><h1>${title.rendered}</h1></div>
    <div class="posts-card--img"><img src="${media}"> </div>
    <div class="posts-card--content"><p>${d}</p></div>
    <div class="posts-card--footer">
    <a href="/specific.html?id=${id}"></a>
    </div>
    </div>
    `
    
    }).join("");
    
    
    }
    
    


const pageOneSection = document.querySelector(".posts-page--one");
const pageTwoSection = document.querySelector(".posts-page--two");
const loadMore = document.querySelector(".reveal-more");



    let revealContent = false;

    loadMore.onclick = (e) => {
        e.preventDefault()
    if(!revealContent) {
        loadMore.remove()
        pageOneSection.style.cssText = "margin:0;"
        pageTwoSection.classList.toggle("active");
        revealContent = true;
    
    } else {
        pageTwoSection.classList.toggle("active");
        revealContent = false;
    }
    
    }; 







