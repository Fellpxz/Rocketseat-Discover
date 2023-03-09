/*
    Sistema de gastos familiar 

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        - Receitas: []
        - Despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

//  Definição das váriaveis dos gastos e da entrada monetária.

let family = {
    incomes: [2500, 3200, 200, 1100],
    expenses: [3000, 1000, 150, 392.50,]
}

//  Função para fazer a soma de todos valores dentro das váriaveis.

function sum(family){
    let total = 0;

    for(let value of family){
        total += value
    }

    return total
}

function calculateBalance(){
    //  Variavel para pegar cada os incomes e expenses da familia.

    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    //  Soma dos dois.
    
    const total = calculateIncomes - calculateExpenses;

    //  Variavel para saber se está tudo certo ou errado.

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}


calculateBalance()

//  Não consegui realizar está sozinho. Irei revisar e explicar o código!