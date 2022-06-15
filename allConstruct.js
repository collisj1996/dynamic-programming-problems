const eh = require('./helpers/executionHelper');

// Prompt

// allConstruct(target, wordBank)

// The function should return a 2D array containing all of the ways that the 'target' can be constructed
// by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs
// the target

const allConstruct = (target, wordBank) => {
  if(target === '') return [[]];

  const result = [];

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);  
      const targetWays = suffixWays.map((suffixWay) => [ word, ...suffixWay ]); 
      result.push(...targetWays);
    }
  }

  return result;
};


const allConstructMemo = (target, wordBank, memo={}) => {
  if(memo.hasOwnProperty(target)) return memo[target];
  if(target === '') return [[]];

  const result = [];

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructMemo(suffix, wordBank, memo);  
      const targetWays = suffixWays.map((suffixWay) => [ word, ...suffixWay ]); 
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

eh.execute(allConstruct, 'purple', ['purp', 'p', 'ur', 'le', 'purpl']);
eh.execute(allConstructMemo, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"]);