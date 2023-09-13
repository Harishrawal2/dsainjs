// Question => Explain the difference between sparse and dense arrays.

const sparseArray = {
  // The keys of the object represent the indices of the non-zero elements.
  // The values of the object represent the values of the non-zero elements.
  0: 1,
  5: 2,
  10: 3,
};

for (const [index, value] of Object.entries(sparseArray)) {
  console.log(`The value at index ${index} is ${value}`);
}
