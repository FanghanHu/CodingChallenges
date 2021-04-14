/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * 
 *
    Example 1:
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

    Example 2:
    Input: nums = [1,0,1,1,0,1]
    Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    //store the max number of consective 1s. start with 0
    //store the current number of consective 1s. start with 0

    let max = 0, cur = 0;

    //loop the whole array
    for(const num of nums) {
        if(num === 1) {
            //if current number is 1, current con increase by 1,
            cur++;
                //also check if current is bigger than max, if it is, increase max to current
            if(cur > max) max = cur;
        } else {
            //if not, current become 0
            cur = 0;
        }
    }
    
    //end of loop

    //return max
    return max;
};

console.log(`findMaxConsecutiveOnes([1,1,0,1,1,1]) => ${findMaxConsecutiveOnes([1,1,0,1,1,1])}`);
console.log(`findMaxConsecutiveOnes([1,0,1,1,0,1]) => ${findMaxConsecutiveOnes([1,0,1,1,0,1])}`);
