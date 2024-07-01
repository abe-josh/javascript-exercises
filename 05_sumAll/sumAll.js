const numArr = [];

const sumAll = function() {
    return getArguments(arguments);
};

function getArguments(args) {
    for(let i = 0; i < args.length; i++) {
        if(args[i] < 0 || typeof args[i] != 'number') {
            // return 'ERROR';
            return 'ERROR';
        }
        else {
            numArr[i] = args[i];
        }
    }
    return sortArray(numArr);
}

function sortArray(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let k = 0; k < i; k++){
            if(arr[i] < arr[k]) {
                num = arr[i];
                arr[i] = arr[k];
                arr[k] = num;
            }
        }
    }
    return addElements(arr);
}

function addElements(arr) {
    let sum = 0;

    for(let i = arr[0]; i <= arr[arr.length -1]; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
