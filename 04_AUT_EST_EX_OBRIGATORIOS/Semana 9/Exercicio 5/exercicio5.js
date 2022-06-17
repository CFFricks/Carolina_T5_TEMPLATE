function confere(){
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('fim').value);
    var resposta = document.getElementById('resposta');
    var texto='';
    var divisores;
  //se o numero for maior que o primeiro colocado e menor que o ultimo colocado:
    for(var count=inicio ; count<=fim ; count++){
        divisores=0;
        for(var aux=1 ; aux<=count ; aux++)
            if(count % aux == 0)
                divisores++;
  
        if(divisores==2)
            texto += count + '<br />';

    }

    resposta.innerHTML = texto;
  }