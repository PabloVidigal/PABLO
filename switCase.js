const quantidadeCombustivel = 250;
const tipoCombustivel = 8;
let strCombustivel = "";
let valorPago = 0;
switch(tipoCombustivel){
   case 1:
      strCombustivel = "Alcool";
      valorPago = quantidadeCombustivel * 4.805;
      break;
   case 2:
      strCombustivel = "Diesel";
      valorPago = quantidadeCombustivel * 5.953;
      break;
   case 3:
      strCombustivel = "Gasolina";
      valorPago = quantidadeCombustivel * 6.565;
      break;
   default:
      strCombustivel = "Tipo de combustivel errado";
      valorPago = 0;
}
   const saida = "Tipo do Combustive: " + strCombustivel;
   const saida2 = "Valor a ser pago: R$ " + valorPago;
   console.log(saida + "\n" + saida2);