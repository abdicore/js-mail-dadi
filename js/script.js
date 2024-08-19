/*

ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato

*/
//recupero elementi dal dom

const resultElement = document.getElementById('result')
const esitElement = document.getElementById('esit')


// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let max = 6;
let min = 1;

// Genera il numero per l'utente
let userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('user ' + userNumber); 
document.getElementById('result').innerHTML = 'User: ' + userNumber + '<br>';

// Genera il numero per la CPU
let cpuNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('cpu ' + cpuNumber); 
document.getElementById('result').innerHTML += 'CPU: ' + cpuNumber;

// 2 Stabilire il vincitore, in base a chi fa il punteggio più alto.
 if (userNumber === cpuNumber){
    console.log('hai pareggiato');
    //stampo in pagina
    document.getElementById('esit').innerHTML = 'User hai pareggiato';  
 }
 else if (userNumber > cpuNumber) {
    console.log('hai vinto');
    //stampo in pagina
    document.getElementById('esit').innerHTML = 'User hai vinto';  
} else  {
    console.log('hai perso');
    //stampo in pagina
    document.getElementById('esit').innerHTML += 'User hai perso';  
} 


// 3 Stampiamo in pagina i due tiri e il risultato


