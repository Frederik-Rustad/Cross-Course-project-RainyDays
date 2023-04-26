
const urlApi = "https://api.noroff.dev/api/v1/rainy-days/97e77845-a485-4301-827f-51b673d4230f";

async function fetchJacket( ) {
 const response = await fetch(urlApi);
 const json = await response.json();

 console.log(json)

 document.querySelector(".JacketName").textContent = `${json.title.slice(10)}`
 document.querySelector(".detailPrice").textContent = `${json.price}$`;
 document.querySelector(".descriptiontext").textContent = json.description;
 document.querySelector(".jacket").setAttribute("src", json.image);
}

fetchJacket();