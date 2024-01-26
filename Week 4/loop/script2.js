const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        sum += numbers[i];
    }
}

console.log(`for-each: ${sum}`);

sum = 0;
// in returns index
for (let i in numbers) {
    if (numbers[i] % 3 === 0) {
        sum += numbers[i];
    }
}   

console.log(`for-in: ${sum}`);

sum = 0;
// of returns value
for (let i of numbers) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log(`for-of: ${sum}`);

sum = numbers.filter(x => x % 3 === 0).reduce((a, b) => a + b);

console.log(`filter: ${sum}`);

sum = 0;
numbers.forEach(x => {
    if (x % 3 === 0) {
        sum += x;
    }
});

console.log(`forEach: ${sum}`);

// Path: week4/work.js

for (const i in numbers) {
    console.log(numbers[i] % 3 === 0 ? numbers[i] : '');
}

for (const i of numbers) {
    console.log(i % 3 === 0 ? i : '');
}

numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i * i)
}
console.log(numbers)

let q = numbers.map((currentValue) => {
    return currentValue * currentValue
});

console.log(q)

let sun = numbers.reduce((c, n) => c+n, 0)
console.log(sun)