// Product list page
import products from "./products.js";   
// import "./productDetailsPage.js";

//  console.log(products);
for (let i = 0; i < products.length; i++) {
    let product = products[i]
    // console.log(product)
    // reander HTML
    const productArray = product.title
    console.log(productArray)
}

//------product details page------
// Add a click event listener to each jacket link
const jacketLinks = document.querySelectorAll(".JacketsImg");
jacketLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      
      // Get the ID from the jacket link's "id" attribute
      const jacketId = link.getAttribute("id");
      console.log(jacketId);
   // Navigate to the productDetailPage.html with the jacket ID as a query parameter
   window.location.href = `productDetailPage.html?id=${jacketId}`;
      // Fetch the API using the ID
      fetchJacket(jacketId);
  
      // Prevent the default action of the anchor tag
      event.preventDefault();
    });
  });

const urlApi = `https://api.noroff.dev/api/v1/rainy-days/`;

async function fetchJacket(jacketId) {
  const cattext = document.querySelector('.cattext');
  cattext.innerHTML = 'Loading...';

  try {
    const response = await fetch(`${urlApi}${jacketId}`);
    const json = await response.json();

    document.querySelector('.JacketName').textContent = `${json.title.slice(10)}`
    document.querySelector('.detailPrice').textContent = `${json.price}$`;
    document.querySelector('.descriptiontext').textContent = json.description;
    document.querySelector('.jacket').setAttribute('src', json.image);

    cattext.innerHTML = ''; // Clear the loading message once data is loaded
  } catch (error) {
    cattext.innerHTML = `Error loading data: ${error.message}`; // Display error message if fetching data fails
  }
}


// fetchJacket();