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
    const languagesHTML = Object.values(data.languages).map(lang => lang);
    const currenciesnameHTML = Object.values(data.currencies).map(currency => currency.name);
    const currenciessymbolHTML = Object.values(data.currencies).map(currency => currency.symbol);
    console.log(currenciesnameHTML);
    const html = ` <article class="country">
  <img class="country_img" src="${data.flags.png}" alt="TH" />
  <div class="country_data">
    <h3 class="country_name">${data.name.common}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class = "country_row"><span>🗣️ ${languagesHTML}</span></p>
    <p class = "country_row">🪙 ${
      Object.values(data.currencies).map((x) => `<span>${x.name} (${x.symbol})</span><br>`)
    }
  </div>
  
  </article>`;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1
  });
};

getCountry("Hong Kong");
getCountry("Saudi Arabia");
getCountry("Cook Islands");
getCountry("Japan");
getCountry("thailand");
getCountry("lao");
