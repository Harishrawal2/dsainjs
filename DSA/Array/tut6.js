// Find the maximum element in an array

// Given an array of integers, find the maximum element in the array.

function maxElementInArray(array) {
  // Inititalize a variable to store the maximum element
  let maxElement = array[0];

  //   Iterate over the array and compare each element to the maximum element
  //   update the maximum element if the current element es greater
  for (const element of array) {
    if (element > maxElement) {
      maxElement = element;
    }
  }

  //   Return the maximum element
  return maxElement;
}

const array = [1, 23, 5, 56, 76, 6, 8, 12, 10];
const maxElements = maxElementInArray(array);
console.log(maxElements);
