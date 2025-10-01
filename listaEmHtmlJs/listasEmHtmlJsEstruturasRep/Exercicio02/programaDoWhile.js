const resultado = document.getElementById("idOnResultado");

function calculoSeno() {
    let texto ="";
    let a = 0.0;
    do {
        let seno = a - (Math.pow(a, 3) / 6) + (Math.pow(a, 5) / 120) - (Math.pow(a, 7) / 5040);
        texto += a + "=" + seno + "\n";
        a += 0.5;
    } while (a <= 3.0);
    return texto;
}

function eventoBtnCalcularSeno() {
    const valorFinal = calculoSeno();
    resultado.innerText = valorFinal;
}