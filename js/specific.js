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





function renderSpecific(data){


const title = data.title.rendered
document.title = `My blog | ${title}`
const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
const excerpt = data.content.rendered
const altText = data._embedded["wp:featuredmedia"][0].alt_text


specificImage.innerHTML += `
<div class="specific-content--img">
<img src="${media}" alt="${altText}"class="open-modal">
</div>
`
specificText.innerHTML += `
<div class="specific-content--text">
<p>${excerpt}</p>
</div>

`

};

/*Specific Data */


/* Modal */

function renderModal(data){
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

/* Modal */

/* Onclick */


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

/* Onclick */
