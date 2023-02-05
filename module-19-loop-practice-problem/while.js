/* 
Four parts of while loop
1. Loop variable
2. Condition inside while loop
3. loop body
4. Change loop variable value 
*/
var goMadrasha = 0; // Loop variable
while (goMadrasha < 6) {
  console.log("I will go to madrasha");
  // goMadrasha = goMadrasha + 1;
  // goMadrasha += 1;
  // console.log(goMadrasha);
  goMadrasha++;
}

// Target: Display 1 to 10

var number = 1; //loop variable
while (number <= 10) {
  //condition
  console.log(number); //loop body
  number++; //change loop variable value
}

// Target: Display 1 to 20 all even numbers
{
  let number = 0;
  while (number <= 20) {
    console.log(number);
    number = number + 2;
  }
}

// Target: Display 1 to 20 all odd numbers
{
  let number = 1;
  while (number <= 20) {
    console.log(number);
    number = number + 2;
  }
}

// Reverse way in for and while loop
{
  let number = 20;
  while (number >= 1) {
    console.log(number);
    number--;
  }

  for (var i = 20; i >= 1; i--) {
    console.log(i);
  }
}

{
  var i = 0;
  for (i = 0; i < 5; i++) {}
  console.log(" var ", i);
}

{
  var marks = [13, 15, 14, 20, 18];
  for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
      continue;
    }
    console.log(" Marks ", marks[i]);
  }
}

{
  var name = "false";
  console.log(typeof name);
}
{
    var i = 5;
    for (i < 5; i++;) {
     console.log(i);
    }
}
