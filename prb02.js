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


console.log(validEmail("ferdous@gmail.com")); // true
console.log(validEmail("lziha@gmail.com")); // true
console.log(validEmail("-king@yahoo.com")); // false
console.log(validEmail(["jhankar@hero.com"])); // "Invalid"
console.log(validEmail("Mewo@cat.com")); // true
console.log(validEmail("programming-hero.com")); // false
console.log(validEmail("chat420@gpt.net")); // false
console.log(validEmail(true)); // "Invalid"
console.log(validEmail("he ro@alom.com")); // false
