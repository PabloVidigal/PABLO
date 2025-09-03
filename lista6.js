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
