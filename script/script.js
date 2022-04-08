const imgsCard = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

function start(){   // * FUNÇÃO PARA DESTRIBUIR AS CARTAS
    let numbersCards = Number(prompt("Quantas cartas deseja jogar?(Min: 4 Max: 14)"));
    for (let i = 0; i < numbersCards; i++){
        document.querySelector(".cards").innerHTML +=
        `
            <div class="card" onclick="flipCard(this)">
                <img class="front" src="./images/front.png" alt="parrot-img">
                <img class="back hidden" src="./images/gifs/metalparrot.gif" alt="parrot-img">
            </div>
        `
    }
}
function flipCard(elemento){      // * FUNÇÃO PARA FLIPAR A CARTA
    elemento.classList.toggle("flip");
    elemento.querySelector(".front").classList.toggle("hidden");
    elemento.querySelector(".back").classList.toggle("hidden");
}