const addBorder = arr => {
  // Create the outer frames
  const wall = '*'.repeat(arr[0].length + 2);

  // Concat wall together
  framedArr = arr.map(each => {
    return (each = '*'.concat(each, '*'));
  });

  // Add frame to the beginning of the array
  framedArr.unshift(wall);

  // Add frame to the end of the array
  framedArr.push(wall);

  // return framedArr;
  return framedArr;
};

module.exports = addBorder;
