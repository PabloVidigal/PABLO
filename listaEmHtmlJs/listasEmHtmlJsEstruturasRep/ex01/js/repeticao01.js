const numero = document.getElementById("idInNumero");
const botao = document.getElementById("btnVerificador");
const resultado = document.getElementById("idOnResultado");

function verificarNumero(numero){
 let seno = x; // Primeiro termo da série
  let termo = x;
  const maxIteracoes = 100; // Limite máximo para evitar loops infinitos com precisão irrealista

  for (let n = 1; n < maxIteracoes; n += 2) {
    // O próximo termo é o termo anterior multiplicado por (-x^2) e dividido por (n * (n-1))
    termo = termo * (-x * x) / (n * (n + 1));
    
    // Critério de parada: se o termo for menor que a precisão, saia do loop
    if (Math.abs(termo) <= precisao) {
      break; 
    }

    seno += termo;
  }

  return seno;
}


function eventoBtnVerificar(){
    const numeroN = Number(numero.value);
    const saida = verificarNumero(numeroN)
    resultado.innerText = saida;
}