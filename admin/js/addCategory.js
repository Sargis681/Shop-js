function addCategory(){

    let categoriesList = localStorage.getItem('categoriesList') ? JSON.parse(localStorage.getItem('categoriesList')) : []
    let catId = categoriesList.length + 1

    categoriesList.push({
        id: catId,
        catName: cat.value
    })

    localStorage.setItem('categoriesList', JSON.stringify(categoriesList))

    
    location.href = 'admin.html'
}