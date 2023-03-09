/*
   Manipulando conteúdo.

   textContent: string - Conteúdo a ser manipulado.
*/

const textContent = document.querySelector('.text-content');


textContent.textContent += " Olá Mundo!";

// Tambem temos como concatenar, fazendo a seguinte +=

console.log(textContent.textContent);



/*
   Manipulando conteúdo.

   innerText: string - Conteúdo a ser manipulado.
*/

const innerText = document.querySelector('.inner-text');

innerText.innerText = " Olá Mundo!";



/*
   Manipulando conteúdo.

   innerHTML: string - Conteúdo a ser manipulado.
*/

const innerHTML = document.querySelector('.inner-html');

innerHTML.innerHTML = " Olá Mundo! <small>HTML</small>";



/*
   Manipulando conteúdo.

   value: string - Conteúdo a ser manipulado.
*/

const value = document.querySelector('input');

value.value = " Olá Mundo!";

console.log(value.value);



/*
   Manipulando Atributo.

   setAttribute: string - Atributo a ser manipulado.
*/

const header = document.querySelector('header');

header.setAttribute('id', 'header');

const headerId = document.querySelector('#header');

header.removeAttribute('id');

header.setAttribute('class', 'bg header');

console.log(header.getAttribute('class'));
