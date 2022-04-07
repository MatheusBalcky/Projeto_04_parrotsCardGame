//let cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
function selectAmountCards (){
    while (cards < 4 || cards % 2 !== 0 || cards > 14){
    alert("Número inválido digita novamente!");
    cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    }
    alert("Número válidado bom jogo!");
}
function addCards (){
    for(let i = 0; i < cards; i++){
        document.querySelector(".cards").innerHTML +=
        `
                <div class="card" onclick="clickCard(this)">
                    <img style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img style="width: 100px;" src="./images/gifs/metalparrot.gif" alt="parrot-img">
                </div>
        `
    }
}
function clickCard(elemento){
    console.log(elemento);
    elemento.classList.toggle("flip");
}

//selectAmountCards();
//addCards();