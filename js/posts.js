const largeLoader = document.querySelector(".large-loader");
const cardContainer = document.querySelector(".posts-page");
const postCount = document.getElementById("post-count")
const postTotal = document.getElementById("post-total")

const url ="https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";


/*Buttons*/
const loadMoreButton = document.querySelector(".load-more");

/*Buttons*/


/* local object*/

/* localobject*/

let myData = [];
const invokeFetch = getData()
function getData(){
fetch(url)
.then(response =>{
  
  return response.json()
})
  .then((data) => {
  largeLoader.classList.toggle("hide-loader")
 myData = data; 
 
myPosts(data)



/* handleData(storeData); */


});};

function myPosts(data){
 

data.map((obj, index)=>{
 const {title, id, _embedded, date} = obj;
 const image = _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
 const alt = _embedded["wp:featuredmedia"][0].alt_text;
 const cardDate = new Date(date);
 const dateOptions = { year: "numeric", month: "long", day: "numeric" };
 const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions); 
  if(index < 10){
  cardContainer.innerHTML += `
  <div class="posts-card">
    <div class="posts-card--image" data-image>
      <img src="${image}" alt="${alt}">
    </div>
    <div class="posts-card--title" data-title>    
      <h1>${title.rendered} </h1>
    </div>
    <div class="posts-card--content" data-content>
    <i class="fa-regular fa-calendar"></i>  <p>${norwegianDate}</p>
    </div>
    <div class="posts-card--link" data-link>
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`
  postCount.textContent = 10;
  postTotal.textContent = 17
  return;
 }

function secondDeckCards (){
if(index > 10){
  cardContainer.innerHTML += `
  <div class="posts-card">
    <div class="posts-card--image" data-image>
      <img src="${image}" alt="${alt}">
    </div>
    <div class="posts-card--title" data-title>    
      <h1>${title.rendered} </h1>
    </div>
    <div class="posts-card--content" data-content>
    <i class="fa-regular fa-calendar"></i>  <p>${norwegianDate}</p>
    </div>
    <div class="posts-card--link" data-link>
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`
  postCount.textContent = 17;
  postTotal.textContent = 17;

loadMoreButton.remove()
}};
loadMoreButton.addEventListener("click", secondDeckCards)});
};








/* function postsContent(data) {
const firstDeck = data.slice(0,10);
for(const{title, id, _embedded, date} of firstDeck){
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
    <i class="fa-regular fa-calendar"></i>  <p>${norwegianDate}</p>
    </div>
    <div class="posts-card--link" data-link>
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`;
};



function secondDeckCards(){
  const secondDeck = data.slice(10,20);
  for(const{title, id, _embedded, date} of secondDeck){
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
      <i class="fa-regular fa-calendar"></i>  <p>${norwegianDate}</p>
      </div>
      <div class="posts-card--link" data-link>
        <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
      </div>
    </div>`;
  };

}
loadMoreButton.addEventListener("click", secondDeckCards)






}; 
 */






/* 
function handleData(data){
const firstDeckData = data.slice(0, 10);
const secondDeckData = data.slice(10, 20);

firstDeckData.forEach(({title,id, _embedded, date})=>{ 
  postCount.textContent = 10
  postTotal.textContent = 20
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
    <i class="fa-regular fa-calendar"></i>  <p>${norwegianDate}</p>
    </div>
    <div class="posts-card--link" data-link>
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`;
});


function secondDeckCards(){ 
  secondDeckData.forEach(({title,id, _embedded, date})=>{
    postCount.textContent = 20
    postTotal.textContent = 20
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
      <i class="fa-regular fa-calendar"></i> <p>${norwegianDate}</p>
      </div>
      <div class="posts-card--link" data-link>
        <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
      </div>
    </div>`;
loadMoreButton.remove()
});

}
loadMoreButton.addEventListener("click", secondDeckCards)
}

 */




