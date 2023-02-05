// Inch to Feet
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const mamaInches = 87;
const mamaFeet = inchToFeet(mamaInches)
console.log('Mama height', mamaFeet, 'Feet');

// Mile to Kilometer 
function mileToKilo(miles){
    const kilo = miles * 1.609344;
    return kilo;
}
const givenMile = 5;
const kilometer = mileToKilo(givenMile)
console.log(givenMile, 'Miles = ', kilometer, 'Kilometers');


// Even or Odd
{
    function isEven(number){
        const reminder = number % 2;
        console.log(reminder);
        if(reminder === 0){
            return true;
        }else{
            return false;
        }
    }

    const myNumber = isEven(30)
    console.log(myNumber);
    const herNumber = isEven(33)
    console.log(herNumber);
}

// Leap Year
{
    function isLeapYear(year){
        const leapYear = (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
        if(leapYear){
            return (year, 'Year is a Leap Year');
        }else{
            return (year, 'Year is not a Leap Year');
        }
    }
    const myYear = isLeapYear(1984)
    console.log(myYear);
    const herYear = isLeapYear(1985)
    console.log(herYear);
}

// Sum of Array 
{
    function sumOfArray(numbers){
        let sum = 0;
        for(let i = 0; i < numbers.length; i++){
            sum+= numbers[i]
        }
        return sum;
    }

    function oddNumbersFromArray(numbers){
        let oddNumbers = []
        for(let i = 0; i < numbers.length; i++){
            let index = i;
            let element = numbers[index]
            if(element % 2 === 1){
                oddNumbers.push(element)
            }
        }
        return oddNumbers;
    }
    const myNumber = [12, 34, 56, 7, 8, 9, 11, 33, 22]
    const oddNumbers = oddNumbersFromArray(myNumber)
    console.log(oddNumbers);
    const result = sumOfArray(oddNumbers)
    console.log(result);

}
// Alternative way
// Sum of Odd Number from Array 
{
    function sumOfOddFromArray(numbers){
        let sum = 0;
        for(let i = 0; i < numbers.length; i++){
            let element = numbers[i]
            if(element % 2 !== 0){
                sum+= element;
            }
        }
        return sum;
    }
    const myNumber = [12, 34, 56, 7, 8, 11, 13, 9]
    const result = sumOfOddFromArray(myNumber)
    console.log(result);
}

// Factorial
function factorial(number){
    let result = 1
    for(let i = number; i >= 1; i--){
        result *= i;
    }
    return result;
}
const threeFact = factorial(7)
console.log(threeFact);

{
    for(let i = 5; i < 10; i = i+2){
        console.log(i);
    }
}