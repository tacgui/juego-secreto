function bienvenida(){
    console.log("¡Hola, mundo!");    
    return;
    }
    bienvenida();

function bienvenidaAUsuario(nombre){
    console.log(`¡Hola, ${nombre}!`);    
    }
    bienvenidaAUsuario("Alejandro");


function dobleNumero(numero) {
    return numero*2;
    }
    console.log(`El doble de 20 es ${dobleNumero(20)}.`);


function promedio(numero1,numero2,numero3){
    return promedio=(parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3
    }
    console.log(`El promedio de 3, 2 y 5 es ${promedio(3,2,5)}.`);    


function numeroMayor(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
    }
    console.log(`El numero mayor entre 5 y 9 es ${numeroMayor(5,9)}`);


function numeroAlCuadrado(numero1){
    return numero1*numero1;
    }
    console.log(`El cuadrado de 5 es ${numeroAlCuadrado(5)}`);
