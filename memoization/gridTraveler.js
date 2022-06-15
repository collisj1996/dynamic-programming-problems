const eh = require('../helpers/executionHelper');

// Time Complexity: O(2^m+n)
// Space Complexity: O(m+n)
// Brute force recursive solution
const gridTravelerV1 = (m, n) => {
  if(m === 0 || n === 0) return 0;
  if(m === 1 || n === 1) return 1;
  return gridTravelerV1(m - 1, n) + gridTravelerV1(m, n - 1);
};

// Time Complexity: O(m*n)
// Space Complexity: O(m+n)
// Memoisation recursive solution
const gridTravelerV2 = (m, n, memo = {}) => {
  const key = `${m},${n}`;

  if(memo.hasOwnProperty(key)) return memo[key];
  if(m === 0 || n === 0) return 0;
  if(m === 1 || n === 1) return 1;
  
  memo[key] = gridTravelerV2(m - 1, n, memo) + gridTravelerV2(m, n - 1, memo);
  return memo[key];
};

eh.execute(gridTravelerV1, 18, 18);
eh.execute(gridTravelerV2, 18, 18);

