/*

ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato

*/

// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let max = 10;
let userNumber = Math.floor(Math.random() * max);
console.log('user ' + userNumber);

let cpuNumber = Math.floor(Math.random() * max);
console.log('cpu ' + cpuNumber);