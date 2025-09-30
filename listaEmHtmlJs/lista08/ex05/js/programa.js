const cor = document.getElementById("idInCor");
const qtd = document.getElementById("idInQtd");
const valor = document.getElementById("idInValor");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularPreco(cor, qtd, valor){
    let desconto = 0;

    if(cor === "Verde"){
        if(qtd <= 10) desconto = 0.05;
        else desconto = 0.10;
    } else if(cor === "Amarelo"){
        if(qtd <= 5) desconto = 0.15;
        else if(qtd > 10) desconto = 0.20;
    }

    const total = qtd * valor;
    const final = total - (total * desconto);
    return "Valor final da compra: R$ " + final.toFixed(2);
}

function eventoCalcularPreco(){
    const c = cor.value;
    const q = Number(qtd.value);
    const v = Number(valor.value);
    resultado.innerText = calcularPreco(c,q,v);
}

btnCalcular.onclick = eventoCalcularPreco;
