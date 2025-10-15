//Estrutura de Repetição em JavaScript
// Fazer um programa que calcule e imprima o valor do produtório 
// de todos os números inteiros positivos de 1 a n.

const numero = 10;
// Comando for
console.log("Produtório usando o comando for");
let produtorio = 1;
for(let contador = 1; contador <= numero; contador++){
  produtorio*=contador;
}
console.log("Produtório: " + produtorio);
// Comando while
console.log("Produtório usando comando while");
produtorio = 1;
let contador = 1;
while(contador <= numero){
  produtorio*=contador;
  contador++;
}
console.log("Produtório: " + produtorio);
// Comando do while
console.log("Produtório usando comando do while");
contador = 1;
produtorio = 1;
do {
  produtorio*=contador;
  contador++;
}while(contador <= numero);
console.log("Produtório: " + produtorio);