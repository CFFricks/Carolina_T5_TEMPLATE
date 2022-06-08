let check = document.querySelector(".check");
let number = document.querySelector(".numero");
let text = document.querySelector(".text");

let regex = /^[\d,\s,\+,\-]{11,11}/;

check.addEventListener("click",()=>{
	if(number.value ==""){
		text.innerText = "Coloque seu numero";
		text.style.color = "#fff";
	}
	else if(number.value.match(regex)){
		text.innerText = "Parabens!! Seu numero é valido";
		text.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		text.innerText = "Oops! teu numero é invalido";
		text.style.color = "#da3400";
		}
});