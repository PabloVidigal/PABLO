const raio = document.getElementById("idInRaio");
const altura = document.getElementById("idInAltura");
const tipoFormula = document.getElementById("idInTipoFormula");
const resultado = document.getElementById("idOnResultado");

function calcularFormula(raio, altura, tipoFormula){
let strFormulaTipo = "";
let calculoVolume = 0;
let calculoArea = 0;
switch(tipoFormula){
   case 1:
     strFormulaTipo = "Cone reto";
     calculoVolume = (Math.PI * Math.pow(raio,2) * altura) / 3;
     calculoArea = Math.PI * raio * (Math.sqrt(Math.pow(raio,2) + Math.pow(altura,2)));
      break;
   case 2:
        strFormulaTipo = "Cilindro";
        calculoVolume = Math.PI * Math.pow(raio,2) * altura;
        calculoArea = 2 * Math.PI * raio * raio;
      break;
   case 3:
     strFormulaTipo = "Esfera";
     calculoVolume = (4/3) * Math.PI * Math.pow(raio,3);
     calculoArea = 4 * Math.PI * Math.pow(raio,2);
      break;
   default:
      strFormulaTipo = "Tipo de formula errado";
}
   const saida = "Tipo da formula: " + strFormulaTipo;
   const saida2 = "Valor do volume: " + calculoVolume;
   const saida3 = "Valor da area: " + calculoArea;
   return(saida + "\n" + saida2 + "\n" + saida3);
}

function eventoBtnCalcularFormula(){
   const raioN = Number(raio.value);
   const alturaN = Number(altura.value);
   const tipoFormulaN = Number(tipoFormula.value);
   const valorFinal = calcularFormula(raioN, alturaN, tipoFormulaN);
   resultado.innerText = valorFinal;
}