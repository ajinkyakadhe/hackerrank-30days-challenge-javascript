function processData(input) {
    //Enter your code here
    var inputSplit = input.split('\n');
    var inputsize = +inputSplit[0];
    var inputdata = inputSplit.slice(inputsize + 1);
    const temp = inputSplit.slice(1, inputsize + 1).map(list =>{
        let result = {
            name: list.split(" ")[0],
            phonenumber: list.split(" ")[1]


        }
        return result
});
    let phonebook = [];
    for (var list of temp)
    {
        phonebook[list.name] = list.phonenumber;
    }
    for (var name of inputdata)
    {
        if (phonebook[name])
        {
            console.log(`${name}=${phonebook[name]}`)
        }
        else {
            console.log('Not found')
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
