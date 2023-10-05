// Product catalog
const products = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    description: "The latest and greatest iPhone from Apple.",
    price: 999,
    image: "https://example.com/iphone-13-pro.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    description: "The best Android phone on the market.",
    price: 1199,
    image: "https://example.com/galaxy-s22-ultra.jpg",
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    description: "The best camera phone on the market.",
    price: 899,
    image: "https://example.com/pixel-6-pro.jpg",
  },
];

// shopping cart
const cart = [];

// Add to product to the cart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  cart.push(product);
}

console.log(addToCart(1));

// Get the total price of the items in the cart
function getTotalPrice() {
  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price;
  }
  return totalPrice;

  //   place an order
  function placeOrder() {}
}
