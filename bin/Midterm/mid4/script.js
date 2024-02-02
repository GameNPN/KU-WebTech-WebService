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

  const filterItemsByCategory = (category) => items.filter((item) => item.category === category);
  const getTotalCost = (items) => items.reduce((total, item) => total + item.price, 0);
  const getAveragePrice = (items) => getTotalCost(items) / items.length;

  const filterFruit = filterItemsByCategory("Fruit");
  const filterVegetable = filterItemsByCategory("Vegetable");
  const filterCucumber = items.filter((item) => item.name === "Cucumber");
  const sortByName = filterFruit.slice().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  const sortbyprice = items.slice().sort((a, b) => a.price - b.price);
  const sortVegetByPrice = filterVegetable.slice().sort((a, b) => b.price - a.price);
  const sortFruitByPrice = filterFruit.slice().sort((a, b) => a.price - b.price);
  const selecFirstLowPriceFruit = sortFruitByPrice[0];
  const filterVegetPriceOver1 = sortVegetByPrice.filter((item) => item.price >= 1);

  resultDiv.innerHTML = `
    <p>Name : ${items.map((item) => item.name).join(", ")} </p>
    <p>Fruit : ${filterFruit.map((item) => item.name).join(", ")} </p>
    <p>Total Cost : $ ${getTotalCost(items).toFixed(1)} </p>
    <p>Sorted by Price : ${sortbyprice.map((item) => item.name).join(", ")} </p>
    <p>Cucumber Details : ${JSON.stringify(filterCucumber)} </p>
  `;

  resultDiv2.innerHTML = `
    <p>Fruit Total Cost : $ ${getTotalCost(filterFruit).toFixed(1)} </p>
    <p>Fruit Min Price : ${JSON.stringify(selecFirstLowPriceFruit)}</p>
    <p>Sorted by Name : ${JSON.stringify(sortByName.map((item) => `${item.name}, $${item.price}`).join(", "))} </p>
    <p>Average : $ ${getAveragePrice(filterVegetable).toFixed(1)} </p>
    <p>Price of Vegetable > $1 : ${JSON.stringify(filterVegetPriceOver1)} </p>
  `;
});
