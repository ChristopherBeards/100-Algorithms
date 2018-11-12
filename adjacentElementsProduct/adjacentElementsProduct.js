const adjacenetElementsProduct = (numbers) => {
  // Largest product storage
  let largestProduct = 0;

  // Determine the highest product of adjacenet elements
  for (let i = 0; i < numbers.length; i++) {
    largestProduct = 
      numbers[i] * numbers[i+1] > largestProduct 
        ? numbers[i] * numbers[i+1]
        : largestProduct;
  }

  return largestProduct;
}

module.exports = adjacenetElementsProduct;