/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
// eslint-disable-next-line consistent-return
function isMAC48Address(n) {
  const arr = n.split('-');
  let counter = 0;
  arr.forEach((el) => {
    if (el.length === 2) {
      // eslint-disable-next-line no-unused-expressions
      /[0-9A-Fa-f]{2}/i.test(el) ? counter++ : counter;
    }
  });
  return counter === 6;
}

module.exports = isMAC48Address;
