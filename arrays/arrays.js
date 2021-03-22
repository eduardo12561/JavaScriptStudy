// Array
let fruits = ['banna', 'apple', 'orange','pineapples'];
fruits = new Array('banna', 'apple', 'orange','pineapples'); // both way to create array correctly

console.log(fruits[0]); // acess value at index 2nd

fruits[0] = 'pear';  // change values, change banana to pear
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods 
console.log('to string', fruits.toString());
console.log(fruits.join(' - ')); // put a hífen between words
console.log(fruits.pop(), fruits);  // remove last item
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.lenght] = 'new fruit';
console.log(fruits)
fruits.shift(); //remove first element from an array
console.log(fruits)
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits)

let vegetables = ['aspargues', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables) // combine arrays 
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse()); // reverse the array
console.log(allGroceries.sort()); // put in alphabetical order

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b})); // put in a number order, if change return b-a will change de order 

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray); 