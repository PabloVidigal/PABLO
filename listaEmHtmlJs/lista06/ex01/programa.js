const valor = document.getElementById("idInValor");
const tipoDinheiro = document.getElementById("idInTipoDinheiro");
const resultado = document.getElementById("idOnResultado");

function calcularConversao(tipoDinheiro, valor){
    if(tipoDinheiro == "Euro"){
    let conversao = valor * 5.418;
    return("Conversao para euro: "+conversao);
} else if(tipoDinheiro == "Libra"){
    let conversao = valor * 6.336;
    return("Conversao para libra: "+conversao);
} else if(tipoDinheiro == "Dolar"){
    let conversao = valor * 5.189;
    return("Conversao dolar: "+conversao);
} else if(tipoDinheiro == "Iene"){
    let conversao = valor * 3.018;
    return("Conversao iene: "+conversao);
} else{
    return("Tipo invalido")
}
}

function eventoBtnCalcularDinheiro(){
    const tipoDinheiroN = (tipoDinheiro.value);
    const valorN = Number(valor.value);
    const valorFinal = calcularConversao(tipoDinheiroN, valorN);
    resultado.innerText = valorFinal;
}
