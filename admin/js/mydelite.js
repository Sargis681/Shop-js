
function myDelet(i) {
    let categoryItem = JSON.parse(localStorage.getItem("categoriesList"));
    let index = categoryItem.findIndex((e) => e.id === i);
  
    categoryItem.splice(index, 1);
  
    localStorage.setItem("categoriesList", JSON.stringify(categoryItem));
  
    addcotegory();
}  
