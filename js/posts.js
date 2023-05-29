const largeLoader = document.querySelector(".large-loader");
const largeError = document.querySelector(".large-error");
const cardContainer = document.querySelector(".posts-page");
const postCount = document.getElementById("post-count");
const postTotal = document.getElementById("post-total");

const url =
  "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";

/*Buttons*/
const loadMoreButton = document.querySelector(".load-more");
/*Buttons*/

getData();
function getData() {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        largeError.classList.toggle("hide-loader");
        largeError.classList.toggle("show-large-error");
      }
      return response.json();
    })
    .then((data) => {
      largeLoader.classList.toggle("hide-loader");
      myPosts(data);
    });
}

function myPosts(data) {
  data.map((obj, index) => {
    const { title: header, id, _embedded: media, date } = obj;
    const image =
      media["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = media["wp:featuredmedia"][0].alt_text;
    const cardDate = new Date(date);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);
    if (index < 10) {
      cardContainer.innerHTML += `
  <div class="posts-card" >
    <div class="posts-card--image">
      <img src="${image}" alt="${alt}">
    </div>
    <div class="posts-card--title">    
      <h1>${header.rendered} </h1>
    </div>
    <div class="posts-card--content">
   <p>${norwegianDate}</p>
    </div>
    <div class="posts-card-footer">
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`;
      postCount.textContent = 10;
      postTotal.textContent = 13;
      return;
    }

    function secondDeckCards() {
      if (index > 10) {
        cardContainer.innerHTML += `
  <div class="posts-card">
    <div class="posts-card--image">
      <img src="${image}" alt="${alt}">
    </div>
    <div class="posts-card--title" >    
      <h1>${header.rendered} </h1>
    </div>
    <div class="posts-card--content" >
    <p>${norwegianDate}</p>
    </div>
    <div class="posts-card-footer" >
      <a href="/specific.html?id=${id}" class="posts-card-link">Read Post</a>
    </div>
  </div>`;
        postCount.textContent = 13;
        postTotal.textContent = 13;

        loadMoreButton.remove();
      }
    }
    loadMoreButton.addEventListener("click", secondDeckCards);
  });
}
