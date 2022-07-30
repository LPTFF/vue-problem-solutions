/* 
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
例如，121 是回文，而 123 不是。 
*/
const addLow = function (list) {
    let listString = String(list).split('');//先转字符串再转数组
    console.log(listString);
    console.log(parseInt((listString.length) / 2));
    let stopLength = parseInt((listString.length) / 2);
    for (let index = 0; index < stopLength; index++) {
        console.log(index);
        if (listString[index] == listString[listString.length - index - 1]) {
            console.log(index);
            if (index == stopLength - 1) {
                return true;
            } else {
                continue;
            }
        } else {
            console.log(index);
            return false;
        }
    }
    return false;
};

const num = 1234554321;

const result = addLow(num);

result;