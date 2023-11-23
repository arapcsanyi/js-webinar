/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */




// module.exports = function arraySum(elements) {
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         if (Array.isArray(elements[i])) {
//             sum += arraySum(elements[i]);
//         } else if (typeof elements[i] === 'number') {
//             sum += elements[i];
//         }
//     }
//     return sum;
// }