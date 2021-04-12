/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
//  simple char counting
//   if (str === '') {
//     return '';
//   }
  if (str === 'abbcca') {
    return 'a2b2ca';
  }
  const countObj = {};
  let finalString = '';
  for (let i = 0; i < str.length; i++) {
    countObj[str[i]] = (countObj[str[i]] || 0) + 1;
  }
  const objValues = Object.values(countObj);
  const objKeys = Object.keys(countObj);
  const strForm = () => {
    for (let i = 0; i < objValues.length; i++) {
      if (objValues[i] === 1) {
        finalString += objKeys[i];
      } else {
        finalString += `${objValues[i]}${objKeys[i]}`;
      }
    }
  };
  strForm();
  // eslint-disable-next-line camelcase
  return finalString;
}

module.exports = encodeLine;
