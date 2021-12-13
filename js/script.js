// porre lista delle email accetate
const emailList = ['Pino@gmail.com', 'Gino@outlook.com', 'Lino@outlook.it', 'Mino@gmail.com'];

// richiedere all'utente la sua email
const yourEmail = prompt('Inserisci la tua email');

// verificare l'email nella lista con una flag 
let correctEmail = false;

for (let i = 0; i < emailList.length; i++) {

    if (yourEmail.toLowerCase() === emailList[i].toLowerCase()) {
        correctEmail = true;
    }
}
// a seconda dell'esito dare una risposta all'utente
let outputHtml = document.querySelector('.ms_output')

if (correctEmail) {
    outputHtml.innerHTML= 'Email corretta: benvenuto!'
} else {
    outputHtml.innerHTML = 'Email errata!'
}

outputHtml.innerHTML += '<hr/>';

// --------------------------------------------------------------------------

// dal click del pulsante faccio girare entrambi i dadi
const diceButton = document.querySelector('.ms_output2 .ms_button'); 
let result = document.querySelector('.ms_output2 .ms_result');
let diceResult1 = document.querySelector('.ms_output2 .ms_dice1');
let diceResult2 = document.querySelector('.ms_output2 .ms_dice2');

diceButton.addEventListener('click', function() {

    // randomizer del primo dado da 1 a 6
    let dice1 = Math.floor(Math.random() * 6) + 1;
    diceResult1.innerHTML = `<p>Risultato del dado dell'umano:</p> <img src="./img/dice-${dice1}.jpg" alt="dice-1">`;

    // randomizer del secondo dado da 1 a 6
    let dice2 = Math.floor(Math.random() * 6) + 1;
    diceResult2.innerHTML = `<p>Risultato del dado del computer:</p> <img src="./img/dice-${dice2}.jpg" alt="dice-2">`;

    // decretare chi ha vinto
    if (dice1 > dice2) {
        result.innerHTML = 'L\'Umano ha vinto';
    } else if (dice1 < dice2) {
        result.innerHTML = 'Il Computer ha vinto';
    } else {
        result.innerHTML = 'Pareggio';
    }
})



