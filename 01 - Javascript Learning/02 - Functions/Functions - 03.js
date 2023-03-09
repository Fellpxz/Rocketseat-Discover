// Function scope
let subject 

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

//Primeiramente vamos entender que o subject de fora da função, não é o mesmo do de dentro. o que acontece é que ele passa pela função que muda o seu valor no processo, funciona basicamente como um escopo, só que da função.