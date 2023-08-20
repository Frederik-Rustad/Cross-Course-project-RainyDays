const productsURL = 'http://localhost/flower-power/wp-json/wc/store/products';
const keys = '?consumer_key=${ck_3b2c33bf3f1f250ea5dd833eaaff8f7fdb799f56}&consumer_secret=${cs_bae9e4d8da9abec1bad3c983631ed9c4eb666c0c}'

const productListUrl = productsURL + keys;
console.log(productListUrl);

// Fetch products from the API
fetch(productsURL)
  .then(response => response.json())
  .then(data => {
    // Assuming data is an array of products
    const products = data;

    // Now you can work with the 'products' array to generate HTML
    generateHTML(products);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

// Function to generate HTML from products data
function generateHTML(products) {
  const productContainer = document.getElementById('product-container'); // Assuming you have a container element in your HTML

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.images[0].src;
    productImage.alt = product.name;
    productImage.classList.add('itemlist');

    const productName = document.createElement('h2');
    productName.innerText = product.name;

    const productPrice = document.createElement('p');
    productPrice.innerText = `Price: $${(product.price / 100).toFixed(2)}`;

    // You can create more elements for other product details as needed

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    productContainer.appendChild(productDiv);
  });
}
