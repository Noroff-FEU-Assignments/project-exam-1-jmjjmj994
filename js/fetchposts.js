const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";

window.addEventListener = (e) => {
    e.preventDefault()
}
const postContainer = document.querySelector(".posts-page");
const loadMoreBtn = document.querySelector(".load-more");
const postCount = document.getElementById("post-count");
const postTotal = document.getElementById("post-total");
const loader = document.querySelector(".loader");
console.log(loader)

firstDeck() /* First deck */
function firstDeck(){
fetch(url)
.then((response) => {
    const data = response.json();
    return data;
})
.then((data) => {
    
    const deckOneData = data;
    loader.remove()
deckOneData.map((value,limit) => {
postCount.textContent = 10;
postTotal.textContent = 10;
    const {title, id, _embedded, date,} = value;
    const media = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const altText = _embedded["wp:featuredmedia"][0].alt_text;
    const convertedDate = new Date(date).toLocaleDateString('en-EU', {day: 'numeric',month: 'long',year: 'numeric',});
    if(limit < 10){
        postContainer.innerHTML += `
        <div class="posts-card">
          <div class="posts-card--image" data-image>
         <img src="${media}" alt="${altText}">
          </div>
         <div class="posts-card--title" data-title>
          <h1> ${title.rendered}</h1>
         </div>
         <div class="posts-card--content" data-content>
          <p> ${convertedDate}</p>
         </div>
         <div class="posts-card--link" data-link>
         <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
         </div>
      </div> 
      
        `;} 
        })})};
        
/* Second deck */

function secondDeck(){
    fetch(url)
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        const secondDeckData = data;
secondDeckData.map((value,limit) => renderCards(value,limit))
    })
}


function renderCards(value,limit){
    postCount.textContent = 20;
    postTotal.textContent = 20;
    const {title, id, _embedded, date,} = value;
    const media = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    const altText = _embedded["wp:featuredmedia"][0].alt_text;
    const convertedDate = new Date(date).toLocaleDateString('en-EU', {day: 'numeric',month: 'long',year: 'numeric',});
    if(limit > 10){
        postContainer.innerHTML += `
        <div class="posts-card">
          <div class="posts-card--image" data-image>
         <img src="${media}" alt="${altText}">
          </div>
         <div class="posts-card--title" data-title>
          <h1> ${title.rendered}</h1>
         </div>
         <div class="posts-card--content" data-content>
          <p> ${convertedDate}</p>
         </div>
         <div class="posts-card--link" data-link>
         <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
         </div>
      </div> 
        `;}
        loadMoreBtn.remove()
}

loadMoreBtn.addEventListener("click", secondDeck)












/* 
const urlPageOne = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=1";
const urlPageTwo = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=2";
const categories = "https://exam1.braatenmjos.no/wp-json/wp/v2/categories?page=1"



const cardContainer = document.querySelector(".posts-page");
const loadMoreButton = document.querySelector(".load-more");
const postCardTemplate = document.querySelector("[data-post-template]")
const loader = document.querySelector(".loader")
const postCount = document.getElementById("post-count")
const postTotal = document.getElementById("post-total")
postTotal.textContent = 20






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



 */