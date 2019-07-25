process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    var count;
    var swapcount = 0;
    do
    {
        count = false;
        for (var i = 0; i < n-1; i++)
        {
            if (a[i] > a[i + 1])
            {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                count = true;
                swapcount++;
            }
        }
    } while (count)
    {
        console.log(`Array is sorted in ${swapcount} swaps.`);
        console.log(`First Element: ${a[0]}`);
        console.log(`Last Element: ${a[n - 1]}`);
    }


}

