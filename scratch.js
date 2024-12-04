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
    let wordArr = string.split(" ")
    let maxRepeatingWord = ""
    let maxRepeatingCount = 0

    for (let word of wordArr) {
        let charCounter = {}

        for (let char of word.toLowerCase()) {
            charCounter[char] ? charCounter[char] += 1 : charCounter[char] = 1

            if (charCounter[char] > maxRepeatingCount) {
                maxRepeatingCount = charCounter[char]
                maxRepeatingWord = word
            }
        }
    }

    return maxRepeatingWord
}


console.log(letterCount("Hello apple pie"));  // output: Hello
console.log(letterCount("No words"));  // output: -1
console.log(letterCount("Check this word out: feeccwwllcc"));  // output: feeccwwllcc
