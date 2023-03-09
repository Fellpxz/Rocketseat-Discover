/*
Type conversion (typecasting) vs Type coersion

Alteração de um tipo de dado para outro tipo.
*/

console.log('9' +  5)

// Aqui tem um exemplo de Coersion, aonde o JS mudou o 5 para uma string para complementar o 9.

console.log(Number('9') +  5)

// Aqui temos um Conversion, uma mudança que nós fazemos explicitamente para mudar um dado.

/*
Manipulando Strings e Números.

Transformar String em Número e Número em String.
*/

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))