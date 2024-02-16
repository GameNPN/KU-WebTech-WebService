const countries = document.querySelector(".countries");
let dataname = []; // Declare dataname with let
let sortedNames = []; // Declare sortedNames array
let commonbyregion = [];
let region = [];

const req = new XMLHttpRequest();
req.open("GET", `https://restcountries.com/v3.1/all`);
req.onload = function () {
  const data = JSON.parse(req.responseText);
  sortedNames = data.map((country) => country.name.common).sort();
  dataname = sortedNames.slice(); // Copy sorted names to dataname
  region = data.map((region) => region.region);
  // console.log(region);
  for (let i = 0; i < sortedNames.length; i++) {
    getCountry(sortedNames[i]); // Use sortedNames instead of dataname
  }
};
req.send();

const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    const lang = Object.values(data.languages);
    // console.log(lang); 
    const borders = Object.values(data.borders).slice(0, 3);
    const html = `
    <article class="country">
        <img src=${data.flags.png} alt="" srcset="" class="country_img">
         <div class="country_data"> 
             <h3 class="country_name">${data.name.common}</h3>
            <h4 class="country_region">${data.region}</h4>
            <p class="country_row"><span>🗣︎ </span>${lang[0]}</p>
            <p class="country_row">
            💰
                ${Object.values(data.currencies).map(
                  (x) => `<span>${x.name} (${x.symbol})</span><br>`
                )}
            </p>
            <p class="country_row"><span>🙍</span>${data.population}</p>
            <p class="country_row"><span>🛂</span>${borders}</p>
            <p class="country_row"><span>🗼</span>${data.capital}</p>
        </div>
    </article>
 `;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};

const getRegion = function (region) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/region/${region}`);
  req.send();
  req.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    for (let country of data) {
      console.log(country.name.common);
      getCountry(country.name.common);
    }
  });
};
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const query = document.getElementById("query").value.trim();

  if (query !== "") {
    countries.innerHTML = "";
    let found = false;

    for (let i = 0; i < sortedNames.length; i++) {
      // Change loop limit
      if (query.toLowerCase() == sortedNames[i].toLowerCase()) {
        found = true;
        // console.log(found);
        getCountry(sortedNames[i]);
        countries.style.display = "flex";
        break;
      }
    }

    for (let i = 0; i < region.length; i++) {
      // Change loop limit
      if (query.toLowerCase() == region[i].toLowerCase()) {
        found = true;
        // console.log(found);
        getRegion(region[i]);
        countries.style.display = "grid";
        break;
      }
    }

    if (!found) {
      const text = `<p>${query} Not found!</p>`;
      countries.style.display = "flex";
      countries.insertAdjacentHTML("beforeend", text);
    }
  } else {
    countries.innerHTML = "";
    for (let i = 0; i < sortedNames.length; i++) {
      // Change loop limit
      getCountry(sortedNames[i]);
      countries.style.display = "grid";
    }
  }
});
