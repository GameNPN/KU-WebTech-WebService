"use strict";
const countries = document.querySelector(".countries");

const getCountry = function (country) {
  console.log(country);
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country} `);
  req.send();

  req.addEventListener("load", function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText)
    const html = ` <article class="country">
  <img class="country_img" src="${data.flags.png}" alt="TH" />
  <div class="country_data">
    <h3 class="country_name">${data.name.common}</h3>
    <h4 class="country_region">${data.region}</h4>
  </div>
  </article>`;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1
  });
};

getCountry("Saudi Arabia");
