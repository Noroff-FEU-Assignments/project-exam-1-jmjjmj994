
const urlPageOne = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=1";
const urlPageTwo = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=2";
const pageOneSection = document.querySelector(".posts-page--one");
const pageTwoSection = document.querySelector(".posts-page--two");


fetch(urlPageOne)
.then(res => res.json())
.then((data)=>{
console.log(data)
 pageOne(data)

}) 
fetch(urlPageTwo)
.then(res => res.json())
.then((data)=>{
console.log(data)
 pageTwo(data)
}) 


function pageOne(data){


console.log(data._embedded)
pageOneSection.innerHTML = data.map((rowOne, index) => {
   
const {title,excerpt,id } = rowOne;
const media = rowOne._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
return `

<div class="posts-card">

<div class="posts-card--title"><h1>${title.rendered}</h1></div>
<div class="posts-card--img"><img src="${media}"> </div>
<div class="posts-card--content"><p>${excerpt.rendered}</p></div>
<div class="posts-card--footer">
    <a href="/specific.html?id=${id}"></a>
</div>
</div>
`

}).join("");


}


function pageTwo(data){
    pageTwoSection.innerHTML = data.map((rowTwo, index) => {
      
    const {title,excerpt, id } = rowTwo;
    const media = rowTwo._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    
    return `
    
    <div class="posts-card">
    
    <div class="posts-card--title"><h1>${title.rendered}</h1></div>
    <div class="posts-card--img"><img src="${media}"> </div>
    <div class="posts-card--content"><p>${excerpt.rendered}</p></div>
    <div class="posts-card--footer">
    <a href="/specific.html?id=${id}"></a>
    </div>
    </div>
    `
    
    }).join("");
    
    
    }
    
    


/* API */

/* Button */

const revealBtn = document.querySelector(".reveal-more");



    let revealContent = false;

    revealBtn.onclick = (e) => {
        e.preventDefault()
    if(!revealContent) {
        revealBtn.remove()
        pageOneSection.style.cssText = "margin:0;"
        pageTwoSection.classList.toggle("active");
        revealContent = true;
    
    } else {
        revealBtn.
        pageTwoSection.classList.toggle("active");
        revealContent = false;
    }
    
    };





/* Button */