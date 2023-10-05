// Example 11
// The following code computes n! (n factorial). What is its time complexity?

function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const res = factorial(6);
console.log(res);

// This is just a straight recursion from n to n -1 to n - 2 down to 1. It will take 0 (n) time.
