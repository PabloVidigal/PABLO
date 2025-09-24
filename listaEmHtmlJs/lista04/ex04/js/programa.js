const idade = document.getElementById("IdInIdade");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function verificarIdade(idade){
 if (idade < 16) {
        return "Não Eleitor";
    }
    if (idade >= 18 && idade <= 65) {
        return "Eleitor Obrigatório";
    }
    if ((idade >= 16 && idade < 18) || idade > 65) {
        return "Eleitor Facultativo";
    }
}

function eventoBtnVerificar(){
    const idadeN = Number(idade.value);
    const calculo = verificarIdade(idadeN);
    const saida = "Idade digitada: " + idadeN +" "+ calculo;
    resultado.innerText = saida;
}
