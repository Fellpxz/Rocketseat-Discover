/*
    Transformar notas escolares!

    Crie um algoritimo que transforme as notas do sistemas numérico para sistema de notas em caracteres tipo A B C.

    - De 90 para cima  -  A
    - Entre 80 - 89  -  B
    - Entre 70 - 79  -  C
    - Entre 60 - 69  -  D
    - Menor que 60  -  F
*/

// Meu módulo de resolução! 

function schoolGrade(grade){
    if(grade >= 90 && grade <= 100){
        console.log("A")
    }
    else if(grade >= 80 && grade <= 89){
        console.log("B")
    }
    else if(grade >= 60 && grade <= 79){
        console.log("C")
    }
    else if(grade >= 60 && grade <= 69){
        console.log("D")
    }
    else if(grade >= 0 && grade < 60){
        console.log("F")
    }
    else{
        console.log("VALOR INVALIDO")
    }
}

schoolGrade(100)
schoolGrade(10)
schoolGrade(-1)

// Módulo do Professor!

function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if(scoreA){
        scoreFinal = 'A'
    }
    else if(scoreB){
        scoreFinal = "B"
    }
    else if(scoreC){
        scoreFinal = "C"
    }
    else if(scoreD){
        scoreFinal = "D"
    }
    else if(scoreF){
        scoreFinal = "F"
    }
    else{
        scoreFinal = "NOTA INVÁLIDA"
    }

    return scoreFinal
}

console.log(getScore(20))


