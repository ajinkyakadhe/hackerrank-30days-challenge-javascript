'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*
      *   Class Constructor
      *
      *   @param firstName - A string denoting the Person's first name.
      *   @param lastName - A string denoting the Person's last name.
      *   @param id - An integer denoting the Person's ID number.
      *   @param scores - An array of integers denoting the Person's test scores.
      */
    // Write your constructor here
    constructor(firstName, lastName, id, scores)
    {
        super(firstName, lastName, id);
        this.scores = scores;
  }
    /*
      *   Method Name: calculate
      *   @return A character denoting the grade.
      */
    // Write your method here
    calculate() {
        var total = 0;

        for (var i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        var averageScore = (total / this.scores.length);

        if (averageScore <= 100 && averageScore >= 90) {
            return 'O';
        } else if (averageScore < 90 && averageScore >= 80) {
            return 'E';
        } else if (averageScore < 80 && averageScore >= 70) {
            return 'A';
        } else if (averageScore < 70 && averageScore >= 55) {
            return 'P';
        } else if (averageScore < 55 && averageScore >= 40) {
            return 'D';
        } else if (averageScore < 40) {
            return 'T';
        }
    }

}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
