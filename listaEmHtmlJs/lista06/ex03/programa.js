const numero = document.getElementById("idInNumero");
const numero2 = document.getElementById("idInNumero2");
const tipoOperacao = document.getElementById("idInTipoOperacao");
const resultado = document.getElementById("idOnResultado");

function calcularOperacao(numero, numero2, tipoOperacao){
let strOperacao = "";
let valorTaxa = 0;
switch(tipoOperacao){
   case "+":
      strOperacao = "Soma";
      valorTaxa = numero + numero2;
      break;
   case "-":
      strOperacao = "Subtracao";
      valorTaxa = numero - numero2;
      break;
   case "*":
      strOperacao = "Multiplicacao";
      valorTaxa = numero * numero2;
      break;
   case "/":
      strOperacao = "Divisao";
      valorTaxa = numero / numero2;
      break;
   default:
      strOperacao = "operação errada";
      valorTaxa = 0;
}
   const saida = "Tipo da operação: " + strOperacao;
   const saida2 = "Valor da operação: " + valorTaxa;
   return(saida + "\n" + saida2);
}

function eventoBtnCalcularOperacao(){
    const numeroN = Number(numero.value);
    const numero2N = Number(numero2.value);
    const tipoOperacaoN = (tipoOperacao.value);
    const valorFinal = calcularOperacao(numeroN, numero2N, tipoOperacaoN);
    resultado.innerText = valorFinal;
}