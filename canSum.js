const eh = require('./executionHelper.js');

// Context:
// 
// Write a function canSum(targetSum, numbers) that takes in a targetSum and
// an array of numbers as arguments
//
// The function should return a boolean indicating whether or not it is possible
// to generate the targetSum using numbers from the array
//
// Use an element of the array as many times as needed
// Assume that all input numbers are non-negative

// Time complexity: O(n^m) (m is height) (n is branch factor)
// Space complexity: O(m) (callstack)
// Brute force
const canSumV1 = (targetSum, numbers) => {
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;

  for(let num of numbers) {
    const remainder = targetSum - num;
    if(canSumV1(remainder, numbers)) {
      return true;
    }
  }

  return false;
};


const canSumV2 = (targetSum, numbers, memo = {}) => {
  if(memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;

  for(let num of numbers) {
    const remainder = targetSum - num;
    if(canSumV2(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true
    }
  }

  memo[targetSum] = false;
  return false;
};

eh.execute(canSumV1,300, [7,14]);
eh.execute(canSumV2,300, [7,14]);