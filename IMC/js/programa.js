const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const altura = document.getElementById("idInAltura");
const btnCalcularIMC = document.getElementById("btnCalcularIMC");
const resultado = document.getElementById("idOnResultado");

function calcularIMC(peso,altura){
    return (peso/(altura * altura));
}

function eventoBtnCalcularIMC(){
    const pesoN = Number(peso.value);
    const alturN = Number(altura.value);
    const imc = calcularIMC(pesoN,alturN);
    const saida = "O Paciente " + nome.value + " tem IMC = " + imc.toFixed(2);
    resultado.innerText = saida;
}