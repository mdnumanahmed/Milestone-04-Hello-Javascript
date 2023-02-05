বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
{
    let name = "NSS";
    let number = 32;
    let isSuccess = true;
}

২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
{
    for(let i = 1; i <= 100; i++){
        console.log(i);
    }
}

৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
{
    for(let i = 50; i <= 80; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
{
    function addNumbers(num1, num2, num3){
        const total = num1 + num2 + num3;
        return total;
    }
    const result = addNumbers(3, 7, 10)
    console.log(result);
}


ফাংশন আর অবজেক্ট একটু রিভিশন দিয়ে দাও  

১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয় 
1. What is a function? What does it and How to declare a function in JavaScript
Answer: A function ia a block of code. A set of statements (subprogram/block of code) that performs a task when it is called. Maintain a relationship with input and output.

Function can perform any task repeatedly. We can code once and use it when i need, just by calling the function. 
ফাংশনের কাজ হচ্ছে, যে কাজগুলো বার বার করতে হয় তার একটি সহজ সমাধান, একবার একটি ফাংশন রেডি করে যখনই প্রয়োজন আমরা তাকে বারবার কল করে ব্যবহার করতে পারি।

To declare we need a keyword 'function' and name of function then parentheses () and curly braces {}


২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয় 
parameters: ফাংশনটি কাজ করার জন্য প্রয়োজনীয় ডাটা আমরা দেব। বর্গমূল নির্ণয়ের জন্য ফাংশন লিখলে কোন সংখ্যার বর্গমূল বের করতে হবে সেটি বলে দিতে হবে। প্যারামিটারের মাধ্যমে আমরা সেসব ডাটা ওই ফাংশনের কাছ পাঠাতে পারি। আবার কোনো কিছু পাঠাতে না চাইলে সেটি খালিও রাখতে পারি। একাধিক প্যারামিটার পাঠানোর সময় প্রতিটি প্যারামিটার কমা (,) দিয়ে আলাদা করতে হবে।

৩. কেন ফাংশন থেকে রিটার্ন করা হয় ?
রিটার্ন কিওয়ার্ড ব্যবহার হয় কোনো একটি ফাংশান থেকে কোনো কিছু আউটপুট পাওয়ার জন্য। যখন আমরা কোন ভারিয়েবলে আউটপুট স্টোর করে অন্য কোথাও ঐ ভ্যালু ব্যবহার করতে চাই, তখন রিটার্ন এর দরকার পরবে। যেমন →

function multiple(a, b) {
	return a * b;
}
console.log(multiple(2, 3)); // output - 6

মনে রাখতে হবে, যখন কোনো ফাংশানের ভিতরে রিটার্ন কিওয়ার্ড ব্যবহার করা হয় তখন সেই ফাংশান তার সম্পূর্ন কাজ শেষ করে অর্থাৎ রিটার্ন কিওয়ার্ডের পর ফাংশান তার এক লাইন কোডও এক্সিকিউট করে না। এই জন্য একটি ফাংশান থেকে একবার রিটার্ন করা সম্ভব।


(
একটা ফাংশন তার কাজ শেষ হয়ে গেলে তাকে যে কল করেছে তার কাছে কোন একটা মান ফেরত পাঠাতে পারে। এটাই হচ্ছে ফাংশনটার রিটার্ন ভ্যালু। আবার যদি এমন হয় যে ফাংশনটা কোন ভ্যালু রিটার্ন করবে না, কেবল কিছু স্টেটমেন্ট এক্সিকিউট করবে তাহলে রিটার্ন টাইপ হবে void। সেক্ষেত্রে ফাংশনের শেষে return স্টেটমেন্ট না লেখলেও কোন অসুবিধা নেই। লেখলেও শুধু return; লেখতে হবে যেহেতু এর কোন রিটার্ন ভ্যালু নেই।

কোন ফাংশন এক্সিকিউট হওয়ার সময় যখনই return এর সম্মুখীন হবে তখনই সে রিটার্ন করে ফাংশন থেকে বের হয়ে আসবে। এরপর যদি কোন স্টেটমেন্ট থাকে সেখানে কখনই পৌঁছাবে না।
)

৪. রিটার্ন এর পর কিছু না লিখলে কি হয়?
    রিটার্ন এর পর কিছু না লিখলে undefined রিটার্ন করবে।

৫. রিটার্ন এর পর কি কি জিনিস লেখা যায়?
    রিটার্ন এর পর string, number, variable, array, object etc পাঠানো যায়।

৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি 

	Function Declaration
    1.	A function declaration must have a function name.
    2.	Function declaration does not require a variable assignment. 
    3.	These are executed before any other code.
    4.	The function in function declaration can be accessed before and after the function definition.
    5.	Function declarations are hoisted
    6.	Syntax: function geeksforGeeks(paramA, paramB) { // Set of statements }

    Function Expression
    1. A function expression is similar to a function declaration without the function name.
    2. Function expressions can be stored in a variable assignment.
    3. Function expressions load and execute only when the program interpreter reaches the line of code.
    4. The function in function expression can be accessed only after the function definition.
    5. Function expressions are not hoisted
    6. Syntax: var geeksforGeeks= function(paramA, paramB) { // Set of statements }


৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: Arrow Functions vs. Regular Functions in JavaScript?

https://blog.bitsrc.io/arrow-functions-vs-regular-functions-in-javascript-458ccd863bc1

1. “this” Keyword
Regular function, this changes according to the way that function is invoked.
Simple Invocation: this equals the global object or maybe undefined if you are using strict mode.
Method Invocation: this equals the object that owns the method.
Indirect Invocation: this equals the first argument.
Constructor Invocation: this equals the newly created instance.

Arrow functions don't have their own “this”, and they don’t redefine the value of “this ”within the function.

2. Arguments Object.
Regular JavaScript functions, arguments keywords can be used to access the passed arguments when the function is invoked.

But, arrow functions do not have their own arguments and it uses the arguments from the outer function.

3. Constructors / “new” keyword
We can easily construct objects with regular functions. We just need to invoke the function with the new keyword.

However, arrow functions can not be used as constructors.

4. Implicit return
Regular functions, we can use the return keyword to return any value from a function. If we don’t return anything, the function will implicitly return undefined.

If the arrow function contains one expression, you can omit the curly braces, and then the expression will be implicitly returned.

5. No duplicate named parameters

With arrow functions, duplicate named arguments are always, regardless of strict or non-strict mode, invalid.

https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256



৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি 
লুপ একটানা কাজ করে, লুপ শুরু হওয়ার পর থেকে শেষ হওয়া পর্যন্ত মধ্যখানে অন্য কোন কাজ করবে না। কিন্তু ফাংশন যখন দরকার হবে, কল করে কাজ করা যাবে, আবার অন্য কাজ করার পর আবার ঐ একই ফাংশন কল করে কাজ করা যাবে যতবার ইচ্ছা।

Now for functions: a function is a piece of code you can run over and over again simply by calling it. All methods are functions, but not all functions are methods. You can have a function that isn't tied to a class and is sort of free-floating in your code and will execute every time you call it. But all functions defined within a class are called methods.

Loops: A loop is a piece of code that runs over and over again until the condition is false. Or in the case of a for in loop until the number of items to iterate over has reached an end. A loop can be just about anywhere in your code. It can even be inside a function or method.

৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি  
(
    Wrapping Up
Objects represent “things” with characteristics (aka properties), while arrays create and store lists of data in a single variable. Both dot and bracket notation allow us to access, add, change, and remove items from an object, while zero-based indexing and a variety of built-in methods let us access and alter items in an array. Finally, we can iterate over object properties and array items using various loops (e.g. for, for…in, for…of, forEach()).

)
Object=======
basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.
Properties in objects can be accessed, added, changed, and removed by using either dot or bracket notation.
The most common way to loop through properties in an object is with a for…in loop:
Another way to iterate through object properties is by appending the forEach()method to Object.keys():

Array======
We use arrays whenever we want to create and store a list of multiple items in a single variable. Arrays are especially useful when creating ordered collections where items in the collection can be accessed by their numerical position in the list. Just as object properties can store values of any primitive data type (as well as an array or another object), so too can arrays consist of strings, numbers, booleans, objects, or even other arrays.
Arrays use zero-based indexing, so the first item in an array has an index of 0, the second item an index of 1, and so on.
Items can be added and removed from the beginning or end of an array using the push(), pop(), unshift(), and shift() methods:
We can loop through items in an array in a few ways. First there’s the standard for loop:
There’s also the for…of loop:   Or we can utilize the forEach() method:

========================================
Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

array can access using index and it can access in order. where as
object can access using string or symbol and it does not have order guarentee.


for-in-vs-for-of ======================

https://bitsofco.de/for-in-vs-for-of/


১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে? 
তিনভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে:
১। obj.name;
২। obj['name']
৩। obj[nameVariable]

১১. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 
{
    const carObj = {
        brand: "MWB",
        color: ['Silver', 'Brown', 'Red'],
        weight: {sm: 300, md: 400, lg: 500},
        price: 200000,
    }
    const carPrice = 'price'
    console.log(carObj.brand);
    console.log(carObj[carPrice]);
    console.log(carObj['weight'].md);
    console.log(carObj.color[1]);
}

{
    const student = {
        name: 'Anisul Islam',
        age: 20,
        class: 'HSC',
        group: 'Science'
    }
    for(let key in student){
        console.log(key, ":",  student[key]);
    }
    
    const keys = Object.keys(student)
    for(let i = 0; i < keys.length; i++){
        let key = keys[i]
        console.log(key, ":", student[key]);
    }
}



এছাড়াও আজকের ভিডিওতে চারটা প্রব্লেম এর কথা বলেছি। সেগুলা মাস্ট প্রাকটিস করো। নিজে নিজে চিন্তা করো 

১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
{
    function celsiusToFahrenheit(celsius){
        // const fahrenheit = (celsius * 1.8)+32;
        const fahrenheit = (celsius * 9/5)+32;
        return fahrenheit;
    }
    const convertedFahrenheit = celsiusToFahrenheit(50)
    console.log(convertedFahrenheit);

    
}


২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function fahrenheitToCelsius(fahrenheit){
        // const celsius = (fahrenheit - 32) / 1.8;
        const celsius = (fahrenheit - 32) / (9/5);
        return celsius;
    }
    const convertedToCelsius = fahrenheitToCelsius(122)
    console.log(convertedToCelsius);


৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
{
    function getGrading(score){
        let letterGrade = '';
        switch (true) {
            case (score >= 80):
                letterGrade += 'A+'
                break;
            case (score >= 70):
                letterGrade += 'A'
                break;
            case (score >= 60):
                letterGrade += 'A-'
                break;
            case (score >= 50):
                letterGrade += 'B'
                break;
            case (score >= 40):
                letterGrade += 'C'
                break;
            case (score >= 33):
                letterGrade += 'D'
                break;        
            default:
                letterGrade += 'F'
                break;
        }
        return letterGrade;
    }
    const grade = getGrading(85);
    console.log(grade);
}


৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
{
  // Simple Interest
  function simpleInterest(p, r, t) {
    let interest = (p * r * t) / 100;
    console.log(interest);
  }
  simpleInterest(100, 5, 3);
}

{
  // JavaScript program to
  // find compound interest for
  // given values.

  let principle = 100,
    rate = 5,
    time = 2;

  /* Calculate compound interest */
  function compoundInterest(principle, rate, time){
      let A = principle * Math.pow(1 + rate / 100, time);
      let CI = A - principle;
      return CI;
  }
  let compoundinterest = compoundInterest(principle, rate, time)
  console.log(compoundinterest);
}


