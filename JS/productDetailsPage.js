// productDetailPage.js

const urlApi = `https://api.noroff.dev/api/v1/rainy-days/`;

async function fetchJacket(jacketId) {
  const response = await fetch(`${urlApi}${jacketId}`);
  const json = await response.json();
  
  document.querySelector(".JacketName").textContent = `${json.title.slice(10)}`;
  document.querySelector(".detailPrice").textContent = `${json.price}$`;
  document.querySelector(".descriptiontext").textContent = json.description;
  document.querySelector(".jacket").setAttribute("src", json.image);
}

// Retrieve the jacket ID from the query parameter
const params = new URLSearchParams(window.location.search);
const jacketId = params.get('id');

// Call fetchJacket function with the jacket ID
fetchJacket(jacketId);


// console.log("product details script is loaded ")
// document.addEventListener("DOMContentLoaded", () => {
//   // Get all jacket links
//   const jacketLinks = document.querySelectorAll(".JacketsImg");

//   // Add a click event listener to each jacket link
//   jacketLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       // Get the ID from the jacket link's "id" attribute
//       const jacketId = link.getAttribute("id");
//       console.log(jacketId);

//       // Fetch the API using the ID
//       fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           // Get the title, price, and description from the API
//           const title = data.title.slice(10);
//           const price = data.price;
//           const description = data.description;
//           const imageURL = data.image;

//           // Update the HTML on the product-details page with the title, price, description, and image
//           document.querySelector(".JacketName").textContent = title;
//           document.querySelector(".detailPrice").textContent = `${price}$`;
//           document.querySelector(".descriptiontext").textContent = description;
//           document.querySelector(".jacket").setAttribute("src", imageURL);

//           // Prevent the default action of the anchor tag
//           event.preventDefault();
//         })
//         .catch((error) => console.log(error));
//     });
//   });
// });

// export default [];
