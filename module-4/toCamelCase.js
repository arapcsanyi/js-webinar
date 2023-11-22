/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

module.exports = function toCamelCase(toConvert) {
  if (typeof toConvert !== 'string') {
    return '';
  }
  toConvert = toConvert.trim();
  // Convert the input to camelCase following the convention
  return toConvert
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric characters with space
    .split(' ')
    .map((word, index) => {
      // Convert the first character to lowercase and the rest to uppercase
      return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}