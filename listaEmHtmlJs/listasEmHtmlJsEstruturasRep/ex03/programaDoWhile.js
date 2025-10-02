const numero = document.getElementById("idInNumeroInteiroPositivo");
const resultado = document.getElementById("idOnResultado");

function calcularDivisoresDoWhile(numero) {
    let texto = "Divisores:\n";
    let i = 1;
    do {
        if (numero % i === 0) {
            texto += i + "\n";
        }
        i++;
    } while (i <= numero);
    return texto;
}

function eventoBtnCalcularDivisores() {
    const numeroN = Number(numero.value);
    const valorFinal = calcularDivisoresDoWhile(numeroN);
    resultado.innerText = valorFinal;
}
