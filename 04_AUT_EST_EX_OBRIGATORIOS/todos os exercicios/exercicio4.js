const text1 = document.getElementById('pessoas');
const text2 = document.getElementById('periodo');
function buttonEnviar(){
    var valor1 = parseInt(text1.value);
    var valor2 = text2.value;
    if((valor2 == "Diurno" || valor2 == "diurno") & (valor1 <= 50)){
        alert("R$ 200,00 por pessoa")
        alert("no total: R$ " + aux*valor1 + ",00")
    }
    else if((valor2 == "Diurno" || valor2 == "diurno" ) & (valor1 > 50)){
        var aux = 200 - (200 * 0.4);
        alert("R$ " + aux + ",00 por pessoa")
        alert("no total: R$ " + aux*valor1 + ",00")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno") & (valor1 <= 50)){
        alert("R$ 100,00 por pessoa")
        alert("no total: R$ " + aux*valor1 + ",00")
    }
    else if((valor2 == "Noturno" || valor2 == "noturno" ) & (valor1 > 50)){
        var aux = 100 - (100 * 0.2);
        alert("R$ " + aux + ",00 por pessoa")
        alert("no total: R$ " + aux*valor1 + ",00")
    }
}
// ISSO FOI MINHA LOGICA
// if(
//     numeros de passageiro>=50
//     and diurno
//     desconto=40% por pessoa
//     valor da passagem=200
//     if(
//         atender todas as condicoes= 120 reais por pessoa


//     )
// )
// else
//     numero de passageiro>=50
//     and noturno
//     desconto=20%
//     valor da passagem=100
//     if(
//         atender todas as condicoes= 80 reais por pessoa
//     )