// JavaScript arrays are objects that can store multiple values at once. They are zero-indexed, which means that the first element of an array is at index 0, the second element is at index 1, and so on.

//Q1. Create an array using the array literal syntax

const fruits = ["apple", "banana", "orange"];

// Accessthe elements of an array using their index
const firstFruit = fruits[0];
const secondFruit = fruits[1];
const thirdFruit = fruits[2];

console.log("Output : ");
// loop through an array using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Q2. How JavaScript arrays work

// JavaScript arrays are implemented as dynamic arrays. This means that they can grow and shrink in size as needed. When you add an element to an array, JavaScript will automatically allocate more space for the array.

//Q3. Where most of the array used
// Arrays are used in a wide variety of JavaScript applications.

//1. Lists of items, such as a list of products in an e-commerce store
//2. Data from a database, such as the results of a SQL query
//3. The elements of a web page, such as a list of images or a table of data
//4. The values of a form, such as the username and password that a user enters
