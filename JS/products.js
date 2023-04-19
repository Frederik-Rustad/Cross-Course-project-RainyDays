// Fetch the API
fetch('https://api.noroff.dev/api/v1/rainy-days')
  .then(response => response.json())
  .then(data => {
    // Get the categoryA items
    const categoryAItems = document.querySelectorAll('#categoryA .cattext');
    // Loop through each item
    categoryAItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index].title.slice(10); // <- remove the first 10 characters (Rainy Days) ;
      const price = data[index].price;
      const description = data[index].description;
      // Update the HTML with the title, price, and description
      item.querySelector('h2').textContent = title;
      item.querySelector('.jacketPrice').textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
    });

    // Get the categoryB items
    const categoryBItems = document.querySelectorAll('#categoryB .cattext');
    // Loop through each item
    categoryBItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index + 3].title.slice(10);
      const price = data[index + 3].price;
      const description = data[index + 3].description;
      // Update the HTML with the title, price, and description
      item.querySelector('h2').textContent = title;
      item.querySelectorAll('h2')[1].textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
    });

    // Get the categoryC items
    const categoryCItems = document.querySelectorAll('#categoryC .cattext');
    // Loop through each item
    categoryCItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index + 6].title.slice(10);
      const price = data[index + 6].price;
      const description = data[index + 6].description;
      // Update the HTML with the title, price, and description
      item.querySelector('h2').textContent = title;
      item.querySelectorAll('h2')[1].textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
    });
  })
  .catch(error => console.log(error));



export default [];


