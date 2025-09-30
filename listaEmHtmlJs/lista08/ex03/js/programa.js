const ladoA = document.getElementById("idInA");
const ladoB = document.getElementById("idInB");
const ladoC = document.getElementById("idInC");
const resultado = document.getElementById("idOnResultado");
const btnVerificar = document.getElementById("btnVerificar");

function verificarTriangulo(a,b,c){
    const A2 = a*a, B2 = b*b, C2 = c*c;

    if(A2 === B2 + C2 || B2 === A2 + C2 || C2 === A2 + B2){
        return "Triângulo Retângulo";
    } else if(A2 > B2 + C2 || B2 > A2 + C2 || C2 > A2 + B2){
        return "Triângulo Obtusângulo";
    } else {
        return "Triângulo Acutângulo";
    }
}

function eventoVerificarTriangulo(){
    const a = Number(ladoA.value);
    const b = Number(ladoB.value);
    const c = Number(ladoC.value);
    resultado.innerText = verificarTriangulo(a,b,c);
}

btnVerificar.onclick = eventoVerificarTriangulo;
