const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function eventoCalcular(){
    let n = Number(numero.value);
    let texto = "";
    let i = 1;
    while(i <= 10){
        texto = texto + n + " x " + i + " = " + (n * i) + "\n";
        i = i + 1;
    }

    resultado.innerText = texto;
}

btnCalcular.onclick = eventoCalcular;
