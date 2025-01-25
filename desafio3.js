var imc = function(peso, estatura){
    return parseFloat(peso)/(parseFloat(estatura)*parseFloat(estatura));
    }
console.log(`Tu IMC o indice de masa muscular es: ${imc(92,1.62)}`)


function factorial(numero){
    let factorial = 1 ;
        for (let index = numero; index > 0; index--){
        factorial*=index;
        }
        return factorial;
    } 
console.log(`El factorial de 8 es: ${factorial(8)}`);


function cambioDolaresAReales(dolares){
    return dolares*4.80;
    }
console.log(`3.50 dolares son: ${cambioDolaresAReales(3.50)} reales brasileños`);


function areaRectangular(altura, anchura){
    return altura * anchura;
    }
function perimetroRectangular(altura, anchura) {
    return (altura*2)+(anchura*2);    
    }
console.log(`El rectangulo de lado 4 y 6 tiene un area de ${areaRectangular(4,6)} y un perimetro de ${perimetroRectangular(4,6)}`);


function areaCircular(radio){
    return 3.14*radio*radio;
    }
function perimetroCircular(radio) {
    return 2*3.14*radio;
    }
console.log(`El radio de un circulo es 5, su radio es de ${areaCircular(5)} y su perimetro es de ${perimetroCircular(5)}`)


function tablaDeMultiplicar(numero) {
    let maximo = 12;
    console.log(`La tabla de multiplicar del numero ${numero}:`);
        for (let indice = 0; indice <= maximo; indice++) {
            console.log(`${numero} x ${indice} = ${numero*indice}`);
        }
    }
tablaDeMultiplicar(6);