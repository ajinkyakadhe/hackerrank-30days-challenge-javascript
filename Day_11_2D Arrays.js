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
    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    let totals = [];
    let count = 0;
    let inCount;
    function hourGlass(array) {
        if (count === 4) { return }

        const [a0, a1, a2] = array;
        let tmp0 = Object.assign([], a0);
        let tmp1 = Object.assign([], a1);
        let tmp2 = Object.assign([], a2);

        inCount = 0;
        hourGlassInner(tmp0, tmp1, tmp2, inCount);

        array.shift()

        count++;
        hourGlass(array);
    }
    function hourGlassInner(tmp0, tmp1, tmp2, inCount) {
        if (inCount === 4) { return }

        let [e, r, t] = tmp0;
        const top = e + r + t;
        
        let [h, j] = tmp1;
        let [o, p, l] = tmp2;
        const bottom = o + p + l;
        totals.push(top + j + bottom);
        tmp0.shift();
        tmp1.shift();
        tmp2.shift();
        inCount++;
        hourGlassInner(tmp0, tmp1, tmp2, inCount);
    }
    hourGlass(arr);
    const max = Math.max(...totals);
    console.log(max);
}
