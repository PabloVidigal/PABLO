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

  let texto = "Conjunto A: " + vetorA.join(" ") + "<br>";
  texto += "Conjunto B: " + vetorB.join(" ") + "<br><br>";

 vetorA.sort(function(a, b) {
  return a - b;
});
vetorB.sort(function(a, b) {
  return a - b;
});

  texto += "Conjunto A Ordenado: " + vetorA.join(" ") + "\n";
  texto += "Conjunto B Ordenado: " + vetorB.join(" ") + "\n";

  for (let i = 0; i < vetorA.length; i++) {
  vetorC.push(vetorA[i]);
}

for (let i = 0; i < vetorB.length; i++) {
  vetorC.push(vetorB[i]);
}

  vetorC.sort(function(a, b) {
  return a - b;
});

  conjunto.innerHTML = texto;
  resultado.innerHTML = "Conjunto C (Intercalado e Ordenado): " + vetorC.join(" ");
}
function eventoGerar() {
  gerarConjuntos();
}
