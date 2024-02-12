"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img src=${data.flags.png} alt="" srcset="" class="country_img">
         <div class="country_data"> 
             <h3 class="country_name">${data.name.common}</h3>
            <h4 class="country_region">${data.region}</h4>
            <p class="country_row">
            🗣︎
              ${Object.values(data.languages).map(
                (x) => `<span>${x}</span><br>`
              )}
            </p>
            <p class="country_row">
            💰
                ${Object.values(data.currencies).map(
                  (x) => `<span>${x.name} (${x.symbol})</span><br>`
                )}
            </p>
            <p class="country_row"><span>🎉</span>${data.population}</p>
            <p class="country_row"><span>🛂</span>${data.borders}</p>
            <p class="country_row"><span>🗼</span>${data.capital}</p>
        </div>
    </article>
 `;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const query = document.getElementById("query").value.trim();

  if (query !== "") {
    countries.innerHTML = "";
    getCountry(query);
  }
});

getCountry("Thailand");
getCountry("Japan");
getCountry("Italy");
