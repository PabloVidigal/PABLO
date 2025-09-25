const areaAcres = document.getElementById("idInAreaAcres");
const nomeFazendeiro = document.getElementById("idInNome");
const tipoPulverizacao = document.getElementById("idInTipoPulverizacao");
const resultado = document.getElementById("idOnResultado");

function calcularPulverizacao(areaAcres, tipoPulverizacao, nomeFazendeiro){
let strPulverizacao = "";
let valorPago = 0;
switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverizacao contra ervas daninhas";
      valorPago = 50 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 2:
      strPulverizacao = "Pulverizacao contra gafanhotos";
      valorPago = 100 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 3:
      strPulverizacao = "Pulverizacao contra broca";
      valorPago = 150 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      }if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 4:
      strPulverizacao = "Pulverizacao contra tudo";
      valorPago = 250 * areaAcres;
     if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   default:
      strPulverizacao = "errado";
      valorPago = 0;
}
   const saida = "Tipo da pulverizacao: " + strPulverizacao;
   const saida2 = "Valor da pulverizacao: " + valorPago;
   const saida3 = "Nome do fazendeiro: " + nomeFazendeiro;
   return(saida + "\n" + saida2 + "\n" + saida3);
}

function eventoBtnCalcularPulverizacao(){
   const areaAcresN = Number(areaAcres.value);
   const tipoPulverizacaoN = Number(tipoPulverizacao.value);
   const nomeFazendeiroN = nomeFazendeiro.value;
   const valorFinal = calcularPulverizacao(areaAcresN, tipoPulverizacaoN, nomeFazendeiroN);
   resultado.innerText = valorFinal;
}