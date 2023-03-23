let atributos = ["display", "color", "padding", "margin", "icons"];
const readline = require('readline-sync');

do{
    var nome = readline.question("\n 1- Coloque uma propriedade CSS \n 2- Digite lista para ver as propriedades dela \n 3- Saia a qualquer momento com a palavra sair\n");
    if(nome != "sair" && nome != "lista")
    {
    atributos.push(nome)
    }
    if(nome === "lista"){
        console.log(atributos);
    }
}while(nome !="sair")


console.log(atributos.sort());

