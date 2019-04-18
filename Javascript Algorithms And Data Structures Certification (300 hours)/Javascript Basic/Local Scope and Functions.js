function myTest() {
    var loc = "foo";
    console.log(loc);
}
  myTest(); // logs "foo"
  console.log(loc); // loc is not defined

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = 1;
    console.log(myVar);
};
myLocalScope(); // 1;

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log(myVar); // myvar is not defined
