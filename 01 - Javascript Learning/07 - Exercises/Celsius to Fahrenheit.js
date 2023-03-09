/* 
    Celsius em Fahrenheit

    Crie uma função que receba uma String em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function transform(degrees){
    const celsiusExists = degrees.toUpperCase().includes('C');
    const fahrenheitExists = degrees.toUpperCase().includes('F');

    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Invalid degrees");

    }
}

    try{
        transform('50F')
        transform('50Z')
    }
    catch(Error){
        console.log(Error.message)
    }    

