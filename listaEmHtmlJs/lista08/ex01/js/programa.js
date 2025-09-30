const bairro = document.getElementById("idInBairro");
const telefone = document.getElementById("idInTelefone");
const resultado = document.getElementById("idOnResultado");
const btnVerificar = document.getElementById("btnVerificar");

function verificarTelefone(bairro, telefone) {
    const prefixo = telefone.substring(0,4);

    if(bairro === "Oeste" && (prefixo==="3223" || prefixo==="3225" || prefixo==="3212")){
        return "Telefone válido para bairro Oeste";
    } else if(bairro === "Centro" && (prefixo==="3223" || prefixo==="3224" || prefixo==="3212")){
        return "Telefone válido para bairro Centro";
    } else if(bairro === "Sul" && (prefixo==="3241" || prefixo==="3242" || prefixo==="3243" || prefixo==="3281")){
        return "Telefone válido para bairro Sul";
    } else if(bairro === "Bueno" && (prefixo==="3251" || prefixo==="3285")){
        return "Telefone válido para bairro Bueno";
    } else if(bairro === "Campinas" && (prefixo==="3233" || prefixo==="3291")){
        return "Telefone válido para bairro Campinas";
    } else {
        return "Telefone inválido para o bairro informado";
    }
}

function eventoVerificarTelefone(){
    resultado.innerText = verificarTelefone(bairro.value, telefone.value);
}

btnVerificar.onclick = eventoVerificarTelefone;
