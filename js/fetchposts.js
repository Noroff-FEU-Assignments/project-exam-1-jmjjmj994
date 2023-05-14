
const urlPageOne = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=1";
const urlPageTwo = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=2";
const categories = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories?page=1"

/* HTML elements */

const cardContainer = document.querySelector(".posts-page");
const loadMoreButton = document.querySelector(".load-more");
const postCardTemplate = document.querySelector("[data-post-template]")
const loader = document.querySelector(".loader")
const postCount = document.getElementById("post-count")
const postTotal = document.getElementById("post-total")
postTotal.textContent = 20
/*HTML elements */




/* Page One */
pageOneData()
function pageOneData(){
fetch(urlPageOne)
.then((response) => {
return response.json()
})
.then((data) => {
    loader.remove()
const storeData = data;
data.map(({title,  id, _embedded, date}) => pageOneContent(title,  id, _embedded, date))
})
};

function pageOneContent(title,  id, _embedded, date){
    const currentPostCount = 10;
    postCount.textContent = currentPostCount
    const postCard = postCardTemplate.content.cloneNode(true).children[0]

    const cardTitle = postCard.querySelector("[data-title]")
    const image = postCard.querySelector("[data-image]")
    const content = postCard.querySelector("[data-content]")
    const link = postCard.querySelector("[data-link]")
    
    const media = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const altText = _embedded["wp:featuredmedia"][0].alt_text;
  
    
    const convertedDate = new Date(date).toLocaleDateString('en-EU', {day: 'numeric',month: 'long',year: 'numeric',});
    cardTitle.textContent = title.rendered
    image.innerHTML = `<img src="${media}" alt="${altText}">` 
    content.textContent = convertedDate
    link.innerHTML = `<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>`
    cardContainer.append(postCard)
}

/* Page One */



function pageTwoData(){
fetch(urlPageTwo)
.then((response) => {
    return response.json()
})
.then((data) => {
    const storeData = data;
    data.map(({title, id, _embedded, date}) => pageTwoContent(title, id, _embedded, date))
})
};

function pageTwoContent(title, id, _embedded, date){
    const currentPostCount = 20;
    postCount.textContent = currentPostCount
    const postCard = postCardTemplate.content.cloneNode(true).children[0]
    const cardTitle = postCard.querySelector("[data-title]")
    const image = postCard.querySelector("[data-image]")
    const content = postCard.querySelector("[data-content]")
    const link = postCard.querySelector("[data-link]")
    const media = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const altText = _embedded["wp:featuredmedia"][0].alt_text;
    
    const convertedDate = new Date(date).toLocaleDateString('en-EU', {day: 'numeric',month: 'long',year: 'numeric',});
    cardTitle.textContent = title.rendered
    image.innerHTML = `<img src="${media}" alt="${altText}">`
    content.textContent = convertedDate
    link.innerHTML = `<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>`
    cardContainer.append(postCard)
    loadMoreButton.remove()
};

loadMoreButton.addEventListener("click", pageTwoData)



/* fetch(urlPageOne)
.then(res => res.json())
.then((data) => {

   postsPageOne(data)
   loader.remove()
})






function postsPageOne(data){
  data.map((value, index) => {

    postCount.innerHTML = index + 1
 
    const {title,excerpt,id } = value;
    const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const date = value.date;
    const d = new Date(date).toLocaleDateString('en-EU', {
    day: 'numeric',
     month: 'long',    
    year: 'numeric',
        
        });
    
    const postCard = postCardTemplate.content.cloneNode(true).children[0]
   const cardTitle = postCard.querySelector("[data-title]")
   const image = postCard.querySelector("[data-image]")
   const content = postCard.querySelector("[data-content]")
   const link = postCard.querySelector("[data-link]")
   cardTitle.textContent = title.rendered
   image.innerHTML = `<img src="${media}">`
   content.textContent = d
   link.innerHTML = `<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>`
   cardContainer.append(postCard)
 
  


  })

}


const loadPageTwo = () => {
    fetch(urlPageTwo)
    .then(res => res.json())
    .then((data) => {
       data.map((value, index) => {
        postCount.innerHTML = index + 11
        const {title,excerpt,id } = value;
        const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
        const date = value.date;
        const d = new Date(date).toLocaleDateString('en-EU', {
        day: 'numeric',
         month: 'long',    
        year: 'numeric',
            
            });
        
        const postCard = postCardTemplate.content.cloneNode(true).children[0]
       const cardTitle = postCard.querySelector("[data-title]")
       const image = postCard.querySelector("[data-image]")
       const content = postCard.querySelector("[data-content]")
       const link = postCard.querySelector("[data-link]")
       cardTitle.textContent = title.rendered
       image.innerHTML = `<img src="${media}">`
       content.textContent = d
       link.innerHTML = `<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>`
       cardContainer.append(postCard)
        




       })
 })
 loadMoreButton.remove()
}



loadMoreButton.addEventListener("click", loadPageTwo) */










/* 


const fetchArtists = () => {
    fetch(urlPageOne)
    .then(res => res.json())
    .then((data) => {
       data.map((value, index) => {
       if(value.categories == 22){
        const {title,excerpt,id } = value;
        const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
        const date = value.date;
        const d = new Date(date).toLocaleDateString('en-EU', {
        day: 'numeric',
         month: 'long',    
        year: 'numeric',
            
            });
    
    const artistContainer = document.createElement("div");
cardContainer.appendChild(artistContainer)
template.remove()

artistContainer.innerHTML += `


<div> <h1> ${title.rendered}</h1></div>


`

    
       }
       })
      
    })
    
    fetch(urlPageTwo)
    .then(res => res.json())
    .then((data) => {
        data.map((value) => {
          
            if(value.categories == 22){
                const {title,excerpt,id } = value;
                const media = value._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
                const date = value.date;
                const d = new Date(date).toLocaleDateString('en-EU', {
                day: 'numeric',
                 month: 'long',    
                year: 'numeric',
                    
                    });
            

                   
               }
    
    
    
    
    
    
    
            })
    })
    
    
    
    
    };
    
    
    
    const artistBtn = document.querySelector("[data-id-artists]");
    console.log(artistBtn)
    artistBtn.addEventListener("click", fetchArtists)

fetchArtists() */
/* fetch(urlPageOne)
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
 */






