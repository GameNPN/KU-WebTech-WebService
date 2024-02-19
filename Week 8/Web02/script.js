document.addEventListener("DOMContentLoaded", function () {
    const countriesContainer = document.querySelector(".sectionMain");
    let data_all = [];
  
    // Initial load
    const req = new XMLHttpRequest();
    req.open("GET", `https://restcountries.com/v3.1/all`);
    req.onload = function () {
      const data = JSON.parse(req.responseText);
      data_all = data;
      if (req.status >= 200 && req.status < 400) {
        data.slice(0, 3).forEach((country) => {
          addCountryToElement(country);
        })
      } else {
        console.log('error');
      }
    };
    req.send();
    
    // Search
    const searchInput = document.getElementById("query");
    searchInput.addEventListener("input", function (e) {
      const value = e.target.value.toLowerCase();
      const filteredData = data_all.filter((country) => {
        return country.name.common.toLowerCase().includes(value);
      });
      console.log(filteredData);
  
      if(filteredData.length === 0){
        removeCountryInElement();
        return;
      } else {
        countriesContainer.innerHTML = "";
        filteredData.slice(0, 3).forEach((country) => {
          addCountryToElement(country);
        });
      }
    });
  
    // Functions Remove and Add
    const removeCountryInElement = function () {
      countriesContainer.style.display = 'flex'
      html = `
      <div class="divnotfound">
        <svg width="250px" height="250px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M503.53152 344.4224m-262.5024 0a262.5024 262.5024 0 1 0 525.0048 0 262.5024 262.5024 0 1 0-525.0048 0Z" fill="#F2FAFE" /><path d="M388.08576 886.35392v-79.5648h0.6144l54.40512 79.5648h17.37728V777.5232h-17.98144v78.49984h-0.6144L388.096 777.5232h-17.83808v108.83072H388.096z m102.26688 15.23712l52.8896-140.22656h-14.92992l-53.0432 140.22656h15.08352z m76.06272-15.23712l9.90208-27.2896h45.568l9.91232 27.2896h19.0464L609.24928 777.5232h-20.2752l-41.60512 108.83072h19.0464z m50.14528-41.92256h-34.90816l17.22368-47.69792h0.6144l17.07008 47.69792z" fill="#DFF1FB" /><path d="M279.42912 725.46304v-0.04096l-3.47136 0.04096C164.33152 725.46304 73.6256 636.68224 71.71072 526.4384L71.68 522.9056C71.68 411.0336 163.14368 320.33792 275.968 320.33792c102.912 0 188.04736 75.4688 202.20928 173.62944h4.47488v-1.36192c0-127.32416 103.04512-230.77888 230.94272-232.83712l3.8912-0.03072C847.17568 259.7376 952.32 364.00128 952.32 492.5952c0 128.6144-105.14432 232.86784-234.83392 232.86784l2.60096-0.03072v0.03072H279.43936z" fill="#DFF1FB" /></svg>
        <p>Not Found!!<p/>
      </div>
      `
  
      countriesContainer.innerHTML = html;
    };
  
    const addCountryToElement = function (country) {
      const flags = country.flags ? country.flags.png : "https://restcountries.com/data/afg.svg";
      const name = country.name.common;
      const countryRegion = country.region;
      const lang = country.languages ? Object.values(country.languages)[0] : "N/A";
      const currencies = country.currencies ? Object.values(country.currencies).map((x) => `${x.name} (${x.symbol})`).join(", ") : "N/A";
      const population = country.population ? country.population.toLocaleString() : "N/A";
      const borders = country.borders ? country.borders.join(", ") : "N/A";
      const capital = country.capital ? country.capital : "N/A";
  
      const express = new RegExp(searchInput.value, "gi"); // g: global, i: case insensitive
      const replace = `<span class="highlight">${searchInput.value}</span>`;
      motiflyname = name.replace(express, replace);
  
      const html = `
      <article class="country">
        <img src="${flags}" alt="" class="country_img">
        <div class="country_data"> 
          <h3 class="country_name">${motiflyname}</h3>
          <h4 class="country_region">${countryRegion}</h4>
          <p class="country_row"><span>🗣︎</span> ${lang}</p>
          <p class="country_row"><span>💰</span> ${currencies}</p>
          <p class="country_row"><span>🙍</span> ${population}</p>
          <p class="country_row"><span>🛂</span> ${borders}</p>
          <p class="country_row"><span>🗼</span> ${capital}</p>
        </div>
      </article>
      `;
      countriesContainer.insertAdjacentHTML("beforeend", html);
    };
  });