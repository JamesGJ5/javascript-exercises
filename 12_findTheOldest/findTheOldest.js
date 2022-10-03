const findTheOldest = function(personList) {
    const oldestPersonMaxAge = personList.reduce((currentOldest, currentPerson) => {
            let latestYear;
            if ("yearOfDeath" in currentPerson) {
                latestYear = currentPerson.yearOfDeath;
            } else {
                latestYear = (new Date()).getFullYear();
            };
            const currentPersonMaxAge = latestYear - currentPerson.yearOfBirth;
            return (currentPersonMaxAge > currentOldest[1]) 
            ? [currentPerson, currentPersonMaxAge] : currentOldest
        },
        [null, 0]
    );
    return oldestPersonMaxAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
