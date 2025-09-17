//EXERCICIO 01
function verificarNumero(numero){

    let verificar = Math.floor(numero /100000);
if (verificar === 3225) {
        return "Oeste";
    }
    if (verificar === 3223 || verificar === 3224) {
        return "Centro";
    }
    if (verificar === 3212) {
        return "Oeste"; 
    }
    if (verificar === 3241 || verificar === 3242 || verificar === 3243 || verificar === 3281) {
        return "Sul";
    }
    if (verificar === 3251 || verificar === 3285) {
        return "Bueno";
    }
    if (verificar === 3233 || verificar === 3291) {
        return "Campinas";
    }
    return "Bairro não identificado";

}

const numeroDeTelefone = 32121212;
console.log("O numero citado pertence ao bairro: " + verificarNumero(numeroDeTelefone))

