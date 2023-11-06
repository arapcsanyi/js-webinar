/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (typeof n !== 'number' || n < 0) {
        return 0; // Invalid input, return 0
    }

    // Base cases for n = 0 and n = 1
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    // Initialize variables to store the two previous Fibonacci numbers
    let prev = 0;
    let current = 1;

    // Calculate the nth Fibonacci number iteratively
    for (let i = 2; i <= n; i++) {
        nThFibonacci = prev + current;
        prev = current;
        current = nThFibonacci;
    }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;