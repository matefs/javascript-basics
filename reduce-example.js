var array = [1,2,3,4,5]

var result = array.reduce((accumulator,item) => accumulator+item);

console.log(result)  // 15  (1+2+3+4+5) 



// String example:

const minhaString = "Reduce";
var minhaStringLetras = minhaString.split('')
const resultadoString = minhaStringLetras.reduce(concatenar, '');

// Função que concatena dois caracteres
function concatenar(acumulador, caractere) {
    console.log(`${acumulador}${caractere}`)
    return `${acumulador}${caractere}`;
}

// String de exemplo
console.log(resultadoString);  // Saída: "Reduce"


