//import {calcularIMC} from "./caculos"

const componenteTexto1  = document.getElementById("idInTexto01");
const componenteNumber1  = document.getElementById("idInTexto02");
const componenteComboBox = document.getElementById("idINTexto03");
const componenteBotao = document.getElementById("btnExecutar");
const componenteResultado = document.getElementById("idOnResultado");


function acaoBotaoExecutar(){
    const valorComponenteTexto1 = componenteTexto1.value;
    const valorComponenteNumber1 = Number(componenteNumber1.value);
    const valorDaComboBox = componenteComboBox.value;
    let saida = "DADOS DOS COMPONENTES \n";
    saida += "Texto1:   "  + valorComponenteTexto1 + "\n";
    saida += "Number1:  "  + valorComponenteNumber1 + "\n";
    saida += "ComboBox: "  + valorDaComboBox;
    componenteResultado.innerText = saida;
}

