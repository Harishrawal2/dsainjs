// Find the sum of all elements in an array

// Given an unsorted array of positive integers ranging from 1 to n, where all numbers from 1 to n are present except one number x, find x.

function sumOfArray(array) {
  // Initialize a variable to store the sum of all elements
  let sum = 0;

  //   Iterate over the array and add each element to the sum
  for (let element of array) {
    sum += element;
  }

  //   return the sum
  return sum;
}

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const sumOfArrays = sumOfArray(array);
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7]));
