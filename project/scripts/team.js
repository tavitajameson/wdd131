
const teams = [
    { name: "Atlanta Hawks", logo: "images/hawks.svg" },
    { name: "Boston Celtics", logo: "images/celtics.svg" },
    { name: "Brooklyn Nets", logo: "images/Nets.svg" },
    { name: "Charlotte Hornets", logo: "images/hornets.svg" },
    { name: "Chicago Bulls", logo: "images/bulls.svg" },
    { name: "Cleveland Cavaliers", logo: "images/cavs.svg" },
    { name: "Dallas Mavericks", logo: "images/mavs.svg" },
    { name: "Denver Nuggets", logo: "images/nuggets.svg" },
    { name: "Detroit Pistons", logo: "images/pistons.svg" },
    { name: "Golden State Warriors", logo: "images/warriors.svg" },
    { name: "Houston Rockets", logo: "images/rockets.svg" },
    { name: "Indiana Pacers", logo: "images/pacers.svg" },
    { name: "LA Clippers", logo: "images/clippers.svg" },
    { name: "Los Angeles Lakers", logo: "images/lakers.svg" },
    { name: "Memphis Grizzlies", logo: "images/grizzlies.svg" },
    { name: "Miami Heat", logo: "images/heat.svg" },
    { name: "Milwaukee Bucks", logo: "images/bucks.svg" },
    { name: "Minnesota Timberwolves", logo: "images/timberwolves.svg" },
    { name: "New Orleans Pelicans", logo: "images/pelicans.svg" },
    { name: "New York Knicks", logo: "images/knicks.svg" },
    { name: "Oklahoma City Thunder", logo: "images/thunder.svg" },
    { name: "Orlando Magic", logo: "images/magic.svg" },
    { name: "Philadelphia 76ers", logo: "images/sixers.svg" },
    { name: "Phoenix Suns", logo: "images/suns.svg" },
    { name: "Portland Trail Blazers", logo: "images/blazers.svg" },
    { name: "Sacramento Kings", logo: "images/kings.svg" },
    { name: "San Antonio Spurs", logo: "images/spurs.svg" },
    { name: "Toronto Raptors", logo: "images/raptors.svg" },
    { name: "Utah Jazz", logo: "images/jazz.svg" },
    { name: "Washington Wizards", logo: "images/wizards.svg" }
];

let favoriteTeams = JSON.parse(localStorage.getItem("favoriteTeams")) || [];

const teamList = document.getElementById("teamList");

function renderTeams() {
    teamList.innerHTML = "";

    teams.forEach(team => {
        const isFavorite = favoriteTeams.includes(team.name);

        const div = document.createElement("div");
        div.classList.add("team-item");

        div.innerHTML = `
      <img src="${team.logo}" alt="${team.name} Logo" class="team-logo" loading="lazy">
      <h3>${team.name}</h3>
      <button class="fav-btn">${isFavorite ? "★ Saved" : "☆ Add Favorite"}</button>
    `;

        div.querySelector(".fav-btn").addEventListener("click", () => {
            toggleTeamFavorite(team.name);
        });

        teamList.appendChild(div);
    });
}

function toggleTeamFavorite(teamName) {
    if (favoriteTeams.includes(teamName)) {
        favoriteTeams = favoriteTeams.filter(t => t !== teamName);
    } else {
        favoriteTeams.push(teamName);
    }

    localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeams));
    renderTeams();
}

renderTeams();
