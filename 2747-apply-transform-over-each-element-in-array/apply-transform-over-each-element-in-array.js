/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transArr = [];

    for(let i =0; i < arr.length; i++) {
       transArr.push(fn(arr[i], i))
    }
    return transArr;
};