

// Exemplo com atribuição de valores
let variavelLet = 5;
var variavelVar = 10;
const variavelConst = 15;

console.log("Inicial - let:", variavelLet, "var:", variavelVar, "const:", variavelConst);

// Modificando valores
variavelLet = 20;
variavelVar = 25;
// Tentativa de modificar uma constante (gerará um erro)
// variavelConst = 30; // Erro: Assignment to constant variable

console.log("Após modificação - let:", variavelLet, "var:", variavelVar, "const:", variavelConst);

// Exemplo com listas
let listaLet = [1, 2, 3];
var listaVar = [4, 5, 6];
const listaConst = [7, 8, 9];

console.log("Lista Inicial - let:", listaLet, "var:", listaVar, "const:", listaConst);

// Modificando listas
listaLet.push(10);
listaVar.pop();
// Tentativa de modificar uma lista constante (gerará um erro)
// listaConst[0] = 11; // Erro: Assignment to constant variable
//listaConst.pop()  // you can add and remove from list but not modify the value.

console.log("Lista Após Modificação - let:", listaLet, "var:", listaVar, "const:", listaConst);
