"""
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
"""


def findLoser(video_sequence, k):
    stack = []
    loser = 1

    for i in range(0, len(video_sequence), 1):
        char = video_sequence[i]

        if stack and stack[len(stack) - 1] == char:
            stack.pop()

            loser = loser + 1 if loser < k else 1

        else:
            stack.append(char)

    return loser


print(findLoser("pzwoowz", 3))  # output: 1
print(findLoser("pzwoowzpa", 3))  # output: 2
print(findLoser("pzwoowzpaab", 3))  # output: 3
print(findLoser("pzwoowzpaab", 4))  # output: 2
