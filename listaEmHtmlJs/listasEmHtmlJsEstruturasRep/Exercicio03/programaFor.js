const numero = document.getElementById("idInNumeroInteiroPositivo");
const resultado = document.getElementById("idOnResultado");

function calcularDivisores(numero) {
    let texto = "Divisores:\n";
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            texto += i + "\n";
        }
    }
    return texto;
}

function eventoBtnCalcularDivisores(){
    const numeroN = Number(numero.value);
    const valorFinal = calcularDivisores(numeroN);
    resultado.innerText = valorFinal;
}
