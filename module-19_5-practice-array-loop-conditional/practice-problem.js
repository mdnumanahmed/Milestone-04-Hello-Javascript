/* ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।  */

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

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

var range = 1;
while(range <= 39){
    console.log( range + " " + 'আজকে আমার মন ভালো নেই');
    range++
}

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
for(var i = 58; i<=98; i++){
    console.log(i);
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 
for(var i = 412; i<=456; i+=2){
    console.log(i);
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
for(var i = 581; i<=623; i+=2){
    console.log(i);
}


/* ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।  */
var topics = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript']
for(var i = 0; i < topics.length; i++){
    var topic = topics[i];
    console.log(topic);
}

/* ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও  */

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

/* ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও  */

for(var i = 30; i <= 86; i++){
    console.log(i);
    if(i === 44){
        break;
    }
}

/* ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */

var bookPrices = [100, 30, 50, 80, 200, 240, 44, 120, 140, 248, 300, 201]
for(var i = 0; i < bookPrices.length; i++){
    var price = bookPrices[i]
    if(price > 200){
        continue;
    }
    console.log(price);
}

/* Problem Solving Conceptual Session

/* 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে 

২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 

৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো 

৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 

8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো  */





