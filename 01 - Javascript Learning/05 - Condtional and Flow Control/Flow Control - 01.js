/*
    IF e ELSE...
    
    Bom, seguindo o sistema lógico de um programação (se e se não.)
*/

//  APP de Temperatura!

let temperatura = 100;
let highTemperature = temperatura >= 37.5;
let mediumTemperature = temperatura < 37.5 && temperatura >= 37;

//  Uma dica interessante, é fazer as condicionais virarem váriaveis, para facilitar a aplicação.

if(highTemperature){
    console.log("Febre Alta")
}
else if(mediumTemperature){
    console.log("Febre Moderada")
}
else{
    console.log('Saudável')
}
    
