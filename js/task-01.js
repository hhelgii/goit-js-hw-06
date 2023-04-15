const categories=document.querySelector('#categories');
const categoriesList=categories.children;
console.log(`Number of categories : ${categoriesList.length}`);
for(let i=0;i<categoriesList.length; i+=1) {
    let category=categoriesList[i];
    const title= category.querySelector('h2').textContent;
    const elements = category.querySelector('ul').children.length;
    console.log(`\nCategory: ${title} \nElements: ${elements}`);
}