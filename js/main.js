/*
var nome = "Rodrigo Santos";
var idade = 22;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());

//var fruta = {nome:"maçã", cor:"vermelha"};
//console.log(fruta.nome);
//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);

/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}
    else{
      alert("menor de idade");
    }
*/

/*var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
*/

/*
for(var count = 0; count <5; count++){
    console.log(count);
}]
*/

/*
var d = new Date();
alert(d.getMonth()+1);
*/

function clicou(){
    //alert("obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";

}

function redirecionar(){
    window.open("https://google.com.br");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}