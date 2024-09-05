const findTheOldest = function(arr) {
    // const objArray = arr.reduce((accumulator, currentValue) => {
    //     let firstObj = accumulator.yearOfBirth - accumulator.yearOfDeath;
    //     let secondObj = currentValue.yearOfBirth - currentValue.yearOfDeath;

    //     console.log(`first yearOfBirth : ${accumulator.yearOfBirth}`);
    //     console.log(`yearOfDeath object : ${accumulator.yearOfDeath}`)1
    // let ageArray = [];

    // console.log(`array length : ${arr.length}`);

    // for(let i = 0; i < arr.length; i++){
    //     ageArray.push(arr[i].yearOfDeath - arr[i].yearOfBirth);
    // }

    const ageArray = arr.map((element) => {
        return ("yearOfDeath" in element ? element.yearOfDeath : parseInt(new Date().getFullYear())) - element.yearOfBirth;});

    const index = ageArray.findIndex( x => x == ageArray.reduce((acc, curr) => Math.max(acc, curr)));

    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
