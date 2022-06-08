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