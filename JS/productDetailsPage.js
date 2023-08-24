import { renderCartQuantity } from "./cart.js";


console.log('Loading productDetailPage.js');

const productListURL = 'https://freddev.no/wp-json/wc/v3/products?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee';

const productDetail = document.querySelector('.js-product-detail-container');

productDetail.innerHTML = '<p>Loading...</p>';

fetch(productListURL)
  .then(response => response.json())
  .then(productsData => {
    console.log(productsData)
    productDetail.innerHTML = '';
    
    const selectedProductId = JSON.parse(localStorage.getItem('selectedProductId'));
    console.log('selectedProductId', selectedProductId);
    
    
    const matchingProduct = productsData.find(product => product.id === parseInt(selectedProductId));
    console.log('matchingProduct', matchingProduct);
    
    if (matchingProduct) {
      const productDetailHTML = `
        <div><a class="jacket1"><img src="${matchingProduct.images[0].src}" alt="Product Image" class="jacket"></a></div>
          <div class=itemdescription><img src="images/RainyDays_Logo.png" alt="Rainydays Logo " class=logoitem>
            <div class="jacket_name"><h1 class="JacketName">${matchingProduct.name}</h1></div>
            <div class="price"><h4 class="detailPrice">$${matchingProduct.price}</h4></div>
             <div class="detailsWrapper">
             <div class="detailsText">
             <h2 class="descriptiontext">${matchingProduct.description}</h2>
            </div>
         </div>
          <button class="cta" id="modal-btn" type="button">
          Add to cart <img src="images/cart.png" alt="cart icon" class="cart">
         </button>
         `;

      productDetail.innerHTML = productDetailHTML;
    }
  });


renderCartQuantity();