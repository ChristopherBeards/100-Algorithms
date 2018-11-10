const absoluteValuesSumMinization = numbers => {
  let absoluteSum;
  let reduced;
  // Add each number in the array
  reduced = numbers.reduce((accu, num) => accu + num);

  // Find median
  absoluteSum = reduced / numbers.length;

  // Return the largest integer less than or equal to the given number
  return Math.floor(absoluteSum);
};

module.exports = absoluteValuesSumMinization;
