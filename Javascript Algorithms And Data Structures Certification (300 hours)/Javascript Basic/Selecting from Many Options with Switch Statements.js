switch(num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
//...
    case valueN:
        statementN;
        break;
}

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    };
    // Only change code above this line
    return answer;
};

  // Change this value to test
caseInSwitch(1);
