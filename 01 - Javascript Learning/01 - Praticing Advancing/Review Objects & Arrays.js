//Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

// Como pegamos apenas, um opção do objeto.

console.log(person.name);

// Com interpolação!

console.log(`${person.name} tem ${person.age} anos`);

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// Acessar valores dentro do array.

console.log(animals[0])

// Total de objetos na lista.

console.log(animals.length)

// Acessando valores de Objetos.

console.log(animals[2].name)

// É muito raro termos array, que guardam nomes e objetos. Geralmente ela segue um padrão de só um tipo de valor.