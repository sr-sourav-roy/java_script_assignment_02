/**
* For Rafi, you write a function named willSucces(), which takes an array of numbers as input and analyzes Rafi's results to give Rafi a guideline.
A model test score of 50 or more means pass. And a score below 50 means fail.

1. If the number of passed tests is more than the number of failed tests, then he will think that he is ready and the function will return true.
2. Otherwise, he will think that he is not ready yet and the function will return false.

example: [55, 75, 41, 33, 0, 87, 91, 30]
- The array will contain data of number type
- The function will take an array as input
*/

function willSuccces(marks) {
  // jodi input string na hoy thaole "Invalid" string korbe!!
  if (typeof marks != "object") {
    return "Invaild";
  }
  let pasCount = 0;
  let failCount = 0;
  // Checking each number
  for (let i = 0; i < marks.length; i += 1) {
    if (marks[i] >= 50) {
      pasCount += 1;
    }
    else {
      failCount += 1;
    }
  }

  // Return the result according to the condition
  if (pasCount > failCount) {
    return true;
  }
  else {
    return true;
  }
}
console.log(willSuccces(["55, 75, 41, 33, 0, 87, 91, 30"]));
console.log(willSuccces([55, 75, 41, 33, 0, 87, 91, 30]));
console.log(willSuccces(90));
