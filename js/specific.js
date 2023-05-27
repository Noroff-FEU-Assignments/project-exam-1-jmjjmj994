const specificMain = document.querySelector(".specific-main");
const specificContainer = document.querySelector(".specific-content");
const modalContent = document.querySelector(".modal--content");
const specificImageContainer = document.querySelector(
  ".specific-container-image"
);
const specificTextContainer = document.querySelector(
  ".specific-container-text"
);
const largeLoader = document.querySelector(".large-loader");
const largeError = document.querySelector(".large-error");
/* QuerySelector */

/* Url */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

/* Url*/

const url = `https://exam1.braatenmjos.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
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
    renderSpecific(data);
    toggleModal(data);
    console.log(data);
  });

function renderSpecific(obj) {
  const { title, content: textContent, _embedded: media } = obj;
  document.title = ` JBM | ${title.rendered}`;

  const image =
    media["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  const altText = media["wp:featuredmedia"][0].alt_text;

  specificImageContainer.innerHTML += `
<img src="${image}" alt="${altText}"class="open-modal">`;
  specificTextContainer.innerHTML += `
 
  <p>${textContent.rendered}</p>`;
}

/** Modal */

const toggleModal = (obj) => {
  const modalContainer = document.querySelector(".modal-container");
  const modalImage = document.querySelector(".modal-container-image");
  const openModal = document.querySelector(".open-modal");
  const closeModalX = document.querySelector("#close-modal");
  const { _embedded: media } = obj;
  const image =
    media["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  const altText = media["wp:featuredmedia"][0].alt_text;

  let modalOpen = false;
  openModal.onclick = () => {
    if (!modalOpen) {
      modalContainer.style.cssText = "visibility:visible;";
      modalOpen = true;
    }
    modalImage.innerHTML = `
  <img src="${image}" alt="${altText}">`;
    modalOpen = true;
  };

  closeModalX.onclick = () => {
    modalContainer.style.cssText = "visibility:hidden";
    modalOpen = false;
  };

  window.onclick = (e) => {
    if (e.target === modalContainer) {
      
      modalContainer.style.cssText = "visibility:hidden;"; ;
      modalOpen = false;
    }
  };
  modalContainer.onmouseover = () => {
    modalContainer.style.cursor = "pointer";
  };
  modalImage.onmouseover = () => { 
    modalImage.style.cursor = "auto";
  }
};


