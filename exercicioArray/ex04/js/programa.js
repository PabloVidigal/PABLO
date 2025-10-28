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

// Mostra o índice e o valor invertido
function mostrarInvertido() {
  let texto = "";

  // Percorre o vetor de trás pra frente
  for (let i = vetor.length - 1; i >= 0; i--) {
    texto = texto + "Posição " + i + " → Valor: " + vetor[i] + "\n";
  }

  return texto;
}

// Função chamada ao clicar no botão
function eventoBtnGerar() {
  gerarConjunto();
  const saida = mostrarInvertido();
  resultado.innerText = saida;
}
