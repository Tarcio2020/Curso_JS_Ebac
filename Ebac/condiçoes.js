10 < 5 // maior ou menor que

10 <= 5  // maior ou igual 

10 == 10 //igual

10 == "10" // essa declaração é verdadeira

10 === "10" // essa é falsa pois o terceiro igual vai vertificar a string

// 10 !=("ou !==") "10" // diferente


10 > 5 && 5 < 2 // os dois são verdadeiros

10 > 5 || 5 < 2  // um ou outro é verdadeiro


! //operador de negação

!true; // isso é false pois uma negação de verdade é mentira



let idade = prompt("Digite sua idade:")
    idade = parseInt(idade)

    if (idade >= 18) {
        console.log("Pode entrar")
    }
        else{
            console.log("Não pode entrar, MENOR DE IDADE")
        }



let idade = prompt("Digite sua idade:")
    idade = parseInt(idade)
    
    if (idade >= 18) {
        console.log("Pode entrar")
    } else if (estaAcompanhada == true) {
        console.log("Pode entar pois está acompnhado")
    } else {
        console.log("Não pode entrar, MENOR DE IDADE")
    }


idade = 22

let podeentrar = idade >= 18 ? true : false;