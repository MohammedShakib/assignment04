function cashOut(money) {

    if (money === undefined || isNaN(money) || money <= 0) {
        return "Invalid";
    }


    let charge = money * 0.0175;

    return charge.toFixed(2);
}

console.log(cashOut(2000));
console.log(cashOut("abcd"));
console.log(cashOut(-500));
console.log(cashOut());
