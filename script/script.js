let cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
function selectAmountCards (){ // função de seleção das cartãoc contendo a condicional para o jogo começar
    while (cards < 4 || cards % 2 !== 0 || cards > 14){
    alert("Número inválido digita novamente!");
    cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    }
    alert("Número válidado bom jogo!");
}
function addCards (){ // função para add os cartões no canva do jogo
    for(let i = 0; i < cards; i++){
        document.querySelector(".cards").innerHTML +=
        `
            <div class="card" onclick="clickCard(this)">
                <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                <img class="back hidden" style="width: 100px;" src="./images/gifs/metalparrot.gif" alt="parrot-img">
            </div>
        `
    }
}
function randomCards(){
    
}
function clickCard(elemento){ // fazer o flip no cartão e trocar de imagem
    console.log(elemento);
    elemento.classList.toggle("flip");
    elemento.querySelector(".front").classList.toggle("hidden");
    elemento.querySelector(".back").classList.toggle("hidden");
}

selectAmountCards();
addCards();