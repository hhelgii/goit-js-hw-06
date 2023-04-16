const categories=document.getElementById('categories');
const categoriesList=categories.children;
console.log(`Number of categories : ${categoriesList.length}`);
const subCategories=categories.querySelectorAll('.item');

subCategories.forEach(item => {
    const title=item.querySelector('h2').textContent;
    const elements=item.querySelectorAll('li').length;
    console.log(`\nCategory: ${title} \nElements: ${elements}`);
});
