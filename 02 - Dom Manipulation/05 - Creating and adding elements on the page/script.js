/*
   Criando e adcionando elementos!

   createElements() - Criando elementos

   appendElements() !
   prependElements()!

*/

const createDiv = document.createElement('div');

createDiv.innerHTML = 'Olá Mundo!';

// Appending!

const appendElements = document.querySelector('body');

appendElements.append(createDiv);

// Prepending!

const prependElements = document.querySelector('body');

//prependElements.prepend(createDiv);



/*
   Adcionando elementos!

   instertBefore() - Adcionando elementos
*/

const createDiv2 = document.createElement('div');

createDiv2.innerHTML = 'Olá Devs!';

// Inserting before

//const script = document.querySelector('script');

const header = document.querySelector('header');

appendElements.insertBefore(createDiv2, header.nextSibling);


