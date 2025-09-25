const valor = document.getElementById("idInValor");
const tipoPagamento = document.getElementById("idInTipoPagamento");
const resultado = document.getElementById("idOnResultado");

function calcularPagamento(tipoPagamento, valor){
    if(tipoPagamento == 1){
    let desconto = valor * 0.10;
    let precoProdutoAtualizado = valor - desconto;
    return("O preço do produto a ser pago é: " + precoProdutoAtualizado)
} else if(tipoPagamento == 2){
    let desconto = valor * 0.05;
    let precoProdutoAtualizado = valor - desconto;
    return("O preço do produto a ser pago é: " + precoProdutoAtualizado)
}else if(tipoPagamento == 3){
    return("O preço do produto a ser pago é: " + valor)
}else if(tipoPagamento == 4){
    let taxa = valor * 0.10;
    let precoProdutoAtualizado = valor + taxa;
    return("O preço do produto a ser pago é: " + precoProdutoAtualizado)
}else{
    return("Tipo invalido")
}
}

function eventoBtnCalcularPagamento(){
    const tipoPagamentoN = (tipoPagamento.value);
    const valorN = Number(valor.value);
    const valorFinal = calcularPagamento(tipoPagamentoN, valorN);
    resultado.innerText = valorFinal;
}
