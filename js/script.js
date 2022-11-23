const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
const carousel = document.querySelector(".carousel-items")
let deg = 0
let radius = 0

images.forEach(img => {
  
  carousel.innerHTML += `
    <div class="carousel-item" style='transform: rotateY(${radius}deg) translateZ(25rem);'>
      <img src="./images/${img}" alt="#">
    </div>
  `
  radius += 45
})

function switchSlide(value){
  value ? deg -= 45 : deg += 45
  carousel.style.transform = `translateZ(-25rem) rotateY(${deg}deg)`
}


function printData(){
  let productList = JSON.parse(localStorage.getItem("productList"));
  let categoriesList = JSON.parse(localStorage.getItem("categoriesList"));

  categoriesList.forEach(e =>{
    let filteredList = productList.filter(product => product.productCategory === e.catName)
    
    let productContent = ''
    
    filteredList.forEach(product => {
      productContent += `
      <div class='takicDiv'>
      <img class="productimg" src='./images/${product.productPhoto}' alt="">
        <div class="nameprise">
          <div class="prodname" ><p>NAME:${product.productName}</p></div>
          <div class="productPrice"  ><p>PRICE:${product.productPrice} AMD</p></div>

        <div class="butni">
        <p>Գնել ::

<button  class="one" onclick='addToCart(${product.id})' >BY RENT</button>

       

        </p>
        </div> 

        </div>
         

      </div>
    `
    })
    
    
    
    
    
    
    cati.innerHTML += `
      <div class="cateov"><p>${e.catName}</p></div>
      <div class="prodner">${productContent}</div>
    `
    
    
  })
}

printData()
function myCart(){
  // let cartdiv=document.querySelector(".cartdiv")
  showCart.classList.toggle("tesaneli")


}

























