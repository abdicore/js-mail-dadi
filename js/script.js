/*

ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato

*/

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let max = 10;
let min = 1;
let userNumber = Math.floor(Math.random() * max);
console.log('user ' + userNumber);

let cpuNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('cpu ' + cpuNumber);

// 2 Stabilire il vincitore, in base a chi fa il punteggio più alto.
 
if (userNumber > cpuNumber) {
    console.log('hai vinto');  
} else {
    console.log('hai perso');
}

// 3 Stampiamo in pagina i due tiri e il risultato

//recupero elementi dal dom