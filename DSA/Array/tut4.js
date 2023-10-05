// Product prices
const productPrices = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    price: 999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    price: 1199,
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    price: 899,
  },
];

// Get the dynamic price of a product
function getDynamicPrice(productId, customerLocation, timeOfDay) {
  // Get the product price from the array
  const productPrice = productPrices.find(
    (product) => product.id === productId
  ).price;

  // Adjust the price based on the customer's location and time of day
  if (customerLocation === "United States" && timeOfDay === "evening") {
    productPrice += 100;
  }

  return productPrice;
}

const result = getDynamicPrice(2);
console.log(result);
