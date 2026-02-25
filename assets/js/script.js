const players = document.querySelectorAll(".player");

const infoBox = document.createElement("div");
infoBox.classList.add("player-info");
document.body.appendChild(infoBox);

players.forEach(player => {

    player.addEventListener("mouseenter", () => {
        infoBox.innerHTML = `
            <img src="${player.dataset.img}">
            <h3>#${player.dataset.number} ${player.dataset.name}</h3>
            <p><strong>${player.dataset.position}</strong></p>
            <p>${player.dataset.desc}</p>
        `;
        infoBox.style.display = "block";
    });

    player.addEventListener("mousemove", (e) => {
        infoBox.style.top = (e.clientY - 20) + "px";
        infoBox.style.left = (e.clientX + 20) + "px";
    });

    player.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
    });

});
