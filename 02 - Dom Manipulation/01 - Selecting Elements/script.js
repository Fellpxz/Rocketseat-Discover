/*
    getElementById()  
*/

const elementId = document.getElementById('element-id');

console.log(elementId);

// console.log(document.getElementById("blog-title").innerHTML = "Blog Title");



/*
    getElementsByClassName()
*/

const elementsByClassName = document.getElementsByClassName('element-class');

console.log(elementsByClassName);



/*
    getElementsByTagName()
*/

const elementsByTagName = document.getElementsByTagName('meta');

console.log(elementsByTagName);



/*
    querySelector()

    com esse elemento conseguimos selecionar o elemento que queremos pelo seletor, e com isso usando apenas o nome ou id ou a classe conseguimos usar o elemento.
*/

const querySelector = document.querySelector('body');

console.log(querySelector);



/*
    querySelectorAll()

    Conseguimos usar o forEach() para percorrer todos os elementos que queremos pelo seletor, e utilizando o querySelectorAll() isso se torna possivel.

*/

const querySelectorAll = document.querySelectorAll('.element-class');

//querySelectorAll.forEach(el => console.log(el));

console.log(querySelectorAll);
