const parrots = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let cardsBoxDom = document.querySelector(".cards");
let seconds = 0;
let mins = 0;
let watchId;
let cardsSelected = [];
let points = 0;
let plays = 0;

function start(){// * A FUNÇÃO INICIA O JOGO PERGUNTANDO AS CARTAS LOGO APÓS, CALCULA QUANTOS TIPOS FIGURAS PAR VAI TER, EM SEGUIDA FORMA UMA ARRAY QUE VAI SERVIR COMO "PACK" DE BARALHO QUE EM SEGUIDO VAI SER EMBARALHO OS ELEMENTOS E SERÁ INSERIDO NA TELA ATRAVÉS DE OUTRO LOOP
    let cardsPack = [];
    let numbersCards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    while (numbersCards < 4 || numbersCards % 2 !== 0 || numbersCards > 14){
        alert("Número inválido digita novamente!");
        numbersCards = Number(prompt("Com quantas cartas você deseja jogar? (De 4 à 14, apenas números pares)"));
    }
    if (cardsBoxDom.innerHTML !== '\n        '){
        cardsBoxDom.innerHTML = `\n        `;
        plays = 0;
        cardsSelected = [];
        points = 0;
        cardsPack = [];
    }
    // ^ LOOP QUE DEFINI EM UMA ARRAY QNTOS TIPOS DE FIGURA VAI TER
    for(let i = 0; i < numbersCards/2; i++){             
        cardsPack.push(parrots[i]);
        cardsPack.push(parrots[i]);
    }
    //console.log("Resultado dos tipos de figura precisa ser 2: ", typeFigures); 
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
    clearInterval(watchId);
    mins = 0;
    seconds = 0;
    watchId = setInterval(watch, 1000);
}
function watch(){ // * FUNÇÃO DO RELÓGIO
    let watchHtml = document.querySelector(".watch");
    seconds ++;
    if (seconds > 59){
        seconds = 0;
        mins++;
    }
    watchHtml.innerHTML = `${zeroAhead(mins)}:${zeroAhead(seconds)}`;
    console.log('teste');
}
function zeroAhead (num){ // * FUNÇÃO Q PONHE O ZERO NA FRENTE DOS NUMBER NO WATCH
    if (num < 10){
        num = "0" + num;
    }
    return num;
}
function comparator(){ // * ACESSORIO PARA A FUNÇÃO .SORT
    return Math.random() - 0.5;
}
function flipCard(card){// * FUNÇÃO PARA FLIPAR A CARTA                        
    card.classList.toggle("flip");
    card.querySelector(".front").classList.toggle("hidden");
    card.querySelector(".back").classList.toggle("hidden");
}
function clickCard(element){// * AÇÃO DE CLICAR NO CARD FUNÇÃO
    flipCard(element); // flipa o card
    element.removeAttribute("onclick"); // retira o click do clicado
    element.classList.toggle("pointerOff"); //desliga o pointer
    element.classList.remove("unflipped");  // retira sua class de "unflipped"
    cardsSelected.push(element);
    plays++;
    let endGameTest = document.querySelector(".unflipped");
    if (endGameTest != null ){
        if (cardsSelected.length === 2){ // verifica se 2 cartões foram clicados
            let allCardsUnflipped = cardsBoxDom.querySelectorAll(".card.unflipped"); // seleciona todos os lementos unflipped
            for (let i = 0; i < allCardsUnflipped.length; i++){ // remove o click de todas q estão "unflipped"
                allCardsUnflipped[i].removeAttribute("onclick");
            }
    
            if (cardsSelected[0].innerHTML !== cardsSelected[1].innerHTML){ // se forem 2 cartas viradas e diferentes
                console.log("CARTÕES DIFERENTES VIRANDO!");
                setTimeout(autoFlip, 1000); // auto flipa as cartas e recebe suas propriedades novamente
                
            } else if (cardsSelected[0].innerHTML === cardsSelected[1].innerHTML){
                console.log ("CARTÕES IGUAIS");
                cardsSelected = []; // zera as cartas selecionada
                addClickAgain(); // add o click novamente nas cartas q não tão viradas
                points++;
            }
        }
    } else {
        setTimeout(endGame, 500);
    }
    
}
function autoFlip(){// * FUNÇÃO DO AUTOFLIP SE CARTAS FOREM !=
    for(let i = 0; i < 2; i++){
        cardsSelected[i].classList.toggle("flip");
        cardsSelected[i].querySelector(".front").classList.toggle("hidden");
        cardsSelected[i].querySelector(".back").classList.toggle("hidden");
        cardsSelected[i].classList.toggle("pointerOff");
        cardsSelected[i].classList.add("unflipped");
    }
    addClickAgain();
    console.log("Auto flip iniciado", cardsSelected);
    cardsSelected = []; // zera as cartas selecionada
}
function addClickAgain(){ // * FUNÇÃO Q ADD OS CLICKS AGAIN APÓS JOGADA PAR
    let allCardsUnflipped = cardsBoxDom.querySelectorAll(".card.unflipped");
    for (let i = 0; i < allCardsUnflipped.length; i++){ 
        allCardsUnflipped[i].setAttribute("onclick", "clickCard(this)");
    }
}
function endGame (){ // * FUNÇÃO QUE FINALIZA UMA RODADA
    clearInterval(watchId);
    alert(`Você ganhou em ${plays} jogadas e no tempo de, ${zeroAhead(mins)}:${zeroAhead(seconds)}`);
    alert(`Atenção se quiser jogar novamente aperte no botão abaixo Start / Restart`);
    mins = 0;
    seconds = 0;
}