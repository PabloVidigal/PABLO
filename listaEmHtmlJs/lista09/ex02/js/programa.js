const num1 = document.getElementById("idInNum1");
const num2 = document.getElementById("idInNum2");
const op = document.getElementById("idInOp");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcular(n1, n2, operacao){
    if(operacao === "+") return n1 + n2;
    else if(operacao === "-") return n1 - n2;
    else if(operacao === "*") return n1 * n2;
    else if(operacao === "/") return n2 !== 0 ? (n1 / n2).toFixed(2) : "Erro: divisão por zero";
    else return "Operação inválida";
}

function eventoCalcular(){
    resultado.innerText = "Resultado: " + calcular(Number(num1.value), Number(num2.value), op.value);
}

btnCalcular.onclick = eventoCalcular;
