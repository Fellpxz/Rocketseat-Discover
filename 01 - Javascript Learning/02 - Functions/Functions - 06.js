/*
Function() Constructor

- expressão new
- criar um novo objeto
- this keyword
- Primeira letra maiuscula
*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const Felipe = new  Person("Felipe")

console.log(Felipe.walk())