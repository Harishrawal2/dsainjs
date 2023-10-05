// Calculate the Fibonacci sequence

function fibonacci(number) {
  if (number === 0 || number === 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

const fibonacciOf = fibonacci(0);
console.log(fibonacciOf);
