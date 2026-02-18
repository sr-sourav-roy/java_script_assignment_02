function electionResult(votes) {
    let mangoCount = 0;
    let bananaCount = 0;
    
    for (let i = 0; i < votes.length; i += 1) {
        if (votes[i] === "mango") {
            mangoCount += 1;
        }
        else if (votes[i] === "banana") {
            bananaCount;
        }
    }
    if (mangoCount > bananaCount) {
        return "Mango"
    }
    else if (bananaCount > mangoCount) {
        return "Banana"
    }
    else {
        return "Draw"
    }
}
console.log(electionResult(["Banana", "banana", "apple", "mango"]))