var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let q = Math.abs(nums[i]) - 1;
    nums[q] = Math.abs(nums[q]) * -1;
  }

  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      results.push(i + 1);
    }
  }

  return results;
};

const res = findDisappearedNumbers([1, 2, 3, 7, 4, 6, 9]);
console.log(findDisappearedNumbers([1, 2, 3, 7, 4, 6, 9]));
console.log(res);
