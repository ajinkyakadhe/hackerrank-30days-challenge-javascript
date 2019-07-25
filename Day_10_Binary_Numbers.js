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

function readLine()
{
    return inputString[currentLine++];
}
function main()
{
    var n = parseInt(readLine(), 10);

    var binary ="";
    var maxconsicative = 0;
    var consicative = 0;
 
    while (n > 0)
    {
    var remender =  (n % 2)
        if(remender===1)
        {
            consicative++;
            if (consicative > maxconsicative)
            {
                maxconsicative = consicative;
            }
        }
        else
        {
            consicative = 0;
        }
        binary = binary + remender;
        n = Math.floor(n / 2);
    }
    console.log(maxconsicative);   
}
