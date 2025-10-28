const numero1 = document.getElementById("idInNumero1");
const numero2 = document.getElementById("idInNumero2");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularQuociente(n1, n2) {
            let quociente = 0;
            let resto = n1;
            while (resto >= n2) {
                resto -= n2;
                quociente++;
            }
            return quociente;
        }

        function calcularResto(n1, n2) {
            let resto = n1;
            while (resto >= n2) {
                resto -= n2;
            }
            return resto;
        }
    
        

function eventoCalcularPeso() {
    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    if (n2 === 0) {
        resultado.innerText = "Numero nao pode ser dividido por zero";
        return;
    }

    const quociente = calcularQuociente(n1, n2);
    const resto = calcularResto(n1, n2);

    resultado.innerText = `Quociente de ${n1} ÷ ${n2} = ${quociente}\nResto = ${resto}`;
}
