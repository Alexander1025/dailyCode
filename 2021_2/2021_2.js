/**
 * @param {string} s
 * @return {number}
 */

var s = "pwwkew";
lengthOfLongestSubstring(s);
var lengthOfLongestSubstring = function (str){
    
}
var lengthOfLongestSubstring1 = function(s) {
    const sArray = s.split('');
    let temp = '';
    let max = 0;
    sArray.forEach(item => {
        const currentIndex = temp.indexOf(item);
        if (currentIndex !== -1) {
            temp = temp.substring(currentIndex + 1);
        }
        temp += item;
        max = Math.max(temp.length, max);
    });
    return max;
};