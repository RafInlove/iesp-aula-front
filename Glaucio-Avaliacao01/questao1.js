/*Supondo que a população de um país A seja da ordem de 80000 habitantes com
uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
calcule e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/
let paisA = 80000;
let paisB = 200000;
let anos = 0;
while(paisA < paisB) {
  paisA = paisA + (paisA * 0.03);
  paisB = paisB + (paisB * 0.0150);
  anos++;
}

console.log("A população do país A vai ultrapassar a população do país B em " + anos + " anos.");