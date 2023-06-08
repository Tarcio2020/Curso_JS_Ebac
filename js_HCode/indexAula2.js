//Criamos uma função colocamos paramentros e agora podemos usala dentro de uma variável
/*
function somar(x1, x2) {

    return x1 + x2;

}

let resultado = somar("tarcio", "2000");

console.log(resultado);
*/

//---------------------------------------------
/*
function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(9, 9, "**");

console.log(resultado);
*/

//---------------------------------------------

//Arrow Function
// eval = estamos falando para o JS o que queremos ele já vai enterpretar poe si só.
/*
let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(2, 2, "**");

console.log(resultado);
*/

//---------------------------------------------

//Eventos
//focar na janela
/*
window.addEventListener('focus', event => {

    console.log("focus");

});

//quando o usuário clicar
document.addEventListener('click', event => {

    console.log("click");

});
*/

//---------------------------------------------

//Datas
/*
let agora = new Date();
//data no javascript é armazenada em milisegundos começando de 1970

console.log(agora.toLocaleDateString("pt-BR"));

n = 13/11/1994
*/
//---------------------------------------------

//Array

let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){

    console.log(index, value);

});


//---------------------------------------------

//Objeto
/*let celular = function(){

    this.cor = "azul";

}

let objeto = new celular();

console.log(objeto.cor);
*/

/*let celular = function(){

    this.cor = "azul";

    this.ligar = function() {

        console.log("uma ligação");
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar());
*/