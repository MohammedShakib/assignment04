function cashOut(money) {

    if (money === undefined || isNaN(money) || money <= 0) {
        return "Invalid";
    }


    let charge = money * 0.0175;

    return charge.toFixed(2);
}
function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
        return false;
    }

    let atIndex = email.indexOf("@");
    let dotComIndex = email.lastIndexOf(".com");

    if (atIndex <= 0 || dotComIndex <= atIndex + 1) {
        return false;
    }

    if (email[0] === '.' || email[0] === '-') {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    return true; 
}
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

function isBestFriend(f1, f2) {

    if (typeof f1 !== "object" || typeof f2 !== "object" || f1 === null || f2 === null) {
        return "Invalid";
    }


    if (!("name" in f1 && "roll" in f1 && "bestFriend" in f1) || 
        !("name" in f2 && "roll" in f2 && "bestFriend" in f2)) {
        return "Invalid";
    }


    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}
function calculateWatchTime(times) {
 
    if (!Array.isArray(times) || times.some(time => typeof time !== "number")) {
        return "Invalid";
    }

    let totalSeconds = times.reduce((sum, time) => sum + time, 0);


    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return { hour: hours, minute: minutes, second: seconds };
}