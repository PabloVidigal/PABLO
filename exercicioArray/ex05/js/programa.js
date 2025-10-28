const conjunto = document.getElementById("idOnConjunto");
const resultado = document.getElementById("idOnResultado");

let vetor = [];

// Gera o conjunto A com 10 números inteiros (1 a 10)
function gerarConjunto() {
  vetor = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 10) + 1; // 1..10
    vetor.push(num);
  }

  let texto = "Conjunto A: ";
  for (let i = 0; i < vetor.length; i++) {
    texto = texto + vetor[i] + " ";
  }

  conjunto.innerText = texto;
  resultado.innerText = "";
}

// Calcula fatorial de um número (iterativo)
function fatorial(n) {
  let fat = 1;
  for (let i = 1; i <= n; i++) {
    fat = fat * i;
  }
  return fat;
}

// Mostra cada número e seu fatorial
function mostrarFatoriais() {
  let texto = "";
  for (let i = 0; i < vetor.length; i++) {
    let fat = fatorial(vetor[i]);
    texto = texto + "Valor " + vetor[i] + " -> fatorial: " + fat + "\n";
  }
  return texto;
}

// Evento do botão
function eventoBtnGerar() {
  gerarConjunto();
  const saida = mostrarFatoriais();
  resultado.innerText = saida;
}
