// function declaration 
function goToMadrasha(){
    console.log('Take your meal');
    console.log('Take your bag');
    console.log('Go to madrasha');
}

// function invocation / call
goToMadrasha()

// function declaration 
function bringBlanket(money){
    console.log('Take your meal');
    console.log('Take your bag');
    console.log('Go to madrasha');
}

// function invocation / call
var taka = 2000;
bringBlanket(taka) // pass argument with variable
bringBlanket(1000) // pass argument with value

function sum(a, b){
    var add = a + b
    console.log(add);
    return add;
}
var total = sum(3, 5)
console.log(total);

function bringApple(taka){
    var applePrice = 10;
    var quantity = taka / applePrice;
    return quantity;
}
var myMoney = 200;
var apples = bringApple(myMoney)
console.log(apples);

{
    function getAvg(assignment1, assignment2, assignment3){
        var sum = assignment1 + assignment2 + assignment3
        var avg = sum / 3;
        return avg;
    }
    var mark1 = 80;
    var mark2 = 78;
    var mark3 = 82;
    var myAvg = getAvg(mark1, mark2, mark3)
    console.log(myAvg);
}
