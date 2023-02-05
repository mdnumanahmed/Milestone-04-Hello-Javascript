console.log(5 < 2); // 5 less than 2 , result false;
console.log(5 > 2); // 5 grater than 2 , result true;
console.log(5 <= 2); // 5 less than or equal 2 , result false;
console.log(5 >= 2); // 5 grater than or equal 2 , result true;
console.log(5 == 2); // 5 equal 2 , result false;
console.log(5 != 2); // 5 not equal 2 , result true;

var phonePrice = 10000;
var myBudget = 9000;
if (phonePrice < myBudget) {
  console.log("I will buy the phone"); // if condition is truthy execute this code.
} else {
  console.log("I will buy some book"); // if condition is falsy execute this code.
}

var isGraduated = true;
var salary = 3000;
var cars = 1;
// if full fill all condition, if block's code execute.
if(isGraduated ==  true && salary > 50000 && cars >= 1 ){
    console.log('I will mary with you');
}else{
    console.log('I will go to aboard'); // if false this code execute
}

// if full fill any one condition, code 
if(isGraduated ==  true || salary > 50000 || cars >= 1 ){
    console.log('I will mary with you');
}else{
    console.log('I will go to aboard');
}

// if else if else
var money = 20; 
var danishPrice = 50;
var cakePrice = 40;
var biscuitPrice = 30;

if(danishPrice < money){
    console.log('Ami danish khabo');
}else if(cakePrice < money){
    console.log('Ami cake khabo');
}else if(biscuitPrice < money){
    console.log('Ami biscuit khabo');
}else{
    console.log('shudu cha khabo');
}