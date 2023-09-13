// Question => What is the difference between push() and pop() methods for arrays?

// Ans => The push() and pop() methods are used to add and remove elements from the end of an array in JavaScript. The main difference between the two methods is that push() adds an element to the end of the array, while pop() removes the last element from the array.

// example of how to use the push() method:
const myArray = [];

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log("This using push method in the Array", myArray); // [1, 2, 3]

//  example of how to use the pop() method:
const lastElement = myArray.pop();

console.log("This using Pop method in the Array", lastElement); // 3
console.log("After push and pop mthod ", myArray); // [1, 2]
