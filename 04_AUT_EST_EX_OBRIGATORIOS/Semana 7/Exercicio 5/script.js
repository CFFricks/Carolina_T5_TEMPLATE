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