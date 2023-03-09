// Arrow Function, dentro das funções temos uma maneira mais moderna de escrevermos elas.

const sayMyName = (name) =>{
    console.log(name)
}

sayMyName('Felipe')

// Vamos entender agora as Callback Function.

function miNombre(nombre){
    nombre()
}

miNombre(
    () => {
        console.log("estou em uma callback")
    }
)