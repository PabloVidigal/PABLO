const numero = document.getElementById("idInNome");
const btnCalcularIMC = document.getElementById("btnCalcularIMC");
const resultado = document.getElementById("idOnResultado");

function calcularNumerosBinarios(numero){
    let resultado = 0;
    let base = 1;
    for(num = numero; num > 0 ; num = Math.floor(num/2)){
        let resto = num % 2
        resultado = resultado + resto * base
        base = base * 10;
    }
    return resultado
}

function eventoBtnCalcularIMC(){
    const numeroN = Number(numero.value);
    const binario = calcularNumerosBinarios(numeroN);
    const saida = binario
    resultado.innerText = saida;
}