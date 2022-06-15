
function ordena(){
nomes=document.getElementById("demo1").value;
var nomes = nomes.split(", ");
nomes.sort();
document.getElementById("demo2").innerHTML = nomes;
console.log(nomes);
}