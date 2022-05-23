// function calcularnotas(){

//     // pegando valor do input
//     var total = document.getElementById('valor').value;
//     console.log(total);
  
//     var notas;



//     notas = Math.floor(total/50)
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 50: ' + notas + "<br>";

//     notas = notas % 50
//     notas = Math.floor(total/20)
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 20: ' + notas + "<br>";

//     notas = notas % 20
//     //if (notas )
//     notas = Math.floor(total/10)
//     // devolvendo valor em html
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 10: ' + notas + "<br>";
    



//     notas = total % 10;
//     notas = Math.floor( notas / 5)
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 5: ' + notas + "<br>";

//     notas = notas % 5;
//     notas = Math.floor (notas / 2)
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 2: ' + notas + "<br>";

//     notas = notas % 2;
//     notas = Math.floor (notas / 1)
//     var resultado = document.getElementById('vem').innerHTML += 'NOTAS DE 1: ' + notas + "<br>";

//     var resultado = document.getElementById('vem').innerHTML += ''





//     //document.write(total_cedula1);

//
function calcularnotas(){
    let notas = [200, 100, 50, 20, 10, 5, 2, 1]
    let total_cedulas = []
    let total = document.getElementById('valor').value;
    let li = document.createElement ("li");

    for(let i=0; i< notas.length; i++ ){
        let nota = notas [i]
        let nota_total = Math.floor(total / nota)
        total = total % nota

        total_cedulas.push(nota_total);
    }
    li.innerHTML = `
        ${total_cedulas[0] } notas de 200,
        ${total_cedulas[1] } notas de 100,
        ${total_cedulas[2] } notas de 50,
        ${total_cedulas[3] } notas de 20,
        ${total_cedulas[4] } notas de 10,
        ${total_cedulas[5] } notas de 5,
        ${total_cedulas[6] } notas de 2,
        ${total_cedulas[7] } notas de 1,
    `
    document.getElementById("vem").appendChild(li)
}
