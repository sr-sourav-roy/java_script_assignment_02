/**
 * For a matrimony website, you need to write a function. So that they can easily analyze the biodata of two people and understand whether marriage is possible or not. Marriage between two people must be determined based on some conditions.
- The two people must be of different genders
- The age difference between the two people cannot be more than 7 years (7 explore Math.abs)
*-->Your function will return true only if these conditions are met.

*--> Input:
The function will accept two inputs.
-1st input: An object
-2nd input: An object

*--> Each object will have 3 properties:
- name: string (person's name)
- gender: string (male/female)
- age: number (person's age)
 */

// let person = [45, 45,]
let personA = { name: "sourav", gender: "male", age: 24 };
let personB = { name: "souravi", gender: "Female", age: 17 }

let personE = { name: "Rafi", gender: "male", age: 35 };
let personF = { name: "Rina", gender: "female", age: 20 };

let personC = { name: "Hasan", gender: "male", age: 30 };
let personD = { name: "Jamal", gender: "male", age: 26 };


function validProposal(person1, person2) {
  //Check if input is an object
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "INVALID";
  }
  //  Condition 1: Must be of different gender
  if (person1.gender === person2.gender) {
    return false;
  }

  // Condition 2: Age difference cannot be more than 7 years
  let difference = Math.abs(person1 - person2);
  if (difference > 7) {
    return false;
  }
  // সব শর্ত পূরণ হলে true রিটার্ন করবে
  else {
    return true;
  }
}
console.log(validProposal(personA, personB))
console.log(validProposal(personE, personF))
console.log(validProposal(personC, personD))
console.log(validProposal(personC, "personD"))




