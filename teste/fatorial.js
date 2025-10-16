let n = 5; // número que queremos calcular o fatorial
let resultado = 1; // começamos com 1, porque fatorial é multiplicação

for (let i = 1; i <= n; i++) {
    resultado *= i; // multiplicamos resultado pelo contador i
}

console.log("O fatorial de " + n + " é " + resultado);
