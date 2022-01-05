/* Author: Samuel Tiokeng
 * Title: Length of Last word
 * Description: https://leetcode.com/problems/length-of-last-word/
 * Date: 5th January 2022
 */


function lengthOfLastWord(s) {
    let word = s.trim().split(" ");

    return word.length > 0 ? word[word.length - 1].length : 0
}

console.log(lengthOfLastWord("Hello Word"))