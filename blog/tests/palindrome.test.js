const tests = require('../utils/for_testing');

describe('palindronome', () => {
  test('palindronome of a', () => {
    const result = tests.palindrome('a');
    expect(result).toBe('a');
  });

  test('palindrome of react', () => {
    const result = tests.palindrome('react');
    expect(result).toBe('tcaer');
  });
});

test('the average of 1,2,3 is 2', () => {
  const result = tests.average([1, 2, 3]);
  expect(result).toBe(2);
});
