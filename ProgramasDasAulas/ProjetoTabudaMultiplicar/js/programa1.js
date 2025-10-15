
const numeroC  = document.getElementById("idInNumero");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function gerarTabuada(numero){
    let saida = "";
    for(let valor = 1; valor <= 10; valor++){
        saida += numero + " * " + valor + " = " + valor * numero + "\n";
    }
    return saida;
}

function acaoBotaoExecutar(){
    const numero = numeroC.value;
    let saida = "Tabuada de Multiplicar de " + numero + "\n";
    saida += gerarTabuada(numero);
    resultadoC.innerText = saida;
}

