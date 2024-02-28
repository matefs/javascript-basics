

// Example object
let aparicoes = {
  "Guilherme": 1,
  "Cachorro": 2,
  "nome": 2,
  "vindo": 1,
  "newkey": {"newvalue": "newvalue inside a new dictionary"}
};

// Deleting the 'newkey' property
delete aparicoes['newkey']

// Printing the object after deletion
console.log(`\nAparicoes object after deleting the new key: ${JSON.stringify(aparicoes)}`); // Aparicoes object after deleting the new key: {"Guilherme":1,"Cachorro":2,"nome":2,"vindo":1}


