/* 
给定一个整数数组num和一个整数目标值 target，请你在该数组中找出和为目标值target的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：
输入：num = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 num[0] + num[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：num = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：num = [3,3], target = 6
输出：[0,1]

提示：
2 <= num.length <= 104
-109 <= num[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？ 

*/
const addLow = function (list, target) {
    // 暴力循环,时间复杂度O(n2)
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

const addHight = function (list, target) {
    // 利用map,时间复杂度O(n)
    // eslint-disable-next-line no-undef
    const map = new Map();
    for (let index = 0; index < list.length; index++) {
        if (map.has(target - list[index])) {
            return [map.get(target - list[index]), index];
        }
        map.set(list[index], index);
    }
    return [' ', ''];
};

const numHigh = [3, 2, 4], targetHigh = 6;

const resultHigh = addHight(numHigh, targetHigh);

resultHigh;