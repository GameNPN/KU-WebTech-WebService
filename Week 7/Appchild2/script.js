document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const fruitlist = document.getElementById("fruitlist");
  const img = document.createElement("img");

  img.src = "810f251c-c903-4b06-b5fc-94269676d6bc.jpg";
  img.alt = "K Long Pung";

  container.appendChild(img);

  const fruits = ["Apple", "Banana", "Mango", "Stawberry", "Orange"];

  fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitlist.appendChild(li);
  });
});
