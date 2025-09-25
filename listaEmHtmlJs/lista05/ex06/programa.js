const valor = document.getElementById("idInLitros");
const tipoLitro = document.getElementById("idInTipoCombustivel");
const resultado = document.getElementById("idOnResultado");

function calcularPagamento(tipoLitro, valor){
if(tipoLitro == 1){
    let conversaoCombustivel = valor * 4.805;
    return("O preço a ser pago é: " + conversaoCombustivel)
} else if(tipoLitro == 2){
    let conversaoCombustivel = valor * 5.953;
    return("O preço a ser pago é: " + conversaoCombustivel)
}else if(tipoLitro == 3){
    let conversaoCombustivel = valor * 6.565;
    return("O preço a ser pago é: " + conversaoCombustivel)
}else{
    return("Tipo invalido")
}
}

function eventoBtnCalcularValorPago(){
    const tipoLitroN = (tipoLitro.value);
    const valorN = Number(valor.value);
    const valorFinal = calcularPagamento(tipoLitroN, valorN);
    resultado.innerText = valorFinal;
}
