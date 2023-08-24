export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [];
};

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

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

  saveToStorage();
}

export function removeFromCart (productId) {
 const newCart = [];

  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};