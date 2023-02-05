/* ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। */

function checkLeapYear(year){
    let leapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
    if(leapYear){
        return true
    }
    return false
}
let year = 2023
const isLeapYear = checkLeapYear(year)
console.log(isLeapYear);

/* ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */
{
    function isEven(number){
        if(number % 2 === 0){
            return true
        }
        return false
    }
    const age = 38;
    const myAge = isEven(age)
    console.log(myAge);
}

/* ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
*/
{
    function hourToMinutes(hour){
        return hour * 60;
    }
    const hours = 9
    const result = hourToMinutes(hours)
    console.log(result);
}

/* 
Practice Problem Two

Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

{
    function findLeapYear(years){
        let leapYearArray = [];
        for(let i = 0; i < years.length; i++){
            let year = years[i]
            const leapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
            if(leapYear){
                leapYearArray.push(year)
            }
        }
        return leapYearArray;
    }
    const yearsArray = [2023, 2024, 2025, 2028, 2030]
    const leapYear = findLeapYear(yearsArray)
    console.log(leapYear);
}

