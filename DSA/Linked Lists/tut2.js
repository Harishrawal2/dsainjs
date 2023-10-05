// how a linked list can be used to implement a product catalog in e-commerce using JavaScript:

class Node {
  constructor(product) {
    this.data = product;
    this.next = this.next;
  }
}

class ProductCatalog {
  constructor() {
    this.head = null;
  }

  add(product) {
    const newNode = new Node(product);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  search(ProductName) {
    let current = this.head;
    while (current !== null) {
      if (current.data.name === ProductName) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }
}

// Example

const productCatalog = new ProductCatalog();

productCatalog.add({
  id: 1,
  name: "Apple iPhone 13 Pro",
  price: "$999",
});

productCatalog.add({
  id: 2,
  name: "Samsung Galaxy S22 Ultra",
  price: "$799",
});

productCatalog.add({
  id: 2,
  name: "Google Pixel 6 Pro",
  price: "$699",
});

// Print the product catalog
productCatalog.print();

// Search for a product by name
const product = productCatalog.search("Apple iPhone 13 Pro");

// Display the product details
console.log(product);

// Output:
// { id: 1, name: 'Apple iPhone 13 Pro', price: 999 }
