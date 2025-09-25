const salario = document.getElementById("IdInSalario");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function calcularSomatorio(saldo){
let somatorio = saldo / 6;

if(somatorio < 1000){
    return "Tarifa: Basica|Saldo atualizado: R$",(somatorio - 25).toFixed(2);
}
if(somatorio >= 1000.01 && somatorio <= 2000){
    return "Tarifa: Prata|Saldo atualizado: R$",(somatorio - 20).toFixed(2);
}
if(somatorio >= 2000.01 && somatorio <= 3500){
   return "Tarifa: Ouro|Saldo atualizado: R$", (somatorio - 13).toFixed(2);
}
if(somatorio > 3500){
    return "Tarifa: Premio|Saldo Isento de tarifa: R$",somatorio.toFixed(2);
} 
}

function eventoBtnVerificar(){
    const salarioN = Number(salario.value);
    const calculo = calcularSomatorio(salarioN);
    const saida = calculo;
    resultado.innerText = saida;
}