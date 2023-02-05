const gojol = "ay sute ay ayre Nobin, korte kayem khudar din";
const searchText = "nobiN";

// const doesExist = gojol.includes('nobin')
// const doesExist = gojol.toLowerCase().includes('nobin')
// const doesExist = gojol.toLowerCase().includes(searchText)
const doesExist = gojol.toLowerCase().includes(searchText.toLowerCase());
console.log(doesExist);

// indexOf()
// !== -1 মানে স্ট্রিং টি ভ্যারিয়েবলের মধ্যে আছে
if (gojol.indexOf("ayre") !== -1) {
  console.log("sting pawa gese");
} else {
  console.log("string pawa jay ni");
}

// startsWith()
const start = gojol.startsWith("ay");
console.log(start);

// endswith()
const docs = "resume.pdf";
const pics = "mypic.png";
const end = docs.endsWith(".pdf");
console.log(end);

// split()
// const characters = gojol.split('')  // প্রতিটি অক্ষর আলাদা হবে empty string দিলে
// const words = gojol.split(' ') // প্রতিটি শব্দ স্পেস এর ভিত্তিতে আলাদা হয়ে যাবে।
// const sentences = gojol.split('.') // প্রতিটি বাক্য ডট এর ভিত্তিতে আলাদা হয়ে যাবে।
const partial = gojol.split(","); // প্রতিটি বাক্য কমা এর ভিত্তিতে আলাদা হয়ে যাবে।
// console.log(parts);

// slice(starIndex, endIndex)
// এটি শুরু এবং শেষ ইনডেক্স প্যারামিটার হিসেবে নেয়। শুরুর সংখ্যা যত হবে তার ভ্যালু দিবে কিন্তু শেষের সংখ্যার ভ্যালু দিবে না। মানে শেষের সংখ্যা হিসাবের বাইরে রাখে।
// যদি শেষের ইনডেক্স ৮ হয়, তাহলে ৭নং ইনডেকস্ এর ভ্যালু দিবে। ৮নং এর ভ্যালু দিবে না।
const partialSlice = gojol.slice(3, 8);
console.log(partialSlice);
// substring() like as slice()
const partialSubstring = gojol.substring(3, 8);
console.log(partialSubstring);

// join()
console.log(partial.join(". "));

// Math.abs()
const HMMarks = 34;
const SMMarks = 43;
// const gap = HMMarks - SMMarks  // it return wrong result due to negative number
const gap = Math.abs(HMMarks - SMMarks); // it return right result due to Math.abs()
if (gap < 5) {
  console.log("H M can be your friend");
} else {
  console.log("H M can be your friend");
}

// sokka khela using Math.random
for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}

// swap variable
let first = 5;
let second = 7;
console.log(first, second);
// wrong approach
// first = second;
// second = first;

// approach One
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approach Two--- Destructuring
[first, second] = [second, first];
console.log(first, second);

// Math.max  Math.min
const jim = 86;
const dela = 93;
const chinku = 84;
{
  function getMax(a, b, c) {
    return Math.max(a, b, c);
  }
  const cake = getMax(jim, dela, chinku);
  console.log(cake);
}
{
  function getMin(a, b, c) {
    return Math.min(a, b, c);
  }
  const cake = getMin(jim, dela, chinku);
  console.log(cake);
}

// Who is tallest
{
  function getTallest(heights) {
    console.log("All heights inside function", heights);

    //    Approach One
    // let tallest = heights[0]
    // for(let i = 0; i < heights.length; i++){
    //     const index = i;
    //     let element = heights[index]
    //     if(element > tallest){
    //         tallest = element;
    //     }
    // }

    // Approach Two
    const tallest = Math.max(...heights); // spread all elements using spread operator
    return tallest;
  }
  const heights = [167, 190, 120, 165, 137];
  const tallest = getTallest(heights);
  console.log(tallest);
}

// Who is shortest
{
  function getShortest(heights) {
    console.log("All heights inside function", heights);

    //    Approach One
    let shortest = heights[0];
    for (let i = 0; i < heights.length; i++) {
      const index = i;
      let element = heights[index];
      if (element < shortest) {
        shortest = element;
      }
    }

    // Approach Two
    // const shortest = Math.min(...heights) // spread all elements using spread operator
    return shortest;
  }
  const heights = [167, 190, 120, 165, 137];
  const shortest = getShortest(heights);
  console.log(shortest);
}

// Reverse String
{
  // Approach One
  function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
      const element = text[i];
      // reversed = reversed + element;
      reversed += element; // shorthand
    }
    return reversed;
  }
  const str = "We are all coder";
  const reversed = reverseString(str);
  console.log(reversed);

  // Approach Two
  {
    function reverseString(text) {
      const reversed = text.split("").reverse().join("");
      return reversed;
    }
    const str = "We are all coder";
    const reversed = reverseString(str);
    console.log(reversed);
  }

  // Word Reverse
  {
    function reverseWords(text) {
      // Approach One
      const words = text.split(" ");
      let result = [];
      console.log(words);
      for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
      }
      const reversed = result.join(" ");
      return reversed;

      // Approach Two
      // const reversed = text.split(' ').reverse('').join(' ')
      // return reversed;
    }
    const str = "We are all coder";
    const reversed = reverseWords(str);
    console.log(reversed);
  }
}

// Fibonacci
{
  // প্রথম দুইটা আইটেম এর যোগফল হলো ৩য় আইটেম। ২য় ও ৩য় আইটেম এর যোগফল হলো ৪র্থ আইটেম এভাবে চলতেই থাকবে।

  // প্রথম দুইটা ভ্যালু ডিফল্ট হিসেবে রাখতে হবে।
  let fibo = [0, 1];
  // তাই ইনিশায়াল ইনডেক্স হবে ২।
  for (let i = 2; i <= 12; i++) {
    // fibo[i-1] মানে ১ নং ইনডেক্স আর fibo[i-2] মানে ২নং ইনডেক্স যোগ হয়ে ৩নং ইনডেক্সের ভ্যালু আসবে।
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  console.log(fibo);
}

/* 
প্রাকটিস প্রব্লেম- ৫ খানা 

১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
 */
{
  function smallestNumber(numbers) {
    // Approach One
    // const asecSorted = numbers.sort(function(a,b){return a - b; })
    // const smallest = asecSorted[0];
    // return smallest;

    // Approach Two
    // const smallest = Math.min(...numbers);
    // return smallest;

    // Approach Three
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i];
      if (element < smallest) {
        smallest = element;
      }
    }
    return smallest;
    console.log(smallest);
  }
  const numbersArray = [87, 11, 124, 22, 201, 115, 150];
  const smallest = smallestNumber(numbersArray);
  console.log(smallest);
}

/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */
{
  function smallestNumber(num1, num2, num3) {
    // Approach One
    // const smallest = Math.min(num1, num2, num3);
    // return smallest;

    // Approach Two
    // const numbers = [num1, num2, num3]
    // const asecSorted = numbers.sort(function(a,b){return a -b})
    // const smallest = asecSorted[0]
    // return smallest;

    // Approach Three
    let smallest = 0;
    if (num1 < num2 && num1 < num3) {
      smallest += num1;
      return smallest;
    } else if (num2 < num1 && num2 < num3) {
      smallest += num2;
      return smallest;
    } else {
      smallest += num3;
      return smallest;
    }
  }
  const number1 = 45;
  const number2 = 16;
  const number3 = 18;
  const smallest = smallestNumber(number1, number2, number3);
  console.log(smallest);
}

/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */
{
  {
    // Approach One
    function getTotal(numbers) {
      let total = 0;
      for(let i = 0; i < numbers.length; i++){
        let number = numbers[i]
        total += number;
      }
      const result = {total:total, items:numbers.length}
      return result;
    }
    const numbersArray = [84, 87, 63, 93, 49, 73];
    const total = getTotal(numbersArray)
    console.log(total); 
    
    function getAverage(number){
      const total = number.total; 
      const items= number.items;
      const avg = parseFloat(total / items).toFixed(2)
      return avg;
    }    
    const average = getAverage(total);
    console.log(average);
  }

  {
    // Approach Two
    function getAverage(numbers) {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        total += number;
      }
      const avg = parseFloat(total / numbers.length).toFixed(2);
      return avg;
    }
    const numbersArray = [84, 87, 63, 93, 49, 73];
    const average = getAverage(numbersArray);
    console.log(average);
  }
}

/* 
৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

Area of a Rectangle = width * length;
Perimeter of a Rectangle = 2(width + length)

*/
{
  // Area of a Rectangle = width * length;
  function rectArea(width, length){
    const area = width * length;
    return area;
  }
  const width = 10;
  const length = 15;
  const rectangleArea = rectArea(width, length) 
  console.log(rectangleArea);

  // Perimeter of a Rectangle = 2(width + length)
  function rectPerimeter(width, length){
    const perimeter = 2 * (width + length);
    return perimeter;
  }
  const rectanglePerimeter = rectPerimeter(width, length)
  console.log(rectanglePerimeter);
}

/* ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  

Input: arr[] = {12, 35, 1, 10, 34, 1}

Output: The second largest element is 34.

Simple Approch you can use in this case is to sort the array first using sorting algorithm and then print the last second element. But this is not efficient approach

Initialize two variables first and second to INT_MIN as
first = second = INT_MIN
Start traversing the array,
a) If the current element in array say arr[i] is greater
than first. Then update first and second as,
second = first
first = arr[i]
b) If the current element is in between first and second,
then update second to store the value of current variable as
second = arr[i]
Return the value stored in second.

*/
{
  {
    function secondLargest(numbers){
      // Approach One
      const descSorted = numbers.sort(function(a, b){return b - a;})
      const secondLargestNum = descSorted[1];
      return secondLargestNum;
       
    }
    const numbersArray = [65, 78, 87, 69, 76, 78, 89, 99, 125, 120];
    const secondLargestNumber = secondLargest(numbersArray);
    console.log(secondLargestNumber);
  }
  {
    function secondLargest(numbers){
      let firstLargestNumber = -1; 
      let secondLargestNumber = -1;
      for(let i = 0; i < numbers.length; i++){
        let number = numbers[i]
        /* যদি (number) ভ্যালু firstLargestNumber এর চেয়ে বড় হয়, তাহলে প্রথম ও দ্বিতীয় এর মান আপডেট করে দাও। 
        যে ভ্যালুটি সবচেয়ে বড়, তাকে first এর মধ্যে রাখা হয়েছে
        এবং বড়টির চেয়ে ছোট সংখ্যাটিকে second এর মধ্যে রাখা হয়েছে */
        if(number > firstLargestNumber){
          secondLargestNumber = firstLargestNumber;
          firstLargestNumber = number;  
        }
        /* যদি ভ্যালুটি second এর চেয়ে বড় হয় এবং first এর সমান না হয়
        তাহলে ভ্যালুটি second এর মধ্যে রাখা হবে
        এ শর্তটি দেয়া হয়েছে যেন first এর একই সংখ্যা একাধিক হলে পরের ছোট সংখ্যাটি second হিসেবে গণ্য হবে। */
        else if(number > secondLargestNumber && firstLargestNumber != number){
          secondLargestNumber = number
        }
      }
  
      console.log(secondLargestNumber);
      return secondLargestNumber;
    }
    const numbersArray = [65, 78, 87, 69, 76, 78, 89, 99, 125, 120];
    const secondLargestNumber = secondLargest(numbersArray);
    console.log(secondLargestNumber);
  }

}





