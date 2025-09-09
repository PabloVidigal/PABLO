//EXERCICIO 01

const reais = 5.00;

const euro = 6.617;
const libraEsterlina = 6.816;
const dolar = 5.071;
const lene = 3.018;

let decisao = 1;
let calculo = 0;

switch(decisao){
    case 1:
            decisao = "Euro"
            simbolo = "€"
            calculo = reais / euro;
        break;
    case 2:
            decisao = "Euro"
            simbolo ="£"
            calculo = reais / libraEsterlina;
        break;
    case 3:
            decisao = "Euro"
            simbolo ="$"
            calculo = reais / dolar;
        break;
    case 4:
            decisao = "Euro"
            simbolo = "¥"
            calculo = reais / lene;
        break;
    default:
        console.log("Digite uma opção valida");

}
console.log("Sua escolha foi " + decisao + " quantidade em reais "+ reais + " quantidade convertida para: "+ simbolo + calculo.toFixed(2));

//EXERCICIO 02
const quantidadeReais = 1000;
let calculo1 = 0;
let decisa = 1;

switch(decisa){
    case 1:
        decisa = "À vista, dinheiro ou cheque, 10% de desconto";
        calculo1 = quantidadeReais - (quantidadeReais * 0.10);
        break;
    case 2:
        decisa = "À vista, cartão de credito, 5% de desconto";
        calculo1 = quantidadeReais - (quantidadeReais *0.05);
        break;
    case 3: 
        decisa = "Em 2 vezes, preço normal da etiqueta sem juros";
        calculo1 = quantidadeReais /2;
        break;
    case 4:
        decisa = "Em 3 vezes, preço normal da etiqueta + 10% de juros";
        calculo1 = quantidadeReais + (quantidadeReais *0.10);
        break;
    default:
        console.log("Opção invalida tente novamente")
}
console.log("Sua escolha para pagamento foi: " + decisa + " Total da compra conforme forma de pagamento: "+ calculo1);

//EXERCICIO 03
const ent1 = 1;
const ent2 = 2;
let sim =  "";
let opc = 1;

switch(opc){
    case 1:
    sim = "+";
    signifi = "Adição";
    calculo2 = ent1 + ent2;
        break;
    case 2:
        sim = "-"
        signifi = "Subtração"
        calculo2 = ent1 + ent2;
        break;
    case 3:
        sim = "*";
        signifi = "Multiplicação";
        calculo2 = ent1 + ent2;
        break;
    case 4:
        sim = "/";
        signifi = "Divisão";
        calculo2 = ent1 + ent2;
        break;
    default:
        console.log("opção indisponivel");
}
console.log("Sua opção foi: " + sim + " Calculo foi: " + calculo2);

// EXERCICIO 04

let tipoCombustivel = 2;  
let litros = 20;          
let preco = 0;
let valor = 0;

switch (tipoCombustivel) {
    case 1:
        preco = 4.805; 
        break;
    case 2:
        preco = 5.953; 
        break;
    case 3:
        preco = 6.565; 
        break;
    default:
        console.log("Tipo de combustIvel invAlido");
}

if (preco > 0) {
    valor = preco * litros;
    console.log("Valor a ser pago: R$ " + valor.toFixed(2));
}

// EXERCICIO 05

let nomeFazendeiro = "Fulano de tal";
let tipoPulverizacao = 4;   
let area = 500;
let precoPorAcre = 0;
let custo = 0;


switch (tipoPulverizacao) {
    case 1:
        precoPorAcre = 50.00;
        break;
    case 2:
        precoPorAcre = 100.00;
        break;
    case 3:
        precoPorAcre = 150.00;
        break;
    case 4:
        precoPorAcre = 250.00;
        break;
    default:
        console.log("Tipo de pulverização inválido!");
}

custo = precoPorAcre * area;


switch (true) {
    case (area > 300):
        custo = custo * 0.50;
        break;
    default:
        
        break;
}


switch (true) {
    case (custo > 10750):
        let excedente = custo - 10750;
        custo = 10750 + (excedente * 1.00);
        break;
    default:
        
        break;
}

console.log("Fazendeiro: " + nomeFazendeiro);
console.log("Valor a ser pago: R$ " + custo.toFixed(2));

//EXERCICIO 06

let n1 = 8;
let n2 = 6;
let n3 = 10;

let opcaao = 5; 
let media = 0;

switch (opcaao) {
    case 1: 
        media = (n1 + n2 + n3) / 3;
        console.log("Media aritmetica: " + media.toFixed(2));
        break;

    case 2: 
        media = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / 10;
        console.log("Media ponderada: " + media.toFixed(2));
        break;

    case 3: 
        media = 3 / ((1 / n1) + (1 / n2) + (1 / n3));
        console.log("Media harmonica: " + media.toFixed(2));
        break;

    case 4: 
    media = Math.pow(n1 * n2 * n3, 1/3); 
    console.log("Media geometrica: " + media.toFixed(2));
    break;

    case 5: 
        media = Math.sqrt(((Math.pow(n1, 2) + Math.pow(n2, 2) + Math.pow(n3, 2)) / 3));
        console.log("Média quadrática: " + media.toFixed(2));
        break;

    default:
        console.log("Opção inválida!");
}
//EXERCICIO 07

let opcao = 1;
let raio = 5;   
let altura = 10; 

let volume = 0;
let areaa = 0;
const pi = Math.PI;


switch (opcao) {
    case 1: 
        volume = (pi * Math.pow(raio, 2) * altura) / 3;
        areaa = pi * raio * Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
        console.log("Cone reto - Volume: " + volume.toFixed(2) + ", Área: " + areaa.toFixed(2));
        break;
    case 2:  
        volume = pi * Math.pow(raio, 2) * altura;
        areaa = 2 * pi * raio * altura + 2 * pi * Math.pow(raio, 2);
        console.log("Cilindro - Volume: " + volume.toFixed(2) + ", Área: " + areaa.toFixed(2));
        break;
    case 3:  
        volume = (4 / 3) * pi * Math.pow(raio, 3);
        areaa = 4 * pi * Math.pow(raio, 2);
        console.log("Esfera - Volume: " + volume.toFixed(2) + ", Área: " + areaa.toFixed(2));
        break;
    default:
        console.log("Opção inválida!");
}
