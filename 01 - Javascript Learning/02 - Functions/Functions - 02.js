// Function Expression

// Parameters
const sum = function(number1, number2){
    total = (number1 + number2)
    return total
}

//sum(2, 3) // ao fazer isso estaremos passandos argumentos.

let num = sum(5, 10)

console.log(`a soma é ${num}`)

// Outra forma de entender funções é ver tudo como um liquidificador.

function makeJuice(fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = makeJuice('banana', ' maçã')

console.log(copo)