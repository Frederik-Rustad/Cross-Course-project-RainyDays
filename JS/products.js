let product = [
    {
      id: "item1",
      title: "Patagonia",
      description: "Idustrial Green Hiking Jacket",
      gender: "All",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      baseColor: "Green",
      price: 50,
      discountedPrice: 40,
      onSale: false,
      image: "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
      tags: ["jacket", "womens", "mens" ],
      favorite: false
    },
    {
        id: "97e77845-a485-4301-827f-51b673d4230f",
        title: "Rainy Days Akra Jacket",
        description: "The Women's Rainy Days Akra jacket is bound to be your new go-to water-repellent rain jacket.",
        gender: "Female",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        baseColor: "Red",
        price: 129.99,
        discountedPrice: 119.99,
        onSale: true,
        image: "https://api.noroff.dev/images/rainy-days/0-akra-jacket.jpg",
        tags: ["jacket", "womens"],
        favorite: true
      },
    // ...
  ]
  
  const cattext = document.querySelector("cattext")
  cat1A.innerHTML = `
  <h2>${product.title}</h2> 
Idustrial Green Hiking Jacket <br>
<br>
<h2>${product.price}$</h2>`