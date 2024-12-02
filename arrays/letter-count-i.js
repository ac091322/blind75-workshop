/*
Letter Count I
Easy

Have the function LetterCountI (str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

Examples
Input: "Hello apple pie"
Output: Hello

Input: "No words"
Output: -1


Time complexity: O(n) where n is the length of the string input
Space complexity: O(n) where n is the length of the string input
*/


function letterCount(string) {
    let wordArr = string.split(" ");
    let maxRepeatingCount = 0;
    let maxRepeatingWord = "";

    for (let word of wordArr) {
        let charCounter = {};

        for (let char of word.toLowerCase()) {
            charCounter[char] ? charCounter[char] += 1 : charCounter[char] = 1;
        }

        // Object.values() generates an array of values, Math.max does not take an array, so need to spread the values
        let highestCharCount = Math.max(...Object.values(charCounter));
        if (highestCharCount > maxRepeatingCount) {
            maxRepeatingCount = highestCharCount
            maxRepeatingWord = word
        }
    }

    return maxRepeatingCount <= 1 ? -1 : maxRepeatingWord
}


console.log(letterCount("Hello apple pie"));  // output: Hello
console.log(letterCount("No words"));  // output: -1
