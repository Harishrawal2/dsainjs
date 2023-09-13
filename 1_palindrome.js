const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

const result = isPalindrome(121);
const res = isPalindrome(20);

console.log("Result 121 : ", result);
console.log("Res 20 : ", res);
