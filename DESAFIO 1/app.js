document.querySelector("h1").innerHTML= "Hora del Desafio";


function botonClicado(){
    console.log("El botón fue clicado");
}

function consultaCiudadDeBrasil(){
    var ciudadDeBrasil=prompt("Digite una ciudad de Brasil");
    alert(`Estuve en ${ciudadDeBrasil} y me acorde de ti`);
}

function botonAlerta(){
    alert("Yo amo JS");
}

function suma(){
    var numero1=parseInt(prompt("Dame el primer numero:"));
    var numero2=parseInt(prompt("Dame el segundo numero:"));
    alert(`La suma de ${numero1} y ${numero2} da el resultado de ${numero1+numero2}`);
}