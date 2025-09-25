const entrada = document.getElementById("IdInEntrada");
const hidraulico = document.getElementById("IdInHidraulico");
const ar = document.getElementById("IdInAr");
const vidro = document.getElementById("IdInVidro");
const pintura = document.getElementById("IdInMetalico");
const botao = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function CalcularPagamentoComBaseEscolha(entrada, ar, pintura, hidraulico, vidro) {
    let valorTotal = entrada;

    if (ar == "S") valorTotal += 1750;
    if (pintura == "S") valorTotal += 800;
    if (vidro == "S") valorTotal += 1200;
    if (hidraulico == "S") valorTotal += 2000;

    return `Valor de fábrica: R$ ${entrada}, Valor de fábrica junto aos secundários: R$ ${valorTotal}`;

}


function eventoBtnVerificar(){
    const entradaN = Number(entrada.value);
    const hidraulicoN = hidraulico.value;
    const vidroN = vidro.value;
    const arN = ar.value;
    const pinturaN = pintura.value;
    const calculo = CalcularPagamentoComBaseEscolha(entradaN, arN, pinturaN, hidraulicoN, vidroN);
    const saida = calculo;
    resultado.innerText = saida;
}