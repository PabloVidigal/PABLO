const opcao = document.getElementById("idInOpcao");
const raio = document.getElementById("idInRaio");
const altura = document.getElementById("idInAltura");
const resultado = document.getElementById("idOnResultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularFigura(op, r, h){
    const pi = Math.PI;
    if(op === 1){ // cone
        const volume = (pi * r*r * h) / 3;
        const area = pi * r * (r + Math.sqrt(h*h + r*r));
        return `Cone → Volume: ${volume.toFixed(2)} | Área: ${area.toFixed(2)}`;
    } else if(op === 2){ // cilindro
        const volume = pi * r*r * h;
        const area = 2 * pi * r * (r + h);
        return `Cilindro → Volume: ${volume.toFixed(2)} | Área: ${area.toFixed(2)}`;
    } else if(op === 3){ // esfera
        const volume = (4/3) * pi * Math.pow(r,3);
        const area = 4 * pi * r*r;
        return `Esfera → Volume: ${volume.toFixed(2)} | Área: ${area.toFixed(2)}`;
    } else {
        return "Opção inválida";
    }
}

function eventoCalcular(){
    resultado.innerText = calcularFigura(Number(opcao.value), Number(raio.value), Number(altura.value));
}

btnCalcular.onclick = eventoCalcular;
