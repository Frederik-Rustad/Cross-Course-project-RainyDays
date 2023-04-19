import products from "./products.js";

// console.log(products);

for (let i = 0; i < products.length; i++) {
    let product = products[i]
    // console.log(product)
    // reander HTML
    const productArray = product.title
    console.log(productArray)
}


// //*const anyName = "Frederik";

// // console.log(anyName.charAt(Math.floor(Math.random()*anyName.length))); 

// const myObj = { name: "Dave"} ;
// const anotherObject = {
//     alive: true,
//     answer: 33,
//     Flaws:["lazy", "dysletic", "procrastination"],
//     beverage : {
//         morning: "coffee",
//         afternoon: "Tea"
//     },
//  action: function(){
//    return "Hello world! It's time for " + this.beverage.morning  ;
//  }
// };

// console.log(anotherObject.action()+" "+ anotherObject.Flaws[0]+", "+anotherObject["answer"]+" years old that needs "+ anotherObject.beverage.morning+ " in the morning.")
// console.log(myObj.name);

// const enchantment = {
//     buff1: "+1/+1",
// }
// const horror = {
// type: "horror"
// }

// const card = {
//     name: "Angel of Vitality",
//     type: ["Angel", horror.type],
//     legendary: false,
//     buff: [enchantment.buff1],
//     attributes: ["flying", "lifegain +1" ] 
// } 
// console.table(card)

// const Avacyn = Object.create(card) 
// Avacyn.name = "Avacyn";
// Avacyn.legendary = true;

// console.log(Avacyn.name +" "+ Avacyn.type+ " "+ Avacyn.legendary)

// const weapons = ["sword", "dagger", "crossbow", "morningstar", "halberd"];



// // weapons.forEach(function (item, index){
// // console.log("Item " + index + ": " + item)

// // });

// for(let i =0; i < weapons.length; i++){
//     // if(i === 2 ){
//     //     break;
//     // }
//     if(weapons[i] === "crossbow") {
//         continue;
//     }
//     console.log(weapons[i]);
// }
// const party= {
//     wizard: "Murdoc",
//     rouge: "Vax",
//     barbarian: "Conan",
//     bard: "Thrump"
// };
// for (let classRole in party) {
//     console.log(`the  ${classRole} s name is  ${party[classRole]} `);
// }


// function reciveFunction (p) {
//     if (typeof reciveFunction === "function" ) {
//         p();
//     }
// }
// const callbackFunction = function () {
//     console.log(" I am a function")
// }
// reciveFunction(callbackFunction);

// const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// prizes.forEach(function (item, index){
//      console.log("prize #" + index  +" "+ item )
    
//  });


//  //q3
//  const numberOfSec = 5;

//  function fiveSecMessage () {
//    console.log(`I waited ${numberOfSec} seconds before executing`);
//  }
//  setTimeout(fiveSecMessage, numberOfSec * 1000)

// Rainy days api 12 id's
// const url = "https://api.noroff.dev/api/v1";
// const allProductsUrl = `${url}/rainy-days`;


// async function fetchData(url) {
//     const payload = await fetch(allProductsUrl);
//     const data = await payload.json;
//     return data;
// }
// function renderSingelData(data) {
//     const divWrapper = document.createElement(`div`);
//     divWrapper.classList.add()
//     const heading = document.createElement(`h2`)
//     const body = document.createElement(`p`)
//     heading.innerText = data.title;
//     body.innerText = data.description;
//     divWrapper.append([heading, body0]);
//     return divWrapper;
// }



// const endpoint = 'https://api.noroff.dev/api/v1/rainy-days';

// fetch(endpoint)
//   .then(response => response.json())
//   .then(data => {
//     // execute step 2.
//     data.forEach(rainyDay => {
//       // execute step 3.
//       let link = document.createElement('a');
//       // execute step 4.
//       link.href = `/rainy-day-details.html?id=${rainyDay.id}`;
//       // execute step 5.
//       link.addEventListener('click', () => {
//         // execute step 6.
//         const rainyDayDetailsEndpoint = `https://api.noroff.dev/api/v1/rainy-days/${rainyDay.id}`;

//         fetch(rainyDayDetailsEndpoint)
//           .then(response => response.json())
//           .then(rainyDayDetailsData => {
//             // execute step 7.
//             // ...
//           });
//       });
//     });
//   });