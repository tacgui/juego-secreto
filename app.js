let numeroSecreto;
let numerosMaximo=10;
let numerosSorteados=[];
let intento;
let maxIntentos=3;
condicionesIniciales();

function asignarTextoElemento(etiqueta,contenido){
    let titulo = document.querySelector(etiqueta);
    titulo.innerHTML=contenido;
    return;
}

function limpiarcaja(){
    document.querySelector("#valorUsuario").value="";
}

function deshabilitarfunciones(etiqueta,elemento){
    document.getElementById(etiqueta).removeAttribute(elemento);
    return;
}

function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    return;
}

function verificarIntento(){
    var numero=parseInt(document.getElementById("valorUsuario").value);
    console.log(`El numero del usuario es: ${numero}`);
    if(numero===numeroSecreto){
        asignarTextoElemento("p",`¡¡¡¡¡Ganaste!!!!. Acertaste el numero en ${intento} ${intento>1 ? "intentos": "intento"}. El numero secreto es: ${numeroSecreto}`);
        deshabilitarfunciones("reiniciar","disabled");
    }else if(intento>=maxIntentos){
        asignarTextoElemento("p",`¡Perdiste!. El numero secreto es: ${numeroSecreto}`);        
        deshabilitarfunciones("reiniciar","disabled");
    }else{
        pista(numero,numeroSecreto,intento,maxIntentos);
        intento++;
    }
    limpiarcaja();
    return;
}

function pista(numeroUsuario,numeroSecreto,intento,maxIntentos){
    asignarTextoElemento("p",`El numero secreto es ${numeroUsuario>numeroSecreto ? "menor":"mayor"}. Te queda ${maxIntentos-intento} ${   
    (maxIntentos-intento)>1 ? "intentos": "intento"}`);
    return;
}

function condicionesIniciales(){
    asignarTextoElemento("h1",`Juego del número secreto`);
    asignarTextoElemento("p",`Indica un numero del 1 al ${numerosMaximo}. Tienes ${maxIntentos} intentos.`);
    numeroSecreto=generarNumeroSecreto(10);
    intento=1;
    limpiarcaja;
    }

function generarNumeroSecreto(){
    numeroGenerado = Math.floor(Math.random()*numerosMaximo)+1; 
    console.log(numeroGenerado);    
    if(numerosSorteados.length==numerosMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números");
    }else{
    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado);
        console.log(numerosSorteados);
        return numeroGenerado;
    }
}
}






/*
Funcion anonima sin nombre
let miFuncion = function hola() {
    console.log("Hola desde una función anónima");
  };

miFuncion();

En una variable hay dos funciones
let misFunciones = {
    funcionUno: function() {
        console.log("Esta es la función uno");
    },
    funcionDos: function() {
        console.log("Esta es la función dos");
    }
};
misFunciones.funcionDos();
misFunciones.funcionUno();*/