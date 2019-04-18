function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true


// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
return "Equal";
    }
    return "Not Equal";
}

  // Change this value to test
testEqual(12);