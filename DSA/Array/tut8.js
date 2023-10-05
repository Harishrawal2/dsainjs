// Find the greatest common divisor (GCD) of two numbers

// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }

// console.log(lcm(12, 18));

// Check if a number is prime

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));
