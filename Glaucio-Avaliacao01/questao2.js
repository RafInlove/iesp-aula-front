/*Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade
de números pares e a quantidade de números ímpares.*/
const numerosPares = document.querySelector("#par");
const numerosImpares = document.querySelector("#impar");

var numeros = [];
var pares = 0;
var impares = 0;
for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite um número inteiro:"));
  if (numeros[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}