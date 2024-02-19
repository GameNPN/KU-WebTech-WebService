document.addEventListener("DOMContentLoaded", () => {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open('GET', 'https://api-football-beta.p.rapidapi.com/standings?season=2024&league=39');
  xhr.setRequestHeader('X-RapidAPI-Key', '5d43951b7bmshd724e7cefe3d5c0p138e87jsn2bd1e383cb94');
  xhr.setRequestHeader('X-RapidAPI-Host', 'api-football-beta.p.rapidapi.com');
  
  xhr.send(data);
  console.log(data);
});
