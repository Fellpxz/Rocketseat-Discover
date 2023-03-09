// 1. Declare uma variável de nome Weight

var Weight = 70.9

// 2.  Que tipo de dado é uma variável acima?

console.log(typeof Weight)

/*

3. Declare uma váriavel e atribua valores para cada um dos dados:
-name: String
-age: Number (interger)
-star: Number (float)
- isSubscribed: Boolean

 */

let name = 'Felipe';
let age = 18;
let stars = 4.9;
let isSubscribed = true;


// 4. Atribua a o Objeto as mesmas váriaveis do exercicio 3! e fazer uma mensagem utilizando valores!

let student = {
    name : 'Felipe',
    age : 18,
    stars : 4.9,
    isSubscribed : true 
};

console.log(`${student.name} tem a idade ${student.age}
e ${Weight}kg`)

// 5.  Declare uma variável do tipo Array, de nome students e defina a ela nenhuma valor.

let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto da questão 4.(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)


//8. Crie um novo student e coloque na posição 1 do array students.

const John = {
    name : 'John',
    age : 24,
    stars : 4.0,
    isSubscribed : true 
}

students = [
    student
]

students[1] = John;

//console.log(students)

//7. Coloque no console a posição zero do Array acima.

console.log(students[0])

console.log(students[1])