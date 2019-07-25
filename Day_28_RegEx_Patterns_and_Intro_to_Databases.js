'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    var n = parseInt(readLine());
    var arr = [];
    for (var i = 0; i < n; i++)
        arr.push(readLine());

    var gmail = arr.filter(function (x) { return (x.includes("@gmail.com")) });
    gmail.sort();
    var names = gmail.map(function (x) { return (x.slice(0, x.indexOf(' '))) });

    names.forEach(function (name) {
        console.log(name);
    })

}
