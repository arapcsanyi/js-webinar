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
    const asciiValues = Array.from(s, char => char.charCodeAt(0));
    const differences = [];
    for (let i = 1; i < asciiValues.length; i++) {
        differences.push(Math.abs(asciiValues[i] - asciiValues[i - 1]));
    }
    const reversedString = [...s].reverse().join('');
    const reversedAsciiValues = Array.from(reversedString, char => char.charCodeAt(0));
    const reversedDifferences = [];
    for (let i = 1; i < reversedAsciiValues.length; i++) {
        reversedDifferences.push(Math.abs(reversedAsciiValues[i] - reversedAsciiValues[i - 1]));
    }
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