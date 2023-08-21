console.log('Loading jackets.js');
const productsURL = 'https://freddev.no/wp-json/wc/v3/products';
const keys = '?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee';

const productListURL = productsURL + keys;

fetch(productListURL)
  .then(response => response.json())
  .then(data => {
    // Data contains the fetched products list
    let products1HTML = '';

    data.forEach(product => {
            
      products1HTML += `
        <div class='cattext'>
        <a class='JacketsImg' href='productDetailPage.html'><img src="${product.images[0].src}" alt='Product' class='itemlist'></a>
        <h2>${product.name}</h2>
        <div class='description'>${product.description}</div>
          <h2 class='jacketPrice'> $ ${(product.price)}</h2> 
          <button class="js-add-to-cart"
          data-product-id="${product.id}">Add to cart</button>
        </div> 
      `;
    });

    document.querySelector('.js-products-grid').innerHTML = products1HTML;
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

  document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
       console.log(button.dataset);
    });
  }); 


