3 == '3' // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed

typeof 3 // returns 'number'
typeof '3' // returns 'string'

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
    }

  // Change this value to test
    compareEquality(10, "10");