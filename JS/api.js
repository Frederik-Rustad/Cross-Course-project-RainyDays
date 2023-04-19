

// const endpoint = "https://api.noroff.dev/api/v1/rainy-days";
// const proxyServer = " https://noroffcors.onrender.com/";

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
//           });
//       });
//     });
//   });