import { addToCart, renderCartQuantity } from './cart.js';

const productsURL = 'https://freddev.no/wp-json/wc/v3/products';
const keys = '?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee';

export const productListURL = productsURL + keys;

const productsGridContainer = document.querySelector('.js-products-grid');
const featuredProductsContainer = document.querySelector('.js-featured-products');

productsGridContainer.innerHTML = '<p>Loading...</p>';

fetch(productListURL)
  .then(response => response.json())
  .then(data => {
    let products1HTML = '';
    let featuredProductsHTML = '';

    data.forEach(product => {
      products1HTML += `
        <div class='cattext'>
          <a class='JacketsImg js-product-detail' data-product-id="${product.id}" href='productDetailPage.html'>
            <img src="${product.images[0].src}" alt='Product' class='itemlist js-product-detail' data-product-id="${product.id}">
          </a>
          <h2>${product.name}</h2>
          <div class='description'>${product.description}</div>
          <h2 class='jacketPrice'> $ ${(product.price)}</h2> 
          <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
        </div> 
      `;

      if (product.featured === true) {
        featuredProductsHTML += `
          <div class='featured-product'>
            <a class='JacketsImg js-product-detail' data-product-id="${product.id}" href='productDetailPage.html'>
              <img src="${product.images[0].src}" alt='Product' class='itemlist js-product-detail' data-product-id="${product.id}">
            </a>
            <h2>${product.name} 💖</h2>
            <div class='description'>${product.description}</div>
            <h2 class='jacketPrice'> $ ${(product.price)}</h2> 
            <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
          </div>
        `;
      }
    });

    productsGridContainer.innerHTML = products1HTML;
    featuredProductsContainer.innerHTML = featuredProductsHTML;
  })
  .catch(error => {
    console.error('Error fetching products, Refresh the page:', error);
  });


  document.querySelector('.js-products-grid').addEventListener('click', (event) => {
    if (event.target.classList.contains('js-add-to-cart')) {
      const productId = event.target.dataset.productId;
      addToCart(productId);
      
      renderCartQuantity();
    }
  });

  renderCartQuantity()

  function getIdToDetailsPage() {
    document.querySelector('.js-products-grid').addEventListener('click', (event) => {
      if (event.target.classList.contains('js-product-detail')) {
       
        const productId = event.target.dataset.productId;
        localStorage.setItem('selectedProductId', JSON.stringify(productId));
       
      }
    });
  }
  
  getIdToDetailsPage();