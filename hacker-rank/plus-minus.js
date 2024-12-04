/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

Plus Minus
Basic

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Approach:
1. create variables to keep track of the number of:
  1.1. positive values
  1.2. negative values
  1.3. zeroes
2. find the length of the array which will be used as the divisor
3. iterate through the list of nums:
  3.1. if num is less than 0, negative values += 1
  3.2. if num is greater than 0, positive values += 1
  3.3. if the num is equal to 0, zeros += 1
4. divide the number of each of the values by the divisor to get the proportion
5. print the positives ratio as a string
6. print the negative ratio as a string
7. print the zeroes ratio as a string
*/


function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    let divisor = arr.length;

    for (let num of arr) {
        if (num > 0) {
            positives += 1
        } else if (num < 0) {
            negatives += 1
        } else if (num === 0) {
            zeroes += 1
        }
    }

    let positives_ratio = positives / divisor;
    let negatives_ratio = negatives / divisor;
    let zeroes_ratio = zeroes / divisor;

    console.log(`${positives_ratio.toFixed(6)}`);
    console.log(`${negatives_ratio.toFixed(6)}`);
    console.log(`${zeroes_ratio.toFixed(6)}`);
}


plusMinus([1, 1, 0, -1, -1]);  // output: 0.400000 0.400000 0.200000
plusMinus([-4, 3, -9, 0, 4, 1]);  // output: 0.500000 0.333333 0.166667
