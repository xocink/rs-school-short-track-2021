/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const finaObj = {};
  domains.forEach((strElm) => {
    const arrElem = strElm.split('.').reverse();
    arrElem.reduce((acc, cur) => {
      const dnsKey = `${acc}.${cur}`;
      if (dnsKey) {
        finaObj[dnsKey] = (finaObj[dnsKey] || 0) + 1;
      }
      return dnsKey;
    }, '');
  });

  return finaObj;
}

module.exports = getDNSStats;
