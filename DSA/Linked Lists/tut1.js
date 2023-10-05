// Linked list
// A linked list is a linear data structure in which a sequence of elements are connected by links. Each element in a linked list is a node, and each node has two parts: a data field and a link field. The data field stores the data for the node, and the link field contains the address of the next node in the list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);

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
}

// Example usage

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.print());
