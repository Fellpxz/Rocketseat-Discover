/*
    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(false  ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contexto onde um booleano é obrigatório(condicionais e loops)

    true 
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(Infinity  ? 'verdadeiro' : 'falso')