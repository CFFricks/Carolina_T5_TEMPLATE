function parOuImpar(){
    let n = document.getElementById("numero");
    
    if (n[0] % 2 === 0){
        alert("O número na casa das centenas é: Par");
    }
    else{
        alert("O número na casa das centenas é: Impar")
    }
}