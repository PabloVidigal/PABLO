const n1 = document.getElementById("idIn1");
const n2 = document.getElementById("idIn2");
const n3 = document.getElementById("idIn3");
const n4 = document.getElementById("idIn4");
const resultado = document.getElementById("idOnResultado");
const btnSomar = document.getElementById("btnSomar");

function somaTresMenores(a,b,c,d){
    let lista = [a,b,c,d];
    lista.sort((x,y)=>x-y); // ordena
    return "Soma dos três menores = " + (lista[0]+lista[1]+lista[2]);
}

function eventoSomaTresMenores(){
    const a = Number(n1.value);
    const b = Number(n2.value);
    const c = Number(n3.value);
    const d = Number(n4.value);
    resultado.innerText = somaTresMenores(a,b,c,d);
}

btnSomar.onclick = eventoSomaTresMenores;
