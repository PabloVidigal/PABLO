//EXERCICIO 1
let x1 = 2, y1 = 3;
let x2 = 7, y2 = 8;
let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log("Distância entre A e B:", distancia.toFixed(2));
//

// EXERCICIO 2
let salarioFixo = 2000;
let tvLCD = 3;     // qtd de TVs vendidas
let tvLED = 4;
let tvPlasma = 2;
let comissao = (tvLCD * 50) + (tvLED * 60) + (tvPlasma * 55);
let salarioTotal = salarioFixo + comissao;
console.log("2) Salário total do vendedor: R$", salarioTotal.toFixed(2));
//

// EXERCICIO 3
let P = 500;      
let i = 0.01;     
let n = 12;       
let FV =  ((Math.pow(1 + i, n) - 1) / i)* P;
console.log(" Valor acumulado da aplicação: R$", FV.toFixed(2));
//

// EXECICIO 4
let valorPrestacao = 1000;
let taxaJuros = 2;     
let tempoAtraso = 15;  
let valorAtualizado = valorPrestacao + (valorPrestacao * (taxaJuros/100) * tempoAtraso);
console.log("Valor da prestação atualizada: R$", valorAtualizado.toFixed(2));
//