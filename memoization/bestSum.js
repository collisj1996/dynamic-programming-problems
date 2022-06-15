const eh = require('../helpers/executionHelper');

// m = targetSum (height)
// n = numbers.length (branch factor)
//
// time: O(m^n * m)
// space: O(m^2) 
const bestSum = (targetSum, numbers) => {
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  let shortestCombination = null;

  for(let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if(remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};


// m = targetSum (height)
// n = numbers.length (branch factor)
//
// time: O(m^2*n)
// space: O(m^2) 
const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if(memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  let shortestCombination = null;

  for(let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if(remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};


eh.execute(bestSum, 7, [5, 3, 4, 7]);
eh.execute(bestSumMemo, 100, [1,2,3,4,5,25]);