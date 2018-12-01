const checkSpelling = (toCheck, correct) => {
  let falseCount = 0;

  // If the lenghts do not match return false
  if (toCheck.length !== correct.length) falseCount++;

  // Confirm matching values in any order
  if (toCheck.toLowerCase().includes(correct.toLowerCase()) === false) falseCount++

  return falseCount > 0 ? false : true;
};

// console.log(checkSpelling('helol', 'hello'));

module.exports = checkSpelling;
