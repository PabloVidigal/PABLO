const nota1 = document.getElementById("idInNota1");
const nota2 = document.getElementById("idInNota2");
const nota3 = document.getElementById("idInNota3");
const tipoMedia = document.getElementById("idInTipoMedia");
const resultado = document.getElementById("idOnResultado");

function calcularMedia(nota1, nota2, nota3, tipoMedia){
let strMediaTipo = "";
let media = 0;
switch(tipoMedia){
   case 1:
      strMediaTipo = "Media Aritmetica";
      media = (nota1+nota2+nota3)/3;
      break;
   case 2:
      strMediaTipo = "Media Ponderada";
      media = (nota1*3 + nota2*3 + nota3*4)/10;
      break;
   case 3:
      strMediaTipo = "Media Harmonica";
      media = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
      break;
   case 4:
      strMediaTipo = "Media Geometrica";
      media = Math.pow((nota1 * nota2 * nota3), 1/3);
      break;
    case 5:
      strMediaTipo = "Media Quadratica";
      media = Math.sqrt(((Math.pow(nota1,2) + Math.pow(nota2,2) + Math.pow(nota3,2)) / 3));
      break;
   default:
      strMediaTipo = "Tipo de media errado";
      media = 0;
}
   const saida = "Tipo da media: " + strMediaTipo;
   const saida2 = "Valor da media: " + media;
   return(saida + "\n" + saida2);
}

function eventoBtnCalcularMedia(){
   const nota1N = Number(nota1.value);
   const nota2N = Number(nota2.value);
   const nota3N = Number(nota3.value);
   const tipoMediaN = Number(tipoMedia.value);
   const valorFinal = calcularMedia(nota1N, nota2N, nota3N, tipoMediaN);
   resultado.innerText = valorFinal;
}