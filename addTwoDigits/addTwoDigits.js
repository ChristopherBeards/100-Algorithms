const addTwoDigits = (digits) => {
  // Split the digits
  digits = digits.toString().split('').map(num => parseInt(num));

  // Add the digits together
  digits = digits.reduce((accu, cur) => accu + cur);

  // Return the value
  return digits;
};

module.exports = addTwoDigits;