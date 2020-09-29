exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let minElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minElement > array[i]) {
            minElement = array[i];
        }
    }
    return minElement;
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxElement < array[i]) {
            maxElement = array[i];
        }
    }
    return maxElement;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let sumOfElements = array[0];
    for (let i = 1; i < array.length; i++) {
        sumOfElements += array[i];
    }
    return sumOfElements / array.length;
};
