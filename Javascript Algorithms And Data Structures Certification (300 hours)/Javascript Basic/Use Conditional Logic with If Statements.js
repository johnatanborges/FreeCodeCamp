/*Pseudocode

if (condition is true) {
    statement is executed
}
*/

// Example

function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
        return "It was false";
    }

test(true); // returns "It was true"
test(false); // returns "It was false"

// ---------------------

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

  // Setup
    function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if(wasThatTrue) {
        return "Yes, that was true";
    };
        return "No, that was false";

    // Only change code above this line.

    }

  // Change this value to test
    trueOrFalse(false);