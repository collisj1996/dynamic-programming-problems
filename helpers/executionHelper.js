const execute = (input, ...params) => {
  const start = Date.now();
  const functionResult = input(...params);
  const stop = Date.now();
  console.log(`Function ${input.name} evaluated to ${functionResult} and executed in ${(stop - start)}ms`);
};

module.exports = { execute };