const nomeC = document.getElementById("idInNome");
const anoNascimentoC = document.getElementById("idInAnoNascimento");
const btnCalcularEleitorC = document.getElementById("btnCalcularEleitor");
const resultadoC = document.getElementById("idOnResultado");

function calcularTipoEleitor(anoNascimento) {
  const idade = 2025 - anoNascimento;
  if (idade < 16) return "Não Eleitor";
  if (idade < 18) return "Eleitor Facultativo";
  if (idade <= 70) return "Eleitor Obrigatorio";
  return "Eleitor Facultativo";
}

function eventoBotaoCalcularEleitor() {
  const anoNascimento = Number(anoNascimentoC.value);
  const tipoEleito = calcularTipoEleitor(anoNascimento);
  const saida = "O cidadão " + nomeC.value + " e " + tipoEleito;
  resultadoC.innerText = saida;
}
