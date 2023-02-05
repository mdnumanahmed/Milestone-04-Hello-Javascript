/* বেসিক কনসেপ্ট চেকলিস্ট/সেলফ এসেসমেন্ট: 

১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।  */
let name = 'Arham';
let age = 7;
let isHappy = true;

/* ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।  */
let mySon = 'Arham';
mySon = 'Saqif Arham';
console.log(mySon);
const partner = 'SB'

/* ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */
{
    const num1 = 20;
    const num2 = 5;
    const sum = num1 + num2;
    const sub = num1 - num2;
    const times = num1 * num2;
    const div = num1 / num2;
    const mod = num1 % num2;
    console.log(sum, sub, times, div, mod);
}

/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */
{
    // const num1 = 20;
    // const num2 = 10;
    // if(num1 < num2 || num1 > num2 || num1 === num2 || num1 !== num2){
    //     console.log('yes');
    // }else if(num1 <= num2 || num1 >= num2 ||){
    //     console.log('no');
    // }
}

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।  */
{
    const num1 = 20;
    const num2 = 10;
    if(num1 > num2 && num1 % num2 === 0){
        console.log('Condition setisfied');
    }else if(num1 !== num2 || num1 / num2 === 2){
        console.log('else if condition matched');
    }
}

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */
{
    const num1 = 20;
    const num2 = 10;
    if(num1 > num2 && num1 % num2 === 0){
        console.log('Condition setisfied');
    }else if(num1 !== num2 || num1 / num2 === 2){
        console.log('else if condition matched');
    }
}

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */
{
    let loopVariable = 7;
    while(loopVariable <= 19){
        if(loopVariable % 2 !== 0){
            console.log(loopVariable);
        }
        loopVariable++
    }
}

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */
{
    let numbers = [45, 85, 66, 95, 76, 84, 98];
    const length = numbers.length;
    const fourth = numbers[4] = 34;
    console.log(length);
    const updatedNum = numbers.splice(4, 1, 100, 120)
    console.log(updatedNum);
    console.log(numbers);
}

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */
{
    const numbers = [45, 85, 66, 95, 76, 84, 98];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        console.log(element);
    }
    // Reversed Way
    for(let i = numbers.length - 1; i >= 0; i--){
        const element = numbers[i]
        console.log(element);
    }

    for(const element of numbers){
        console.log(element);
    }
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো  */
{
    const numbers = [45, 85, 66, 95, 76, 84, 98];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element > 80){
            console.log(element);
        }
    }

    for(const element of numbers){
        if(element > 80){
            console.log(element);
        }
    }
}

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */
{
    function multiply3Numbers(a, b, c){
        console.log(a, b, c);
        if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
            return 'Please enter only positive number'
        }
        // else if(a == 'undefined' ||  b == 'undefined' || c == 'undefined'){
        //     return 'Please must be input a number'
        // }
        return a * b * c
    }
    const output = multiply3Numbers(3, 4, 5)
    console.log(output);
}

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */
{
    const laptop = {
        brand: 'Dell',
        color: 'Silver',
        price: 50000
    }
    let color = 'color'
    laptop.color = 'Black';
    laptop['color'] = 'Blue';
    laptop[color] = 'Golden';
    for(const prop in laptop){
        console.log(prop, ": ", laptop[prop]);
    }
    console.log(laptop);
}

/* প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */
{
    function feetToInch(feet){
        const inches = feet * 12;
        return inches;
    }
    const feet = feetToInch(10)
    console.log(feet);
}

/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */
{
    function milileterToLeter(centimeter){
        const meter = centimeter / 100;
        return meter;
    }
    const meter = milileterToLeter(225)
    console.log(meter);
}

/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */
{
    function paperRequirements(firstBookQnty, secondBookQnty, thirdBookQnty){
        if(firstBookQnty < 0 || secondBookQnty < 0 || thirdBookQnty < 0){
            return 'Please provide positive number'
        }
        else if(
            typeof firstBookQnty !== 'number' ||
            typeof secondBookQnty !== 'number' ||
            typeof thirdBookQnty !== 'number' 
         ){
            return 'Please provide only valid number'
         }
        const firstBookPage = 100;
        const secondBookPage = 200;
        const thirdBookPage = 300;

        const firstBookPaper = firstBookQnty * firstBookPage;
        const secondBookPaper = secondBookQnty * secondBookPage;
        const thirdBookPaper = thirdBookQnty * thirdBookPage;

        const totalPaper = firstBookPaper + secondBookPaper + thirdBookPaper;
        return totalPaper;
    }
    const totalPaper = paperRequirements(1, 1, 1)
    console.log(totalPaper);
}

/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */
{
    function bestFriend(friends){
        let largestName = '';
        for(let i = 0; i < friends.length; i++){
            const friend = friends[i]
            if(friend.length > largestName.length ){
                largestName = friend;
            }
        }
        return largestName;
    }
    const friends = ['Abid', 'Hamidur', 'Rakibul', 'Faruque', 'Abdul Munayem'];
    const myFreind = bestFriend(friends)
    console.log(myFreind);
}

/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
{
    const numbers = [45, 33, 66, 67, 87, 94, -88, 100, 300]
    function getPositive(numbers){
        let positiveNumbers = [];
        for(const number of numbers){
            if(number >= 0){
                positiveNumbers.push(number)
            }else{
                break;
            }
        }
        return positiveNumbers;
    }
    const positive = getPositive(numbers)
    console.log(positive);
}






