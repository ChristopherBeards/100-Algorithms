const almostIncreasingSequence = arr => {
  // Create counter variable
  let count = 0;

  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      count++;
      if (arr[i] <= arr[1 - 2] && arr[i + 1] <= arr[i - 1]) {
        return false;
      }
    }
  }

  return count === 1 ? true : false;
};

module.exports = almostIncreasingSequence;
