const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 7000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("todososex.html"));
app.use(express.json());


function exercicio1Btn(){
    document.getElementById("exercicio1").style.display = "block";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "none";
}

function exercicio2Btn(){
document.getElementById("exercicio1").style.display = "none";
document.getElementById("exercicio2").style.display = "block";
document.getElementById("exercicio3").style.display = "none";
document.getElementById("exercicio4").style.display = "none";
document.getElementById("exercicio5").style.display = "none";
}
// FUNCAO INVERTE VALORES EX 2
function inverte(){
    var text1 = (document.getElementById("text1").value);
    var text2 = (document.getElementById("text2").value);

    var aux = text1;

    text1=text2;
    text2=aux;

    alert("Antes:\n"+
       "text1:" +document.getElementById("text1").value+"\n"+
       "text2:"+document.getElementById("text2").value+"\n\n"+
       "Invertido:\n"+
       "text1 invertido:"+text1+"\n"+
       "text2 invertido:"+text2+"\n\n");
   }

   function exercicio3Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "block";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "none";
}
// FUNCAO DO EXERCICIO 3

let check3 = document.querySelector(".check3");
let number = document.querySelector(".numero");
let text = document.querySelector(".text");
console.log();
let regex = /^[\d,\s,\+,\-]{11,11}/;

check3.addEventListener("check3",()=>{
	if(number.value ==""){
		text.innerText = "Coloque seu numero";
		text.style.color = "#fff";
	}
	else if(number.value.match(regex)){
		text.innerText = "Parabens!! Seu numero é valido";
		text.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		text.innerText = "Oops! teu numero é invalido";
		text.style.color = "#da3400";
		}
});

function exercicio4Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "block";
    document.getElementById("exercicio5").style.display = "none";
}
//EXERCICIO 4
const text1 = document.getElementById('pessoas');
const text2 = document.getElementById('periodo');
function buttonEnviar(){
    var valor1 = parseInt(text1.value);
    var valor2 = text2.value;
    if((valor2 == "Diurno" || valor2 == "diurno") & (valor1 <= 50)){
        alert("R$ 200,00 por pessoa")
    }
    else if((valor2 == "Diurno" || valor2 == "diurno" ) & (valor1 > 50)){
        var aux = 200 - (200 * 0.4);
        alert("R$ " + aux + ",00 por pessoa")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno") & (valor1 <= 50)){
        alert("R$ 100,00 por pessoa")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno" ) & (valor1 > 50)){
        var aux = 100 - (100 * 0.2);
        alert("R$ " + aux + ",00 por pessoa")
    }
    else{
        alert("\nValores inválidos!")
    }
}

function exercicio5Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "none";
    document.getElementById("exercicio5").style.display = "block";
}
//EXERCICIO 5
function qtAlunos(){
    var qt = parseInt(document.getElementById('qt').value);
    var text = ''
    for(i=0; i<qt; i++){
        text += '<input type="text" placeholder="nome" class="nome">' + 
        '<input type="text" placeholder="nota da prova" class="prova">' +
        '<input type="text" placeholder="nota do trabalho" class="trabalho"><BR>'
    }
    document.getElementById('inputs').innerHTML = text
}

function geral(){
    var prova = document.querySelectorAll('.prova');
    var trabalho = document.querySelectorAll('.trabalho')
    var nome = document.querySelectorAll('.nome')
    var ind = ''
    var geral = 0
    var soma = 0
    var soma_p = 0
    var soma_t = 0
    var maior_nota_p = 0
    var menor_nota_p = 1000
    var maior_nota_t = 0
    var menor_nota_t = 1000
    for(var i = 0; i<prova.length; i++){
        var media = ((parseInt(prova[i].value) * 2) + (parseInt(trabalho[i].value) * 3)) / 5
        ind += '<h3>Aluno ' + nome[i].value + ': ' + media + '</h3>'
        soma += media
        soma_p += parseInt(prova[i].value)
        soma_t += parseInt(trabalho[i].value)
        if (parseInt(prova[i].value) > maior_nota_p){
            maior_nota_p = parseInt(prova[i].value)
        }
        if ((parseInt(prova[i].value) < menor_nota_p)){
            menor_nota_p = parseInt(prova[i].value)
        }
        if (parseInt(trabalho[i].value) > maior_nota_t){
            maior_nota_t = parseInt(trabalho[i].value)
        }
        if ((parseInt(trabalho[i].value) < menor_nota_t)){
            menor_nota_t = parseInt(trabalho[i].value)
        }
        }
    if (i == prova.length){
        geral = soma / prova.length
        var media_p = soma_p / prova.length
        var media_t = soma_t / trabalho.length
        document.getElementById('result').innerHTML = ind + '<h3>Media geral: ' + geral + '</h3>' + '<h3>Media provas: ' + media_p + '</h3>' + '<h3>Media Trabalhos: ' + media_t + '</h3>' + '<h3>Menor e maior notas prova: ' + menor_nota_p + '//' + maior_nota_p + '</h3>' + '<h3>Menor e maior notas trabalho: ' + menor_nota_t + '//' + maior_nota_t + '</h3>'
    }
}