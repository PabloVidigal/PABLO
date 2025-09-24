const nome = document.getElementById("IdInNome");
const salario = document.getElementById("IdInSalario");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("idOnResultado");

function calcularSalario(salario){
    let novoSalario;
  
  if (salario <= 1412) {
    return novoSalario = salario * 1.5;
  } else {
    return novoSalario = salario * 1.4; 
  }
   
}

function eventoBtnVerificar(){
    const salarioN = Number(salario.value);
    const nomeN = nome.value;
    const calculo = calcularSalario(salarioN);
    const saida = "Caboco conhecido como: "+ nomeN +" teve seu salario reajustado para : "+ calculo;
    resultado.innerText = saida;
}