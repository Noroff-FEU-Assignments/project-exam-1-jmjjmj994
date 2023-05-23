const specificContainer = document.querySelector(".specific-content");

const modalContent = document.querySelector(".modal--content")
const specificImageContainer = document.querySelector(".specific-container-image");
const specificTextContainer = document.querySelector(".specific-container-text")
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
  /*   renderModal(data)   */
  toggleModal(data)
 

})





function renderSpecific(data){
const title = data.title.rendered
document.title = `My blog | ${title}`
const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
const excerpt = data.content.rendered
const altText = data._embedded["wp:featuredmedia"][0].alt_text;
specificImageContainer.innerHTML += `
<img src="${media}" alt="${altText}"class="open-modal">`
specificTextContainer.innerHTML += `<p>${excerpt}</p>`

};










/** Modal */


const toggleModal = (data) => {
   let modalOpen = false;
   const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
   const alt = data._embedded["wp:featuredmedia"][0].alt_text
   const modalContainer = document.querySelector(".modal-container")
   const modalImage = document.querySelector(".modal-container-image");
   const openModal = document.querySelector(".open-modal");
 const closeModalX = document.querySelector("#close-modal");
openModal.onclick = () => {
if(!modalOpen){
  modalContainer.style.cssText = "visibility:visible"}
  modalImage.innerHTML = `
  <img src="${media}" alt="${alt}">`
modalOpen = true;

};

closeModalX.onclick = () => {
modalContainer.style.cssText ="visibility:hidden";
modalOpen = false

};

window.onclick = (e) => {
   if(e.target === modalContainer){
      modalContainer.style.cssText = "visibility:hidden";
       modalOpen = false
      
   }
}

};



/** Modal */

/*Specific Data */











/* function renderModal(data){
   const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
   const altText = data._embedded["wp:featuredmedia"][0].alt_text
   modalContent.innerHTML =`
<img src="${media}" alt="${altText}" class="modal-image">
<i class="fa-solid fa-caret-up close-modal"></i>
`



const closeModal = document.querySelector(".close-modal");
closeModal.onclick = (e) =>{
   let modalOpen = false;
   if(modalOpen){
 modal.classList.toggle("active") 

   } else {
      modal.classList.toggle("active")
      specificContainer.style.cssText =" display:block";
   }
   };
}



specificImage.onclick = (e) => {
   let modalOpen = false;
   if(!modalOpen) {
      specificContainer.style.cssText =" display:none";
      modal.classList.toggle("active")
      

modalOpen = true;
   }
   else {
      specificContainer.style.cssText =" display:block";
      modal.classList.toggle("active")
    
      modalOpen = false;
   }
}


window.onclick = (e) => {
   if(e.target === modal){
      specificContainer.style.cssText =" display:block";
       modal.classList.toggle("active") 
      
   }
}

 */