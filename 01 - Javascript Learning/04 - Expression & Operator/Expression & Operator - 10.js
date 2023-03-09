/*
    Operador Condicional (Ternário)

    Dependendo da condição, nós receberemos valores diferentes.

    Condição então valor 1 se não valor 2, (conditionn ? value1 : value2)
*/

//  Exemplo - Café da Manhã!

let pão = true
let queijo = false

const niceBreakfast = pão && queijo ? 'Café top' : 'Café ruim';

console.log(niceBreakfast)

//  Maior de 18 - Drive Example

let age = 18

const canDrive = age >= 18 ? 'can drive' : 'can not drive'

console.log(canDrive)