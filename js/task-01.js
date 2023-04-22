// const categories=document.getElementById('categories');
// const categoriesList=categories.children;
// console.log(`Number of categories : ${categoriesList.length}`);
// const subCategories=categories.querySelectorAll('.item');

// subCategories.forEach(item => {
//     const title=item.querySelector('h2').textContent;
//     const elements=item.querySelectorAll('li').length;
//     console.log(`\nCategory: ${title} \nElements: ${elements}`);
// });
const items = document.querySelectorAll(".item");
console.log(`Number of categories : ${items.length}`);
items.forEach(item=>{
    console.log(`Category ${item.firstElementChild.textContent}`);
    console.log(`Elements ${item.lasttElementChild.children.length}`);
})