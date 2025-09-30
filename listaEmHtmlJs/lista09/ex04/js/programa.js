const tipo = document.getElementById("idInTipo");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularDosagem(tipo){
    let mg = 0;
    if(tipo === 1) mg = 600;
    else if(tipo === 2) mg = 1600;
    else if(tipo === 3) mg = 4600;
    else if(tipo === 4) mg = 2450;
    else return "Tipo inválido";

    let ml = mg / 400; // 400mg por ml
    let gotas = ml * 15; // 15 gotas por ml

    return `Dosagem: ${mg} mg / ${gotas} gotas`;
}

function eventoCalcular(){
    resultado.innerText = calcularDosagem(Number(tipo.value));
}

btnCalcular.onclick = eventoCalcular;
