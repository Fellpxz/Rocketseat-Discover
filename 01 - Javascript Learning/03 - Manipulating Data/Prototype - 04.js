/*
Manipulando Strings e Arrays

Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _.
*/

let phrase = "Eu quero viver oamor"

let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore)

// split separa, e join coloca coisas nos lugares selecionados.