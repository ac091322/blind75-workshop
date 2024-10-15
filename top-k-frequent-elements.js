/*
https://leetcode.com/problems/top-k-frequent-elements/description/
https://neetcode.io/problems/top-k-elements-in-list

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = []
Output: []

Example 4:
Input: [1,2,2,2,3,3,3], k=2
Output: [3, 2] OR [2, 3]

Example 5:
Input: [1,1,1,2,2,2,3,3,3], k=2
Output: invalid input, violates constraint that answer is unique

Example 6:
Input: [1,1,1,2,2,2,3,3,3], k=3
Output: [1,2,3] OR [2,1,3] OR [3,1,2]

Example 7:
Input: [1,1,1,2,2,3], k=3
Output: [1,2,3]

Example 8:
Input: [1,1,1,2,2,3,4,4,4], k=2
Output: [1,4]

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


Approach:
1. create a count:
  count = {1: 3, 2: 2, 3: 1, 4: 3}
2. create a bucket with length as long as input array representing the number of times an element is repeated in the original input array
  2.1 index 8 means an element is repeated 8 times
  2.2. won't have any elements that appear 0 times
  2.3. will never have an element repeated more times than the length of the input
  buckets = [null, null, null, null ,null, null, null, null, null]
  index        0     1     2     3     4     5     6     7     8
  buckets = [null,  [3],  [2], [1,4], null, null, null, null, null]

Pseudocode:
  Create an array called buckets that is the size nums.length
  Create a hashmap to keep track of counts
  Iterate through nums and add the count of each num to the hashmap
  Iterate through each count and push the key of each count into our bucket array using the value as the index
  Iterate through buckets starting from the back
  Push in items to the result until we have k elements and then return the result


Time complexity: O(n)
Space complexity: O(n)
*/


function topKFrequent(nums, k) {
  let buckets = new Array(nums.length);
  let counter = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    counter[num] = counter[num] ? counter[num] + 1 : 1;
  };

  for (let num in counter) {
    let count = counter[num];
    if (!buckets[count]) {
      buckets[count] = [];
    }
    buckets[count].push(num);
  };

  const res = [];
  let copyk = k;

  for (let j = buckets.length - 1; j >= 0; j -= 1) {
    if (buckets[j]) {
      for (let z = 0; z < buckets[j].length; z += 1) {
        let item = buckets[j][z];
        res.push(item);
        copyk -= 1;
        if (copyk === 0) return res;
      }
    }
  };

  return res;
}


console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4], 2));  // output: [1, 4]
console.log(topKFrequent([1, 2, 2, 2, 3, 3, 3], 2));  // output: [3, 2] OR [2, 3]
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 3));  // output: [1,2,3] OR [2,1,3] OR [3,1,2]
