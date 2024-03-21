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
    },

    dadosCompletos: function() {
        return (
            this.nome && 
            this.idade && 
            this.filiacao[0] && 
            this.filiacao[1] && 
            this.endereco.rua && 
            this.endereco.cidade && 
            this.endereco.estado
        )
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
    },

    dadosCompletos: function() {
        return (
            this.nome && 
            this.idade && 
            this.filiacao[0] && 
            this.filiacao[1] && 
            this.endereco.rua && 
            this.endereco.cidade && 
            this.endereco.estado
        )
    }
}

obj3 = {
    nome : "Leônidas",
    idade : 1352675,
    filiacao : [],
    endereco : {
        rua : "",
        cidade : "",
        estado : ""
    },

    dadosCompletos: function() {
        return (
            this.nome && 
            this.idade && 
            this.filiacao[0] && 
            this.filiacao[1] && 
            this.endereco.rua && 
            this.endereco.cidade && 
            this.endereco.estado
        )
    }
}

objTeste = {
    item1 : "content",
    item2 : "content",
}
// O caminho que eu tava tomando pra fazer funcionar (óbviamente eu nunca iria conseguir desse jeito, só tava perdendo tempo)
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
// console.log(dadosCompletos(obj2));

// Nota ao professor: Eu tenho que assumir, fiquei empacado bastante tempo nessa atividade
// Resolvi usar o chat GPT, mas eu uso de maneira proativa e eficiente, de forma que sempre estudo e absorvo
// Uma boa tática é pedir pro GPT explicar detalhadamente algum trecho, e o trecho em questão que me serviu foi o seguite:

/*? "sim" : "não": Este é um operador ternário em JavaScript.
 Ele é uma forma concisa de escrever uma estrutura condicional
if...else. A expressão é avaliada como segue: se a expressão antes do ?
(pessoa.dadosCompletos()) for verdadeira (true), então retorna o valor
após o ? ("sim"), caso contrário, retorna o valor após o : ("não"). */

function verificar(pessoa) {
    const completos = pessoa.dadosCompletos() ? "sim" : "não";
    console.log("Dados completos:", completos);
}

console.log("Verificando pessoa 1 : ")
verificar(obj1)
console.log("Verificando pessoa 2 : ")
verificar(obj2)
console.log("Verificando pessoa 3 : ")
verificar(obj3)