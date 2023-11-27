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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // Convert the string to an array of ASCII values
    const asciiValues = s.split('').map(char => char.charCodeAt(0));

    // Calculate the absolute differences of adjacent elements
    const differences = [];
    for (let i = 1; i < asciiValues.length; i++) {
        differences.push(Math.abs(asciiValues[i] - asciiValues[i - 1]));
    }

    // Create a reversed string
    const reversedString = s.split('').reverse().join('');

    // Convert the reversed string to an array of ASCII values
    const reversedAsciiValues = reversedString.split('').map(char => char.charCodeAt(0));

    // Calculate the absolute differences of adjacent elements in the reversed string
    const reversedDifferences = [];
    for (let i = 1; i < reversedAsciiValues.length; i++) {
        reversedDifferences.push(Math.abs(reversedAsciiValues[i] - reversedAsciiValues[i - 1]));
    }

    // Check if the differences are the same for the original and reversed strings
    return JSON.stringify(differences) === JSON.stringify(reversedDifferences) ? 'Funny' : 'Not Funny';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}