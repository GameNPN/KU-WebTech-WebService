const items = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Carrot", category: "Vegetable", price: 0.5 },
  { name: "Banana", category: "Fruit", price: 0.8 },
  { name: "Cucumber", category: "Vegetable", price: 1.2 },
  { name: "Orange", category: "Fruit", price: 0.9 },
  { name: "Tomato", category: "Vegetable", price: 0.7 },
  { name: "Lettuce", category: "Vegetable", price: 0.3 },
  { name: "Grapes", category: "Fruit", price: 2 },
  { name: "Mushroom", category: "Vegetable", price: 1.5 },
  { name: "Strawberry", category: "Fruit", price: 1.8 },
  { name: "Blueberry", category: "Fruit", price: 2.5 },
  { name: "Potato", category: "Vegetable", price: 0.4 },
  { name: "Broccoli", category: "Vegetable", price: 1.1 },
  { name: "Mango", category: "Fruit", price: 1.7 },
  { name: "Spinach", category: "Vegetable", price: 0.6 },
  { name: "Cherry", category: "Fruit", price: 2.2 },
  { name: "Peas", category: "Vegetable", price: 0.9 },
  { name: "Peach", category: "Fruit", price: 1.3 },
  { name: "Pineapple", category: "Fruit", price: 1.5 },
  { name: "Celery", category: "Vegetable", price: 0.8 },
];
document.addEventListener("DOMContentLoaded", function () {
  const resultDiv = document.getElementById("result");
  const resultDiv2 = document.getElementById("result2");

  const filterfruit = items.filter((item) => item.category == "Fruit");
  const filterVegetable = items.filter((item) => item.category == "Vegetable");
  const filterCucumber = items.filter((item) => item.name == "Cucumber");
  const fruitprice = filterfruit.map((item) => item.price);
  const Vegetableprice = filterVegetable.map((item) => item.price);
  const price = items.map((item) => item.price);
  let sumprice = price.reduce((prev, curr) => prev + curr, 0);
  let sumfruitprice = fruitprice.reduce((prev, curr) => prev + curr, 0);
  let sumVegetprice = Vegetableprice.reduce((prev, curr) => prev + curr, 0);
  let average = sumVegetprice / filterVegetable.length;
  const sortByName = filterfruit.slice().sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  const sortbyprice = items.slice().sort(function (a, b) {
    return a.price - b.price;
  });

  const sortvegetbyprice = filterVegetable.slice().sort(function (a, b) {
    return b.price - a.price;
  });
  const sortfruitbyprice = filterfruit.slice().sort(function (a, b) {
    return a.price - b.price;
  });

  const selec_fristlowpricefruit = sortfruitbyprice[0];

  const sortbynamestr = JSON.stringify(sortByName);

  const filtervegetprice = sortvegetbyprice.filter((item) => item.price >= 1)

  // console.log(Vegetableprice);
  // console.log(sumVegetprice);
  // console.log(average);
  console.log(sortvegetbyprice);
  console.log(filtervegetprice);

  resultDiv.innerHTML = `
  <p>Name : ${items.map((item) => item.name).join(", ")} </p>
  <p>Fruit : ${filterfruit.map((item) => item.name).join(", ")} </p>
  <p>Total Cost : $ ${sumprice.toFixed(1)} </p>
  <p>Sorted by Price : ${sortbyprice.map((item) => item.name).join(", ")} </p>
  <p>Cucumber Details : ${JSON.stringify(filterCucumber)} </p>

  `;

  resultDiv2.innerHTML = `
  <p>Fruit Total Cost : $ ${sumfruitprice.toFixed(1)} </p>
  <p>Fruit Min Price : ${JSON.stringify(selec_fristlowpricefruit)}</p>
  <p>Sorted by Name : ${sortbynamestr} </p>
  <p>Average : ${average.toFixed(1)} </p>
  <p>Price of Vegetable > $1 : ${JSON.stringify(filtervegetprice)} </p>
  `;
});
