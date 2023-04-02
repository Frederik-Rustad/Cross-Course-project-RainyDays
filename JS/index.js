import products from "./products.js";

console.log(products);

for (let i = 0; i < products.length; i++) {
    let product = products[i]
    // console.log(product)
    // reander HTML
    const productArray = product.title
    console.log(productArray)
}


//*const anyName = "Frederik";

// console.log(anyName.charAt(Math.floor(Math.random()*anyName.length))); 


prompt("the end is near");