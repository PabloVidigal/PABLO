const matricula = document.getElementById("idInMatricula");
const nome = document.getElementById("idInNome");
const dependentes = document.getElementById("idInDependentes");
const salarioBase = document.getElementById("idInSalario");
const producao = document.getElementById("idInProducao");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularGratificacao(p){
    if(p <= 1000) return 500;
    else if(p <= 2000) return 1250;
    else return 2250;
}

function calcularINSS(sb){
    if(sb <= 1412) return sb*0.075;
    else if(sb <= 2666.68) return sb*0.09;
    else if(sb <= 4000.03) return sb*0.12;
    else return sb*0.14;
}

function calcularIRPF(sb){
    if(sb <= 2259.20) return 0;
    else if(sb <= 2826.65) return sb*0.075;
    else if(sb <= 3751.05) return sb*0.15;
    else if(sb <= 4664.68) return sb*0.225;
    else return sb*0.275;
}
