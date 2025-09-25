const numero = document.getElementById("IdInNumero");
const botao = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function verificadorDeQuadradoPerfeito(num){
    calculo = Math.trunc(Math.sqrt(num));

    let verificacao2 = Math.pow(calculo,2);
    if(verificacao2 === num){
    return "Quadrado Perfeito";
} else {
return "Qudrado não Perfeito";
}
}

function eventoBtnVerificar(){
    const numeroN = Number(numero.value);
    const calculo = verificadorDeQuadradoPerfeito(numeroN);
    const saida = "Numero digitado é: " + calculo;
    resultado.innerText = saida;
}