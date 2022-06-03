import productList from '../productAPI'

const sportsList = []
const electronicsList = []
console.log("product list: ", productList)

let product
for(let index =0; index < productList.lenght; index++){
    product = productList[index]
    console.log("product: ", product)
    if(product.category ==='sports'){
        sportsList.push(product)
    }else{
        electronicsList.push(product)
    }
}   


export {
    sportsList,
    electronicsList
}