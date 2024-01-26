let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tablebody = document.getElementById("tablebody");
  const form = document.getElementById("addResultForm");

  for (const date of matchResults) {
    const row = document.createElement("tr");

    // Date
    const dateCell = document.createElement("td");
    dateCell.textContent = date.date;
    row.appendChild(dateCell);

    // Match (Home Team vs Away Team)
    const matchCell = document.createElement("td");
    matchCell.textContent = `${date.home_team} vs ${date.away_team}`;
    row.appendChild(matchCell);

    // Score
    const scoreCell = document.createElement("td");
    scoreCell.textContent = date.score;
    row.appendChild(scoreCell);

    // location
    const locationCell = document.createElement("td");
    locationCell.textContent = date.location;
    row.appendChild(locationCell);

    tablebody.appendChild(row);
  }

  function createNewRow(result) {
    const newRow = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = result.date;
    newRow.appendChild(dateCell);

    const matchCell = document.createElement("td");
    matchCell.textContent = `${result.home_team} vs ${result.away_team}`;
    newRow.appendChild(matchCell);

    const scoreCell = document.createElement("td");
    scoreCell.textContent = result.score;
    newRow.appendChild(scoreCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = result.location;
    newRow.appendChild(locationCell);

    tablebody.appendChild(newRow);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const date = formData.get("date");
    const homeTeam = formData.get("homeTeam");
    const awayTeam = formData.get("awayTeam");
    const score = formData.get("score");
    const location = formData.get("location");

    const newResult = {
      date: date,
      home_team: homeTeam,
      away_team: awayTeam,
      score: score,
      location: location,
    };

    // Add the new result to the matchResults array
    matchResults.push(newResult);
    
    // Add the new result to the table
    createNewRow(newResult);
  });
});
