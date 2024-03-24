/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
     const openingBrackets = { '(': ')', '{': '}', '[': ']' };

    for(let i = 0; i< s.length; i++) {
        const char = s[i];

        if(openingBrackets[char]) {
            stack.push(char);
        } else {
            if(stack.length === 0 || openingBrackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

     return stack.length === 0;
};