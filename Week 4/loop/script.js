// simple for
// for (var i = 0; i < 10; i++) {
    // console.log(i+ " "); + Sticker
//     console.log(i+ "");
// }

const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// while (i < 10) {
//     console.log(i);
//     i++;
// }
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// arr.forEach(function(item) {
//     console.log(item);
// });

// arr.forEach(item => console.log(item));
// arr.forEach((v,i,a) => console.log(v,i,a));

const Person = {
    name: 'John',
    age: 30,
    weight: 88,
};

for (let key in Person) {
    console.log(`${key} => ${Person[key]}`);
}

for (let key of Object.keys(Person)) {
    console.log(`${key} => ${Person[key]}`);
}

