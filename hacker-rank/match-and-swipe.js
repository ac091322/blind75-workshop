/*
Match and Swipe
Medium

Several TikTok creators are participating in a trending challenge called Match-and-Swipe. There are k creators, labeled from 1 to k, and they start with a shared video sequence represented by the string videoSequence.

Here's how the challenge works: each creator takes turns (creator 1 goes first, followed by creator 2, and so on, cycling back to creator 1 after creator k's turn). On each turn, a creator can remove any two consecutive matching clips (represented by matching letters in videoSequence) and merge the remaining parts of the sequence back together.

The game continues until there are no consecutive matching clips left. If a creator cannot make a move, they lose, and the challenge ends. Given that all creators play strategically, determine the number of the creator who will lose.

Example
Given, videoSequence = "pzwoowz" and k = 3

Creator  | videoSequence
---------|--------------
1        | pzwoowz
2        | pzwwz
3        | pzz
1        | p

On each turn, the creator selects the highlighted pair. Creator 1 loses when there are no valid pairs left to remove. Return 1.

findLoser takes the following parameters:
- string videoSequence: the shared video sequence
- int k: the number of creators participating in Match and Swipe challenge

Returns:
- int: the creator who is unable to make a move on their turn

Constraints:
- 1 ≤ |videoSequence| ≤ 10^6
- 2 ≤ k ≤ 10^6
- The string videoSequence contains only lowercase Latin letters.
*/


function findLoser(videoSequence, k) {
    let stack = [];
    let loser = 1;

    for (let i = 0; i < videoSequence.length; i += 1) {
        let char = videoSequence[i]

        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();

            loser < k ? loser += 1 : loser = 1;

        } else {
            stack.push(char);
        }
    }

    return loser;
}


console.log(findLoser("pzwoowz", 3));  // output: 1
console.log(findLoser("pzwoowzpa", 3));  // output: 2
console.log(findLoser("pzwoowzpaab", 3));  // output: 3
console.log(findLoser("pzwoowzpaab", 4));  // output: 2
