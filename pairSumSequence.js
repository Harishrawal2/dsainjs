function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}

function pairSum(a, b) {
  return a + b;
}

const result = pairSumSequence(pairSum(2, 3));
console.log(result);
