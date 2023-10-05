// A stack is a linear data structure that follows the LIFO (Last In First Out) principle. This means that the last element added to the stack is the first element removed from the stack. Stacks are typically implemented using arrays or linked lists.

// Browser history:
// Undo/redo functionality
// Function calls:
// Expression evaluation

class BroweserHistory {
  constructor() {
    this.stack = [];
  }

  push(page) {
    this.stack.push(page);
  }

  pop() {
    return this.stack.pop();
  }

  back() {
    return this.pop();
  }

  forword() {
    return this.stack[this.stack.length - 1];
  }
}

// Example usage:
const browserHistory = new BroweserHistory();

browserHistory.push("/");
browserHistory.push("/products");
browserHistory.push("/product/1");

// Go back to the products page
const productPage = browserHistory.back();

// Go forward to the product details page
const productDetailsPage = browserHistory.forword();
