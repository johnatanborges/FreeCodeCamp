function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var elemento = arr.shift();
    return elemento;  // Change this line
}
