const alphabeticShift = str => {
  return (str = assessLetter(str));
};

const assessLetter = str => {
  const shifted = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a',
  };

  const shiftedString = str.split('').map(letter => {
    return (letter = shifted[letter]);
  });

  return shiftedString.join('');
};

module.exports = alphabeticShift;
