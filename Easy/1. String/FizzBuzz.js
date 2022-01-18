/* Author: Samuel Tiokeng
 * Title: FizzBuzz
 * Description: https://leetcode.com/problems/fizz-buzz/
 * Date: 2nd January 2022
 */

var FizzBuzz = function(s){
     var result
     for(var i = 0; i < s.length; i++) {
          if( i % 15 == 0) {
               result.push("FizzBuzz")
          }
          else if( i % 3 == 0 ) {
               result.push("Fizz")
          }
          else if( i % 5 == 0 ) {
               result.push("Buzz")
          }
          else {
               result.push(i.toString)
          }
     }

     return result
}