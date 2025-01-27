/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd;
    /*
     * Your task is to compute the greatest common divisor of
     * the numbers are given in a and b variables, using the
     * Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
     * If you have the result, assign it to the gcd variable.
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
    return 0;
}
while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
}
gcd = a;
    // ...AND THIS COMMENT LINE!
    return gcd;
}
module.exports = euclidean;