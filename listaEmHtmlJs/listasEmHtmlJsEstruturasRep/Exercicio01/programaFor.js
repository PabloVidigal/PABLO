const valor = document.getElementById("idInValor");
const resultado = document.getElementById("idOnResultado");

function tabuada(valor) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += valor + " x " + i + " = " + (valor * i) + "\n";
    }
    return resultado;
}


function eventoBtnCalcularTabuada() {
    let valorNumero = parseFloat(valor.value);
    const valorFinal = tabuada(valorNumero);
    resultado.innerText = valorFinal;
}