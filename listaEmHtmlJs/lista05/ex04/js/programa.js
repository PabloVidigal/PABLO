const entrada = document.getElementById("IdInEntrada");
const decisao = document.getElementById("IdInDecisao");
const botao = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function calcularConversao(entrada, decisao) {
    if (decisao === 1) {
        let calculoEuro = (entrada / 5.418).toFixed(2);
        return `Conversão de Reais = R$ ${entrada}, Para Euro = € ${calculoEuro}`;
    } else if (decisao === 2) {
        let calculoLibra = (entrada / 6.336).toFixed(2);
        return `Conversão de Reais = R$ ${entrada}, Para Libra = £ ${calculoLibra}`;
    } else if (decisao === 3) {
        let calculoDolar = (entrada / 5.189).toFixed(2);
        return `Conversão de Reais = R$ ${entrada}, Para Dólar = $ ${calculoDolar}`;
    } else {
        return "Opção inválida.";
    }
}

function eventoBtnVerificar(){
    const entradaN = Number(entrada.value);
    const decisaoN = Number(decisao.value);
    const calculo = calcularConversao(entradaN, decisaoN);
    const saida = calculo;
    resultado.innerText = saida;
}