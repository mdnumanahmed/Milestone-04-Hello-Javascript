var nutPrice = 20;
console.log(nutPrice)

// Numeric Data Type 
var age = 22;
var count = 30;

// String Data Type
var name = "Numan";
var address= "Sylhet";
var village = 'Alompur';

// Boolean Data Type
var isRaining = false;
var isFinished = true;

var eggPrice= 20;
var oilPrice = 50;
var totalPrice = oilPrice + eggPrice;  //Addition
var difference = oilPrice - eggPrice;  // Subtraction
var multiplied = oilPrice * eggPrice;  // Multiplication
var divided = oilPrice / eggPrice;  // Division

// Shorthand
// set new value in variable
eggPrice = 30;
// add new value with existing value
eggPrice = eggPrice + 10;
eggPrice += 10; // shorthand addition  +=
eggPrice -= 10;  // shorthand subtraction  -=
eggPrice *= 5;  //shorthand multiplication  *=
eggPrice /= 3;  // shorthnad division  /=

eggPrice++  // ++ means adding 1 with existing value
eggPrice--  // -- means subtract 1 from existing value


// Concatenaition 
var firstName = "Omar";
var lastName = "Faruque";
var fullName = firstName + lastName; //without space
var fullName = firstName + " " + lastName; //with space

// Convert string to number
var penPrice = "14";
var bookPrice = "30.45"

var convertedPenPrice = parseInt(penPrice) // converted string to integer
var convertedBookPrice = parseFloat(bookPrice) // converted string to float

var money = 100;
console.log(typeof money) // type is number

var money = '100';
console.log(typeof money) // type is string

var isMarried = true;
console.log(typeof isMarried) // type is boolean

var sale;
console.log(typeof sale) // type is undefined

var number1 = 0.1;
var number2 = 0.2;
var sum = number1 + number2;
console.log(sum);  // result  0.3000000000000004
sum.toFixed(1) // to fixed decimal 1, result 0.3
sum.toFixed(2) // to fixed decimal 2, result 0.30
sum.toFixed(4) // to fixed decimal 4, result 0.3000
// toFixed()  return a string,  it will be converted to number parseFloat()
parseFloat(sum); // result 0.3 and it will be a number

// Modulus or Reminder or Vagses
var mangoes = 11;
var person = 3;

var reminder = mangoes % person;
console.log(reminder) // result 2




