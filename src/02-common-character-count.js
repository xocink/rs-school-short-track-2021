/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const splitedS1 = s1.split('');
  const splitedS2 = s2.split('');
  let counter = 0;
  splitedS1.forEach((el) => {
    if (splitedS2.includes(el)) {
      counter++;
      splitedS2.splice(splitedS2.indexOf(el), 1);
    }
  });

  return counter;
}

module.exports = getCommonCharacterCount;
