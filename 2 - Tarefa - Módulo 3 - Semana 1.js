// 1 - Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição:
// while, do-while, for e foreach.


//do  while = faça enquanto
var caixa = ['maçã', 'pera', 'banana', 'laranja', 'uva', 'melancia', 'abacaxi', 'abacate', 'melao', 'goiaba']
var index = 0
while (index !== 10){
   console.log (caixa [index])
   document.write (caixa [index] + "<br>") 
   index= index+1
}
document.write("<br>" +"<br>")

//while = enquanto

 index = 0;
do {
    console.log('index');
    document.write (caixa [index] + "<br>") 
             index++;
} while(index < 10)

//for = para faca*/
//criamos uma variavel interna chamada i (var i = 0;
// condição para que aconteça a repetição i < 10; = enquanto a minha condição for menor do que 10 eu quero iniciar uma repetição
document.write("<br>" +"<br>")

for (var i = 1; i < 11; i ++ ){
    //Código
console.log ('este laço rodou' + i + 'vezes'); 
document.write(i + "") 
}
document.write("<br>" +"<br>")


nomes = ["tubos", "para", "coleta", "de sangue", "azul", "vermelho", "amarelo", "verde", "rosa", "cinza"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);
document.write(nomes +"<br>" +"<br>")


//////////////
// 2 - Faça um algoritmo para exibir a tabuada de 2. 
//O resultado na tela deve ser algo parecido com isso:


var valor = 2;
for(var i = 1; i < 11; i++) {
    document.write(valor + " x " + i + " = " + (valor * i) + "<br>");
}

document.write("<br>" +"<br>")

/////////

//Crie um array com 5 números reais e para cada elemento utilize funções 
//matemáticas para exibir respectivamente:

//O quadrado

//A raiz quadrada

//Apenas a parte inteira

//O número arredondado para baixo

//O número arredondado para cima


//Apenas a parte inteira
var valor = [5.04, 2.46, 9.24, 12.9, 3.5]
for(var i=0; i < valor.length; i++){
    var mt=Math.trunc(valor [i]);
    document.write(mt+ ",")
}
document.write("<br>" +"<br>")


//O número arredondado para cima
var valor = [2.7,8.5,6.7,8.5,9.4]
var mt=Math.ceil(valor [0]);
var mt1=Math.ceil(valor [1]);
var mt2=Math.ceil(valor [2]);
var mt3=Math.ceil(valor [3]);
var mt4=Math.ceil(valor [4]);

document.write(`${mt}`+","+ mt1+","+ mt2 +","+ mt3 +","+ mt4 );
document.write("<br>" +"<br>")

//O número arredondado para baixo

var valor = [6.04, 5.46, 9.24, 12.09, 65.46,]
for(var i=0; i < valor.length; i++){
    var mt=Math.floor(valor [i]);
    document.write(mt+ ",");
}
document.write(`${mt}`+","+ mt2);
document.write("<br>" +"<br>")


//A raiz quadrada

var valor = [1.04, 5.46, 9.24, 12.09, 65.46]
for(var i=0; i < valor.length; i++){
    var mt=Math.sqrt(valor [i]);
    document.write(mt+ ",");
}
document.write("<br>" +"<br>")


//O quadrado
// Não funcionou 

var valor = [4, 5, 9, 10, 6,3];
for(var i=0; i < valor.length; i++){
    var mt=Math.pow(valor [i]);
    document.write(mt+ ",");
}
document.write("<br>" +"<br>")

