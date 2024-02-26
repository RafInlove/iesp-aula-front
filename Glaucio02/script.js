/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente
os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres;
*/
let Pessoa1 = {
    altura: "",
    sexo: ""
}

let Pessoa2 = {
    altura: "",
    sexo: ""
}

let Pessoa3 = {
    altura: "",
    sexo: ""
}

let Pessoa4= {
    altura: "",
    sexo: ""
}

let Pessoa5 = {
    altura: "",
    sexo: ""
}

let Pessoa6 = {
    altura: "",
    sexo: ""
}

let Pessoa7 = {
    altura: "",
    sexo: ""
}

let Pessoa8 = {
    altura: "",
    sexo: ""
}

let Pessoa9 = {
    altura: "",
    sexo: ""
}

let Pessoa10 = {
    altura: "",
    sexo: ""
}

let Pessoa11 = {
    altura: "",
    sexo: ""
}

let Pessoa12 = {
    altura: "",
    sexo: ""
}

let Pessoa13 = {
    altura: "",
    sexo: ""
}

let Pessoa14 = {
    altura: "",
    sexo: ""
}

let Pessoa15 = {
    altura: "",
    sexo: ""
}

Homens = [];
Mulheres = [];
AlturasMasc = [];
AlturasGeral = [];

function maxHeight() {
    return Math.max(
        Pessoa1.altura, Pessoa2.altura, Pessoa3.altura, Pessoa4.altura, Pessoa5.altura,
        Pessoa6.altura, Pessoa7.altura, Pessoa8.altura, Pessoa9.altura, Pessoa10.altura,
        Pessoa11.altura, Pessoa12.altura, Pessoa13.altura, Pessoa14.altura, Pessoa15.altura
        )
}

function mineight() {
    return Math.min(
        Pessoa1.altura, Pessoa2.altura, Pessoa3.altura, Pessoa4.altura, Pessoa5.altura,
        Pessoa6.altura, Pessoa7.altura, Pessoa8.altura, Pessoa9.altura, Pessoa10.altura,
        Pessoa11.altura, Pessoa12.altura, Pessoa13.altura, Pessoa14.altura, Pessoa15.altura
        )
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
        Mulheres.push(Pessoa3);
    }
    if (Pessoa4.sexo === "H") {
        Homens.push(Pessoa4);
    }
    if (Pessoa4.sexo === "M") {
        Mulheres.push(Pessoa4);
    }
    if (Pessoa5.sexo === "H") {
        Homens.push(Pessoa5);
    }
    if (Pessoa5.sexo === "M") {
        Mulheres.push(Pessoa5);
    }
    if (Pessoa6.sexo === "H") {
        Homens.push(Pessoa6);
    }
    if (Pessoa6.sexo === "M") {
        Mulheres.push(Pessoa6);
    }
    if (Pessoa7.sexo === "H") {
        Homens.push(Pessoa7);
    }
    if (Pessoa7.sexo === "M") {
        Mulheres.push(Pessoa7);
    }
    if (Pessoa8.sexo === "H") {
        Homens.push(Pessoa8);
    }
    if (Pessoa8.sexo === "M") {
        Mulheres.push(Pessoa8);
    }
    if (Pessoa9.sexo === "H") {
        Homens.push(Pessoa9);
    }
    if (Pessoa9.sexo === "M") {
        Mulheres.push(Pessoa9);
    }
    if (Pessoa10.sexo === "H") {
        Homens.push(Pessoa10);
    }
    if (Pessoa10.sexo === "M") {
        Mulheres.push(Pessoa10);
    }
    if (Pessoa11.sexo === "H") {
        Homens.push(Pessoa11);
    }
    if (Pessoa11.sexo === "M") {
        Mulheres.push(Pesso11);
    }
    if (Pessoa12.sexo === "H") {
        Homens.push(Pessoa12);
    }
    if (Pessoa12.sexo === "M") {
        Mulheres.push(Pessoa12);
    }
    if (Pessoa13.sexo === "H") {
        Homens.push(Pessoa13);
    }
    if (Pessoa13.sexo === "M") {
        Mulheres.push(Pessoa13);
    }
    if (Pessoa14.sexo === "H") {
        Homens.push(Pessoa14);
    }
    if (Pessoa14.sexo === "M") {
        Mulheres.push(Pessoa14);
    }
    if (Pessoa15.sexo === "H") {
        Homens.push(Pessoa15);
    }
    if (Pessoa15.sexo === "M") {
        Mulheres.push(Pessoa15);
    }
}

function penerar() {
    if (Homens.includes(Pessoa1)) {
        AlturasMasc.push(Pessoa1.altura)
        AlturasGeral.push(Pessoa1.altura)
    }
    if (Homens.includes(Pessoa2)) {
        AlturasMasc.push(Pessoa2.altura)
        AlturasGeral.push(Pessoa2.altura)
    }
    if (Homens.includes(Pessoa3)) {
        AlturasMasc.push(Pessoa3.altura)
        AlturasGeral.push(Pessoa3.altura)
    }
    if (Homens.includes(Pessoa4)) {
        AlturasMasc.push(Pessoa4.altura)
        AlturasGeral.push(Pessoa4.altura)
    }
    if (Homens.includes(Pessoa5)) {
        AlturasMasc.push(Pessoa5.altura)
        AlturasGeral.push(Pessoa5.altura)
    }
    if (Homens.includes(Pessoa6)) {
        AlturasMasc.push(Pessoa6.altura)
        AlturasGeral.push(Pessoa6.altura)
    }
    if (Homens.includes(Pessoa7)) {
        AlturasMasc.push(Pessoa7.altura)
        AlturasGeral.push(Pessoa7.altura)
    }
    if (Homens.includes(Pessoa8)) {
        AlturasMasc.push(Pessoa8.altura)
        AlturasGeral.push(Pessoa8.altura)
    }
    if (Homens.includes(Pessoa9)) {
        AlturasMasc.push(Pessoa9.altura)
        AlturasGeral.push(Pessoa9.altura)
    }
    if (Homens.includes(Pessoa10)) {
        AlturasMasc.push(Pessoa10.altura)
        AlturasGeral.push(Pessoa10.altura)
    }
    if (Homens.includes(Pessoa11)) {
        AlturasMasc.push(Pessoa11.altura)
        AlturasGeral.push(Pessoa11.altura)
    }
    if (Homens.includes(Pessoa12)) {
        AlturasMasc.push(Pessoa12.altura)
        AlturasGeral.push(Pessoa12.altura)
    }
    if (Homens.includes(Pessoa13)) {
        AlturasMasc.push(Pessoa13.altura)
        AlturasGeral.push(Pessoa13.altura)
    }
    if (Homens.includes(Pessoa14)) {
        AlturasMasc.push(Pessoa14.altura)
        AlturasGeral.push(Pessoa14.altura)
    }
    if (Homens.includes(Pessoa15)) {
        AlturasMasc.push(Pessoa15.altura)
        AlturasGeral.push(Pessoa15.altura)
    }

    if (Mulheres.includes(Pessoa1)) {
        AlturasGeral.push(Pessoa1.altura)
    }
    if (Mulheres.includes(Pessoa2)) {
        AlturasGeral.push(Pessoa2.altura)
    }
    if (Mulheres.includes(Pessoa3)) {
        AlturasGeral.push(Pessoa3.altura)
    }
    if (Mulheres.includes(Pessoa4)) {
        AlturasGeral.push(Pessoa4.altura)
    }
    if (Mulheres.includes(Pessoa5)) {
        AlturasGeral.push(Pessoa5.altura)
    }
    if (Mulheres.includes(Pessoa6)) {
        AlturasGeral.push(Pessoa6.altura)
    }
    if (Mulheres.includes(Pessoa7)) {
        AlturasGeral.push(Pessoa7.altura)
    }
    if (Mulheres.includes(Pessoa8)) {
        AlturasGeral.push(Pessoa8.altura)
    }
    if (Mulheres.includes(Pessoa9)) {
        AlturasGeral.push(Pessoa9.altura)
    }
    if (Mulheres.includes(Pessoa10)) {
        AlturasGeral.push(Pessoa10.altura)
    }
    if (Mulheres.includes(Pessoa11)) {
        AlturasGeral.push(Pessoa11.altura)
    }
    if (Mulheres.includes(Pessoa12)) {
        AlturasGeral.push(Pessoa12.altura)
    }
    if (Mulheres.includes(Pessoa13)) {
        AlturasGeral.push(Pessoa13.altura)
    }
    if (Mulheres.includes(Pessoa14)) {
        AlturasGeral.push(Pessoa14.altura)
    }
    if (Mulheres.includes(Pessoa15)) {
        AlturasGeral.push(Pessoa15.altura)
    }
}


function media() {
    let sum = 0;
    let n = AlturasMasc.length;

    for (let i = 0; i < AlturasMasc.length; i++) {
        sum = + AlturasMasc[i]
    }

    return sum / n;
}


Pessoa1.altura = prompt("Qual é a altura da primeira pessoa ? ");
Pessoa1.sexo = prompt("E o sexo ?");

Pessoa2.altura = prompt("Qual é a altura da segunda pessoa ? ");
Pessoa2.sexo = prompt("E o sexo ?");

Pessoa3.altura = prompt("Qual é a altura da terceira pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");

Pessoa4.altura = prompt("Qual é a altura da quarta pessoa ? ");
Pessoa4.sexo = prompt("E o sexo ?");

Pessoa5.altura = prompt("Qual é a altura da quinta pessoa ? ");
Pessoa5.sexo = prompt("E o sexo ?");

Pessoa6.altura = prompt("Qual é a altura da sexta pessoa ? ");
Pessoa6.sexo = prompt("E o sexo ?");

Pessoa7.altura = prompt("Qual é a altura da sétima pessoa ? ");
Pessoa7.sexo = prompt("E o sexo ?");

Pessoa8.altura = prompt("Qual é a altura da oitava pessoa ? ");
Pessoa8.sexo = prompt("E o sexo ?");

Pessoa9.altura = prompt("Qual é a altura da nona pessoa ? ");
Pessoa9.sexo = prompt("E o sexo ?");

Pessoa10.altura = prompt("Qual é a altura da décima pessoa ? ");
Pessoa10.sexo = prompt("E o sexo ?");

Pessoa11.altura = prompt("Qual é a altura da décima primeira pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");

Pessoa12.altura = prompt("Qual é a altura da décima segunda pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");

Pessoa13.altura = prompt("Qual é a altura da décima terceira pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");

Pessoa14.altura = prompt("Qual é a altura da décima quarta pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");

Pessoa15.altura = prompt("Qual é a altura da décima quinta pessoa ? ");
Pessoa3.sexo = prompt("E o sexo ?");


separar();
penerar();
console.log(`A menor altura do grupo é: ${mineight()}`);
console.log(`A maior altura é: ${maxHeight()}`);
console.log(`A média de altura dos homens é: ${media()}`)
console.log(`E o número de mulheres é: ${Mulheres.length}`)
