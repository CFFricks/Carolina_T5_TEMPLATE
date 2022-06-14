
function calc(){
    let n = document.getElementById("num").value;
    if(Number(n)>0){
        let result = document.getElementById("result");
        n=n.split("");
        let soma = 0;
        for (i=0; i<n.length; i++){
            soma += parseInt(n[i]);
    };
    result.innerHTML = "A soma dos algaritimos é " + soma;
}
      
    else {
            result.innerHTML = "Só pode numeros positivos"
        };
    };


    // function ExecutarEx2(){
    //     let n = document.getElementById("n").value;
    //     if(Number(n)>0){
    //         let resultado = document.getElementById("resultado");
    //         n = n.split("");
    //         let soma = 0;
    //         for(i=0; i<n.length; i++){
    //             soma += parseInt(n[i]);
    //         };
    //         resultado.innerHTML = "A soma dos algarismos é " + soma;
    //     }
    //     else{
    //         resultado.innerHTML = "Apenas números positivos!"
    //     };
    // };