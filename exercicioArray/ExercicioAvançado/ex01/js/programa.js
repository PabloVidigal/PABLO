const conjunto = document.getElementById("idConjunto");
const resultado = document.getElementById("idResultado");

let vetorA = [];
let vetorB = [];
let vetorC = [];

function gerarConjuntos() {
  vetorA = [];
  vetorB = [];
  vetorC = [];

  for (let i = 0; i < 10; i++) {
    vetorA.push(Math.floor(Math.random() * 21));
    vetorB.push(Math.floor(Math.random() * 21));
  }

  for (let i = 0; i < 10; i++) {
    vetorC.push(vetorA[i]);
    vetorC.push(vetorB[i]);
  }

  let texto = "Conjunto A: " + vetorA.join(" ") + "<br>";
  texto += "Conjunto B: " + vetorB.join(" ") + "<br>";
  conjunto.innerHTML = texto;

  resultado.innerHTML = "Conjunto Intercalado (C): " + vetorC.join(" ");
}

function eventoGerar() {
  gerarConjuntos();
}
