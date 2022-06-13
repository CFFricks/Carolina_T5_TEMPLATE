
var getDBResDiv = "#getDB";

function mandaIndic(){
var url="http://127.0.0.1:3029/indicacoesinsert"
console.log('estou na funcao')
$.ajax({
    url: url,
    type: 'POST',
    data: {
        Nome: $('#nome').val(),
        Indicacao: $('#indicacao').val(),
    },
    
});
}


//ETAPA 7
var getDBResDiv = "#getDB";
    function TestGETDB(){
        var url = "http://127.0.0.1:3029/indicacoes";
        var resposta;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();
        resposta = JSON.parse(xhttp.responseText);
        $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
        $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
        console.log(xhttp.responseText);
    }