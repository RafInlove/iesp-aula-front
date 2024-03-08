/*Desenvolva uma função que realize a soma de uma quantidade variáveis de valores a ser informado na sua invocação. Por exemplo:


somar(1,2);
somar(1,2,3,4);
somar(2,3,4,5,6,7,8);
somar(2,34,5,6,7,8,98,90,3,3,4,4,56,7,78,7,8,9);*/

let nums = [];
let total = 0;

function somar() {

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return nums += total;

}


// Adicione quantos números quiser à soma !
console.log(somar(1, 1));
