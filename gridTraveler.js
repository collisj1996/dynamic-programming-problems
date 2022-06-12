// Time Complexity: O(2^m+n)
// Space Complexity: O(m+n)
// Brute force recursive solution
const gridTravelerV1 = (m, n) => {
  if(m === 0 || n === 0) return 0;
  if(m === 1 || n === 1) return 1;
  return gridTravelerV1(m - 1, n) + gridTravelerV1(m, n - 1);
};

// console.log(gridTravelerV1(0, 1)); // return 0
// console.log(gridTravelerV1(2, 3)); // return 3
// console.log(gridTravelerV1(5, 1)); // return 1
// console.log(gridTravelerV1(20, 20)); // return ??

// Time Complexity: O(m*n)
// Space Complexity: O(m+n)
// Memoisation recursive solution
const gridTravelerV2 = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  const altKey = `${n},${m}`;

  if(memo[key] || memo[altKey]) return memo[key];
  if(m === 0 || n === 0) return 0;
  if(m === 1 || n === 1) return 1;
  
  memo[key] = gridTravelerV1(m - 1, n, memo) + gridTravelerV1(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerV2(2,3)); // 3
console.log(gridTravelerV2(18,18)); // 233606220

