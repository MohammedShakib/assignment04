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


console.log(calculateWatchTime([100, 99, 119, 300])); 
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800])); 
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600])); 
console.log(calculateWatchTime([100, 3800, "90"])); // "Invalid"
