const urlApi = `https://freddev.no/wp-json/wc/v3/products?consumer_key=ck_30e8103f197d7cd1aa762d83de509977404484c5&consumer_secret=cs_7b79eaa839f2630192c85e81897ff47b8d826eee`;

async function fetchJacket(productId) {
  // Display loading message
  document.querySelector('.mainitem').innerHTML = '<p>Loading...</p>';

  const response = await fetch(`${urlApi}${productId}`);
  const product = await response.json();
  
  // Update with fetched data
  const mainItem = document.querySelector('.mainitem');
  mainItem.innerHTML = `
  <div class="mainitem">
    <div><a class="jacket1"><img src="${product.image}" alt="Product Image" class="jacket"></a></div>
     <div class=itemdescription><img src="images/RainyDays_Logo.png" alt="Rainydays Logo " class=logoitem>
       <div class="jacket_name"><h1 class="JacketName">${product.name}</h1></div>
       <div class="price"><h4 class="detailPrice">${product.price}$</h4></div>
       <div class="detailsWrapper">
       <div class="detailsText">
       <h2 class="descriptiontext">${product.description}</h2>
      </div>
    </div>
    <button class="cta" id="modal-btn" type="button">
    Add to cart <img src="images/cart.png" alt="cart icon" class="cart">
    </button>
  `;
}
// Retrieve the jacket ID from the query parameter
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
// Call fetchJacket function with the jacket ID
fetchJacket(productId);