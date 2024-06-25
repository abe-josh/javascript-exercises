const removeFromArray = function() {
    let resultArray = [];
    const arr = arguments[0];

    for(let x = 1; x <= arguments.length -1; x++) {
        for(let i = 0; i < arr.length; i++) {
            if(arguments[x] === arr[i]) {
                arr[i] = "";
            }
            else {
                arr[i] = arr[i];
            }
        }
    }

    console.log(`array final values : ${arr}`);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != "") {
            resultArray[resultArray.length] = arr[i];
        }
    }

    console.log(`new array final values : ${resultArray}`);
    console.log(typeof Array(resultArray));

    return resultArray;

    

    // for(let i = 0; i < arr.length; i++) {
    //     if(arg1 == arr[i]){
    //         if(arg1 == arr[i+1]){

    //         }
    //         // resultArray[i] = arr[]
    //     }
    //     else{
    //         resultArray[i] = arr[i];
    //     }
    // }

    // for(let n = 1; n < arguments.length; n++) {
    //     let arg = arguments[n];
    //     let x = arr.length;
    //     let i = 0;

    //     while(x >= 0){
    //         if(arg.toString() == arr[i].toString()){
    //             x--;
    //             continue;
    //         }
    //         else {
    //             if(resultArray.length > 0){
    //                 resultArray[resultArray.length] = arr[i];
    //             }
    //             else {
    //                 resultArray[0] = arr[i];
    //             }
    //         }
    //         i++;
    //         x--;
    //     }
    // }

    // for(let i = 1; i < arguments.length; i++) {
    //     for(let x = 0; 0 < arguments[0].length; x++) {
    //         if(arguments[i].toString() == arguments[0][x]) {
    //             continue;
    //         }
    //         else{
    //             arguments[0][x] = "";
    //         }
    //     }
    // }
    
    // console.log(arguments.length);
    // console.log(resultArray);

    // return resultArray;

    // for(let i = 1; i < arguments.length; i++) {
    //     for(let x = 0; 0 < arr.length; x++) {
    //         if(arguments[i].toString() == arr[x]) {
    //             continue;
    //         }
    //         else{
    //             arr[x] = "";
    //         }
    //     }
    // }

    // console.log("final values of the array" , arr);
};

// Do not edit below this line
module.exports = removeFromArray;
