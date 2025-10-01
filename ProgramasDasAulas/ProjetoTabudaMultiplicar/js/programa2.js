
const numeroC  = document.getElementById("idInNumero");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function gerarTabuada(numero){
    let saida = "";
    let valor = 1;
    while(valor <= 10){
        saida += numero + " * " + valor + " = " + valor * numero + "\n";
        valor++;
    }
    return saida;
}

function acaoBotaoExecutar(){
    const numero = numeroC.value;
    let saida = "Tabuada de Multiplicar de " + numero + "\n";
    saida += gerarTabuada(numero);
    resultadoC.innerText = saida;
}
