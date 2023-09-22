// write a program to find the sum of largest and smallest numbers in the without sorting an integer array

/*
INPUT: [10, 22, 4, 5, 2, 6, 8, 8,10, 10, 10, 2]
OUTPUT: 24
 */

var largest = [];

var smallest = Infinity;

var arr = [10, 22, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }

  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log(largest + smallest);
