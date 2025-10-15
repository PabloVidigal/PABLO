//Estrutura de Repetição em JavaScript
// Fazer um algoritmo que imprima na tela todos os números inteiros
// positivos de n a 1.
const numero = 10;
// Comando for
console.log("Contar usando o comando for");
for(let contador = numero; contador > 0; contador--){
  console.log("Numero: " + contador);
}
// Comando while
console.log("Contar usando comando while");
let contador = numero;
while(contador > 0){
  console.log("Numero: " + contador);
  contador--;
}
// Comando do while
console.log("Contar usando comando do while");
contador = numero;
do {
  console.log("Numero: " + contador);
  contador--;
}while(contador > 0);