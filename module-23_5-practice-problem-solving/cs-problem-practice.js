/* Basic Problems: */
/* 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো। */
{
  const n = 5;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const number = i;
    sum += number;
  }
  console.log(sum);
}

/* ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।  */

/* এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

আউটপুটঃ 3 */

{
  const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
  function countOfGreaterFive(numbers) {
    let count = 0;
    for (const number of numbers) {
      if (number < 5) {
        count++;
      }
    }
    return count;
  }
  const count = countOfGreaterFive(numbers);
  console.log(count);
}

/* তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।  */
{
  function reverseName(name1, name2) {
    if (name1.length > name2.length) {
      return name1.split("").reverse().join("");
    } else {
      return name2.split("").reverse().join("");
    }
  }
  const reverse = reverseName("Abid", "Rakibul");
  console.log(reverse);
}

/* এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।  */

{
  function milliliterToLiter(milliliter) {
    const liter = milliliter / 1000;
    return parseFloat(liter.toFixed(2));
  }
  const liter = milliliterToLiter(1225);
  console.log(liter);
}

/* একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
 	অব্জজেক্টটি/Input দেখতে এমনঃ
[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
]  */

{
  function youngestBoy(persons) {
    let youngest = persons[0];
    for (const person of persons) {
      if (person.age < youngest.age) {
        youngest = person;
      }
    }
    return youngest;
  }
  const persons = [
    { name: "sakib", age: 30 },
    { name: "samiul", age: 20 },
    { name: "sahid", age: 50 },
    { name: "samin", age: 10 },
  ];
  const youngest = youngestBoy(persons);
  console.log(youngest);
}

/* Problem:1   radianToDegree
ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।  
Sample Data:
Input	Output
10
25
199
	572.96
1432.39
11401.86
*/
{
  function radianToDegree(radian) {
    const degree = (radian * 180) / Math.PI;
    return parseFloat(degree.toFixed(2));
  }
  const degree = radianToDegree(25);
  console.log(degree);
}

/* Problem:2   isJavaScriptFile 
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

Sample Data
Input	Output
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'
	true
false
false
true */
{
  function isJavaScriptFile(filename) {
    if (filename.endsWith(".js")) {
      return true;
    }
    return false;
  }
  const result = isJavaScriptFile("index.js");
  console.log(result);
}

/* Problem 3:  oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 


●	প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
●	প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
●	প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। 
.
Sample Data
Input	Output
1, 1, 1
30, 20, 10
1,0,2
0,2,3	379
7370
384
665 */

{
  function oilPrice(dieselAmount, petrolAmount, octaneAmount) {
    if (
      typeof dieselAmount !== "number" ||
      typeof petrolAmount !== "number" ||
      typeof octaneAmount !== "number"
    ) {
      return "Please input only number";
    } else if (dieselAmount < 0 || petrolAmount < 0 || octaneAmount < 0) {
      return "Please enter only positive number";
    }
    const perDieselPrice = 114;
    const perPetrolPrice = 130;
    const perOctanePrice = 135;

    const dieselPrice = dieselAmount * perDieselPrice;
    const petrolPrice = petrolAmount * perPetrolPrice;
    const octanePrice = octaneAmount * perOctanePrice;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
  }
  const totalOilPrice = oilPrice(1, 1, 1);
  console.log(totalOilPrice);
}

/* Problem 4:  publicBusFare

একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

উদাহরণ১ঃ

 যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ

 যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।



Sample Data
Input	Output
50
55
112
235
365	0
1250
250
500
1000 */

{
  function publicBusFare(participants) {
    if (typeof participants !== "number") {
      return "Please enter only number";
    } else if (participants < 50) {
      return "Please provide value more than 50";
    }
    const busCapacity = 50;
    const microCapacity = 11;

    let remaining = participants % busCapacity;
    console.log(remaining);
    if (remaining > microCapacity) {
      remaining = remaining % microCapacity;
    }
    console.log(remaining);
    const publicBusCost = remaining * 250;
    return publicBusCost;
  }
  const publicBusCost = publicBusFare(-88);
  console.log(publicBusCost);
}

/* Problem 5:  isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

Sample Data:
Input	Output
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }

{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }

{ name: "doe", friend: "alex" },
{ name: "john", friend: "doe" }
	true



false


false

. */
{
  function isBestFriend(objOne, objTwo) {
    if (objOne.name === objTwo.friend) {
      return true;
    }
    return false;
  }
  const objOne = { name: "abul", friend: "babul" };
  const objTwo = { name: "babul", friend: "abul" };
  const bestFriend = isBestFriend(objOne, objTwo);
  console.log(bestFriend);
}
{
  function isBestFriend(friends) {
    let bestFriend = friends[0]
    for(const friend of friends){
        if(friend.friend === bestFriend.name){
           return bestFriend
        }
    }
    return bestFriend;
  }
  const friends = [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" },
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul"},
    { name: "doe", friend: "alex" },
    { name: "john", friend: "doe" },
  ];
  const bestFriend = isBestFriend(friends);
  console.log(bestFriend);
}
