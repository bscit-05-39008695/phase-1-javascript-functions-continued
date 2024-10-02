// index.js

// Function that takes an activity for Saturday, defaulting to 'roller-skate'
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function expression for Monday work, defaulting to 'go to the office'
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Function that wraps an adjective with a specified wrapper
function wrapAdjective(wrapper = '*') {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

// Exporting the functions to be used in other files, like tests
module.exports = { saturdayFun, mondayWork, wrapAdjective };
