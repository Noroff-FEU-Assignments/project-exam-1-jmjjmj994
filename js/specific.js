const specificContainer = document.querySelector(".specific-content");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://exam1.braatenmjos.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia` 
fetch(url)
.then(res => res.json())
.then((data) => {
   renderSpecific(data)
  /*  modal(data)  */
})


function renderSpecific(data){

const title = data.title.rendered
document.title = `My blog | ${title}`
const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url

const excerpt = data.content.rendered
console.log(media)
specificContainer.innerHTML += `

<div class="specific-content--img">
<img src="${media}" class="open-modal">
</div>
<div class="specific-content--text">
<p>${excerpt}</p>
</div>
`
const openModal = document.querySelector(".open-modal")
console.log(openModal);
openModal.onclick = ((e, cb) => {
clicked()

})
};


function clicked(){
const modal = document.querySelector(".modal");
modalOpen = false;
if(!modalOpen) {
   modal.classList.toggle("active")
   modalOpen = true;
} else {
   modal.classList.toggle("active");
   modalOpen = false;

}
}
/* 
function modal(data){
   const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
  
   const specificModal = document.querySelector(".specific-modal");
   specificModal.innerHTML = `
   <div class="specific-img-container">
   
   <img src="${media}">
   
   </div>
   `
  
   }; */