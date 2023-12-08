// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//SOLUTION
function sumMix(x) {
  let arr = x.map((val) => Number(val));
  return arr.reduce((sum, val, i) => {
    return sum + val;
  }, 0);
}
