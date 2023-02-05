const numbers = [12, 4, 6, 7, 45, 36, 75, 38];
// to check type of array.  is array or not  Array.isArray(arrayName)
console.log(Array.isArray(numbers));

// to search value is exists in array: arrayName.includes(value)
console.log(numbers.includes(45));

// to search value is exists in array: arrayName.indexOf(value)
// -1 বলতে ভ্যালুটি এরের মধ্যে নেই। ভ্যালু থাকলে এর ইনডেক্স ০ বা তারচেয়ে বড় হবে।
// !== -1 বলতে ভ্যালুটি এরের মধ্যে বিদ্যমান আছে।
if (numbers.indexOf(1) !== -1) {
  console.log("Value is exists in the array");
} else {
  console.log("Value not found");
}

// concat: merge two array together
const newNumbers = [43, 56, 33, 22, 11];
const allNumbers = newNumbers.concat(numbers);
console.log(allNumbers);

// slice(start, end) দুটি প্যারামিটার নেয়, শুরু এবং শেষ ইনডেক্স নম্বর।
// slice এর ধর্ম হচ্ছে, যে ইনডেক্সগুলো দেয়া হবে তার আগে কাটা পড়বে।
// যেমন- আমরা যদি ২ এবং ৫ দেই, তাহলে ২ এর আগে এবং ৫ এর আগে কাটা পড়বে। মানে আমরা ইনডেক্স ২,৩,৪ এর ভ্যালুগুলো পাব।
// slice অরিজিনিাল ্এ্যারেকে কোন পরিবর্তন করে না।
const age = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = age.slice(2, 5);
console.log(sliced);
console.log(age);

// splice(start, deletedCount, newItems) তিনটি প্যারামিটার নেয়। ১ম টি কোন ইনডেক্স থেকে শুরু করবে আর ২য় টি মানে কয়টি ভ্যালু ডিলেট করবে। আর পরের প্যারামিটারে নতুন ডাটা যোগ করা যায়। এটি মেইন এরেতে পরিবর্তন আনে।
// slice() দ্বারা এ্যারে থেকে কোন অংশ কাটা যায়। কিন্তু মেইন এ্যারেতে কোন পরিবর্তন আনে না।
// splice() দ্বারা এ্যারে থেকে কোন অংশ রিমুভ করা যায়। এবং মেইন এ্যারেতে পরিবর্তন আনে। এবং নতুন ডাটা যোগ করা যায়।

/* The zero-based location in the array from which to start removing elements. 
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
// const spliced = age.splice(2, 3)

// Remove Duplicates from array
{
  const names = [
    "rahim",
    "karim",
    "sofik",
    "rahim",
    "jasim",
    "karim",
    "sadik",
    "sofik",
    "odud",
  ];

  function removeDuplicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      // যদি unique এ্যারের মধ্যে name টি না থাকে, তাহলে unique.push(name)
      if (unique.includes(name) === false) {
        unique.push(name);
      }
    }
    return unique;
  }
  const uniqueName = removeDuplicate(names);
  console.log(uniqueName);
}

// Divisible by 3 and 5
/* 
1. Display output: 1-50
2. If the number is divisible by 3 then instead of the number, show 'foo'
2. If the number is divisible by 5 then instead of the number, show 'bar'
2. If the number is divisible by both 3 and 5 then instead of the number, show 'foobar'
*/
{
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("foobar");
    } else if (i % 3 === 0) {
      console.log("foo");
    } else if (i % 5 === 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
}

// Daily Expense
{
  function expenseTracker(chalQuantity, dalQuantity, telQuantity) {
    const perKgChalPrice = 50;
    const perKgDalPrice = 90;
    const perLtTelPrice = 180;

    const chalPrice = perKgChalPrice * chalQuantity;
    const dalPrice = perKgDalPrice * dalQuantity;
    const telPrice = perLtTelPrice * telQuantity;

    const totalExpense = chalPrice + dalPrice + telPrice;
    return totalExpense;
  }
  const totalExpense = expenseTracker(5, 3, 2);
  console.log(totalExpense);
}

// cheapest phone
{
  const phones = [
    {
      name: "Samsung",
      camera: 12,
      storage: "64gb",
      price: 50000,
      color: "blue",
    },
    {
      name: "Iphone",
      camera: 52,
      storage: "124gb",
      price: 150000,
      color: "silver",
    },
    {
      name: "Walton",
      camera: 10,
      storage: "32gb",
      price: 20000,
      color: "blue",
    },
    {
      name: "Xaomi",
      camera: 32,
      storage: "64gb",
      price: 30000,
      color: "black",
    },
    { name: "HTC", camera: 22, storage: "64gb", price: 40000, color: "blue" },
    {
      name: "Nokia",
      camera: 26,
      storage: "64gb",
      price: 60000,
      color: "purple",
    },
    { name: "Sony", camera: 45, storage: "64gb", price: 35000, color: "blue" },
    {
      name: "Motorola",
      camera: 12,
      storage: "64gb",
      price: 44000,
      color: "blue",
    },
  ];

  {
    // Cheapest Phone
    function cheapestPhone(phones) {
      let cheapest = phones[0];
      for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
          cheapest = phone;
        }
      }
      return cheapest;
    }
    const myChoise = cheapestPhone(phones);
    console.log(myChoise);
  }

  {
    // Highest Camera
    function highestCamera(phones) {
      let highest = phones[0];
      for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
          highest = phone;
        }
      }
      return highest;
    }
    const myChoise = highestCamera(phones);
    console.log(myChoise);
  }
}

// Shopping Cart Calculation
{
  {
    // simple calculation
    const shoppingCart = [
      { name: "Panjabi", price: 1500 },
      { name: "Payjama", price: 500 },
      { name: "Shoes", price: 2500 },
      { name: "Cap", price: 200 },
    ];

    function simpleCost(products) {
      let sum = 0;
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
      }
      return sum;
    }
    const totalCost = simpleCost(shoppingCart);
    console.log(totalCost);
  }

  {
    // shopping cart calculation with quantity
    const shoppingCart = [
      { name: "Panjabi", price: 1500, quantity: 2 },
      { name: "Payjama", price: 500, quantity: 5 },
      { name: "Shoes", price: 2500, quantity: 3 },
      { name: "Cap", price: 200, quantity: 4 },
    ];

    function simpleCost(products) {
      let sum = 0;
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productPrice = product.price * product.quantity;
        sum = sum + productPrice;
      }
      return sum;
    }
    const totalCost = simpleCost(shoppingCart);
    console.log(totalCost);
  }
}

{
  // Multi-layer discount price calculation
  /* 
        if ticket less than or equal to 100
        ticket price ----> 100 tk
        it ticket more than 100 and less than or equal to 200
        first 100 ticket price ---> 100 tk
        rest ticket price  ---> 80 tk
        if ticket more than 200
        first 100 ticket price ---> 100 tk
        second 100 ticket price ---> 80 tk
        rest ticket price ---> 60 tk
    */
  function ticketPrice(ticketQuantity) {
    const first100Price = 100;
    const second100Price = 80;
    const restTicketPrice = 60;

    if (ticketQuantity <= 100) {
      const price = ticketQuantity * first100Price;
      return price;
    } else if (ticketQuantity <= 200) {
      const first100Ticket = 100 * first100Price;
      const restTicketQuantity = ticketQuantity - 100;
      const restTicket = restTicketQuantity * second100Price;
      const totalPrice = first100Ticket + restTicket;
      return totalPrice;
    } else {
      const first100Ticket = 100 * first100Price;
      const second100Ticket = 100 * second100Price;
      const restTicketQuantity = ticketQuantity - 200;
      const restTicket = restTicketQuantity * restTicketPrice;
      const totalPrice = first100Ticket + second100Ticket + restTicket;
      return totalPrice;
    }
  }
  const ticketCost = ticketPrice(201);
  console.log(ticketCost);
}

{
  function input(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
      return "Must be enter parameter";
    }
    if (!a || !b) {
      return "Must be input your parameter";
    }
    if (typeof a !== "number" || typeof b !== "number") {
      return "Parameter must be a number";
    }
    console.log(a, b);
    return a + b;
  }
  const result = input();
  console.log(result);
}

/* ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  */
{
  // Triangle area
  function triangleArea(side1, side2, side3) {
    const area = (side1 + side2 + side3) / 2;
    return area;
  }
  const side1 = 10;
  const side2 = 5;
  const side3 = 4;
  const area = triangleArea(side1, side2, side3);
  console.log(area);
}

/* ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

*/
{
  // Prime Number
  function isPrime(number) {}
}

{
  let x = [78, 458, 88, 85, 54, 9, 96, 2, 36, 54, 55, 5, 66, 5, 54, 56, 56];
  function removeDuplicate(x) {
    let uniqueValue = [];
    for (let i = 0; i < x.length; i++) {
      let singlePic = x[i];
      let checkValue = uniqueValue.includes(singlePic);
      if (checkValue === false) {
        uniqueValue.push(singlePic);
      }
    }
    return uniqueValue;
  }
  let y = removeDuplicate(x);
  console.log(y);
  // removeDuplicate();
}
