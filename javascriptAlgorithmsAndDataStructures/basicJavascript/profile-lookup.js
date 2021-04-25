// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
var hasProp = false;
var hasName = false;

    for (let i = 0; i < contacts.length; i++) {
        var contact = contacts[i];

        if (contact[prop] && contact.firstName == name) {
            return contact[prop];
        }

        if (contact[prop] == prop) {
            hasProp = true;
        } else if (contact.firstName == name) {
            hasName = true;
        }
    }

    if (!hasName) {
        return "No such contact";
    } 
    
    if (!hasProp) {
        return "No such property";
    }
// Only change code above this line
}

lookUpProfile("Akira", "likes");
