/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */


module.exports = function arraySorted(items, ignore = '') {
    const regEx = new RegExp(`[${ignore}\\s]`, 'gi');

    const cleanElement = (element) => {
        if (typeof element !== 'string') {
            return '';
        }
        return element.replace(regEx, '').toLowerCase();
    };

    for (let i = 0; i < items.length - 1; i++) {
        const currentItem = cleanElement(items[i]);
        const nextItem = cleanElement(items[i + 1]);

        if (currentItem > nextItem) {
            return false;
        }
    }

    return true;
};