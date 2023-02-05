
// break statement if for loop
var numbers = [45, 67, 89, 35, 178, 44, 33, 99]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        break;
    }
    console.log(number);
}

var fruits = ['Mango', 'Apple', 'Jackfruit', 'Banana', 'Watermelon'];
for(var i = 0; i < fruits.length; i++){
    var fruit = fruits[i];
    if(fruit == 'Banana'){
        break;
    }
    console.log(fruit);
}

// continue statement if for loop
var numbers = [45, 67, 89, 35, 178, 44, 33, 99]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}

var fruits = ['Mango', 'Apple', 'Jackfruit', 'Banana', 'Watermelon'];
for(var i = 0; i < fruits.length; i++){
    var fruit = fruits[i];
    if(fruit == 'Jackfruit'){
        continue;
    }
    console.log(fruit);
}