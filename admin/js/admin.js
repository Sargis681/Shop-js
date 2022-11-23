addcotegory();
function addcotegory() {
  let data = JSON.parse(localStorage.getItem("categoriesList"));
  cat.innerHTML = "";
  data.forEach((element, i) => {
    // console.log(element);
    cat.innerHTML += `
    <div class="cateov">
    <div><p>Id ${element.id}</p></div>
    <div><p>${element.catName}</p></div>

    <div class="knop">
    <i class="fa-sharp fa-solid fa-pen-to-square" id="edit"onclick="myEdit(${element.id})" ></i>
    <i class="fa-solid fa-trash"  id="delet" onclick="myDelet(${element.id},this)"></i>  </div>
    </div>
        `
  });
}


function addProduct() {
  let data = JSON.parse(localStorage.getItem("productList"));

  PROD.innerHTML = "";
  data.forEach((element) => {
    // console.log(element);
    PROD.innerHTML += `
            <div class='takicDiv'>
                <div><p>${element.id}</p></div>
                <div><p>${element.productName}</p></div>
                <div><p>${element.productPrice}</p></div>
                <div>${element.productCategory}</div>
                <div>
                <img  src='./images/${element.productPhoto}' alt="">
               </div>
                <div id="sarunakel">
                <i class="fa-sharp fa-solid fa-pen-to-square" id="edit1"onclick="myEdit1(${element.id})" ></i>
        <i  class="fa-solid fa-trash"  id="delet1" onclick="myDelet1(${element.id},this)"></i>  

                </div>
                
             
            </div>
          `;
  });
}
addProduct();
