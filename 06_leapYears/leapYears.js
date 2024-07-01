const leapYears = function() {
    let year = arguments[0];

    if(!(year % 400 === 0)) {
        let result = year % 100;

        if((result % 4 === 0) && (result > 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }

    
};

// Do not edit below this line
module.exports = leapYears;
