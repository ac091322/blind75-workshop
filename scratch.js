/*
Array Challenge
Easy

Have the function ArrayChallenge (arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. 5, 3, 3, 3, 1) should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

Examples:
Input: [1, 2, 31]
Output: 0

Input: [4, 4, 4, 6, 2]
Outout: 1
*/


function arrayChallenge(arr) {
    let sum = arr.reduce((total, num) => total + num, 0)
    let mean = sum / arr.length
    let mode = null
    let modeFreq = {}
    let highestModeFreq = 0

    for (let num of arr) {
        modeFreq[num] ? modeFreq[num] += 1 : modeFreq[num] = 1
    }

    for (let num in modeFreq) {
        if (modeFreq[num] > highestModeFreq) {
            highestModeFreq = modeFreq[num]
            mode = +num
        }
    }
    return mode === mean ? 1 : 0
}



console.log(arrayChallenge([1, 2, 3]));  // output: 0
console.log(arrayChallenge([4, 4, 4, 6, 2]));  // output: 1
