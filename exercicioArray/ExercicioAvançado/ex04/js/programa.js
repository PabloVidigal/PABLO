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

  let ordenadoA = [...vetorA].sort((a, b) => a - b);
  let ordenadoB = [...vetorB].sort((a, b) => a - b);

  conjunto.innerHTML = "Conjunto A: " + vetorA.join(" ") + "<br>" +
                       "Conjunto B: " + vetorB.join(" ");

  let saoIdenticos = true;
  for (let i = 0; i < 5; i++) {
    if (ordenadoA[i] !== ordenadoB[i]) {
      saoIdenticos = false;
      break;
    }
  }

  if (saoIdenticos) {
    resultado.innerHTML = "Os conjuntos são idênticos.";
  } else {
    resultado.innerHTML = "Os conjuntos NÃO são idênticos.";
  }
}

function eventoGerar() {
  gerarConjuntos();
}
