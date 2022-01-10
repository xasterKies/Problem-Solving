/* Author: Samuel Tiokeng
 * Title: Find The Difference
 * Description: https://leetcode.com/problems/find-the-difference/
 * Date: 10th January 2022
 */

const findTheDifference = (s, t) => {
    let sSplit = s.split("").sort();
    let tSplit = t.split("").sort();

    for(let i = 0; i < tSplit.length; i++) {
        if(sSplit[i] !== tSplit[i]) {
            return tSplit[i]
        }
    }
}

console.log(findTheDifference("abcd", "abcde"))