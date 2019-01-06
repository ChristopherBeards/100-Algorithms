const alphabetSubSequence = string => {
  const charValues = [];
  string.split('').forEach(letter => charValues.push(letter.charCodeAt(0)));

  if (charValues.length === 1) return true;
  if (new Set(charValues).size !== charValues.length) return false;
  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) return false;
    return true;
  }
};

module.exports = alphabetSubSequence;
