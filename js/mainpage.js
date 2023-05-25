import { slide, mainLeftContainer, mainRightContainer,largeLoader  } from "./utilities.js";
console.log(largeLoader)
const url =
  "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";
 
/* function showLoader() {
largeLoader.style.cssText = "visibility:visible";

};
showLoader() */

getData();
function getData() {
  fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
    largeLoader.classList.toggle("hide-loader")
      const storeData = data;
      largePost(data);
      const sliderCards = storeData.slice(0, 10);
      sliderCards.map(({ title, id, _embedded }) =>
        sliderContent(title, id, _embedded)
      );
    });
}

function largePost(data) {
  const largePostData = data;
  largePostData.filter(({ title, id, _embedded, date }) => {
    const image =
      _embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const alt = _embedded["wp:featuredmedia"][0].alt_text;
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
<h1> ${title.rendered}</h1>

</div>
<div class="main-right-footer">
<a href="/specific.html?id=${id}" class="main-post-link"> Read Post </a>
</div>




</div>




`;
    }
  });
}
console.log("vato")

function sliderContent(title, id, _embedded) {
  const media = _embedded["wp:featuredmedia"][0].source_url;
  const altText = _embedded["wp:featuredmedia"][0].alt_text;
  slide.innerHTML += `
  <div class="slide-card">
  <div class="slide-card-header" >
  <img src="${media}" alt="${altText}">
  </div>
  <span class="slide-card--primary">${title.rendered}</span>
  <a href="/specific.html?id=${id}" class="slider-href"> </a>
  </div>
  
  `;
}
