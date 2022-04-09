const parrots = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let cardsBoxDom = document.querySelector(".cards");
let typeFigures = [];

function comparator(){
    return Math.random() - 0.5;
}

// * A FUNÇÃO INICIA O JOGO PERGUNTANDO AS CARTAS LOGO APÓS, CALCULA QUANTOS TIPOS FIGURAS PAR VAI TER, EM SEGUIDA FORMA UMA ARRAY QUE VAI SERVIR COMO "PACK" DE BARALHO QUE EM SEGUIDO VAI SER EMBARALHO OS ELEMENTOS E SERÁ INSERIDO NA TELA ATRAVÉS DE OUTRO LOOP
function start(){
    let numbersCards = Number(prompt("Quantas cartas deseja jogar?(Min: 4 Max: 14)"));
    while (numbersCards < 4 || numbersCards % 2 !== 0 || numbersCards > 14){
        alert("Número inválido digita novamente!");
        numbersCards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    }

    // ^ LOOP QUE DEFINI EM UMA ARRAY QNTOS TIPOS DE FIGURA VAI TER
    for(let i = 0; i < numbersCards/2; i++){             
        typeFigures.push(parrots[i]);
    }
    //console.log("Resultado dos tipos de figura precisa ser 2: ", typeFigures);

    let cardsPack = [];

    // ^ ESSE LOOP FAZ UM PACK DO BARALHO COM A QUANTIDADE DE FIGURAS ACIMA
    for (let i = 0; i < numbersCards; i++){              
        if (i >= typeFigures.length ){
            i = 0;
        }
        if (cardsPack.length === numbersCards) break;
        cardsPack.push(typeFigures[i]);
    }
    // ^ EMBARALHA AS CARTAS
    cardsPack.sort(comparator);                               
    //console.log("Resultado do baralho embaralhado ser 4: ", cardsPack);
    // ^ LOOP DE DESTRIBUIÇÃO DAS CARTAS ALEATÓRIA
    for (let i = 0; i < numbersCards; i++){               
        cardsBoxDom.innerHTML +=
        `
            <div class="card unflipped" onclick="clickCard(this)">
                <img class="front" src="./images/front.png" alt="parrot-img">
                <img class="back hidden" src="./images/gifs/${cardsPack[i]}.gif" alt="parrot-img">
            </div>
        `
    }
}

// * FUNÇÃO PARA FLIPAR A CARTA
function flipCard(card){                           
    card.classList.toggle("flip");
    card.querySelector(".front").classList.toggle("hidden");
    card.querySelector(".back").classList.toggle("hidden");
}

let cardsSelected = [];
function clickCard(element){
    flipCard(element); // flipa o card
    element.removeAttribute("onclick"); // retira o click do clicado
    element.classList.toggle("pointerOff"); //desliga o pointer
    element.classList.remove("unflipped");
    cardsSelected.push(element);
    let allCards = cardsBoxDom.querySelectorAll(".card.unflipped");
    if (cardsSelected.length === 2){
        for (let i = 0; i < allCards.length; i++){
            allCards[i].removeAttribute("onclick");
        }
        if (cardsSelected[0].innerHTML !== cardsSelected[1].innerHTML){ // se forem 2 cartas viradas e diferentes
            console.log("CARTÕES DIFERENTES VIRANDO!");
            setTimeout(autoFlip, 1000);
        } else if (cardsSelected[0].innerHTML === cardsSelected[1].innerHTML){
            console.log ("CARTÕES IGUAIS");
            cardsSelected = [];
        }
    }
}
function autoFlip(){
    for(let i = 0; i < 2; i++){
        cardsSelected[i].classList.toggle("flip");
        cardsSelected[i].querySelector(".front").classList.toggle("hidden");
        cardsSelected[i].querySelector(".back").classList.toggle("hidden");
        cardsSelected[i].setAttribute("onclick", "clickCard(this)");
        cardsSelected[i].classList.toggle("pointerOff");
        cardsSelected[i].classList.add("unflipped");
    }
    console.log("Auto flip iniciado", cardsSelected);
    cardsSelected = [];
} 