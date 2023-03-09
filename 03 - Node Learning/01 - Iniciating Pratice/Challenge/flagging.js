/*
Crie 2 arquivos JavaScript.
O primeiro, irá exportar uma função chmada de getFlag()
que receperar o argumento tipo String
Essa função deverá buscar dentro do array process.argv a flag desejada, que é a String.
e ira retornar o valor da flag.

O segundo irá importar a funçar e passar a flag desejada.

iremos rodar no termial o segundo aqrivo passando as flags --name e --greeting.
para que seja impresso o nome e o greeting.
*/

//Criação da função getFlag!
/*Adição da String!*/

function getFlagValue(flag) {

    /*Essa função faz a seguinte coisa. ela pega o valor colocado no flag e soma mais um no console, ou seja ela vai localizar a flag no console e pegar o valor da frente dela!*/
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

module.exports = getFlagValue;
