//  Question 1 = palindrome number
// An integer is a palindrome number when it reads the same forword an backword

// input: x= 121 ---->>>>> output: true
// input: x=10 ---->>>>> output: false

const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

const result = isPalindrome(323);
console.log(result);
