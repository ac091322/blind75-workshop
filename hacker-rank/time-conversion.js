/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

Time Conversion
Basic

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/


function timeConversion(s) {
    let period = s.slice(-2, s.length);
    let [hour, minute, second] = s.slice(0, -2).split(":").map(Number);

    if (period === "PM" || period === "pm") {
        if (hour !== 12) {
            hour += 12;
        }
    } else if (period === "AM" || period === "am") {
        if (hour === 12) {
            hour = 0;
        }
    }

    // can use padEnd() method to pad to the end
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`
}


console.log(timeConversion("12:01:00PM"));  // output: 12:01:00
console.log(timeConversion("12:01:00AM"));  // output: 12:01:00
console.log(timeConversion("7:05:45PM"));  // output: 19:05:45
