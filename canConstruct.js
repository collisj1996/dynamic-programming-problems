const eh = require('./helpers/executionHelper');

// Prompt
//
// Write a function canConstruct that accepts a target string and an array of strings
// The function should return a boolean indicating whether or not the target can be
// constructed by concatenating elements of the wordBank array

// m = target.length (height (exponent))
// n = wordBank.length (branching factor (base))
//
// time: O(n^m x m)
// space: O(m^2)
const canConstruct = (target, wordBank) => {
  if (target === '') return true;

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      // m complexity slice (time AND space)
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, wordBank)) {
        return true;
      };
    }
  }

  return false;
}; 


// time: O(m^2*n)
// space: O(m^2)
const canConstructMemo = (target, wordBank, memo={}) => {
  if(memo.hasOwnProperty(target)) return memo[target];
  if(target === '') return true;

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if(canConstructMemo(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

eh.execute(canConstruct, "abcdef", ["ab", "abc", "cd", "def", "abcd"]); // true
eh.execute(canConstructMemo, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])
