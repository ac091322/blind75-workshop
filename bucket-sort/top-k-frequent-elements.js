/*
https://leetcode.com/problems/top-k-frequent-elements/description/
https://neetcode.io/problems/top-k-elements-in-list

Top K Frequent Elements
Medium

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


Approach: bucket sort
1. create a frequency dictionary to store the number and the frequency count as key-value pairs
2, create a frequency bucket with the length as long as the input list + 1 to cover the index of 0
3. iterate through the nums list:
  3.1. if the num is in the frequency dictionary, add 1 to increase it's frequency value
  3.2. if the num is not in the frequency dictionary, add it to the dictionary with a frequency value of 1
4. iterate to populate the frequency bucket:
  4.1. the key in the dictionary is the number, the value in the dictionary is the frequency
  4.2. the frequency corresponds to the index value in the frequency bucket
  4.3. put the number into the corresponding bucket according to the value of the number in the dictinonary
5. create a result list to store the most frequent numbers
6. iterate backwards to start from the highest frequency (no need to go to index 0 since it's always empty):
  6.1. iterate in each bucket to extract the numbers from the frequency buckets
  6.2. put the extracted numbers into the result list
  6.3. if the length of the result list meets the value of k, return the result list

Time complexity: O(n)
Space complexity: O(n)

The inner loop iterates over each element in freqeuncy_bucket[i] for every frequency bucket i. Since each bucket in frequency_bucket contains the numbers that appear with the same frequency, the total number of elements across all the buckets is exactly equal to the number of elements in the input list. Therefore, even though there are multiple iterations of the inner loop for each frequency bucket, every element from nums is processed only once across all the buckets. This means that the total number of iterations across all inner loops is proportional to the length of the input array n, making the time complexity of the inner loop O(n), not O(n^2).
*/


function topKFrequent(nums, k) {
  let frequencyCounter = {};
  let frequencyBucket = new Array(nums.length + 1);

  // in js need to fill the empty frequency bucket with empty arrays
  for (let i = 0; i < frequencyBucket.length; i += 1) {
    frequencyBucket[i] = []
  }

  for (let num of nums) {
    frequencyCounter[num] ? frequencyCounter[num] += 1 : frequencyCounter[num] = 1;
  }

  for (let num in frequencyCounter) {
    let freq = frequencyCounter[num];
    frequencyBucket[freq].push(num);
  }

  let result = []
  for (let i = frequencyBucket.length - 1; i > 0; i -= 1) {
    for (let num of frequencyBucket[i]) {
      result.push(+num);
      if (result.length === k) return result;
    }
  }
}


console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4], 2));  // output: [1, 4]
console.log(topKFrequent([1, 2, 2, 2, 3, 3, 3], 2));  // output: [3, 2] OR [2, 3]
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 3));  // output: [1,2,3] OR [2,1,3] OR [3,1,2]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));  // output: [1,2]
console.log(topKFrequent([1], 1));  // output: [1]
console.log(topKFrequent([7, 7], 1));  // output: [7]
console.log(topKFrequent([], 0));  // output: [7]
