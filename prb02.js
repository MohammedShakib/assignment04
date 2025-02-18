function validEmail(email) {
   
    if (typeof email !== "string") {
        return "Invalid";
    }

    let emailPattern = /^[^.-][a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.(com)$/;

   
    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

console.log(validEmail("ferdous@gmail.com")); // true
console.log(validEmail("lziha@gmail.com")); // true
console.log(validEmail("-king@yahoo.com")); // false
console.log(validEmail(["jhankar@hero.com"])); // "Invalid"
console.log(validEmail("Mewo@cat.com")); // true
console.log(validEmail("programming-hero.com")); // false
console.log(validEmail("chat420@gpt.net")); // false
console.log(validEmail(true)); // "Invalid"
console.log(validEmail("he ro@alom.com")); // false
