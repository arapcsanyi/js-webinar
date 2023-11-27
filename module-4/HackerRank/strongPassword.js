'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    // Initialize flags for each criteria
    let hasNumber = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    // Check each character in the password
    for (let i = 0; i < n; i++) {
        const char = password[i];

        if (numbers.includes(char)) {
            hasNumber = true;
        } else if (lower_case.includes(char)) {
            hasLowerCase = true;
        } else if (upper_case.includes(char)) {
            hasUpperCase = true;
        } else if (special_characters.includes(char)) {
            hasSpecialChar = true;
        }
    }

    // Calculate the minimum number of characters needed
    let neededChars = 0;
    if (!hasNumber) neededChars++;
    if (!hasLowerCase) neededChars++;
    if (!hasUpperCase) neededChars++;
    if (!hasSpecialChar) neededChars++;

    // Ensure the password length is at least 6 characters
    if (n + neededChars < 6) {
        neededChars += 6 - (n + neededChars);
    }

    return neededChars;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}