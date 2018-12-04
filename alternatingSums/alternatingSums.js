const alternatingSums = (arr) => {
  let teamSums = [0, 0];

  arr.forEach((each, i) => {
    i % 2 === 0 ? teamSums[0] += each : teamSums[1] += each; 
  });

  return teamSums;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

module.exports = alternatingSums;