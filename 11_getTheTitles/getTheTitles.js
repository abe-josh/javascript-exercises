const getTheTitles = function(bookObjects) {

    const bookTitles = bookObjects.map((obj) => obj.title);

    console.log(bookTitles);

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
