const add = function (list, target) {
    for (let index = 0; index < list.length; index++) {
        console.log(index);
        for (let indexOne = index + 1; indexOne < list.length; indexOne++) {
            console.log(index, indexOne);
            console.log(list[index], list[indexOne]);
            if (list[index] + list[indexOne] == target) {
                return [index, indexOne];
            }
        }
    }
    return [' ', ''];
};

const num = [3, 3], target = 6;

const result = add(num, target);

result;
