/* Author: Samuel Tiokeng
 * Title: First Unique Character
 * Description: https://leetcode.com/problems/first-unique-character-in-a-string/
 * Date: 12th January 2022
 */

var firstUniqChar = function(s) {

    const letterCounter = {}

    for(const letter of s) {
        if(letterCounter[letter]) letterCounter[letter]++
        else letterCounter[letter] = 1
    }

    for(let i = 0; i < s.length; i++) {
        const stringLetter = s[i];
        
        if(letterCounter[stringLetter] === 1){
            return i
        } 
    }
    return -1
};