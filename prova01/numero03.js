let preco = 300;
let i = 0;

if(preco <= 50){
    i = preco + (preco * 0.06)
} else if(preco >= 50 && preco <= 100){
   i = preco + (preco * 0.15)
}else if(preco > 100){
    i = preco + (preco * 0.20)
}

if(i <= 90){
    console.log("Novo preço: "+ i + " Classificação: Barato")
}else if(i >= 90 && i <= 220){
    console.log("Novo preço: "+ i + " Classificação: Normal")
}else if(i >= 220 && i <= 300){
    console.log("Novo preço: "+ i + " Classificação: caro")
}else if(i > 300){
console.log("Novo preço: "+ i + " Classificação: Muito caro")
}
