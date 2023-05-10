const specificContainer = document.querySelector(".specific-content");
const specificContentContainer = document.querySelector(".specific-content")
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal--content")
const specificImage = document.querySelector(".specific-content--img");
const specificText = document.querySelector(".specific-content--text")
/* QuerySelector */

/* Url */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
/* Url*/

const url = `https://exam1.braatenmjos.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia` 
fetch(url)
.then(res => res.json())
.then((data) => {
   renderSpecific(data)
  renderModal(data)  
})





/* Specific Data */
function renderSpecific(data){
const title = data.title.rendered
document.title = `My blog | ${title}`
const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
const excerpt = data.content.rendered
specificImage.innerHTML += `
<div class="specific-content--img">
<img src="${media}" class="open-modal">
</div>
`
specificText.innerHTML += `
<div class="specific-content--text">
<p>${excerpt}</p>
</div>

`
specificImage.innerHTML += `
<img src="${media}">
`
};

/*Specific Data */


/* Modal */

function renderModal(data){
   const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
   modalContent.innerHTML =`
<img src="${media}" class="modal-image">
<i class="fa-solid fa-x close-modal"></i>

`
const closeModal = document.querySelector(".close-modal");
closeModal.onclick = (e) =>{
   if(modalOpen){
   modal.style.cssText ="visibility:hidden"
   document.body.style.cssText = "overflow:scroll"
   }
   };
}

/* Modal */

/* Onclick */

let modalOpen = false;
specificImage.onclick = (e) => {
   if(!modalOpen) {
      document.body.style.cssText = "overflow:hidden"
modal.style.cssText = "visibility:visible"
modalOpen = true;
   }
   else {
      modal.style.cssText = "visibility:hidden"
    
      modalOpen = false;
   }
}


window.onclick = (e) => {
   if(e.target === modal){
      modal.style.cssText ="visibility:hidden"
      document.body.style.cssText = "overflow:scroll"
   }
}

/* Onclick */
