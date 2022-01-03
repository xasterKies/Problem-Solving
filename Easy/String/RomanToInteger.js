// Author: Samuel Tiokeng
// Title: Convert Roman Integer to Number
// Problem Description: https://leetcode.com/problems/roman-to-integer/
// Date: 1st January 2022


var romanToInteger = function(s){
     
    const symbols = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        c : 100,
        D : 500,
        M : 1000
    }

    let result = 0;

    for (var i = 0; i < s.length; i++ ) {
        var cur = symbols[s[i]]
        var next = symbols[s[i+1]]

        if(cur < next) {
            result += (next - cur)
            i++
        } else {
            result += cur
        }
    }

    return result;
}