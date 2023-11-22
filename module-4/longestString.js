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
      return ''; // Return an empty string for invalid or empty arrays
    }

    let longest = '';
    for (let i = 0; i < strings.length; i++) {
      if (typeof strings[i] === 'string') {
        if (longest === '' || strings[i].length > longest.length || (strings[i].length === longest.length && strings[i] < longest)) {
          longest = strings[i];
        }
      }
    }

    return longest;
  };