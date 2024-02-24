/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente
os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres;
*/
let Pessoa1 = {
    altura: 178,
    sexo: "H",

}

let Pessoa2 = {
    altura: 179,
    sexo: "M",

}

let Pessoa3 = {
    altura: 167,
    sexo: "H",

}

Homens = [];
Mulheres = [];
AlturasMasc = [];
AlturasGeral = [];

function maxHeight() {
    return max(Pessoa1.altura, Pessoa2.altura, Pessoa3.altura)
}

const separar = () => {
    if (Pessoa1.sexo === "H") {
        Homens.push(Pessoa1);
    }

    if (Pessoa1.sexo === "M") {
        Mulheres.push(Pessoa1)
    }

    if (Pessoa2.sexo === "H") {
        Homens.push(Pessoa2);
    }

    if (Pessoa2.sexo === "M") {
        Mulheres.push(Pessoa2)
    }

    if (Pessoa3.sexo === "H") {
        Homens.push(Pessoa3);
    }

    if (Pessoa3.sexo === "M") {
        Mulheres.push(Pessoa3)
    }
}

const penerar = () => {
    for (let i = 0; i < Homens.lenght; i++) {
        AlturasMasc.append(Homens[i.altura])
    }
}


function media() {
    for(let i = 0; i<Homens.lenght; i++) {
        AlturasMasc.push(Homens.altura)
    }
    return AlturasMasc
}




/*Pessoa1.altura = prompt("Qual é a altura da primeira pessoa ? ");
Pessoa1.sexo = prompt("E o sexo ?");

Pessoa2.altura = prompt("Qual é a altura da segunda pessoa ? ");
Pessoa2.sexo = prompt("E o sexo ?");

Pessoa3.altura = prompt("Qual é a altura da terceira pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?"); */

separar();
console.log(Homens);
console.log(Mulheres);
console.log(penerar());