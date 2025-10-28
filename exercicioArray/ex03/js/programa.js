const conjunto = document.getElementById("idOnConjunto");
const resultado = document.getElementById("idOnResultado");

let vetor = [];

// Gera o conjunto A com 10 números inteiros aleatórios
function gerarConjunto() {
  vetor = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    vetor.push(num);
  }

  let texto = "Conjunto A: ";
  for (let i = 0; i < vetor.length; i++) {
    texto = texto + vetor[i] + " ";
  }

  conjunto.innerText = texto;
  resultado.innerText = "";
}

// Verifica se um número é primo
function ehPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }

  return true;
}

// Mostra apenas os números primos do conjunto
function mostrarPrimos() {
  let texto = "Números primos: ";
  for (let i = 0; i < vetor.length; i++) {
    if (ehPrimo(vetor[i]) == true) {
      texto = texto + vetor[i] + " ";
    }
  }

  return texto;
}

// Função chamada ao clicar no botão "Gerar Conjunto"
function eventoBtnGerar() {
  gerarConjunto();
  const saida = mostrarPrimos();
  resultado.innerText = saida;
}
