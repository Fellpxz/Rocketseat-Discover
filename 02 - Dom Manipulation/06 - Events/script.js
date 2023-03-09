/*
   Eventos!
*/

function print(){
    console.log("print");
}



/*
   Eventos!

   Keyboard events
*/

const input = document.querySelector("input");

input.onkeydown = function(){
    console.log("keydown");
}



/*
   Eventos!

   Adding Event via Js!
*/

const h2 = document.querySelector("h2")

h2.addEventListener("click", function(){
    console.log("click");
})



/*
   Eventos!

   Adding Event via Js - Other Methods
*/

const h3 = document.querySelector("h3");

h3.onclick = function(){
    console.log("click");
}

//Funciona do mesmo jeito, porem só conseguimos fazer um evento, para fazer mais de 1 precisamos usar o addEventListener!



/*
   Eventos!

   Argument Event
*/

const argument = document.querySelector(".argument");

argument.onkeypress = function(event){
    console.log(event.key);
}
