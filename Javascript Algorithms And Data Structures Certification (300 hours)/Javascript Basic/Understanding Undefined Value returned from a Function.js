var sum = 0;
function addSum(num) {
    sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined


// -----------------

// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
};

// Only change code below this line

function addFive() {
    sum += 5;
};


// Only change code above this line
var returnedValue = addFive();