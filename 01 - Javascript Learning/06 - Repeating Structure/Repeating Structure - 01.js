/*
    Estrutura de Repetição 

    O primerio dentro desta vasta camada que vamos estudar é chamado de FOR (PARA)!

    Dentro do for conseguimos colocar alguamas coisas com o break, para parar a execução do loop e temos tambem o continue, para pular a execução do momento.
*/


//  Explicando tambem a construição do for, podemos descrever como: primeiro a definição e iniciação de uma variavel, e após uma condição de repetição, basicamente enquanto for verdadeiro o loop ira se repetir, e por último temos a expressão final que vai acontecer quando o loop terminar!

for(let i = 10; i > 0; i--){
    if(i === 5){
        // break;
        continue;
    }

    console.log(i)
}