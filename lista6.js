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