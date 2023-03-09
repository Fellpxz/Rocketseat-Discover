// Function hoisting

sayNyName();

function sayNyName(){
    console.log('Felipe')
}

// Funções criadas dessa forma sofrem o hoisting. É como se o JavaScript tivesse colocando elas para cima.

sayMyName();

const sayMyName = function(){
    console.log('Felipe')
}

// Quando fazemos uma função, como se ela fosse uma expressão ela não funciona.