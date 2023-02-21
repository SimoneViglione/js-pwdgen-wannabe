const userFirstName = prompt('Inserisci il tuo Nome');

console.log(userFirstName);

const userSurname = prompt ('Ora inserisci il tuo Cognome');

console.log(userSurname);

const userFavColor = prompt ('Infine inserisci il tuo colore preferito');

console.log(userFavColor);

const pwSfavillante = userFirstName + userSurname + userFavColor;

document.getElementById('password').innerHTML = pwSfavillante + "23";

