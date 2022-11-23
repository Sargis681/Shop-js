function addToCart(id) {
  let productList = JSON.parse(localStorage.getItem("productList"));
  let primaryProduct = productList.find(e => e.id == id)
  let cartItem = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
    let product = cartItem.find(e => e.id == id)
  
  if(!product){
    primaryProduct.count=1
    cartItem.push(primaryProduct);
  }else{
    product.count++
  }
  
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  addCat();
}

function addCat() {
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  showCart.innerHTML = "";
  let gago = 0
  fullGago.innerText = ''
  cartItem.forEach((el,i) => {
    
    showCart.innerHTML += `
    <div class="mejin">
    
    <div><img src='./images/${el.productPhoto}'></div>
    <div class="fone">
    <div class="fl">
    <p> Գին։ ${el.productPrice*el.count}</p>
    <p>  Քանակ։ ${el.count}</p> 
    </div>
    
    <p class="prname">Name:${el.productName}</p>
    </div>
    <i onclick="mydelite(${el.id})"  class="fa-solid fa-x dingo"></i>
    </div>
    `;
    
    gago += el.productPrice*el.count
  });
  fullGago.innerText += gago + 'AMD'
}
addCat();
function mydelite(id) {
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));
  let z = cartItem.find((e) => e.id === id);
  console.log(cartItem);
  cartItem.splice(z, 1);
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  addCat();
}
