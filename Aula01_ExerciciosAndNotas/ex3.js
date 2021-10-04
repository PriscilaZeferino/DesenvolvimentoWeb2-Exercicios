//Crie a função média que recebe um array de números e
//retorna a média desses números
//A média deve ser arredondada para um número inteiro.

var notas1 = [7,7,7];
var notas2 = [5,3,3,4.5, 2]; 

function calcularMedia(notas) {
    let total = 0;
    notas.forEach(function(notas) {
        total+=notas;
    });
    return Math.round(total/notas.length);
}

// console.log(calcularMedia(notas1));
console.log(calcularMedia(notas2));