/*
    Estrutura de Repetição 

    O primerio dentro desta vasta camada que vamos estudar é chamado de FOR IN!
*/

let person = {
    name: 'Felipe',
    age: 30,
    weight: 88.6,
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}
