/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
function waitUpto10Seconds(sec) {
    return new Promise((resolve, reject) => {
        if (typeof sec !== "number" || sec > 10 || sec < 0) {
            reject(new Error("Invalid parameter. Please provide a number between 0 and 10"));
        }
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    });
}