let prato, bebida, sobremesa;

//Pratos

function selectFrango(){
	 document.getElementById('frango').style.borderColor = "green";
	 document.getElementById('carne').style.borderColor = "white";
	 document.getElementById('arroz').style.borderColor = "white";
	 document.getElementById('nozes').style.borderColor = "white";

	 prato = "Frango";
}

function selectArroz(){
	 document.getElementById('frango').style.borderColor = "white";
	 document.getElementById('carne').style.borderColor = "white";
	 document.getElementById('arroz').style.borderColor = "green";
	 document.getElementById('nozes').style.borderColor = "white";

	 prato = "Arroz";

}

function selectNozes(){
	 document.getElementById('frango').style.borderColor = "white";
	 document.getElementById('carne').style.borderColor = "white";
	 document.getElementById('arroz').style.borderColor = "white";
	 document.getElementById('nozes').style.borderColor = "green";

	 prato = "Nozes";
}

function selectCarne(){
	 document.getElementById('frango').style.borderColor = "white";
	 document.getElementById('carne').style.borderColor = "green";
	 document.getElementById('arroz').style.borderColor = "white";
	 document.getElementById('nozes').style.borderColor = "white";

	 prato = "Carne";
}

//Bebidas

function selectCoca(){
	 document.getElementById('coca').style.borderColor = "green";
	 document.getElementById('refresco').style.borderColor = "white";
	 
	 bebida = "Coca-Cola";
}

function selectRefresco(){
	 document.getElementById('coca').style.borderColor = "white";
	 document.getElementById('refresco').style.borderColor = "green";
	 
	 bebida = "refresco";
}

//Sobremesas

function selectPudim(){
	 document.getElementById('pudim').style.borderColor = "green";
	 document.getElementById('sorvete').style.borderColor = "white";
	 
	 sobremesa = "Pudim";
}

function selectSorvete(){
	 document.getElementById('pudim').style.borderColor = "white";
	 document.getElementById('sorvete').style.borderColor = "green";
	 
	 sobremesa = "Sorvete";
}

//Botão de finalizar

function finalizar(){
	let mensagem;
	mensagem = "https://wa.me/+5543999296574?text=" + "Olá,\ gostaria\ de\ pedir\ um\ combo\ de\ " + prato + ",\ " + bebida + "\ e\ " + sobremesa + ",\ por\ favor.";
	
	window.open(mensagem);
}


/*function teste(){
	alert("Olá, gostaria de pedir um combo de " + prato + ", " + bebida + " e " + sobremesa + ", por favor.");
}*/