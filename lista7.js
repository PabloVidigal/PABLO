//EXERCICIO 02
function calculoL1(a,b,c){
    return res = Math.pow(b,2) -4 * a * c;

}

const a = 3
const b = 9
const c = 5;

console.log(calculoL1(a,b,c));

//EXERCICIO 04

function calculoL2(b,a){
    return (1/3) * b*a;
}

const altura = 2;
const base = 3;
console.log(calculoL2(altura,base));


//EXERCICIO 03 - LISTA 02
function calculoL3(i,p,n){
    return ((Math.pow(1+i,n) - 1) / i) * p;
}

const n = 12;
const p = 0.01;
const i = 0.5;
console.log(calculoL3(i,p,n).toFixed(2));

//EXERCICIO 04 - LISTA 02

function calcularTaxa(valorP,taxaJ,tempoA){
    return valorP+(valorP *(taxaJ/100)*tempoA);
}

const valorP = 200;
const taxaJ = 0.50;
const tempoA = 20;

console.log(calcularTaxa(valorP,taxaJ,tempoA));


// EXERCICIO 06 - LISTA 03

function inverterNumero(entrada){
    let unidade = entrada % 10;
    let dezena = Math.floor((entrada % 100) / 10);
    let centena = Math.floor(entrada / 100);
    let resultado = unidade * 100 + dezena * 10 + centena;
    return resultado
}

const entrada = 123;
console.log(inverterNumero(entrada)) 