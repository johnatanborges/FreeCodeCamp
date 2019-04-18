
let a = 100;
let i = 1;
let x = 1;

while (a < 105) {
    console.log(a)

for (;i < 5; i = i + 1) {
    console.log(i);
    for (;x < 15; x = x + 1) {
        if (x % 2 != 0) {
            console.log(x);
        };
    };
};

a++
};

console.log(a); // 105
console.log(i); // 5
console.log(x); // 15
