console.log("product list script is loaded")

// Fetch the API
const apiUrl = "https://api.noroff.dev/api/v1/rainy-days"
fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    // Define a function to update the category items
    const updateCategoryItems = (items, start) => {
      // Loop through each item in the category
      items.forEach((item, index) => {
        // Getting the title, price, description, image and ID from the API
        const title = data[start + index].title.slice(10); // ⬅ removes the first 10 index from the title (aka "Rainy Days ")
        const price = data[start + index].price;
        const description = data[start + index].description;
        const imageURL = data[start + index].image;
        const id = data[start + index].id;

        // Update the HTML with the title, price, description, image and #ID
        item.querySelector("h2").textContent = title;
        item.querySelector(".jacketPrice").textContent = `${price}$`;
        item.querySelector(".description").textContent = description;
        item.querySelector(".itemlist").setAttribute("src", imageURL);
        item.querySelector(".JacketsImg").setAttribute("id", id);
      });
    };
    // Getting the target categories as const's.
    const categoryAItems = document.querySelectorAll("#categoryA .cattext");
    const categoryBItems = document.querySelectorAll("#categoryB .cattext");
    const categoryCItems = document.querySelectorAll("#categoryC .cattext");

    // Update the category items, so they dont just repeat the same in each category.
    updateCategoryItems(categoryAItems, 0);
    updateCategoryItems(categoryBItems, 3);
    updateCategoryItems(categoryCItems, 6);
  })
  .catch(error => console.log(error));

  // Get all jacket links
const jacketLinks = document.querySelectorAll(".JacketsImg");

// Add a click event listener to each jacket link
jacketLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    
    // Get the ID from the jacket link's "id" attribute
    const jacketId = link.getAttribute("id");
    console.log(jacketId);

    // Fetch the API using the ID
    fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`)
      .then((res) => res.json())
      .then((data) => {
        // Get the title, price, and description from the API
        const title = data.title.slice(10);
        const price = data.price;
        const description = data.description;
        const imageURL = data.image;

        // Update the HTML on the product-details page with the title, price, description, and image
        document.querySelector(".JacketName").textContent = title;
        document.querySelector(".detailPrice").textContent = `${price}$`;
        document.querySelector(".descriptiontext").textContent = description;
        document.querySelector(".jacket").setAttribute("src", imageURL);

        // Prevent the default action of the anchor tag
        event.preventDefault();
      })
      .catch((error) => console.log(error));
  });
});

export default [];
