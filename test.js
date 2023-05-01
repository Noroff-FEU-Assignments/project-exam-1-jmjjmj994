const url ="https://exam1.braatenmjos.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia";
const category =" https://exam1.braatenmjos.no/wp-json/wp/v2/categories"
fetch(category)
.then(res => res.json())
.then((data) => {
    fetchCategories(data)
})

