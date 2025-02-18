function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

 
    let mangoCount = 0;
    let bananaCount = 0;


    for (let i = 0; i < votes.length; i++) {
        let vote = votes[i];

   
        if (typeof vote === "string") {
            vote = vote.toLowerCase(); 

            if (vote === "mango") {
                mangoCount++;
            } else if (vote === "banana") {
                bananaCount++;
            }
        }
    }

   
    if (mangoCount > bananaCount) {
        return "Mango";
    } else if (bananaCount > mangoCount) {
        return "Banana";
    } else {
        return "Draw";
    }
}


console.log(electionResult(["mango", "banana", "mango", "banana", "mango"])); // "Mango"
console.log(electionResult([])); // "Draw"
console.log(electionResult(["mango", "banana", "joker party", "no"])); // "Draw"
console.log(electionResult(["mango"])); // "Mango"
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"])); // "Banana"
console.log(electionResult({result: "mango, banana, mango"})); // "Invalid"
console.log(electionResult("mango , banana")); // "Invalid"
console.log(electionResult(["mango", "BananA", "na vote", "na vote"])); // "Mango"
