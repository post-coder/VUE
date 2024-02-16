const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 37
}

// const nome = persona.nome;
// const cognome = persona.cognome;

// destrutturazione:
// dare più velocemente il valore ad una variabile se il nome di questa variabile coincide 
// con una proprietà dell'oggetto
const {nome, cognome, eta} = persona;


console.log(`${nome} ${cognome} ${eta}`);
// console.log(cognome);

// console.log(eta);
