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

// Find difference
const findTheDifference = (s, t) => {
  // split the two incoming strings and sort them 
  let sSplit = s.split('').sort()
  let tSplit = t.split('').sort()
  
  // create loop to iterate through input strings
  for( let i = 0; i < tSplit.length; i++){
    
    // compare values array values
    if( sSplit[i] !== tSplit[i]){

      //return non matching chars
      return tSplit[i];
    }
  } 
   
