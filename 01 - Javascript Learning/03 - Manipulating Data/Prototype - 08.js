/*

Manipulando Arrays 

*/

let techs = ["html", "css", "js"]



//Adcionar um item no fim.
techs.push("nodejs")

//Adcionar um item no começo.
techs.unshift("sql")

//remover item do fim.
//techs.pop()

//remover do começo.
//techs.shift()

//pegar somente alguns elementos do array.
//console.log(techs.slice(1, 2))

//remover 1 ou mais items em qualquer posição do array.
//techs.splice(1, 2)

//encontrar a posição de um elemento no array.
let index = techs.indexOf('css')

console.log(index)