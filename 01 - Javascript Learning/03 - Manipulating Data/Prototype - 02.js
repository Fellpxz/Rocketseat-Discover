/*
Manipulando Strings e Números.

Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.
*/

let word = "Paralelepipedo"
console.log(word.length)

let num = 1234
console.log(String(num).length)

// Number não recebe a propriedade de length, então precisamos converter para um string.

// Transformando um número quebrado com 2 casas decimais e trocar o ponto por vírgula.

let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))