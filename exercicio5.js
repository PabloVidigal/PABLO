// EXERCICIO 01
const numero = 150;
let calculo = Math.trunc(Math.sqrt(numero));
let verificacao2 = math.pow(calculo,2);
if(verificacao2 === numero){
    console.log("Numero inteiro: Quadrado Perfeito")
} else {
console.log("Numero não inteiro: Qudrado não Perfeito");
};

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
} if(pinturaMetalica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorPintura);
} if(vidroEletrico == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorVidro);
}if(direcaoHidraulica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorDirecao);
} if(arcondicionado == true || pinturaMetalica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura);
} if(arcondicionado == true || pinturaMetalica == true || vidroEletrico == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura + valorVidro);
} if(arcondicionado == true || pinturaMetalica == true || vidroEletrico == true || direcaoHidraulica == true){
    console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$", entrada + valorAr + valorPintura + valorVidro + valorDirecao);
} else{
console.log("Valor de fabrica: R$",entrada,"Valor de fabrica junto aos secundarios: R$",0);
}
// EXERCICIO 03

const ldA = 3;
const ldB = 3;
const ldC = 3;

if (ldA + ldB > ldC && ldA + ldC > ldB && ldB + ldC > ldA) {
    
    if (ldA == ldB && ldB == ldC) {
        console.log("É um triângulo | Triângulo Equilátero");
    } else if (ldA == ldB || ldA == ldC || ldB == ldC) {
        console.log("É um triângulo | Triângulo Isósceles");
    } else {
        console.log("É um triângulo | Triângulo Escaleno");
    }

} else {
    console.log("Não é um triângulo");
}

// EXERCICIO 04

const valorNm = 120;

let euro = "Euro";
let libraEsterlina = "Libra Esterlina";
let dolar = "Dolar";

let decisao = euro;

const valorEuro = 5.418;
const valorLibraEsterlina = 6.336;
const valorDolar = 5.189;

if(decisao == euro){
    let calculorEuro = (valorNm / valorEuro).toFixed(2);
    console.log("Conversão de Reais = R$",valorNm,"Para Euro = €",calculorEuro);
} else if(decisao == libraEsterlina){
    let calculorLibra = (valorNm / valorLibraEsterlina).toFixed(2);
    console.log("Conversão de Reais = R$",valorNm,"Para Libra = £",calculorLibra);
} else if(decisao == dolar){
     let calculorDolar = (valorNm / valorDolar).toFixed(2);
     console.log("Conversão de Reais = R$",valorNm,"Para Dolar = $",calculorDolar);
}

// EXERCICIO 05

const valorProduto = 250;
let formaPagamento1 = "À vista, dinheiro ou cheque";
let formaPagamento2 = "À vista, cartão de credito";
let formaPagamento3 = "Em 2 vezes, preço normal da etiqueta";
let formaPagamento4 = "Em 3 vezes, preço normal da etiqueta + 10% de juros";

let decisao1 = formaPagamento4;

if(decisao1 == formaPagamento1){
   let calculoA = valorProduto - (valorProduto * 0.10);
   console.log("Valor Inicial: R$",valorProduto,"Valor Final: R$",calculoA.toFixed(2)); 
} else if(decisao1 == formaPagamento2){
    let calculoB = valorProduto - (valorProduto * 0.05);
    console.log("Valor Inicial: R$",valorProduto,"Valor Final: R$",calculoB.toFixed(2)); 
} else if(decisao1 == formaPagamento3){
    let calculoC = valorProduto / 2;
    console.log("Valor Inicial: R$",valorProduto,"Valor Parcelado: R$",calculoC.toFixed(2),"Valor Final; R$",valorProduto); 
} else if(decisao1 == formaPagamento4){
    let calculoD = valorProduto + (valorProduto * 0.10);
    let parcela = calculoD / 3;
    console.log("Valor Inicial: R$",valorProduto,"Valor Parcelado: R$",parcela.toFixed(2),"Valor Final; R$",calculoD.toFixed(2)); 
}

//EXERCICIO 06

const litros = 10.250;

const alcool = "Alcool";
const dielsel = "Diesel";
const gasolina = "Gasolina";

const alcool1 = 4.805;
const diesel2 = 5.953;
const gasolina3 = 6.565;

let decisao2 = alcool1;
let decisao3 = alcool;

if(decisao2 == alcool1){
    let calculoCombus1 = litros * alcool1;
    console.log("Tipo de combustivel:",decisao3,"Litros Abastecido: LT", litros.toFixed(3),"Preço em R$: ",calculoCombus1.toFixed(2));
} else if(decisao2 == diesel2){
    let calculoCombus2 = litros *diesel2;
    console.log("Tipo de combustivel:",decisao3,"Litros Abastecido: LT", litros.toFixed(3),"Preço em R$: ",calculoCombus2.toFixed(2));
} else if(decisao2 == gasolina3){
    let calculoCombus3 = litros * gasolina3;
    console.log("Tipo de combustivel:",decisao3,"Litros Abastecido: LT", litros.toFixed(3),"Preço em R$: ",calculoCombus3.toFixed(2));
};
