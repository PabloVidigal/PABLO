const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");
const btnVerificar = document.getElementById("btnVerificar");

function verificarPalindromo(n){
    const invertido = n.split("").reverse().join("");
    if(n === invertido){
        return "É palíndromo!";
    } else {
        return "Não é palíndromo.";
    }
}

function eventoVerificarPalindromo(){
    const valor = numero.value;
    resultado.innerText = verificarPalindromo(valor);
}

// fica sempre no final
btnVerificar.onclick = eventoVerificarPalindromo;
