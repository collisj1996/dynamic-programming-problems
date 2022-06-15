const eh = require('./helpers/executionHelper');

// O(2^n) time
// O(n) space
const slowFib = (n) => {
  if(n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// O(n) time
// O(n) space
const fastFib = (n, cache = {}) => {
  if(n <= 2) return 1;
  if(cache.hasOwnProperty(n)) return cache[n];
  cache[n] = fastFib(n - 1, cache) + fastFib(n - 2, cache);
  return cache[n];
};

eh.execute(fastFib, 50);
