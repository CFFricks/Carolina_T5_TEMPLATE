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

let check = document.querySelector(".check");
let number = document.querySelector(".numero");
let text = document.querySelector(".text");

let regex = /^[\d,\s,\+,\-]{11,11}/;
check.addEventListener("click",()=>{
	if(number.value ==""){
		text.innerText = "Coloque seu numero";
		text.style.color = "//#endregion";
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
console.log()

// EXERCICIO 4
function exercicio4Btn(){
    document.getElementById("exercicio1").style.display = "none";
    document.getElementById("exercicio2").style.display = "none";
    document.getElementById("exercicio3").style.display = "none";
    document.getElementById("exercicio4").style.display = "block";
    document.getElementById("exercicio5").style.display = "none";
}

const text1 = document.getElementById('pessoas');
const text2 = document.getElementById('periodo');
function buttonEnviar(){
    var valor1 = parseInt(document.getElementById("pessoas").value);
    var valor2 = (document.getElementById("periodo")).value;
    if((valor2 == "Diurno" || valor2 == "diurno") & (valor1 <= 50)){
        alert("no total: R$ " + 200*valor1 + ",00")
    }
    else if((valor2 == "Diurno" || valor2 == "diurno" ) & (valor1 > 50)){
        var aux = 200 - (200 * 0.4);
        alert("R$ " + aux + ",00 por pessoa")
        alert("no total: R$ " + aux*valor1 + ",00")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno") & (valor1 <= 50)){
        alert("no total: R$ " + 100*valor1 + ",00")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno" ) & (valor1 > 50)){
        var aux = 100 - (100 * 0.2);
        alert("no total: R$ " + aux*valor1 + ",00")
    }
}