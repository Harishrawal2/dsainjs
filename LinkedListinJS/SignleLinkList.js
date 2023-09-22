// 1. Implement a singly linked list in JavaScript.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new node to the beginning of the list.
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (this.size === 0) {
      this.tail = newNode;
    }

    this.size++;
  }

  // Add a new node to the end of the list.
  append(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Get the first element in the list.
  getHead() {
    return this.head;
  }

  // Get the last element in the list.
  getTail() {
    return this.tail;
  }

  // Get the size of the list.
  getSize() {
    return this.size;
  }

  // Check if the list is empty.
  isEmpty() {
    return this.size === 0;
  }

  // Remove the first element in the list.
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.head;
    this.head = this.head.next;

    if (this.size === 1) {
      this.tail = null;
    }

    this.size--;
    return node;
  }

  // Remove the last element in the list.
  removeLast() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return null;
    }

    const node = this.tail;
    const prevNode = this.tail.prev;

    prevNode.next = null;
    this.tail = prevNode;

    this.size--;
    return node;
  }
}

const myLinkedList = new SinglyLinkedList();

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.getHead().value); // 1
console.log(myLinkedList.getTail().value); // 3
console.log(myLinkedList.getSize()); // 3

myLinkedList.pop();

console.log(myLinkedList.getHead().value); // 2
console.log(myLinkedList.getSize()); // 2
