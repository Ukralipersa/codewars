// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

//SOLUTION:
function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((val, i, arr) => (i === arr.length - 1 ? 0 : val - arr[i + 1]))
    .reduce((acc, val) => acc + val, 0);
}
