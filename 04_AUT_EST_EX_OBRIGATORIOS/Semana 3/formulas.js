const { get } = require("express/lib/response")

function calcTempo(velocidade){
    var tempo = velocidade/10
    return tempo
}

function mostrar(){
    var velocidade =  document.getElementById("velocidade").value;
    calcTempo(velocidade);
    var resultado = calcTempo(velocidade)
    document.getElementById("result").textContent= "Resultado:" + resultado + "s"
}
function calcAltura(velocidade){
    var altura = (velocidade*velocidade)/20
    return altura
}

function mostrar2(){
    var velocidade =  document.getElementById("velocidade").value;
    calcAltura(velocidade);
    var resultado2 = calcAltura(velocidade)
    document.getElementById("result2").textContent= "Altura é:" + resultado2 + "m"
}
