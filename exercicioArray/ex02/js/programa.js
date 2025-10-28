const numero = document.getElementById("idInNumero");
const conjunto = document.getElementById("idOnConjunto");
const resultado = document.getElementById("idOnResultado");

let vetor = [];

// gera 15 números inteiros aleatórios de 1 a 100
function gerarConjunto() {
  vetor = [];
  for (let i = 0; i < 15; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    vetor.push(num);
  }

  let texto = "Conjunto: ";
  for (let i = 0; i < vetor.length; i++) {
    texto = texto + vetor[i] + " ";
  }

  conjunto.innerText = texto;
  resultado.innerText = "";
}

// verifica se o número digitado existe no conjunto
function verificarNumero() {
  if (numero.value === "") {
    return "Digite um número para verificar!";
  }

  let achou = false;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == numero.value) {
      achou = true;
    }
  }

  if (achou == true) {
    return "O número " + numero.value + " existe no conjunto!";
  } else {
    return "O número " + numero.value + " NÃO existe no conjunto!";
  }
}

// funções de evento
function eventoBtnGerar() {
  gerarConjunto();
}

function eventoBtnVerificar() {
  const saida = verificarNumero();
  resultado.innerText = saida;
}
