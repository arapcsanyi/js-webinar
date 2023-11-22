/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(roman) {
    if (typeof roman !== 'string') {
        console.warn('Not a string');
        return false;
    }

    const romanToDecMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    roman = roman.toUpperCase();
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        if (!romanToDecMap.hasOwnProperty(roman[i])) {
            console.warn('Not a valid roman number');
            return false;
        }

        if (romanToDecMap[roman[i]] < romanToDecMap[roman[i + 1]]) {
            result += romanToDecMap[roman[i + 1]] - romanToDecMap[roman[i]];
            i++;
        } else {
            result += romanToDecMap[roman[i]];
        }
    }
    return result;
};
