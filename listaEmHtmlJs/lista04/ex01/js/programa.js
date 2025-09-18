const numero = document.getElementById("idInNumero");
const botao = document.getElementById("btnVerificador");
const resultado = document.getElementById("idOnResultado");

function verificarNumero(numero){
    if(numero % 2 > 0){
        return "Numero digitado é Impar"
    }
    if(numero % 2 == 0){
        return "Numero digitado é Par"
    }
}

function eventoBtnVerificar(){
    const numeroN = Number(numero.value);
    const saida = verificarNumero(numeroN)
    resultado.innerText = saida;
}