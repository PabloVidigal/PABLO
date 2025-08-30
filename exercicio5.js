// EXERCICIO 01
const numero = Math.sqrt(150);
let verificacao = Number.isInteger(numero);

if(verificacao == true){
    console.log("Numero inteiro: Quadrado Perfeito")
}
else if(verificacao == false){
console.log("Numero não inteiro: Qudrado não Perfeito");
}

// EXERCICIO 02
const entrada = 20000;

let arcondicionado = true;
const valorAr = 1750;

let pinturaMetalica = false;
const valorPintura = 800;

let vidroEletrico = true;
const valorVidro = 1200;

let direcaoHidraulica = true;
const valorDirecao = 2000;

if( arcondicionado == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr);
}else if(arcondicionado == true || pinturaMetalica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura);
}else if(arcondicionado == true || pinturaMetalica == true || vidroEletrico == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura + valorVidro);
}else if(arcondicionado == true || pinturaMetalica == true || vidroEletrico == true || direcaoHidraulica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura + valorVidro + valorDirecao);
} else{
console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$",0);

// EXERCICIO




  
}
