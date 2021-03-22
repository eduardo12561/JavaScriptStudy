/* functions
1- create a function
2- call the function  using fun();
*/

//create
function fun (){
    console.log('this is a function');
}

//call function
fun(); 

/* lets create a function that take in a name 
and says hello followed by your name 

example:
name: ''Eduardo''
returns: ''hello Eduardo''
*/


function greeting(yourName) {
  
    var result = 'Hello' + ' ' + yourName;  //the ' ' after + is used to create a space between hello and name (string concatenation)
    console.log(result);
}

var name = prompt('what is your name?');
greeting(name);





// how do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var  result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 12); // use any numbers inside those parenthesis to make a sum +, can also use word, for example sumNumbers('hello','eduardo') = hello eduardo