//Crie uma função que recebe dois parametros: uma string e um número
//A  função deve imprimir a string esse número de vezes.

function writeMessage (msg, number) {
    for (let count = 0; count < number; count++){
        console.log(msg)
    }
}

writeMessage("Eu consegui!", 3)
writeMessage("Escrevendo texto e exibindo com nodejs", 5)