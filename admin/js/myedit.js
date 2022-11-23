function myEdit(i) {
    let categoryItem = JSON.parse(localStorage.getItem("categoriesList"));
    categoryItem.forEach((e) => {
      console.log(e.catName);
  
      if (i === e.id) {
        // console.log(e.catName);
        categoryItem.splice(
          categoryItem.findIndex((e) => e.id === i),
          1
        );
        console.log(categoryItem);
        localStorage.setItem("categoriesList", JSON.stringify(categoryItem));
      }
      load2();
    });
  }
  function load2() {
    location = "addCategory.html";
  }



  function myEdit1(i) {
    let productList  = JSON.parse(localStorage.getItem("productList"));
    productList.forEach((e) => {
      console.log(e.catName);
  
      if (i === e.id) {
        // console.log(e.catName);
        productList.splice(
          productList.findIndex((e) => e.id === i),
          1
        );
        localStorage.setItem("productList", JSON.stringify(productList));
      }
      load2();
    });
  }
  function load2() {
    location = "addProduct.html";
  }






