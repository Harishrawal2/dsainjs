class Node {
  constructor(product) {
    this.data = product;
    this.next = null;
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

  search(productName) {
    let current = this.head;
    while (current !== null) {
      if (current.data.name === productName) {
        return current.data;
      }

      current = current.next;
    }

    return null;
  }
}

// Example usage:

const productCatalog = new ProductCatalog();

productCatalog.add({
  id: 1,
  name: "Apple iPhone 13 Pro",
  price: 999,
});

productCatalog.add({
  id: 2,
  name: "Samsung Galaxy S22 Ultra",
  price: 1199,
});

productCatalog.add({
  id: 3,
  name: "Google Pixel 6 Pro",
  price: 899,
});

// Print the product catalog
productCatalog.print();

// Output:
// Apple iPhone 13 Pro
// Samsung Galaxy S22 Ultra
// Google Pixel 6 Pro

// Search for a product by name
const product = productCatalog.search("Apple iPhone 13 Pro");

// Display the product details
console.log(product);

// Output:
// { id: 1, name: 'Apple iPhone 13 Pro', price: 999 }
