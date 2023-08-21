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

// const urlApi = `https://api.noroff.dev/api/v1/rainy-days/`;

async function fetchJacket(jacketId) {
  const cattext = document.querySelector(".cattext");
  cattext.innerHTML = "Loading...";

  try {
    const response = await fetch(`${urlApi}${jacketId}`);
   
    cattext.innerHTML = " "; 
  } catch (error) {
    cattext.innerHTML = `Error loading data: Refresh page ! `; // Display error message if fetching data fails
  }
}
