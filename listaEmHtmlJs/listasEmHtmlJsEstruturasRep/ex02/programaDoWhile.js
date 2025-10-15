const resultado = document.getElementById("idOnResultado");

function calculoSeno() {
    let tex ="";
    let a = 0.0;
    do {
        let sen = a - (Math.pow(a, 3) / 6) + (Math.pow(a, 5) / 120) - (Math.pow(a, 7) / 5040);
        tex += a + "=" + sen.toFixed(4)+ "\n";
        a += 0.5;
    } while (a <= 3.0);
    return tex;
}

function eventoBtnCalcularSeno() {
    const valorFinal = calculoSeno();
    resultado.innerText = valorFinal;
}