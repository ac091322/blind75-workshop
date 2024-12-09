/*
Array Challenge
have the tunction Arravchallence arr take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. 5, 3, 3, 3, 1) should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.


Examples:
Input: [1, 2, 31]
Output: 0

Input: [4, 4, 4, 6, 2]
Outout: 1
*/


function arrayChallenge(arr) {
    let sum = 0;
    let mode = null;
    let modeCounter = {};
    let maxNumCount = 0;

    for (let i = 0; i < arr.length; i += 1) sum += arr[i];
    let mean = sum / arr.length;

    for (let num of arr) modeCounter[num] ? modeCounter[num] += 1 : modeCounter[num] = 1
    // num is put in modeFreq as the key, which is a string

    for (let num in modeCounter) {
        if (modeCounter[num] > maxNumCount) {
            maxNumCount = modeCounter[num];
            mode = Number(num);  // converts the key "num", which is a string, to a number
        }
    }

    return mode === mean ? 1 : 0
}


console.log(arrayChallenge([1, 2, 3]));  // output: 0
console.log(arrayChallenge([4, 4, 4, 6, 2]));  // output: 1
console.log9(arrayChallenge([4, 4, 4, 4, 11, 6, 3, 9, 9]));  // output: 0
