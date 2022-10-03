const findTheOldest = function(personList) {
    return oldestPerson = personList.reduce((currentOldest, currentPerson) => 
        ((currentOldest.yearOfDeath - currentOldest.yearOfBirth) < (currentPerson.yearOfDeath - currentPerson.yearOfBirth)) 
            ? currentPerson : currentOldest
        ,
        {yearOfBirth: 0, yearOfDeath: 0}
    );
};

// Do not edit below this line
module.exports = findTheOldest;
