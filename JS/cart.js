export const cart = [];

export function addToCart(productId) {
  let matchinItem;

  cart.forEach((cartItem) => {
   if (productId === cartItem.productId) {
    matchinItem = cartItem;
     return;
   }
  });

  if (matchinItem) {
    matchinItem.quantity +=1;
  } else {
     cart.push({
      productId: productId,
      quantity: 1
    })
  }
}