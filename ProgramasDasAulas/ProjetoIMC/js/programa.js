let nome = document.getElementById("idInNome");
let peso = document.getElementById("idInPeso");
let altura = document.getElementById("idInAltura");
let btnExcutar = document.getElementById("btnExecutar");
let resultado = document.getElementById("idOnResultado");

// Funcão para calcular o IMC da pessoa
function calcularIMC(peso,altura){
    
    return (peso /(altura * altura))

}
function acaoBotaoExecutar(){
    let imc = calcularIMC(Number(peso.value),Number(altura.value));
    const saida = "O "+ nome.value + " tem IMC = " + imc.toFixed(2).toString();
    resultado.innerHTML = saida;
}
btnExcutar.addEventListener('onclick',acaoBotaoExecutar());