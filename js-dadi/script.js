/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//funzione numeri random
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
let numeroComputer = Math.floor(Math.random() * 6) + 1;

console.log ( numeroGiocatore, numeroComputer )

if ( numeroGiocatore > numeroComputer){
    console.log (`il giocatore ha vinto: ${numeroGiocatore} - ${numeroComputer}`)
}
else if ( numeroGiocatore < numeroComputer ) {
    console.log (`il computer ha vinto: ${numeroGiocatore} - ${numeroComputer}`)
}
else {
    console.log (`il computer e il giocatore hanno pareggiato`)
}