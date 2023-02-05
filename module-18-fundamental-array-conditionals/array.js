var studentsAge = [33, 22, 44, 55, 66, 77, 7];
// To know array length use length property
console.log(studentsAge.length); 
// Element position name is index. it start from 0;

// 1. get element value by index
var element = studentsAge[1]; // output: 22
console.log(element);
// 2. set element value by index
studentsAge[2] = 15; //set value in 2nd indexed element and changed 44 to 15

// 3. find index of an element
var positionIndex = studentsAge.indexOf(55) // index of 55 is 3
var positionIndex = studentsAge.indexOf(5555) // if value out of array, it result is -1
console.log(positionIndex);

// push()  pop()  unshift()  shift()
var friends = ['kalam', 'balam', 'salam'];
friends.push('jalam') // push() method add new item to the end of an array.
console.log(friends);
friends.pop('jalam') // pop() method remove last item of an array.
friends.unshift('Alam'); //Inserts new elements at the start of an array, and returns the new length of the array.
friends.shift('Alam'); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

