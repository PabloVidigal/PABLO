const numero = document.getElementById("idInNumeroInteiroPositivo");
const resultado = document.getElementById("idOnResultado");

function calcularDivisoresWhile(numero) {
    let texto = "Divisores:\n";
    let i = 1;
    while (i <= numero) {
        if (numero % i === 0) {
            texto += i + "\n";
        }
        i++;
    }
    return texto;
}

function eventoBtnCalcularDivisores() {
    const numeroN = Number(numero.value);
    const valorFinal = calcularDivisoresWhile(numeroN);
    resultado.innerText = valorFinal;
}
