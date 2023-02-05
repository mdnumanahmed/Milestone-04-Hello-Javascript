/* ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।  */

{
  let name = "NSS";
  let number = 32;
  let isSuccess = true;
}

/* ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে  */

{
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

/* ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।  */
{
  for (let i = 50; i <= 80; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

/* ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো  */
{
  function addNumbers(num1, num2, num3) {
    const total = num1 + num2 + num3;
    return total;
  }
  const result = addNumbers(3, 7, 10);
  console.log(result);
}

/* ১১. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও।  */
{
  const carObj = {
    brand: "MWB",
    color: ["Silver", "Brown", "Red"],
    weight: { sm: 300, md: 400, lg: 500 },
    price: 200000,
  };
  const carPrice = "price";
  console.log(carObj.brand);
  console.log(carObj[carPrice]);
  console.log(carObj["weight"].md);
  console.log(carObj.color[1]);
}

{
  const student = {
    name: "Anisul Islam",
    age: 20,
    class: "HSC",
    group: "Science",
  };
  for (let key in student) {
    console.log(key, ":", student[key]);
  }

  const keys = Object.keys(student);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key, ":", student[key]);
  }
}

/* এছাড়াও আজকের ভিডিওতে চারটা প্রব্লেম এর কথা বলেছি। সেগুলা মাস্ট প্রাকটিস করো। নিজে নিজে চিন্তা করো 

১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */
{
  function celsiusToFahrenheit(celsius) {
    // const fahrenheit = (celsius * 1.8)+32;
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }
  const convertedFahrenheit = celsiusToFahrenheit(50);
  console.log(convertedFahrenheit);
}

/* ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।  */
{
  function fahrenheitToCelsius(fahrenheit) {
    // const celsius = (fahrenheit - 32) / 1.8;
    const celsius = (fahrenheit - 32) / (9 / 5);
    return celsius;
  }
  const convertedToCelsius = fahrenheitToCelsius(122);
  console.log(convertedToCelsius);
}

/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।
 */
{
  function getGrading(score) {
    let letterGrade = "";
    switch (true) {
      case score >= 80:
        letterGrade += "A+";
        break;
      case score >= 70:
        letterGrade += "A";
        break;
      case score >= 60:
        letterGrade += "A-";
        break;
      case score >= 50:
        letterGrade += "B";
        break;
      case score >= 40:
        letterGrade += "C";
        break;
      case score >= 33:
        letterGrade += "D";
        break;
      default:
        letterGrade += "F";
        break;
    }
    return letterGrade;
  }
  const grade = getGrading(85);
  console.log(grade);
}

{
  // https://stackoverflow.com/questions/44711412/outputting-grades-in-javascript
  /* Given a function myGrading I need to return text that sent the letter grade corresponding to the given score.

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'

Basically, if the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-. */
  // function checkGrading(score) {
  //     var gscore;
  //     switch(true) {
  //       case (score <= 100 && score >= 90):
  //          gscore = 'A';
  //           break;
  //       case (score <= 89 && score >= 80):
  //           gscore = 'B';
  //            break;
  //       case (score <= 79 && score >= 70):
  //           gscore = 'C';
  //            break;
  //          case (score <= 69 && score >= 60):
  //           gscore = 'D';
  //            break;
  //       case (score <= 59 && score >= 0):
  //           gscore = 'F';
  //           break;
  //       case (score > 100 && score < 0):
  //           gscore = 'INVALID SCORE';
  //           break;
  //       default:
  //         return 'INVALID SCORE';
  //     }
  //     var last_digit = score%10;
  //     if(last_digit <=2 && last_digit >= 0 && score != 100){
  //       gscore+='-';
  //     }
  //     else if((last_digit <=9 && last_digit >= 7) || score == 100){
  //       gscore+='+';
  //     }
  //     return gscore;
  //   };
  //   console.log(checkGrading(91));
  //   console.log(checkGrading(75));
  //   console.log(checkGrading(100));
}

/* ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।  */
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
