/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */

module.exports = function longestString(strings) {
  if (!Array.isArray(strings) || strings.length === 0) {
    return '';
  }

  let longest = '';
  for (const string of strings) {
    if (typeof string === 'string') {
      if (longest === '' || string.length > longest.length || (string.length === longest.length && string < longest)) {
        longest = string;
      }
    }
  }

  return longest;
};
