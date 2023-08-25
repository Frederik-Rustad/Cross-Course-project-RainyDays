import { renderCartQuantity, addToCart } from "./cart.js";

console.log('Loading productDetailPage.js');

const selectedProductId = JSON.parse(localStorage.getItem('selectedProductId'));
    console.log('selectedProductId', selectedProductId);

const productListURL = `https://freddev.no/wp-json/wc/v3/products/${selectedProductId}?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee` ;

const productDetail = document.querySelector('.js-product-detail-container');

productDetail.innerHTML = '<p>Loading...</p>';

fetch(productListURL)
  .then(response => response.json())
  .then(productsData => {
    
    productDetail.innerHTML = '';   
        
    const matchingProduct = productsData;
    
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
         <div class="add-to-cart-grid">
         <button class="add-to-cart-button cta js-add-to-cart"
         data-product-id="${matchingProduct.id}">Add to cart</button>
         <div class='added-to-cart-message' data-product-id="${matchingProduct.id}"> ✔ Added to cart!</div>
         </div>
         `;

      productDetail.innerHTML = productDetailHTML;
    }
    const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productContainer = button.closest('.add-to-cart-grid');
        const addedMessage = productContainer.querySelector('.added-to-cart-message');
        
        addedMessage.classList.add('added-item');
        
        setTimeout(() => {
          addedMessage.classList.remove('added-item');
        }, 1500);        
      });
    });
  });
   
  
  document.querySelector('.js-product-detail-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('js-add-to-cart')) {
      const productId = event.target.dataset.productId;
      addToCart(productId);
      renderCartQuantity();
    }
  });

  renderCartQuantity();
  
   
  
/* <button class="cta" id="modal-btn" type="button">
Add to cart <img src="images/cart.png" alt="cart icon" class="cart">
</button> */