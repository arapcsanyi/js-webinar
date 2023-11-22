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
    // // Check if both arguments are arrays
    // if (!Array.isArray(first) || !Array.isArray(second)) {
    //     console.warn('Please provide valid arrays for comparison.');
    //     return false;
    //   }

    //   // Check if the lengths of the arrays are equal
    //   if (first.length !== second.length) {
    //     console.warn(`Arrays have different lengths: ${first.length} !== ${second.length}`);
    //     return false;
    //   }

    //   // Iterate through each element of the arrays
    //   for (let i = 0; i < first.length; i++) {
    //     if (Array.isArray(first[i]) !== Array.isArray(second[i])) {
    //       // If one element is an array and the other is not, they are different
    //       console.warn(`Arrays differ at index ${i}: ${first[i]} !== ${second[i]}`);
    //       return false;
    //     }

    //     if (Array.isArray(first[i]) && Array.isArray(second[i])) {
    //       // If both elements are arrays, compare their lengths
    //       if (first[i].length !== second[i].length) {
    //         console.warn(`Arrays differ at index ${i}: ${first[i].length} !== ${second[i].length}`);
    //         return false;
    //       }
    //     } else if (first[i] !== second[i]) {
    //       // If elements are not arrays, compare their values
    //       console.warn(`Arrays differ at index ${i}: ${first[i]} !== ${second[i]}`);
    //       return false;
    //     }
    //   }

    //   return true;


    if (first.length !== second.length) {
        console.warn(`Warning: The length of two arrays is different. ${first.length} != ${second.length}`);
        return false;
    }

    const compareElements = (index) => {
        if (index === first.length) {
            return true;
        }

        if (first[index] !== second[index]) {
            console.warn(`Warning: The elements at index ${index} are different. ${first[index]} != ${second[index]}`);
            return false;
        }

        return compareElements(index + 1);
    };

    return compareElements(0);
}
