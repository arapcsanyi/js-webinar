/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = function sleep(sec) {
    return new Promise((resolve, reject) => {
        const seconds = parseInt(sec, 10);

        if (isNaN(seconds) || seconds <= 0) {
            reject(new TypeError("Invalid input. Please provide a positive number."));
        } else {
            const actualSeconds = Math.min(seconds, 10);
            setTimeout(resolve, actualSeconds * 1000);
        }
    });
}

// module.exports = function sleep(sec) {
//     return new Promise((resolve, reject) => {
//       if (typeof sec !== 'number' || sec < 0) {
//         reject(new Error('Invalid parameter. Seconds must be a non-negative number.'));
//       } else {
//         const actualWaitTime = Math.min(sec, 10);

//         setTimeout(() => {
//           resolve(`Waited for ${actualWaitTime} seconds.`);
//         }, actualWaitTime * 1000);
//       }
//     });
//   }

