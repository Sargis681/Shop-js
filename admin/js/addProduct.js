function addProduct(){
    // debugger
    
    let productList = localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : []
    let idGag = productList.length + 1

    productList.push({
        id: idGag,
        productName: productName.value,
        productPrice:productPrice.value,
        productPhoto:productPhoto.files[0].name,   
        productCategory: cars.value,
    })
    
    localStorage.setItem('productList', JSON.stringify(productList))
    
    location.href = 'admin.html'
}

function getSelectValue(){
    let b=JSON.parse(localStorage.getItem('categoriesList'))
    b.forEach(element => {
    cars.innerHTML+=`
        <option value='${element.catName}'> ${element.catName}</option>
    `
});
}
getSelectValue()