function processData(input) {
    //Enter your code here
    var str = input.split('\n').slice(1);
    
    var evenstr='';
    var oddstr1='';
    var newstr = '';
    
    var strinput = str.map((val) => {
        return val.split('');
    })
   
    for (var i = 0; i < strinput.length; i++)
    {
        for (var j = 0; j < strinput[i].length; j++)
        {
            if (j % 2 === 0)
            {
                evenstr += strinput[i][j];
            }
            else if (j % 2 !== 0)
            {
                oddstr1 += strinput[i][j];
            }
            if (j == strinput[i].length - 1)
            {
              console.log(`${evenstr} ${oddstr1}`);
                evenstr = "";
                oddstr1 = ""

            }
        }
               
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
