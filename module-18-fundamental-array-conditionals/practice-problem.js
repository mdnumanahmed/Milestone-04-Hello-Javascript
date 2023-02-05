// Problem One
var fruits = ["Apple", "Banana", "Orange"];
var indexBanana = fruits.indexOf("Banana")  // find out index of Banana
console.log(indexBanana);
fruits[1] = "Mango"; // Replaced Banana with Mango
console.log(fruits);

var removedOrange = fruits.pop(); // removed Orange
console.log(fruits);
var addWatermelon = fruits.push("Watermelon");  // added Watermelon
console.log(fruits);


// Problem Two 
var you = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

var mark = 89;

if(mark >= 80){
    console.log('Your score is A');
}else if(mark >=60){
    console.log('Your score is B');
}else if(mark >= 50){
    console.log('Your score is C');
}else if(mark >=40){
    console.log('Your score is D');
}else if(mark <= 39){
    console.log('Your score is F');
}

// Problem Three
var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log('num1 is greater');
    }else{
        console.log('num3 is greater');
    }
}else{
    if(num2 > num3){
        console.log('num2 is greater');
    }else{
        console.log('num3 is greater');
    }
}


var bahu1 = 8;
var bahu2 = 8;
var bahu3 = 8;

// Method One
if((bahu1 == bahu2) || (bahu1 == bahu3) || (bahu2 == bahu3)){
    console.log('Triangle is Isosceles');
}else{
    console.log('Triangle is not Isosceles');
}

// Method Two
if((bahu1 == bahu2) && (bahu1 == bahu3)){
    console.log('Triangle is not Isosceles, Somobahu');
}else{
    if(bahu1 == bahu2){
        console.log('bahu1 and bahu2 are equal, Triangle is Isosceles');
    }else if(bahu1 == bahu3){
        console.log('bahu1 and bahu3 are equal, Triangle is Isosceles');
    }else{
        console.log('bahu2 and bahu3 are equal, Triangle is Isosceles');
    }
}

// Method Three 
if(bahu1 != bahu2){
    if(bahu1 == bahu3){
        console.log('bahu1 and bahu3 is equal, Triangle is Isosceles');
    }else{
        console.log('Triangle is not Isosceles');
    }
}else {
    if (bahu2 == bahu3){
        console.log('bahu1, bahu2 and bahu3 are equal, Triangle is not Isosceles');
    }else{
        console.log('bahu1 and bahu2 is equal, Triangle is Isosceles');
    }
}

