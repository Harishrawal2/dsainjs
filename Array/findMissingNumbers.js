function findMissingNumbers(arr) {
  var missingNumbers = [];

  for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) {
      missingNumbers.push(i);
    }
  }

  if (missingNumbers.length == 1) {
    return missingNumbers[0];
  } else if (missingNumbers.length > 1) {
    return missingNumbers;
  } else {
    return null;
  }
}

const result = findMissingNumbers([1, 2, 3, 4, 6, 7, 8, 10]);
const result2 = findMissingNumbers([55, 56, 57, 59]);
const result3 = findMissingNumbers([23, 24, 25, 26]);

console.log(result);
console.log(result2);
console.log(result3);
