// This function can be used to retrieve product data from a database or from a local cache. It can also be used to implement a product search function.

function getProductData(productId) {
  // create a hash table to store the product data.
  const productData = {};

  //   Add some example product data to the hash table
  productData[1] = {
    id: 1,
    name: "Apple iPhone 13",
    price: 999,
  };
  productData[2] = {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 799,
  };
  productData[3] = {
    id: 3,
    name: "Google Pixel 6",
    price: 599,
  };

  //   Retrieve the product data for the given product ID.
  const product = productData[productId];

  //   Return the product data, or null if the product ID is not found
  return product || null;
}

console.log(getProductData(2));

// This searchProducts() function can be used to implement a product search bar on an e-commerce website. When the user enters a keyword into the search bar, the function can be called to retrieve a list of matching products. The list of matching products can then be displayed to the user.

function searchProducts(keyword) {
  // Create an empty list to store the search results.
  const searchResults = [];

  //   Iterate over all of the product IDs in the product data hash table.
  for (const productId in pdata) {
    // Get the product data for the current product ID.
    const product = getProductData(productId);

    // Check if the product name matches the keyword.
    if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
      // Add the product to the search results list.
      searchResults.push(product);
    }
  }
}

const res = searchProducts({ name: "iPhone" });
console.log(res);
