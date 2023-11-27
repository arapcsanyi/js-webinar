/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

module.exports = function arrayEqual(first, second) {
        // Check if the arrays have the same length
        if (first.length !== second.length) {
          console.warn(`Arrays have different lengths: ${first.length} and ${second.length}`);
          return false;
        }

        // Check each element in the arrays
        for (let i = 0; i < first.length; i++) {
          const elementFirst = first[i];
          const elementSecond = second[i];

          // If elements are arrays, recursively check them
          if (Array.isArray(elementFirst) && Array.isArray(elementSecond)) {
            if (!arrayEqual(elementFirst, elementSecond)) {
              console.warn(`Arrays differ at index ${i}: ${JSON.stringify(elementFirst)} and ${JSON.stringify(elementSecond)}`);
              return false;
            }
          } else {
            // Compare non-array elements
            if (elementFirst !== elementSecond) {
              console.warn(`Elements differ at index ${i}: ${elementFirst} and ${elementSecond}`);
              return false;
            }
          }
        }
        return true;
      }

