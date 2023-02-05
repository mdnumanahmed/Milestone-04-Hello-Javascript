১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
Answer: JavaScript is a lightweight, interpreted, high-level programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.

২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
Answer: Working Process of JavaScript:
    > JavaScript Source Code
    > JS Parser
    > Abstract Syntax Tree
    > Interpreter Ignition  ---- (JIT Compiler with V8 engine)
    > Machine Code / Byte Code

(
    https://web.stanford.edu/class/cs98si/slides/overview.html#:~:text=In%20contrast%2C%20JavaScript%20has%20no,it%20is%20about%20to%20run.

    JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.)


(

    https://blog.bitsrc.io/how-does-javascript-really-work-part-1-7681dd54a36d


Compilers and Interpreters

Compiler/interpreter can be written the same language that it processes or any other language too.

Interpreter: Reads and translates the file line by line on the fly. Initially, this is how JavaScript worked.

Compiler: A compiler works ahead of time and creates a new file which contains the machine code translation for your input file.

There are two ways in which we could translate the JavaScript code to machine code. When the code is compiled, the machine has a better understanding of what is going to happen before the code starts to run which makes the execution faster later on, but it takes some time up front for this process.

On the other hand, when the code is interpreted, the execution starts immediately and hence faster, but lack of optimizations makes it really slow with large applications.)


৩. ভেরিয়েবল কি জিনিস?
Answer:  Variable: কোন একটা value যে কোন সময় কাজে লাগানোর জন্য সংরক্ষণ করার মত একটা জায়গা হলো Variable. 
--Varibale: We can think of variable as a box, where we can store data/things. 
--Varibale যার মান ভেরি করতে পারে। vary + able = variable


৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
--Varibale ডিক্লেয়ার করতে ৫টি জিনিস লাগে
১) var কিওয়ার্ড  
২) নাম  
৩) এসাইনমেন্ট অপারেটর ( = )  
৪) মান (value)  
৫) সেমিকোলন (;)
var onionPrice = 30;

৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
Variable এর নাম লিখে, তার সাথে array notation [] এর মধ্যে index বসিয়ে = সমান চিহ্ন দিয়ে value দেয়ার মাধ্যমে মান চেইঞ্জ বা আপডেট করা যায়। 
array[0] = 4;

৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
Variable are 3 types: 
String: ০ বা তার চেয়ে বেশি অক্ষর যদি কোটেশন মার্কের ভিতরে লেখা হয়।
Numeric: পূর্ণসংখ্যা বা ভগ্নাংশ যদি কোটেশন ছাড়া লেখা হয়।
Boolean: এটি মাত্র দুটি ভ্যালু (সত্য বা মিথ্যা) গ্রহণ করে, যা কোটেশন ছাড়া লেখা হয়।



৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
1. What are the different data types present in javascript?
To know the type of a JavaScript variable, we can use the typeof operator.

1. Primitive types

String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.

Example :

var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes
Number - It represents a number and can be written with or without decimals.
Example :

var x = 3; //without decimal
var y = 3.6; //with decimal
BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
Example :

var bigInteger =  234567890123456789012345678901234567890;
Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.
Example :

var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true
Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
Example :

var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined
Null - It represents a non-existent or a invalid value.
Example :

var z = null;
Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :

var symbol1 = Symbol('symbol');
typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol



৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
Naming Convention: 
-- নামকরণ করতে যা করা যাবে না: 
- ভেরিয়েবলের নাম কোন রিজার্ভ কিওয়ার্ড হতে পারবে না।
- ভেরিয়েবলের নাম একশব্দে হতে হবে, কোন স্পেস দেয়া যাবে না।
- ভেরিয়েবলের নাম কোন সংখ্যা দ্বারা শুরু হতে পারবে না।
- ভেরিয়েবলের নাম কোন কোটেশনের ভিতরে হতে পারবে না।
- ভেরিয়েবলের নাম এর মধ্যে কোন ডেশ হতে পারবে না।


- নামের মধ্যে (A-Z a-z) লেখা যাবে।
- নামের শেষে নাম্বার দেয়া যাবে।
- $ সাইন ব্যবহার করা যাবে।
- ভেরিয়েবলের নাম এর মধ্যে একাধিক শব্দ থাকলে underscore _ , camelCase, PascalCase নিয়মে লিখা যাবে।
- ভেরিয়েবলের নাম Case sensitive.


৯. দুইটা ভেরিয়েবল এর মধ্যে +, -, *, /, % কিভাবে করে? 
var a = 10;
var b = 20;
var sum = a + b;
var sub = a -b;
var multi = a * b;
var div = a / b;
var mod = a % b;


১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
var a = 10;
a+= 5 // means variable এর পূর্বের মানের সাথে = চিহ্নের ডানপাশের নতুন ভ্যালু যোগ হবে।
a-= 5 // means variable এর পূর্বের মান থেকে = চিহ্নের ডানপাশের নতুন ভ্যালু বিয়োগ হবে।
a*= 5 // means variable এর পূর্বের মানের সাথে = চিহ্নের ডানপাশের নতুন ভ্যালু গুণ হবে।
a/= 5 // means variable এর পূর্বের মানকে = চিহ্নের ডানপাশের নতুন ভ্যালু দিয়ে ভাগ হবে।


১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
++ // variable এর পূর্বের মানের সাথে ১ করে যোগ হবে।
-- // variable এর পূর্বের মান থেকে ১ করে বিয়োগ হবে।

১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
parseInt = স্ট্রিং ভ্যালুকে ইন্টিজার (পূর্ণ সংখ্যা) ভ্যালুতে পরিণত করবে।
parseFloat = স্ট্রিং ভ্যালুকে ফ্লয়ট (ভগ্নাংশ) ভ্যালুতে পরিণত করবে।
toFixed = ভগ্নাংশ সংখ্যাকে দশমিকের পর ডেসিমেল পরিমাণ নির্দিষ্ট করে দিতে ব্যবহার হয়।
--------------

১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
Arrays are used to store multiple values in a single variable
একই ভ্যারিয়েবলে একাধিক ভ্যালু স্টোর করতে যা ব্যবহার হয়, তাই Array

Array ভ্যারিয়েবলের মত কাজ করে, তবে এর একাধিক উপাদানগুলোকে নির্দিষ্ট সংখ্যা দিয়ে চিহ্নিত করে রাখে যাকে index বলা হয়। আর ঐ index এর মাধ্যমে উপাদানগুলোর মধ্যে একসেস পাওয়া যায়।

Array ডিক্লেয়ার করা ভ্যারিয়েবল ডিক্লেয়ার করার মতো, তবে এতে একাধিক ভ্যালু / মান থাকে।
ভ্যালু / মানগুলো [] স্কয়ার ব্র্যাকেটের মধ্যে কমা দিয়ে সেপারেট করে দিতে হয়। 
ভ্যালুগুলো স্ট্রিং হলে কোটেশন এর মধ্যে হবে। এছাড়া অন্যান্য ভ্যালু কোটেশন ছাড়া হবে।

১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
array এর length নামে একটা প্রপার্টি আছে, যা দিয়ে element এর পরিমাণ বের করা যায়।
array.length


১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
array এর উপাদান গুলা এর পজিশন ( index)  sequensially কাজ করে, যা শুরু হয় শুন্য (০) দিয়ে এবং ১ ১ করে বৃদ্ধি হতে থাকে। 


১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
উপাদানের index এর মান -১ বলতে বুঝায় যে, ঐ উপাদানটি এই ‍array এর মধ্যে exist করে না।


১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
ভ্যারিয়েবল ডিক্লেয়ার করে = চিহ্নের পর array এর সাথে [] (array notation) এর মধ্যে index বসিয়ে উপাদানের মান খুঁজে বের করতে পারি।
var getValueByIndex = array[0];


১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
assignment operator (=) এর বামে array এর সাথে [] (array notation) এর মধ্যে index বসিয়ে 
এবং assignment operator (=) এর ডানে নতুন ভ্যালু দিয়ে মান চেঞ্জ করতে পারবো।
array[0] = 56;


১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
array এর নামের সাথে ডট .indexOf(ভ্যালু) method ব্যবহার করে সেটার index খুঁজে বের করতে পারি। 
array.indexOf(56)


২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
-- undefined দেখানোর কারণ হলো, ঐ array এর মধ্যে exist করে না।


২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
Array এর মধ্যে লাস্ট উপাদান হিসেবে যোগ করতে array.push('apple') 
Array থেকে শেষের উপাদান টা বের করে দিতে array.pop()


২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
Array এর মধ্যে প্রথম উপাদান হিসেবে যোগ করতে array.unshift('apple') 
Array থেকে প্রথম উপাদান টা বের করে দিতে array.shift()


২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 


২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var myMoney = 10000;
if(myMoney > 80000){
    console.log('I will buy mac');
}else if(myMoney > 60000){
    console.log('I will buy gaming');
}else if(myMoney > 40000){
    console.log('I will buy lenovo');
}else if(myMoney > 20000){
    console.log('I will buy old laptop');
}else{
    console.log('I will buy mobile');
}


---------------------

২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
var range = 1;
while(range <= 39){
    console.log( range + " " + 'আজকে আমার মন ভালো নেই');
    range++
}


২৬. while লুপ কিভাবে কাজ করে 
while loop এর েউপরে Loop variable ডিক্লেয়ার করতে হবে, তারপর while loop এর () এর ভিতরে 
Condition দিতে হবে, তারপর loop body তে কোড দিতে হবে এবং loop variable value Change করতে হবে।

Loop: মানে একই কাজ বারবার করা।
Condition: আর কিছুই না জাস্ট একটা শর্ত, যা প্রতিবার loop চলার আগের একবার করে check করে।
Loop এর কন্ডিশনের variable এর value পরিবর্তন করতে হবে (বাড়ানো/কমানো), না হলে loop আজীবন চলতেই থাকবে।

Four parts of while loop
1. Loop variable
2. Condition inside while loop
3. loop body
4. Change loop variable value



২৭. for লুপ কিভাবে কাজ করে 
for loop এর () এর ভিতরে Loop variable ; Condition ; loop variable value Change ++ / -- তারপর loop body তে কোড দিতে হবে।


২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
infinity loop এর পড়ে যায়। যা আজীবন চলতেই থাকে।


২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
for(var i = 58; i<=98; i++){
    console.log(i);
}


৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
for(var i = 412; i<=456; i+=2){
    console.log(i);
}


৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
for(var i = 581; i<=623; i+=2){
    console.log(i);
}


৩২.while আর for loop এর মধ্যে পার্থক্য কি
for loop- Use a for loop when you know the loop should execute n times,
while loop - Use a while loop when asking for user input. Use a while loop when the increment value is nonstandard.


৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var topics = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript']
for(var i = 0; i < topics.length; i++){
    var topic = topics[i];
    console.log(topic);
}

৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

var mobileBrands = ['Nokia', 'Motorola', 'Simance', 'HTC', 'Samsung'];
var brandCount = 0;
while(brandCount < mobileBrands.length){
    var mobile = mobileBrands[brandCount]
    console.log(mobile);
    brandCount++
}

// Reverse way
var mobileBrands = ['Nokia', 'Motorola', 'Simance', 'HTC', 'Samsung'];
var brandCount = mobileBrands.length - 1;
while(brandCount >= 0 ){
    var mobile = mobileBrands[brandCount]
    console.log(mobile);
    brandCount--
}


৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

for(var i = 30; i <= 86; i++){
    console.log(i);
    if(i === 44){
        break;
    }
}


৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

var bookPrices = [100, 30, 50, 80, 200, 240, 44, 120, 140, 248, 300, 201]
for(var i = 0; i < bookPrices.length; i++){
    var price = bookPrices[i]
    if(price > 200){
        continue;
    }
    console.log(price);
}


Problem Solving Conceptual Session
1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে 

২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 

৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো 

৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 

8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো 
