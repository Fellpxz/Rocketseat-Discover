/*
    Throw

    and Try to Catch!
*/

function sayMyName(name = ''){
    if(name === ""){
        throw 'Nome é obrigatório'
    }
    else{
        console.log(name)
    }

   return name
}

//  Catch!

try{
    sayMyName("Felipe")
}
catch(e){
    console.log(e)
}

console.log("Após a função de erro!")

/*
   Interessante, porem talvez precisarei dar uma revisada! Mas explicando o código basicamente temos uma função na qual se não colocarmos um nome ele irá nos retornar um erro no  qual vai parar parte da aplicação!
*/