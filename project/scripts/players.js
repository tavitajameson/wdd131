
const players = [
    {
        name: "LeBron James",
        image: "images/lebron.png"
    },
    {
        name: "Stephen Curry",
        image: "images/curry.png"
    },
    {
        name: "Giannis Antetokounmpo",
        image: "images/giannis.png"
    },
    {
        name: "Kevin Durant",
        image: "images/durant.png"
    }
];

let favoritePlayers = JSON.parse(localStorage.getItem("favoritePlayers")) || [];

const playerList = document.getElementById("playerList");

function renderPlayers() {
    playerList.innerHTML = "";

    players.forEach(player => {
        const isFavorite = favoritePlayers.includes(player.name);

        const playerItem = document.createElement("div");
        playerItem.classList.add("player-card");

        playerItem.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-img" loading="lazy">
      <h3>${player.name}</h3>
      <button class="fav-btn">${isFavorite ? "★ Saved" : "☆ Add Favorite"}</button>
    `;

        playerItem.querySelector(".fav-btn").addEventListener("click", () => {
            togglePlayerFavorite(player.name);
        });

        playerList.appendChild(playerItem);
    });
}

function togglePlayerFavorite(playerName) {
    if (favoritePlayers.includes(playerName)) {
        favoritePlayers = favoritePlayers.filter(p => p !== playerName);
    } else {
        favoritePlayers.push(playerName);
    }

    localStorage.setItem("favoritePlayers", JSON.stringify(favoritePlayers));
    renderPlayers();
}

renderPlayers();
