/* Faça um programa que, dado um conjunto de N números, determine o menor
valor, o maior valor e a soma dos valores. */
let conjuntoN = [4, 64, 9, 555, 19, 2134, 23, 12, 98, 7, 32, 86,54,364]

let max = Math.max(...conjuntoN);
let min = Math.min(...conjuntoN);

function somarValores(n1, n2) {
    return n1 + n2
}

console.log("O maior valor da lista é: " + max,"\nO menor valor da lista é: " +
min + "\nE a soma dos dois é: " + somarValores(max, min));