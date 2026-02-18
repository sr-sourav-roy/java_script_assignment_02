/**
 * Your task is to create a function called calculateSleepTime() that takes an array as input. It will contain the number of seconds Rakib slept in. The function will extract the total time from the array and convert it to hours, minutes and seconds and return it as an object. Input:
- The function will take an array as input
- The elements of the array will be number (watch times in second)
- Output:
- The function will calculate all the times in the array and convert them to hours, minutes and seconds
- The function will return an object. The object should look like this -[hour:14, minute: 46, second:3] basic structer?
 */

function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "INVALID";
    }
    // total addition calculate
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i += 1){
        totalSeconds = totalSeconds + times[i];
    }
    // hours, minute, seconds convert
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;
    return {
        hour: hour,
        minute: minute,
        second: second
    };

}
console.log(calculateSleepTime([1000, 499, 519, 300]))    
console.log(calculateSleepTime([1000, 3000, 725]))
console.log(calculateSleepTime([]))
console.log(calculateSleepTime())