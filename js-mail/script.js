/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
*/

// Lista di email degli invitati
const invitati = ["lmarras10@email.com", "davide.murittu@email.com", "giovanni.rossi@email.com", "anna.piras@email.com"];

// Chiediamo all'utente la sua email
let emailUtente = prompt("Inserisci la tua email:");

let emailTrovata = false;  // Variabile per tracciare se l'email è presente nella lista

// Controlliamo se l'email è nella lista degli invitati usando un ciclo for
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === emailUtente) {
        emailTrovata = true;  // Se troviamo l'email, impostiamo emailTrovata a true
        break;  // Uscita dal ciclo appena troviamo la corrispondenza
    }
}

// Stampa del messaggio in base all'esito del controllo
if (emailTrovata) {
    console.log("Benvenuto alla festa! Sei invitato.");
} else {
    console.log("Mi dispiace, non sei invitato alla festa.");
}
