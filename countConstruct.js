const eh = require('./executionHelper')

// write a function countConstuct(target, wordBank) that accepts a target string and
// an array of strings

// Return the number of ways that the target can be constructed by
// concatentation elements of the wordBank array

// m = target.length (height (exponent))
// n = wordBank.length (branching factor (base))
//
// time: O(n^m x m)
// space: O(m^2)
const countConstuct = (target, wordBank) => {
  if(target === '') return 1;

  // count for subsequent calls
  let count = 0;
  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      count += countConstuct(suffix, wordBank);
    }
  }

  return count;
};

// time: O(m^2*n)
// space: O(m^2)
const countConstuctMemo = (target, wordBank, memo={}) => {
  if(memo.hasOwnProperty(target)) return memo[target];
  if(target === '') return 1;

  let count = 0;
  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      count += countConstuctMemo(suffix, wordBank, memo);
    }
  }

  memo[target] = count;
  return memo[target];
};

eh.execute(countConstuct, 'purple', ['purp', 'p', 'ur', 'le', 'purpl']); // 2
eh.execute(countConstuctMemo, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"]);

