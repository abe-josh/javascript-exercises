const palindromes = function (text) {
    let backwardText = '';
    let trimmedText = text.replace(/[,.! ]+/g, "").toLowerCase();
    for(let i = trimmedText.length - 1; i >= 0; i--){
        backwardText += trimmedText[i];
    }
console.log(`trimmed text : ${trimmedText}`);
console.log(`backwardText text : ${backwardText}`);

    if(backwardText === trimmedText ){
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = palindromes;
