switch (val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}

// case values are tested with strict equality in Switch(===)


function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
sequentialSizes(1);
