// Problem One
function foo() {
  console.log("foo");
  bar();
}

function bar() {
  console.log("bar");
}

foo();

// Problem two make_avg() with 3 parameters
function make_avg(param1, param2, param3) {
  var sum = param1 + param2 + param3;
  var avg = sum / 3;
  return avg;
}
var mark1 = 89;
var mark2 = 86;
var mark3 = 75;
var myAvg = make_avg(mark1, mark2, mark3);
console.log(Number(myAvg.toFixed(2)));

// Problem Three make_avg() it take 2 param - array and array length
function avgFromArray(marks, subjectCount) {
  var totalMarks = 0;
  for (var i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
  }
  var avg = totalMarks / subjectCount;
  var result = parseFloat(avg.toFixed(2));
  return result;
}
var marksArray = [89, 84, 79, 74, 95, 97, 88];
var myResult = avgFromArray(marksArray, marksArray.length);
console.log(myResult);

// Problem Four odd_even()
{
  // has return + has parameter
  function odd_even(number) {
    // let result = ''; // যদি আলাদা ভ্যারিয়েবলে ভ্যালু রেখে রিটার্ন করতে হয়।
    if (number % 2 !== 0) {
    //   result += " given number " + number + " is odd";
    //   return result
      return " Given number " + number + " is odd"; // সরাসরি রিটার্ন করা হয়েছে।
    } else {
        // result += " given number " +  number + " is even";
        // return result;
        return " Given number " +  number + " is even" // সরাসরি রিটার্ন করা হয়েছে।
    }
  }
  let givenNumber = 21;
  let oddEvenNumber = odd_even(givenNumber);
  console.log(oddEvenNumber);
}

{
  // no return + has parameter
  function odd_even(number) {
    if (number % 2 !== 0) {
      console.log("Given number ", number, " is odd");
    } else {
      console.log("Given number ", number, " is even");
    }
  }
  let givenNumber = 50;
  odd_even(givenNumber);
}

{
    // has return + no parameter
    function odd_even(){
        var num = 12;        
        if(num % 2 !== 0){
            let result = 'Given number ' + num + ' is odd';
            return result
        }else{
            let result = 'Given number ' + num + ' is even';
            return result
        }
    }
    var oddEvenNumber = odd_even();
    console.log(oddEvenNumber);
}

{
    // no return + no parameter
    function odd_even(){
        let num = 21;
        if(num % 2 !== 0){
            console.log('Given number ' + num + ' is odd');
        }else{
            console.log('Given number ' + num + ' is even')
        }
    }
    odd_even()
}

// Problem Five switch
{
    let signal = '';
    switch(signal){
        case 'red':
            console.log('You should stop, You may be in danger');
            break;
        case 'yellow':
            console.log('You should stop');
            break;
        case 'green':
            console.log('You should cross the road');
            break;
        default:
            console.log('Be careful, look your left and right side, before crossing the road');
    }
}

// Extra Practice Problem in module text description
/* ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */
{
  function multiplicationTable(num){
    for(let i = 1; i <=10; i++){
      console.log(num + " * " + i + " = " + num*i);
    }
  }

  multiplicationTable(13)
}

/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */
{
  function toLoawer(str){
    let lowerText = str.toLowerCase()
    return lowerText;
  }
  let text = 'Abdul Hakim'
  let lowerText = toLoawer(text)
  console.log(lowerText);
}

/* ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।  */
{
  function fullName(firstName, lastName){
    return firstName + " " + lastName
  }
  let fName = 'Numan'
  let lName = 'Ahmed'
  let myName = fullName(fName, lName)
  console.log(myName);
}

/* ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।   */

{
  function square(num){
    return num * num;
  }
  let squareNum = square(10)
  console.log(squareNum);
}

/* ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : */
{
  const pizza = {
    topping: ['cheese', 'sauce', 'peparoni'],
    crust: 'deep dish',
    serves: 2,
  }
  console.log(pizza.topping[2]);
}