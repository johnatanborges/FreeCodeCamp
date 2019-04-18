var dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

// Note that we do not use quotes around the variable name
// when using it to access the property because we are using the
// value of the variable, not the name.

// -----------------------------------

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line