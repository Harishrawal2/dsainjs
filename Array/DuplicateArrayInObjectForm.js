// Write a program to find the duplicate number in a given integer array. Store the duplication numbers in an object with the duplicate count

/*
input : [1, 2,4, 5, 2, 6, 8, 8, 10, 10 ,10, 2]
output: {
    2:3,
    8:2,
    10:3
}
*/

var arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];

var obj = {};

for (var i = 0; i < arr.length; i++) {
  var count = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
    if (count > 1) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = count;
      } else {
        obj[arr[i]] = count;
      }
    }
  }
}

console.log(obj);
