/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
module.exports = function arraySum(elements) {
    if (!Array.isArray(elements)) {
        return 0;
    }

    let sum = 0;
    for (const element of elements) {
        if (Array.isArray(element)) {
            sum += arraySum(element);
        } else if (typeof element === 'number') {
            sum += element;
        }
    }
    return sum;
}