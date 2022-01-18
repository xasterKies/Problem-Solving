/* Author: Samuel Tiokeng
 * Title: Single Number
 * Description: https://leetcode.com/problems/single-number/
 * Date: 19 January 2022
 */

var singleNumber = function(nums) {
    var res = 0;
    for(var i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res
}