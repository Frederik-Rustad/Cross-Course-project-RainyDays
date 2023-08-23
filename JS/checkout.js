import { cart } from './cart.js';

const productListURL = 'https://freddev.no/wp-json/wc/v3/products?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee';

console.log('Loading checkout.js');

const checkoutCart = document.querySelector('.js-chechout-cart');

fetch(productListURL)
  .then(response => response.json())
  .then(productsData => {
    cart.forEach(cartItem => {
      const productId = cartItem.productId;

      const matchingProduct = productsData.find(product => product.id === parseInt(productId));

      if (matchingProduct) {
        const checkoutItemHTML = `
          <div class="checkoutitem"> 
            <div> <img src="${matchingProduct.images[0].src}" alt="${matchingProduct.name}" class="checkoutitem1"></div>
            <div class="checkoutText">
                <h2>${matchingProduct.name}</h2><br>
                ${matchingProduct.description}<br>
                <h2>$${(matchingProduct.price)}</h2>
              <div class="remove">
               ( ${cartItem.quantity} )<button class="remove js-delete-button" data-product-id="${matchingProduct.id}"> Remove item</button>
                </div>
                
                </div>
          </div>
        `;

        checkoutCart.innerHTML += checkoutItemHTML;
      }
    });

    document.querySelectorAll('.js-delete-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        console.log('Removing item from cart');
        const productId = button.dataset.productId;
        console.log('productId', productId);
      });
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
