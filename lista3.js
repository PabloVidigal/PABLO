// EXERCICIO 1
let Q = 0.05;   
let D = 0.2;    
let C = 130;    
let J = (Math.pow(Q, 1.85)) * 10.643 / (Math.pow(D, 4.87) * Math.pow(C, 1.85));
console.log("Perda de carga (J):", J.toFixed(6));


// EXERCICIO 2
let publico = 10000; 
let renda = (publico * 0.10 * 5) + (publico * 0.50 * 10) + (publico * 0.30 * 20) + (publico * 0.10 * 40);
console.log("Renda total do jogo: R$", renda.toFixed(2));


// EXERCICIO 3
let raio = 0.3;    
let altura = 0.5;  
const precoAluminio = 155; 
let area = (Math.PI * Math.pow(raio, 2) * 2) + (2 * Math.PI * raio * altura);
let custo = area * precoAluminio;
console.log("Custo da lata: R$", custo.toFixed(2));


// EXERCICIO 4
let A = 10;
let B = 20;
console.log("Antes da troca: A =", A, "B =", B);
let temp = A;
A = B;
B = temp;
console.log("   Depois da troca: A =", A, "B =", B);

//EXERCICIO 5
let custoFabrica = 50000;
let distribuidor = custoFabrica * 0.12;
let impostos = custoFabrica * 0.30;
let custoConsumidor = custoFabrica + distribuidor + impostos;
console.log("Custo ao consumidor: R$", custoConsumidor.toFixed(2));


// EXERCICIO 6
const num1 = 123;
let unidade = num1 % 10;
let dezena = Math.floor((num1 % 100) / 10);
let centena = Math.floor(num1 / 100);
let resultado = unidade * 100 + dezena * 10 + centena;
console.log (resultado);
