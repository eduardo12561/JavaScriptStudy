// conditionals, control flos (if else)
// 18-35 target demographic
// && AND, || OR 
var age = 45;

if ( (age >=18) && (age <=35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audiance';
    console.log(status);

}


// switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday 
// day 6 --> Saturday -->
// day 4 --> Thursday --> weekday
switch (6) {
    case 0:
        text = 'weekend';
        break;

    case 5:
        text = 'weekend';
        break;

    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';   
}

console.log(text);
