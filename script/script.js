let cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));

let cardGif4 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif"];
let cardGif6 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif"];
let cardGif8 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif"];
let cardGif10 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif"];
let cardGif12 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif"];
let cardGif14 = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"];



function comparador(){
    return Math.random() - 0.5;
}
function selectAmountCards (){ // função de seleção das cartãoc contendo a condicional para o jogo começar
    while (cards < 4 || cards % 2 !== 0 || cards > 14){
    alert("Número inválido digita novamente!");
    cards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    }
    alert("Número válidado bom jogo!");
}
function addCards (){ // função para add os cartões no canva do jogo
    if (cards === 4){
        cardGif4.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card ${cardGif4[i].replace(".gif","")}" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif4[i]}" alt="parrot-img">
                </div>
            `
        }
    } else if (cards === 6){
        cardGif6.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif6[i]}" alt="parrot-img">
                </div>
            `
        }
    } else if (cards === 8){
        cardGif8.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif8[i]}" alt="parrot-img">
                </div>
            `
        }
    } else if (cards === 10){
        cardGif10.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif10[i]}" alt="parrot-img">
                </div>
            `
        }
    } else if (cards === 12){
        cardGif12.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif12[i]}" alt="parrot-img">
                </div>
            `
        }
    } else if (cards === 14){
        cardGif14.sort(comparador);
        for(let i = 0; i < cards; i++){
            document.querySelector(".cards").innerHTML +=
            `
                <div class="card" onclick="clickCard(this)">
                    <img class="front"style="width: 100px;" src="./images/front.png" alt="parrot-img">
                    <img class="back hidden" style="width: 100px;" src="./images/gifs/${cardGif14[i]}" alt="parrot-img">
                </div>
            `
        }
    }
}
let cardClicked = [];
function clickCard(elemento){ // fazer o flip no cartão e trocar de imagem
    elemento.classList.toggle("flip");
    elemento.querySelector(".front").classList.toggle("hidden");
    elemento.querySelector(".back").classList.toggle("hidden");
    cardClicked.push(elemento);
    if (cardClicked.length > 1){
        
    }
    console.log(cardClicked);
}

selectAmountCards();
addCards();