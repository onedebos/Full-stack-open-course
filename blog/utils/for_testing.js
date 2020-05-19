const palindrome = (str) =>
  str
    .split('')
    .reverse()
    .join('');

const average = (array) => {
  const reducer = (sum, item) => sum + item;

  return array.reduce(reducer, 0) / array.length;
};
module.exports = { palindrome, average };
