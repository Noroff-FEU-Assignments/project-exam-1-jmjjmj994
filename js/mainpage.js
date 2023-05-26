import {
  slide,
  mainLeftContainer,
  mainRightContainer,
  largeLoader,
  largeError,
} from "./utilities.js";

const url =
  "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";

getData();
function getData() {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        largeError.classList.toggle("hide-loader");
        largeError.classList.toggle("show-large-error");
      }
      const data = response.json();
      return data;
    })
    .then((data) => {
      largeLoader.classList.toggle("hide-loader");
      const storeData = data;

      const sliderCards = storeData.slice(0, 10);
      sliderCards.map(({ title: header, id, _embedded: media }) =>
        sliderContent({ title: header, id, _embedded: media })
      );
      largePost(data);
    })
    .catch((err) => console.error("rejected", err.message));
}

function largePost(obj) {
  const largePostData = obj;
  largePostData.filter(({ title: header, id, _embedded: media, date }) => {
    const image =
      media["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = media["wp:featuredmedia"][0].alt_text;
    const cardDate = new Date(date);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const norwegianDate = cardDate.toLocaleDateString("nb-NO", dateOptions);

    if (id === 47) {
      mainLeftContainer.innerHTML = `
     <img src="${image}" alt="${alt}">`;

      mainRightContainer.innerHTML = `
<div class="large-post-right--content">
<div class="large-header">
<i class="fa-regular fa-calendar"></i>
<p> ${norwegianDate} </p>
</div>
<div class="large-body">
<h1> ${header.rendered}</h1>

</div>
<div class="main-right-footer">
<a href="/specific.html?id=${id}" class="main-post-link"> Read Post </a>
</div>




</div>




`;
    }
  });
}

function sliderContent({ title: header, id, _embedded: media }) {
  const image = media["wp:featuredmedia"][0].source_url;
  const altText = media["wp:featuredmedia"][0].alt_text;
  slide.innerHTML += `
  <div class="slide-card">
  <div class="slide-card-header" >
  <img src="${image}" alt="${altText}">
  </div>
  <span class="slide-card--primary">${header.rendered}</span>
  <a href="/specific.html?id=${id}" class="slider-href"> </a>
  </div>
  
  `;
}
