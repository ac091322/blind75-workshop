/*
Diverse Groups

A professional society is organizing a conference and needs to form a diverse group of 3 members.

The group must meet the following criteria:
Diversity Rule: The group must include at least one man and one woman.
Distinct Combinations: Two groups are considered distinct if they have at least one different member.

You are given:
m: The number of eligible men.
w: The number of eligible women.

Your task is to calculate the total number of distinct ways to select a diverse group of 3 members, following the diversity rule.

Example 1
m = 1
w = 3
There is m = 1 man available and there are w = 3 women. Label them m1, w1, w2, w3 for demonstration. There are 3 possible ways to form a diverse group: (m1, w1, w2), (m1, w1, w3), and (m1, w2, w3). The only other possible permutation is (w1, w2, w3), which does not include a man, so it is invalid.

Function Description
Complete the function diverseGroups in the editor with the following parameters:
int m: the number of men available int w: the number of women available

Returns
int: the number of ways to select a diverse group from m men and w women

Constraints
0 ≤ m, w ≤ 1000

Example 2
men m = 3
w = 0
Output: 0

Explanation
The number of women is 0 so there is no way to select a diverse group.
*/

// helper function to compute nCk (binomial coefficient -> "n" choose "k")
// how many different groups of size k can I make from n distinct things?
function combo(n, k) {
    // if k is bigger than n, there are no ways to choose k items from fewer than k items
    if (k > n) return 0;

    let result = 1;

    // loop from 0 to k - 1, whcih is k number of iterations
    for (let i = 0; i < k; i += 1) {
        result *= n - i;  // n × (n − 1) × (n − 2) × ... × (n − k + 1)
        result /= i + 1;  // 1 × 2 × 3 × ... × k
    }

    return result;
}

function comboRecursion(n, k) {
    // edge case
    if (k > n) return 0;

    // base case
    if (k === 0 || k === n) return 1;

    // recursive step -> nCk = (n - 1)Ck + (n - 1)C(k - 1)
    return comboRecursion(n - 1, k) + comboRecursion(n - 1, k - 1);
}


function diverseGroups(m, w) {
    // must be group of three as stated in prompt

    // get all the ways of picking 1 man and 2 women and all the ways of picking 2 men and 1 woman
    // multiply the two independent groups together to get the total number of distinct ways
    const oneManTwoWomen = combo(m, 1) * combo(w, 2);
    const twoMenOneWoman = combo(m, 2) * combo(w, 1);

    // const oneManTwoWomen = comboRecursion(m, 1) * comboRecursion(w, 2);
    // const twoMenOneWoman = comboRecursion(m, 2) * comboRecursion(w, 1);

    // add the two disjoint sets (no overlapping elements) together to get the total number of valid groups that have both men and women
    // one man two women cannot overlap with two men one woman
    return oneManTwoWomen + twoMenOneWoman;
}


console.log(diverseGroups(1, 3));  // output: 3
console.log(diverseGroups(3, 0));  // output: 0
console.log(diverseGroups(2, 4));  // output: 16
