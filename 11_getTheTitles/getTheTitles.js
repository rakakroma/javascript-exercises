const getTheTitles = function (books) {
    const bookTitleArray = [];
    for (let book of books) {
        bookTitleArray.push(book.title)
    };
    return bookTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
