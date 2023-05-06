const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log("heh",id)
const url = "https://exam1.braatenmjos.no/wp-json/wp/v2/posts/" + id;
fetch(url)
.then(res => res.json())
.then((data) => {
    console.log(data)
})
