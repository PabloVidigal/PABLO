const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    const ladoC = document.getElementById("ladoC");
    const resultado = document.getElementById("resultado");
    const btnCalcular = document.getElementById("btnCalcular");

    function verificarTriangulo(a, b, c) {
 
    if (a < b + c && b < a + c && c < a + b) {
        let A = a;
        let B = b;
        let C = c;
        
        if (b > A && b > c) {
            A = b;
            B = a;
            C = c;
        } else if (c > A && c > b) {
            A = c;
            B = a;
            C = b;
        }

        let A2 = A * A;
        let somaBC = B * B + C * C;

        if (A2 === somaBC) {
            return "Triângulo Retângulo (A² = B² + C²)";
        } else if (A2 > somaBC) {
            return "Triângulo Obtusângulo (A² > B² + C²)";
        } else {
            return "Triângulo Acutângulo (A² < B² + C²)";
        }

    } else {
        return "Os valores informados não formam um triângulo.";
    }
}


    function eventoVerificar() {
      const a = Number(ladoA.value);
      const b = Number(ladoB.value);
      const c = Number(ladoC.value);

      const tipo = verificarTriangulo(a, b, c);
      resultado.innerText = tipo;
    }