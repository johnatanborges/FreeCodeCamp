6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

  // Change this value to test
testGreaterOrEqual(10);