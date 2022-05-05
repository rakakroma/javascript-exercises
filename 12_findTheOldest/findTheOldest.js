const findTheOldest = function (people) {
    const date = new Date();
    const answer = people.reduce((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = date.getFullYear();
        }
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return a;
        }; return b;
    }); return answer
};

// Do not edit below this line
module.exports = findTheOldest;
