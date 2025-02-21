/*
User-Friendly Password System
Medium

A website is programming an authentication system that will accept a password either if it's the correct password or if it's the correct password with a single character appended to it. In this challenge, your task is to implement such a system, specifically using a hashing function. Given a list of events in which either a password is set or authorization is attempted, determine if each authorization attempt will be successful or not.

The hashing function that will be used in this problem is as follows. Let f(x) be a function that takes a character and returns its decimal character code in the ASCII table. For instance f('a') = 97, f('B') = 66, and f('9') = 57. (You can find all ASCII character codes here: ASCII table.) Then, let h(s) be the hashing function that takes a string and hashes it in the following way, where p = 131 and M = 10^9+7:

h(s) := (s[0] * p^(n-1) + s[1] * p^(n-2) + s[2] * p^(n-3) + ... + s[n-2] * p + s[n-1]) mod M

For instance, if s = "cAr1", then the formula would be as follows:
h(s) = (f('c') * 131^3 + f('A') * 131^2 + f('r') * 131 + f('1')) mod 10^9+7 = 223691457

Your system will be tested on q event types, each of which will be one of the following:
1. setPassword(s) := sets the password to s
2. authorize(x): = tries to sign in with integer x. This event must return 1 if x is either the hash of the current password or the hash of the current password with a single character appended to it. Otherwise, this event must return 0.

Consider the following example. There are 6 events to be handled:
1. setPassword("cAr1")
2. authorize(223691457)
3. authorize(303580761)
4. authorize(100)
5. setPassword("d")
6. authorize(100)

As we know from the above example, h("cAr1") = 223691457, so the second event will return 1. The third event will also return 1 because 303580761 is the hash value of the string "cAr1a", which is equal to the current password with the character 'a' appended to it. The fourth event will return 0 because 100 is not a hash of the current password or of the current password with a single character appended to it. In the fifth event, the current password is set to "d", and the sixth event will return 1 because h("d") = 100. Therefore, the array you would return is [1, 1, 0, 1], corresponding to the success or failure of the authorization events.

Function Description
- authEvents has the following parameter(s):
- string events[q][2]: a 2-dimensional array of strings denoting the event types and event parameters

Returns:
int[number of authorize events]: an array of integers, either 1 or 0, corresponding to the success (1) or failure (0) of each authorization attempt.

Constraints:
- 2 ≤ q ≤ 10^5
- 1 ≤ length of s ≤ 9, where s is a parameter of the setPassword event
- 0 ≤ x < 10^9+7, where x is the integer value of the parameter of the authorize event
- The first event will always be a setPassword event.
- There will be at least one authorize event.
- s contains only lowercase and uppercase English letters and digits.

Input Format for Custom Testing
In the first line, there is a single integer, q, denoting the number of rows in events.
In the second line, there is a single integer, 2, denoting the number of columns in events.
Each line i of the q subsequent lines (where 0 ≤ i < q) contains two space-separated strings—events[i][0] denoting the event type ("setPassword" or "authorize") and events[i][1] denoting the event parameter (s or x).

Sample Case 0
Sample Input:
4
2
setPassword 000A
authorize 108738450
authorize 108738449
authorize 244736787
Sample Output:
0
1
1

Explanation 0:
There are 4 events to process:
1. The first one sets the password to "000A".
2. The second one tries to authorize with the hash value 108738450. This value (which is the hash of the string "000B") doesn't correspond to the current password, nor to the current password with a single character appended to it. Therefore, this event returns 0.
3. The third event tries to authorize with the hash value 108738449. This is indeed the hash value of the current password, so this event returns 1.
4. Finally, the last event tries to authorize with hash value 244736787. This is the hash value of string "000AB", which is valid because it is equal to the current password with a single character appended to it. Therefore, this event returns 1.

Sample Case 1
Sample Input:
5
2
setPassword 1
setPassword 2
setPassword 3
authorize 49
authorize 50
Sample Output:
0
0

Explanation 1:
There are 5 events to process:
1. The first one sets the password to "1".
2. The second one sets the password to "2".
3. The third one sets the password to "3".
4. The fourth event tries to authorize with the hash value 49, which corresponds to "1". Because this is invalid for the current password of "3", this event returns 0.
5. The fifth event tries to authorize with the hash value 50, which corresponds to "2". Because this is invalid for the current password of "3", this event returns 0.
*/


function authEvents(events) {
    const p = 131;  // prime number used as the base for the hashing function
    const M = 1e9 + 7;  // the modulo value used in the hash calculation

    let currentPassword = "";
    let passwordHash = 0;
    let extendedHashes = new Set();
    let results = [];

    function computeHash(s) {
        let hashValue = 0;
        let power = 1;  // tracks p^(n-1), starting from rightmost character
        for (let i = s.length - 1; i >= 0; i--) {
            hashValue = (hashValue + s.charCodeAt(i) * power) % M;
            power = (power * p) % M;
        }
        return hashValue;
    }

    for (let event of events) {
        let action = event[0];
        let param = event[1];

        if (action === "setPassword") {
            currentPassword = param;
            passwordHash = computeHash(param);

            // compute extended hashes by appending any character (A-Z, a-z, 0-9)
            extendedHashes.clear();
            for (let charCode = 48; charCode <= 122; charCode++) {
                if ((charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96)) continue;
                let newPassword = param + String.fromCharCode(charCode);
                extendedHashes.add(computeHash(newPassword));
            }
        } else if (action === "authorize") {
            let authHash = parseInt(param);
            if (authHash === passwordHash || extendedHashes.has(authHash)) {
                results.push(1);
            } else {
                results.push(0);
            }
        }
    }

    return results;
}


console.log(authEvents([
    ["setPassword", "000A"],
    ["authorize", "108738450"],
    ["authorize", "108738449"],
    ["authorize", "244736787"]
])); // output: [0, 1, 1]

console.log(authEvents([
    ["setPassword", "1"],
    ["setPassword", "2"],
    ["setPassword", "3"],
    ["authorize", "49"],
    ["authorize", "50"]
])); // output: [0, 0]

console.log(authEvents([
    ["setPassword", "cAr1"],
    ["authorize", "223691457"],
    ["authorize", "303580761"],
    ["authorize", "100"],
    ["setPassword", "d"],
    ["authorize", "100"]
])); // output: [1, 1, 0, 1]
