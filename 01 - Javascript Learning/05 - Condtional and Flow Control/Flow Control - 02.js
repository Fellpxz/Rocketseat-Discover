/*
    Switch

    É muito semelhante ao que vemos anteriormente podem temos uma construçaõ diferente!
*/

//  APP de uma Calculadora!

function calculate(num1, op, num2){
    let result = 0;

    switch (op) {
        case "+":
            result = num1 + num2
            break;

        case "-":
            result = num1 - num2
            break;

        case "*":
            result = num1 * num2
            break;

        case "/":
            result = num1 / num2
            break;
    
        default:
            console.log("não implementado!")
            break;
    }
    
    return result
}

console.log(calculate(12, "/", 3))

/*
    Enquanto eu fiz essa aprte eu esqueci diversas vezes no (Return), depois fazer uma aula de revisão para lembrar oque significa.
*/