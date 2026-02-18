let person1 = { name: "sourav", roll: 1, bestFriend: 2 };
let person2 = { name: "rintu", roll: 2, bestFriend: 1 };

let person5 = { name: "angkon", roll: 21, bestFriend: 2 };
let person6 = "I'm sourav okkkkkkkkkkkkkkyyyy"

let person9 = { name: "angkon", roll: 21, bestFriend: 2 };
let person10 = { name: "niloy", roll: 2, bestFriend: 1 };

function isBestFriend(personA, personB) {
    //Check if input is an object
    if (typeof personA !== "object" || typeof personB !== "object") {
        return "INVALID NUMBER..!"
    }
    // Not qual condition false
    if (personA.roll !== personB.roll) {
        return false;
    }
    // Not qual condition false
    else if (personA.bestFriend !== personB.bestFriend) {
        return false;
    }
        // condition all false hoile tobei true return kobe!!!
    else {
        return true;
    }
}
console.log(isBestFriend(person2, person2))
console.log(isBestFriend(person5, person6))
console.log(isBestFriend(person9, person10))