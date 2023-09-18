import { addToCart, renderCartQuantity } from './cart.js';

const productsURL = 'https://freddev.no/wp-json/wc/v3/products';
const keys = '?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee';

// const featuredProductsURL = 'https://freddev.no/wp-json/wc/v3/products?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee&featured=true';

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
          <div class="add-to-cart-grid">
          <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
          <div class='added-to-cart-message' data-product-id="${product.id}"> ✔ Added to cart!</div>
          </div> 
          </div> 
      `;

      if (product.featured === true) {
        featuredProductsHTML += `
          <div class='featured-product'>
          <a class='JacketsImg js-product-detail' href='productDetailPage.html?id=${product.id}'>

              <img src="${product.images[0].src}" alt='Product' class='itemlist js-product-detail' data-product-id="${product.id}">
            </a>
            <h2>${product.name} 💖</h2>
            <div class='description'>${product.description}</div>
            <h2 class='jacketPrice'> $ ${(product.price)}</h2> 
            <div class="add-to-cart-grid">
            <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
            <div class='added-to-cart-message' data-product-id="${product.id}"> ✔ Added to cart!</div>
            </div>
            </div>
        `;
      }
    });

    productsGridContainer.innerHTML = products1HTML;
    featuredProductsContainer.innerHTML = featuredProductsHTML;

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
  })
  .catch(error => {
    console.error('Error fetching products, Refresh the page:', error);
  });


  document.querySelector('.js-products-grid').addEventListener('click', handleAddToCart);
  document.querySelector('.js-featured-products').addEventListener('click', handleAddToCart);
  
  function handleAddToCart(event) {
    if (event.target.classList.contains('js-add-to-cart')) {
      const productId = event.target.dataset.productId;
      addToCart(productId);
      renderCartQuantity();
    }
  }

  renderCartQuantity()

  function getIdToDetailsPage() {
    function handleProductDetailClick(event) {
      if (event.target.classList.contains('js-product-detail')) {
        const productId = event.target.dataset.productId;
        localStorage.setItem('selectedProductId', JSON.stringify(productId));
      }
    }
  
    document.querySelector('.js-products-grid').addEventListener('click', handleProductDetailClick);
    document.querySelector('.js-featured-products').addEventListener('click', handleProductDetailClick);
  }
  
  getIdToDetailsPage();
  
  
  getIdToDetailsPage();