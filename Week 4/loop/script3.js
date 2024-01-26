const data = [
	{ id: 1, value: 10 },
	{ id: 2, value: 5 },
	{ id: 3, value: 9 },
	{ id: 4, value: 12 },
	{ id: 5, value: 6 },
];

// สร้าง arr ที่มีแต่ value จากนั้นให้กรอกเฉพาะค่าที่ หารด้วย 3 ลงตัว แล้วจึงหารวมของผลที่ได้

// let arr = [];
// for (const iterator of data) {
//     iterator.value % 3 == 0 ? arr.push(iterator) : null
// }

let arr = data.map((v) => v.value)
    .filter((v) => v % 3 === 0)
    .reduce((c, p) => c + p)

console.log(arr)