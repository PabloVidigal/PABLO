const numero = document.getElementById("IdInNumero");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function verificadorDeCaracteristica(numero){
let calcul = Math.trunc(numero / 100);
let resto = numero % 100;
let sub = Math.pow ( calcul + resto,2)
if(sub == numero){
    return "Possui a caracteristica";
}
if(sub != numero){
    return "Não possui a Caracteristica";
}
}

function eventoBtnVerificar(){
    const numeroN = Number(numero.value);
    const calculo = verificadorDeCaracteristica(numeroN);
    const saida = "O numero " + numeroN + " " +calculo;
    resultado.innerText = saida;
}