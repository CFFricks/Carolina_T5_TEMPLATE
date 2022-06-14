const nomes = [nomes]
document.getElementById("demo1").innerHTML = nomes;
function ordena(){
nomes.sort();
document.getElementById("demo2").innerHTML = nomes;
console.log(nomes);
}