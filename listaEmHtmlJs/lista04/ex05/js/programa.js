const raizA = document.getElementById("IdInRaizA");
const raizB = document.getElementById("IdInRaizB");
const raizC = document.getElementById("IdInRaizC");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function varificarRaiz(raizA,raizB,raizC){
let calcular = Math.pow(raizB,2) - (4 * raizA * raizC);

if(calcular < 0){
    return "Raízes Imaginarias";
}
if(calcular == 0){
    return "Raiz Unica";
}
if(calcular > 0){
    return "Raizes Distintas";
}
}

function eventoBtnVerificar(){
    const raizAN = Number(raizA.value);
    const raizBN =  Number(raizB.value);
    const raizCN =  Number(raizC.value);
    const calculo = varificarRaiz(raizAN,raizBN,raizCN);
    const saida = calculo;
    resultado.innerText = saida;
}