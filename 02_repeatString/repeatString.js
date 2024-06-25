const repeatString = function(text, num) {
    let result = "";

    if(num < 0){
        return "ERROR";
    }
    else {

        for(let i = 0; i < num; i++) {
            result += text;
        }
    
        console.log(result);
        return result;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
