//Estrutura de Repetição em JavaScript
// Fazer um algoritmo que imprima na tela todos os números inteiros
// positivos de 1 a n.
const numero = 0;
// Comando for
console.log("Contar usando o comando for");
for(let contador = 1; contador <= numero; contador++){
  console.log("Numero: " + contador);
}
// Comando while
console.log("Contar usando comando while");
let contador = 1;
while(contador <= numero){
  console.log("Numero: " + contador);
  contador++;
}
// Comando do while
console.log("Contar usando comando do while");
contador = 1;
do {
  console.log("Numero: " + contador);
  contador++;
}while(contador <= numero)