// Question => Implement a function to reverse an array in-place.
function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

const array = [1, 2, 3, 4, 5];

reverseArray(array);

console.log(array); // [5, 4, 3, 2, 1]
