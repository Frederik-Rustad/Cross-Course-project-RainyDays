const urlApi = `https://api.noroff.dev/api/v1/rainy-days/`;

async function fetchJacket(jacketId) {
  // Display loading message
  document.querySelector('.mainitem').innerHTML = '<p>Loading...</p>';

  const response = await fetch(`${urlApi}${jacketId}`);
  const json = await response.json();
  
  // Update the DOM with fetched data
  const mainItem = document.querySelector('.mainitem');
  mainItem.innerHTML = `
  <div class="mainitem">
    <div><a class="jacket1"><img src="${json.image}" alt="Product Image" class="jacket"></a></div>
     <div class=itemdescription><img src="images/RainyDays_Logo.png" alt="Rainydays Logo " class=logoitem>
       <div class="jacket_name"><h1 class="JacketName">${json.title.slice(10)}</h1></div>
       <div class="price"><h4 class="detailPrice">${json.price}$</h4></div>
       <div class="detailsWrapper">
       <div class="detailsText">
       <h2 class="descriptiontext">${json.description}</h2>
      </div>
    </div>
  <button class="cta" id="modal-btn" type="button">
Add to cart <img src="images/cart.png" alt="cart icon" class="cart">
</button>
  `;
}

// Retrieve the jacket ID from the query parameter
const params = new URLSearchParams(window.location.search);
const jacketId = params.get('id');

// Call fetchJacket function with the jacket ID
fetchJacket(jacketId);
