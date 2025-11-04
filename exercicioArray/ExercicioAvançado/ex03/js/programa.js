const conjunto = document.getElementById("idConjunto");
const resultado = document.getElementById("idResultado");

let vetorA = [];
let vetorB = [];

function gerarConjuntos() {
  vetorA = [];
  vetorB = [];

  for (let i = 0; i < 5; i++) {
    vetorA.push(Math.floor(Math.random() * 21));
    vetorB.push(Math.floor(Math.random() * 21));
  }

  let produto = 0;
  for (let i = 0; i < 5; i++) {
    produto += vetorA[i] * vetorB[i];
  }

  conjunto.innerHTML = "Conjunto A: " + vetorA.join(" ") + "\n" +
                       "Conjunto B: " + vetorB.join(" ");
  resultado.innerHTML = "Produto Escalar = " + produto;
}

function eventoGerar() {
  gerarConjuntos();
}
