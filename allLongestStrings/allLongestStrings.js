const allLongestStrings = (arr) => {
  // Initialize a counter variable
  let count = 0;

  // Initialize a storage array
  let longestStrings = [];
  
  // Iterate over the given arr and compare values
  arr.forEach(value => {
    // Determine the value of the counter var
    if (value.length > count) count = value.length;
    // if the value length is equal to count add it to 
    // the longestStrings array
    if (value.length === count) longestStrings.push(value);
  });

  return longestStrings;
};

module.exports = allLongestStrings;