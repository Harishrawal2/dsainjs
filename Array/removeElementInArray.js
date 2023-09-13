// Question => How do you remove an element from an array in JavaScript?

// 1 The pop() method: The pop() method removes the last element from the array and returns it.

const myArray = [1, 2, 3];

const lastElement = myArray.pop();

console.log("Removed Element with help of Push() Method", lastElement); // 3
console.log(myArray); // [1, 2]

// 2 The shift() method: The shift() method removes the first element from the array and returns it.

const myArray2 = [1, 2, 3];

const firstElement2 = myArray2.shift();

console.log("Removed Element with help of shift() Method", firstElement2); // 1
console.log(myArray2); // [2, 3]

// 3 The splice() method: The splice() method removes one or more elements from the array, starting at a specified index. The method takes three or more arguments: the index at which to start removing elements, the number of elements to remove, and any elements to add to the array in place of the removed elements.

const myArray3 = [1, 2, 3, 4, 5];

myArray3.splice(1, 2); // removes the elements at index 1 and 2
console.log("Removed Element with help of shift() Method");
console.log(myArray3); // [1, 4, 5]

// 4 The delete operator: The delete operator removes an element from an array by its index. The operator does not return the removed element.

const myArray4 = [1, 2, 3, 4, 5];

delete myArray4[2]; // removes the element at index 2
console.log("Removed Element with help of delete() Method");
console.log(myArray4); // [1, 2, 4, 5]
