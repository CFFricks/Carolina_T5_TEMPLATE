function calc(){
    let val1 = parseInt(document.getElementById("val1").value);
    let val2 = parseInt(document.getElementById("val2").value);
    let sinal = document.getElementById("sinal").value;
    let resultado = document.getElementById("result").value;
    if(sinal== "+") result.value = val1 + val2;
    if(sinal== "-") result.value = val1 - val2;
    if(sinal== "*") result.value = val1 * val2;
    if(sinal== "/") result.value = val1 / val2;
    if(sinal== "//") result.value = Math.floor (val1 / val2);
    if(sinal== "%") result.value = val1 % val2;
}