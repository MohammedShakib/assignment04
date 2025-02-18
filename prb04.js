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

console.log(isBestFriend(
    { name: "Ashiq", roll: 1, bestFriend: 2 },
    { name: "Tanvir", roll: 2, bestFriend: 1 }
)); // true

console.log(isBestFriend(
    { name: "Ashiq", roll: 10, bestFriend: 20 },
    { name: "Tanvir", roll: 2, bestFriend: 10 }
)); // false

console.log(isBestFriend(
    { name: "Ashiq", roll: 5, bestFriend: 7 },
    "Best Friend Forever"
)); // "Invalid"

console.log(isBestFriend(
    { name: "Tanvir", roll: 2, bestFriend: 5 },
    { name: "Ashiq", roll: 5, bestFriend: 2 }
)); // true

console.log(isBestFriend(
    { name: "Ashiq", roll: 1 },
    { name: "Tanvir", roll: 2, bestFriend: 1 }
)); // "Invalid"
