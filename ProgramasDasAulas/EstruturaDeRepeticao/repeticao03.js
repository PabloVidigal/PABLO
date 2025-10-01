//Estrutura de Repetição em JavaScript
// Fazer um programa que calcule e imprima o valor do somatório 
// de todos os números inteiros positivos de 1 a n.

const numero = 10;
// Comando for
console.log("Somatorio usando o comando for");
let somatorio = 0;
for(let contador = 1; contador <= numero; contador++){
  somatorio+=contador;
}
console.log("Somatório: " + somatorio);
// Comando while
console.log("Somatorio usando comando while");
somatorio = 0;
let contador = 1;
while(contador <= numero){
  somatorio+=contador;
  contador++;
}
console.log("Somatório: " + somatorio);
// Comando do while
console.log("Somatorio usando comando do while");
contador = 1;
somatorio = 0;
do {
  somatorio+=contador;
  contador++;
}while(contador <= numero);
console.log("Somatório: " + somatorio);