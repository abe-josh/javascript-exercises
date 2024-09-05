const fibonacci = function(num) {
    let warn = "OOPS";
    let arr = [0, 1];

    // if(num === 0 || Number(num) ){
    //     return arr[num];
    // }

    if(num < 0) {
        return warn;
    }

    for(let i = 1; i < num; i++){
        arr.push((arr[arr.length - 2]) + (arr[arr.length -1 ]));
    }

    console.log(arr);

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
