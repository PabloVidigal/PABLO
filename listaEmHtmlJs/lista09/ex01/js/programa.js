const altura = document.getElementById("idInAltura");
const sexo = document.getElementById("idInSexo");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularPesoIdeal(h, s){
    if(s === "M"){
        return "Peso ideal: " + (72.7*h - 58).toFixed(2) + " kg";
    } else if(s === "F"){
        return "Peso ideal: " + (62.1*h - 44.7).toFixed(2) + " kg";
    } else {
        return "Sexo inválido!";
    }
}

function eventoCalcularPeso(){
    resultado.innerText = calcularPesoIdeal(Number(altura.value), sexo.value);
}

btnCalcular.onclick = eventoCalcularPeso;
