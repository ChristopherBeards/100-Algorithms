const absoluteValuesSumMinization = numbers => {
  // Determine if the given array is even
  const isEven = numbers.length % 2 === 0;

  return isEven
    ? // If the length is even return the center index
      numbers[numbers.length / 2 - 1]
    : // Otherwise return the center-most index
      numbers[Math.floor(numbers.length / 2)];
};

module.exports = absoluteValuesSumMinization;
