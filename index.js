/*
Mathematical rate of conversion
100 centimeter = 1 meter;
1000 meters = 1 kilometer
100000 centimeter = 1 kilometer
*/


var centimeters = parseFloat(prompt("Please enter centimeters:")); //use of parseFloat to accomodate both int and float
var meters = centimeters * 100;
console.log(meters + " m");
console.log('\n')

var meters = parseFloat(prompt("Please enter meters:"));
var kilometers = meters * 1000;
console.log(kilometers + " Km");
console.log('\n')

var kilometers = parseFloat(prompt("Please enter kilometers:"));
var centimeters = kilometers * 100000;
console.log(centimeters + " cm");

