//lista usando estrutura condicional simples em (javascript)

//EXERCICIO 1
const entrada = 15;
let calculo = entrada % 2;

if(calculo > 0){
console.log("numero impar");
} else {
    console.log("numero par");
}


//EXERCICIO 2
const salario = 1520;
if(salario <= 1412){
    let calculo1 = salario * 0.50;
    let resulta1 = calculo1 + salario;
console.log("Salario = R$", salario," Reajustado para = R$", resulta1);
} if(salario > 1412) {
 let calculo2 = salario * 0.40;
 let resulta2 = calculo2 + salario;
console.log("Salario = R$", salario," Reajustado para = R$", resulta2);
}

//EXERCICIO 3
const num = 2025;
let calcul = Math.trunc(num / 100);
let resto = num % 100;
let sub = Math.pow ( calcul + resto,2)
if(sub == num){
    console.log("Possui a caracteristica");
}
if(sub != num){
    console.log("Não possui a Caracteristica");
}

//EXERCICIO 4

let idade = 67;
if(idade < 16){
    console.log("Não Eleitor");
}
if(idade >= 18 && idade <= 65){
    console.log("Eleitor Obrigatório");
}
if(idade >= 16 && idade < 18 || 65){
    console.log("Eleitor Facultativo")
}

//EXERCICIO 5
const A = 1;
const B = 2;
const C = 3;
let calcular = Math.pow(B,2) - (4 * A * C);

if(calcular < 0){
    console.log("Raízes Imaginarias");
}
if(calcular == 0){
    console.log("Raiz Unica");
}
if(calcular > 0){
    console.log("Raizes Distintas");
}