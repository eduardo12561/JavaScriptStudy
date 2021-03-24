// Objects in javascript
let student = {
    first: 'Rafeh', 
    last: 'Qazi', 
    age:25, 
    height:170,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notRafeh'; // change value 
//console.log(student.first);
student.age++; // add one more
console.log(student.age);

console.log(student.studentInfo ());