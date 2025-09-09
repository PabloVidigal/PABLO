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