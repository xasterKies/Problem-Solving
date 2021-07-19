package Easy;

/* Author: Tiokeng Samuel
 * Number: Problem #7 on Leetcode: Reverse Integer
 * Date: July 15th, 2021
 */

public class ReverseInteger {

public static void main(String[] args) {
    
}


    public int reverse(int x) {
    // Variables declaration
        int reversed = 0;
        int remainder;

        //Checking if numbered entered is more than 0
        while (x > 0) {
            remainder = x % 10;
            x /= 10;

            if(reversed > Integer.MAX_VALUE/10 || reversed == Integer.MAX_VALUE/10 && remainder > 7)
                return 0;

            if(reversed < Integer.MIN_VALUE/10 || reversed == Integer.MIN_VALUE/10 && remainder < -7)
                return 0;

            reversed = (reversed * 10) + remainder;
        }
       
        return reversed;
        
    }
}

