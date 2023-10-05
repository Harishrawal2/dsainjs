// Q1. What is the runtime of the below code?
// function foo(array) {
//   let sum = 0;
//   let product = 1;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   for (let i = 0; i < array.length; i++) {
//     product *= array[i];
//   }
//   return product;
// }

// const res = foo([1, 2, 3, 4, 5]);
// console.log(res);

// This will take 0 (N) time. The fact that we iterate through the array twice doesn't matter.

//Q2. What is the runtime of the below code?

// function printPairs(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i] + "," + array[j]);
//     }
//   }
// }

// const result = printPairs([1, 3, 4, 6, 5]);

// The inner for loop has 0 (N) iterations and it is called N times. Therefore, the runtime is 0 (N2 )

// Q3. This is very similar code to the above example, but now the inner for loop starts at i + 1

// function printunorderedPair(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       console.log(array[i] + "," + array[j]);
//     }
//   }
// }

// const res = printunorderedPair([1, 2, 3, 4, 5, 6, 7, 8]);

// The first time through j runs for N - 1 steps. The second time, it's N - 2 steps. Then N - 3 steps. And so on.
// Therefore, the number of steps total is:
// (N-l) + (N-2) + (N - 3) + .. . + 2 + 1
// = 1 + 2 + 3 + . •• + N-1
// = sum of 1 through N-1
// N( N-l)
// The sum of 1 through N -1 is - 2- (see "Sum of Integers 1 through N" on page 630)' so the runtime will
// beO(W).

// 4. The following code reverses an array. What is its runtime?

// function reverse(array) {
//   for (let i = 0; i < array.length / 2; i++) {
//     let other = array.length - 1 - 1;
//     let temp = array[i];
//     array[i] = array[other];
//     array[other] = temp;
//     console.log(temp);
//   }
// }

// const res = reverse([1, 2, 3]);

// This algorithm runs in O( N) time. The fact that it only goes through half of the array (in terms of iterations)
// does not impact the big 0 time

// Example 9
// The following simple code sums the values of all the nodes in a balanced binary search tree. What is its
// runtime?

// function sum(node) {
//   if (node == null) {
//     return 0;
//   }
//   return sum(node.left) + node.value + sum(node.right);
// }

// the runtime of this code is O( N)

// Q5. The following method checks if a number is prime by checking for divisibility on numbers less than it. It only needs to go up to the square root of n because if n is divisible by a number greater than its square root then it's divisible by something smaller than it

// What is the time complexity of this function?

// first method
// function isPrime(n) {
//   for (let x = 2; x * x <= n; x++) {
//     if (n % x == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const res = isPrime(8); //false
// console.log(res);

// second method
// function isPrime(n) {
//   for (let x = 2; x <= Math.sqrt(n); x++) {
//     if (n % x == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const res = isPrime(10);
// console.log(res);

// This runs in 0 ( vn) time.
