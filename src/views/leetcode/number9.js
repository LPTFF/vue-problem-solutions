/* 
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
例如，121 是回文，而 123 不是。 
*/
const addLow = function (list, target) {
    //转字符串
    let listString = String(list);
    for (let index = 0; index < list.length; index++) {
        for (let indexOne = index + 1; indexOne < list.length; indexOne++) {
            if (list[index] + list[indexOne] == target) {
                return [index, indexOne];
            }
        }
    }
    return [' ', ''];
};

const num = [3, 3], target = 6;

const result = addLow(num, target);

result;