/*
   Navegando pelos elementos da página.

   parentNode and parentElement, os 2 são a mesma coisa!
*/

const body = document.querySelector('body');

//console.log(body.parentNode);



/*
   Navegando pelos elementos da página.

   ChildNodes, esse pega os elementos filhos da página. e os espaços vazios.
   children, esse pega os elementos filhos da página. Porem pega só os elementos com texto.

*/

console.log(body.childNodes);

console.log(body.children);

console.log(body.firstElementChild);

console.log(body.lastElementChild);

console.log(body.firstChild);

console.log(body.lastChild);



/*
   Navegando pelos elementos da página.

   nextSibling e nextElementSibling esse pega o próximo elemento filho da página.

   previousSibling e previousElementSibling esse pega o próximo elemento filho da página.
*/

const header = document.querySelector('header');

console.log(header.nextSibling);

console.log(header.nextElementSibling);

const script = document.querySelector('body script');

console.log(script.previousSibling);

console.log(script.previousElementSibling);



