const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function verificarPrimo(numero) {
    let i = 2;
    do {
        if (numero % i == 0) {
            return "o numero nao é primo";
        }
        i++;
    } while (i < numero);
    return "o numero é primo";
}

function eventoBtnCalcularPrimo() {
    const numeroN = Number(numero.value);
    const valorFinal = verificarPrimo(numeroN);
    resultado.innerText = valorFinal;
}
