const specificContainer = document.querySelector(".specific-content");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://exam1.braatenmjos.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia` 
fetch(url)
.then(res => res.json())
.then((data) => {
   renderSpecific(data)
})


function renderSpecific(data){

const media = data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
const excerpt = data.content.rendered
console.log(media)
specificContainer.innerHTML += `

<div class="specific-content--img">
<img src="${media}">
</div>
<div class="specific-content--text">
<p>${excerpt}</p>
</div>





`
};