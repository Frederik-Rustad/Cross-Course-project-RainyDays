// Fetch the API
fetch('https://api.noroff.dev/api/v1/rainy-days')
  .then(res => res.json())
  .then(data => {

    // Getting the categories as items. (.cattext = Jackets Name, Description and Price)
    const categoryAItems = document.querySelectorAll('#categoryA .cattext');
    const categoryBItems = document.querySelectorAll('#categoryB .cattext');
    const categoryCItems = document.querySelectorAll('#categoryC .cattext');

    // Loop through each item in category A
    categoryAItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index].title.slice(10); // <- removes the first 10 characters (Rainy Days) ;
      const price = data[index].price;
      const description = data[index].description;

      // Get the image URL from the API
      const imageURL = data[index].image;

      // Update the HTML with the title, price, description, and image
      item.querySelector('h2').textContent = title;
      item.querySelector('.jacketPrice').textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
      item.querySelector('.itemlist').setAttribute('src', imageURL);
    });
   
    // Loop through each item in category B
    categoryBItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index + 3].title.slice(10);
      const price = data[index + 3].price;
      const description = data[index + 3].description;

      // Get the image URL from the API
      const imageURL = data[index + 3].image;

      // Update the HTML with the title, price, description, and image
      item.querySelector('h2').textContent = `${title}`;
      item.querySelectorAll('h2')[1].textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
      item.querySelector('.itemlist').setAttribute('src', imageURL);
    });
    
    // Loop through each item in category C
    categoryCItems.forEach((item, index) => {
      // Get the title, price, and description from the API
      const title = data[index + 6].title.slice(10);
      const price = data[index + 6].price;
      const description = data[index + 6].description;

      // Get the image URL from the API
      const imageURL = data[index + 6].image;

      // Update the HTML with the title, price, description, and image
      item.querySelector('h2').textContent = title;
      item.querySelectorAll('h2')[1].textContent = `${price}$`;
      item.querySelector('.description').textContent = description;
      item.querySelector('.itemlist').setAttribute('src', imageURL);
    });
  })
  .catch(error => console.log(error));

export default [];
