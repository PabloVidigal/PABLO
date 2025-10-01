const valor = document.getElementById("idInValor");
const resultado = document.getElementById("idOnResultado");

function tabuada(valor) {
    let resultado = "";
    let i = 1;
    while (i <= 10) {
        resultado += valor + " x " + i + " = " + (valor * i) + "\n";
        i++;
    }
    return resultado;
}


function eventoBtnCalcularTabuada() {
    let valorNumero = parseFloat(valor.value);
    const valorFinal = tabuada(valorNumero);
    resultado.innerText = valorFinal;
}