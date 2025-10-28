const numero = document.getElementById("idInNumero");
const lista = document.getElementById("idOnLista");
const resultado = document.getElementById("idOnResultado");

let vetor = [];

function adicionarNumero() {
  const numeroN = Number(numero.value);

  if (numero.value === "") {
    resultado.innerText = "Digite um número antes de adicionar";
    return;
  }

  vetor.push(numeroN);
  numero.value = "";

  let texto = "Numeros: ";
  for (let i = 0; i < vetor.length; i++) {
    texto = texto + vetor[i] + " ";
  }

  lista.innerText = texto;
  resultado.innerText = "";
}

function verificarNumero() {
  if (vetor.length === 0) {
    return "Nenhum número foi adicionado";
  }

  let maior = vetor[0];
  let menor = vetor[0];
  let soma = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
    if (vetor[i] < menor) {
      menor = vetor[i];
    }
    soma = soma + vetor[i];
  }

  let amplitude = maior - menor;
  let media = soma / vetor.length;

  let textoInverso = "";
  for (let i = vetor.length - 1; i >= 0; i--) {
    textoInverso = textoInverso + vetor[i] + " ";
  }

  let saida = "Amplitude: " + amplitude + "\n";
  saida = saida + "Media: " + media + "\n";
  saida = saida + "Ordem inversa: " + textoInverso;

  return saida;
}
function eventoBtnAdicionar() {
  adicionarNumero();
}

function eventoBtnVerificar() {
  const saida = verificarNumero();
  resultado.innerText = saida; 
}
