function myDelet(i) {
    let categoryItem = JSON.parse(localStorage.getItem("categoriesList"));  
    categoryItem.splice(categoryItem.findIndex((e) => e.id === i), 1);
  
    localStorage.setItem("categoriesList", JSON.stringify(categoryItem));
    location.reload()
  
}
function myDelet1(i) {
  let productList = JSON.parse(localStorage.getItem("productList"));
  let index = productList.findIndex((e) => e.id === i);

  productList.splice(index, 1);

  localStorage.setItem("productList", JSON.stringify(productList));

  location.reload()
}




// function load() {
//     location = "admin.html";
//   }
//   function load2() {
//     location = "addCategory.html";
//   }
//   function load3() {
//     location = "addProduct.html";
//   }