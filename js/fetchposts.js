const cardContainer = document.querySelector(".posts-page");

const loader = document.querySelector(".loader")
const postCount = document.getElementById("post-count")
const postTotal = document.getElementById("post-total")


const url ="https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";


/*Buttons*/
const loadMoreButton = document.querySelector(".load-more");
const allBtn = document.querySelector("[data-date-all]");

const dateOldestBtn = document.querySelector("[data-date-oldest]");




/*Buttons*/



getData()
function getData(){
fetch(url)
.then((response) => {
    const fetchedData = response.json()
    return fetchedData;
})
.then((data) =>{
const storeData = data;
loader.remove()
destructData(storeData)
/* sortedItems(storeData) */

});};

/*Function for cards*/
function destructData(data){
     
    const firstDeck = data.slice(0, 10);
    firstDeck.map(({title, id, _embedded,date}) => firstDeckCards(title, id, _embedded, date))
    const secondDeck = data.slice(10, 20)
function firstDeckCards(header, id, media, date) {
    postCount.textContent = 10
    postTotal.textContent = 10
    const image = media["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = media["wp:featuredmedia"][0].alt_text;
    const cardDate = new Date(date);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
    cardContainer.innerHTML += `
      <div class="posts-card">
        <div class="posts-card--image" data-image>
          <img src="${image}" alt="${alt}">
        </div>
        <div class="posts-card--title" data-title>    
          <h1>${header.rendered} </h1>
        </div>
        <div class="posts-card--content" data-content>
          <p>${norwegianDate}</p>
        </div>
        <div class="posts-card--link" data-link>
          <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
        </div>
      </div>`;
  }

function secondDeckCards(){ /*change this its in the scope*/
    postCount.textContent =20
    postTotal.textContent = 20
secondDeck.map(({title, id, _embedded,date}) => {
    const image = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = _embedded["wp:featuredmedia"][0].alt_text;
     const cardDate = new Date(date);
     const dateOptions = { year: "numeric", month: "long", day: "numeric" };
     const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
     cardContainer.innerHTML += `
<div class="posts-card">
<div class="posts-card--image" data-image>
<img src="${image}" alt="${alt}">
</div>
<div class="posts-card--title" data-title>    
<h1>${title.rendered} </h1>
</div>
<div class="posts-card--content" data-content>
<p>${norwegianDate}</p>
</div>
<div class="posts-card--link" data-link>
<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
</div>
</div>`

}) 

};

const loadMoreButton = document.querySelector(".load-more");
loadMoreButton.addEventListener("click", secondDeckCards)

};





/* 
function sortedItems(data){
const byHighestDate = data.sort();
const byLowestDate = data.reverse();
const allData = data;




function highestDateCards(){
byHighestDate.forEach(value => {
    const {title, id, _embedded,date} = value;
    const image = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = _embedded["wp:featuredmedia"][0].alt_text;
     const cardDate = new Date(date);
     const dateOptions = { year: "numeric", month: "long", day: "numeric" };
     const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
     cardContainer.innerHTML += `
<div class="posts-card">
<div class="posts-card--image" data-image>
<img src="${image}" alt="${alt}">
</div>
<div class="posts-card--title" data-title>    
<h1>${title.rendered} gay</h1>
</div>
<div class="posts-card--content" data-content>
<p>${norwegianDate}</p>
</div>
<div class="posts-card--link" data-link>
<a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
</div>
</div>`
});


  
    };
   
    const dateNewestBtn = document.querySelector("[data-date-newest]");
    dateNewestBtn.addEventListener("click", highestDateCards)
};

 */




