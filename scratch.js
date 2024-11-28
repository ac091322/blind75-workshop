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
    let mode = null
    let modeCounter = {}
    let maxModeCount = 0
    let sum = 0

    for (let num of arr) {
        sum += num
        modeCounter[num] ? modeCounter[num] += 1 : modeCounter[num] = 1
    }

    for (let num in modeCounter) {
        if (modeCounter[num] > maxModeCount) {
            maxModeCount = modeCounter[num]
            mode = Number(num)
        }
    }

    let mean = sum / arr.length

    return mean === mode ? 1 : 0
}


console.log(arrayChallenge([1, 2, 3]));  // output: 0
console.log(arrayChallenge([4, 4, 4, 6, 2]));  // output: 1
