//EXERCICIO 01
/*
function verificarNumero(numero){

    let verificar = Math.floor(numero /100000);
if (verificar === 3225) {
        return "Oeste";
    }
    if (verificar === 3223 || verificar === 3224) {
        return "Centro";
    }
    if (verificar === 3212) {
        return "Oeste"; 
    }
    if (verificar === 3241 || verificar === 3242 || verificar === 3243 || verificar === 3281) {
        return "Sul";
    }
    if (verificar === 3251 || verificar === 3285) {
        return "Bueno";
    }
    if (verificar === 3233 || verificar === 3291) {
        return "Campinas";
    }
    return "Bairro não identificado";

}

const numeroDeTelefone = 32121212;
console.log("O numero citado pertence ao bairro: " + verificarNumero(numeroDeTelefone))
*/

// EXERCICIO 02

function verificarPalindromo(numero) {
    if (numero < 10000 || numero > 99999) {
        console.log("O número precisa ter exatamente 5 dígitos.");
        return;
    }

    let digito1 = Math.floor(numero / 10000);         
    let digito2 = Math.floor((numero % 10000) / 1000); 
    let digito4 = Math.floor((numero % 100) / 10);    
    let digito5 = numero % 10;                         

 
    if (digito1 === digito5 && digito2 === digito4) {
        console.log("O número " + numero+" é palíndromo.");
    } else {
        console.log("O número " + numero+" não é palíndromo.");
    }
}
const entrada = 12321;
verificarPalindromo(entrada);

// EXERCICIO 03

function testeTriangulo(A,B,C){
    if(A* A ==B*B+C*C){
        return "Retângulo"
    }else if(A*A>B*B+C*C){
       return "Obtusângulo"
    }else if(A*A<B*B+C*C){
        return "Acutângulo"
    }
}
const a = 3;
const b = 3;
const c = 3;
console.log(testeTriangulo(a,b,c))

// EXERCICIO 04

function somaTresMenores(a, b, c, d) {
    let maior = a;
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    if (d > maior) {
        maior = d;
    }

    let somaTotal = a + b + c + d;

    return somaTotal - maior;
}

const An = 1;
const Bn = 2;
const Cn = 3;
const Dn = 4;
console.log(somaTresMenores(An,Bn,Cn,Dn))

// EXERCICIO 05

function calcularValorFinal(corEtiqueta, quantidade, valorUnitario) {
    let desconto = 0;

    if (corEtiqueta.toLowerCase() === "verde") {
        if (quantidade <= 10) {
            desconto = 0.05; 
        } else {
            desconto = 0.10;
        }
    } else if (corEtiqueta.toLowerCase() === "amarelo") {
        if (quantidade <= 5) {
            desconto = 0.15; 
        } else {
            desconto = 0.20; 
        }
    } else {
        
        return "Cor da etiqueta inválida.";
    }

    let valorTotal = quantidade * valorUnitario;
    let valorFinal = valorTotal - (valorTotal * desconto);

   return"Valor final a pagar: " + valorFinal;
}
const cor = "Verde";
const produtos = 8;
const valorCada = 100;
console.log(calcularValorFinal(cor,produtos,valorCada))