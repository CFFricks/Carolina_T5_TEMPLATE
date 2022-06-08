function inverte(){
    var text1 = (document.getElementById("text1").value);
    var text2 = (document.getElementById("text2").value);

    var aux = text1;

    text1=text2;
    text2=aux;

    alert("Antes:\n"+
       "text1:" +document.getElementById("text1").value+"\n"+
       "text2:"+document.getElementById("text2").value+"\n\n"+
       "Invertido:\n"+
       "text1 invertido:"+text1+"\n"+
       "text2 invertido:"+text2+"\n\n");
   }