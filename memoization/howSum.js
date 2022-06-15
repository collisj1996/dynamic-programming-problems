const eh = require('../helpers/executionHelper');

// Write howSum(targetSum, numbers)
// 
// The function should return an array containing any combination of elements that
// add up to exactly to the targetSum, if none exists, return null
// 
// If there are multiple combinations possible, you may return any single one

// m = target sum
// n = numbers.length
//
// time: O(n^m * m)
// space: O(m)
// Brute force
const howSum = (targetSum, numbers) => {
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  for(let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    if(result !== null) {
      return [ ...result, num ];
    }
  };

  return null;
};

// Time: O(n*m^2)
// Space: O(m^2)
const howSumQuick = (targetSum, numbers, memo = {}) => {
  if(memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  for(let num of numbers) {
    const remainder = targetSum - num;
    const result = howSumQuick(remainder, numbers, memo);
    if(result !== null) {
      memo[targetSum] = [ ...result, num ];
      return memo[targetSum];
    }
  };

  memo[targetSum] = null;
  return null;
};

eh.execute(howSum, 7, [5, 3, 4, 7]);
eh.execute(howSumQuick, 300, [7,14]);