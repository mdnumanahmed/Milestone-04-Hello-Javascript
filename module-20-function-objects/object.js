const person = {
    name: 'Amir Khan',
    age: 45,
    height: '65 inc',
    weight: '60kg'
}
const laptop = {
    brand : "Dell",
    color: "Silver",
    display: "15 inc",
    processor: "i5"
}
var laptopBrand = 'brand';

console.log(laptop.brand); // get by dot notation
console.log(laptop['color']); // get by array notation with string
console.log(laptop[laptopBrand]); // get by array notation with variable

{
    var shoppingCart = {
        books: 3,
        pen: 5,
        glass: 10,
        mug: 20,
        box:30
    }

    // Hard system looping in object
    var keys = Object.keys(shoppingCart)
    for(var i = 0; i < keys.length; i++){
        var property = keys[i]
        var value = shoppingCart[property]
        console.log(property, value);
    }

    // Easy way using for in loop
    for(var property in shoppingCart){
        var value = shoppingCart[property]
        console.log(property, ":" , value);
    }
}


