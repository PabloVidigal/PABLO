        const numero = document.getElementById("idInNumero1");
        const resultado = document.getElementById("idOnResultadoidOnResultado");
        const btnCalcular = document.getElementById("btnCalcular");

        function calcularRaizQuadrada(n) {
            let resto = n;     
            let impar = 1;     
            let contador = 0;  

            while (resto > 0) {
                resto = resto - impar;
                impar = impar + 2;
                contador++;
            }
            
            if (resto === 0) {
                return "A raiz quadrada de" + n + " é " + contador;

            } else {
                return "A raiz aproximada de" + n + " é " + (contador-1);
            }
        }
      
      function eventoVerificar() {
      const numeroN = Number(ladoA.value);
      const tipo = calcularRaizQuadrada(numeroN);
      resultado.innerText = tipo;
    }