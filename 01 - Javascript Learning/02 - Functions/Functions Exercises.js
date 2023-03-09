/* 
The Fortune Teller - Write a function named tellFortune that: 
Write a function named tellFortune that:
-takes 4 arguments: number of children, partner's name, geographic location, job title.
-outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

let tellFortune = (number, name, job, geographic) =>{
    output = `Você vai ser ${job} morando ${geographic}, casado com ${name} com ${number} filhos`
    console.log(output)
}


tellFortune(2, "Nataly", "Programador", "Dubai") 