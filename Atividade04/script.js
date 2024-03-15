/*Crie dois objetos com a estrutura abaixo:

- Nome (tipo String)
- Idade (tipo Number)
- Filiacao (Array): nomeDoPai (tipo String) e nomeDaMae (tipo String)
- Endereco (tipo Objeto): rua (tipo String), cidade (tipo String) e estado (tipo String)
- dadosCompletos (tipo função) (verifica se os dados acimas estão preenchidos e retorna true,
caso positivo, e false, caso negativo)


Crie uma função que receba os dois objetos acima criados, imprima os valores de suas propriedades e por fim imprima o resultado da
função chamada dadosCompleto() que deve verificar se todos os campos estão preenhidos. */

obj1 = {
    nome : "Leonardo",
    idade : 15,
    filiacao : ["Rogério", "Dolores"],
    endereco : {
        rua : "Quinta com a quarta",
        cidade : "Cidadeville",
        estado : "Estadópolies"
    }
}

obj2 = {
    nome : "Bruno",
    idade : 51,
    filiacao : ["Rômulo", "Olivia"],
    endereco : {
        rua : "Terceira com a Segunda",
        cidade : "Municípilandia",
        estado : "Estadópolies"
    }  
}

objTeste = {
    item1 : "content",
    item2 : "content",
}

const dadosCompletos = (obj) => {
    let bool;
    for (let i = 0; i < obj; i++) {
        if (i= "") {
            bool = false;
        } else {
            bool = true;
        }
    }

    return bool;
}

console.log(dadosCompletos(objTeste));
// console.log(dadosCompletos(obj2));