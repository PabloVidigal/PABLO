const a = document.getElementById("IdInA");
const b = document.getElementById("IdInB");
const c = document.getElementById("IdInC");
const botao = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function calcularTriangulo(A,B,C){
    
    
    if (A + B > C && A + C > B && B + C > A) {
    
    if (A == B && B == C) {
        return "É um triângulo | Triângulo Equilátero";
    } else if (A == B || A == C || B == C) {
        return "É um triângulo | Triângulo Isósceles";
    } else {
        return "É um triângulo | Triângulo Escaleno";
    }

} else {
return "Não é um triângulo";
}
}

function eventoBtnVerificar(){
    const aN = Number(a.value);
    const bN = Number(b.value);
    const cN = Number(c.value);
    const calculo = calcularTriangulo(aN, bN, cN);
    const saida = calculo;
    resultado.innerText = saida;
}