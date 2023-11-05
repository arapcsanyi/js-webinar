function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    // Calculate the absolute difference between the two diagonal sums
    const absoluteDiagonalDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDiagonalDifference;
}


function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b); // Sort the array in ascending order

    const n = arr.length;
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < n - 1; i++) {
        minSum += arr[i]; // Add the first four smallest elements
        maxSum += arr[i + 1]; // Add the last four largest elements
    }

    console.log(minSum, maxSum);
}


function dayOfProgrammer(year) {
    // Write your code here
     let day = 0;
    let month = 0;

    if (year === 1918) {
        // Special case for the transition year 1918
        day = 26;
        month = 9;
    } else if (
        (year < 1918 && year % 4 === 0) ||   // Julian leap year
        (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))  // Gregorian leap year
    ) {
        // In a leap year, February has 29 days
        day = 12;
        month = 9;
    } else {
        // In a non-leap year, February has 28 days
        day = 13;
        month = 9;
    }

    // Format the result in dd.mm.yyyy format
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
