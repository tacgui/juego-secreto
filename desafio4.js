let listaGenerica=[];
console.log(listaGenerica);


let lenguagesDeProgramacion=["JavaScript","C","C++","Kotlin","Python"];
console.log(lenguagesDeProgramacion);


lenguagesDeProgramacion.push("Java");
lenguagesDeProgramacion.push("Ruby");
lenguagesDeProgramacion.push("GoLang");
console.log(lenguagesDeProgramacion);


function mostrarElementosDeLista(lista){
    console.log("Mostrar lenguajes de programacion por orden:");
    for (let inicio = 0; inicio < lista.length; inicio++) {
        console.log(lista[inicio]);        
    }
}
mostrarElementosDeLista(lenguagesDeProgramacion);

function mostrarElementosDeListaInverso(lista){
    console.log("Mostrar lenguajes de programacion por orden inverso:");
    for (let inicio = lista.length-1; inicio>=0 ; inicio--) {
        console.log(lista[inicio]);        
    }
}
mostrarElementosDeListaInverso(lenguagesDeProgramacion);


let numerosEnLista=[3,5,8,2,6];
function promediarNumerosLista(lista){
    let suma=0;
    for (let inicio = 0; inicio < lista.length; inicio++) {
        suma+=lista[inicio];        
    }
    return promedio=suma/lista.length;
}
console.log(`El promedio de la lista de numeros es: ${promediarNumerosLista(numerosEnLista)}`);


//Siguiendo la lista anterior(numerosenLista)
function numeroMayorLista(lista){
    let mayor=0;
    for (let inicio = 0; inicio < lista.length; inicio++) {
        if(lista[inicio]>mayor){
            mayor=lista[inicio];
        }        
    }
    return mayor;
}

function numeroMenorLista(lista){
    let menor=99999;
    for (let inicio = 0; inicio < lista.length; inicio++) {
        if(lista[inicio]<menor){
            menor=lista[inicio];
        }        
    }
    return menor;
}
console.log(`El numero mayor es: ${numeroMayorLista(numerosEnLista)} y \nel numero menor es: ${numeroMenorLista(numerosEnLista)}`);


//Siguiendo la lista anterior(numerosenLista)
function sumarNumerosLista(lista){
    let suma=0;
    for (let inicio = 0; inicio < lista.length; inicio++) {
        suma+=lista[inicio];        
    }
    return suma;
}
console.log(`El promedio de la lista de numeros es: ${sumarNumerosLista(numerosEnLista)}`);


numerosEnLista=[20,2,5,8,6,3,9];
function posicionEnLista(lista,numero) {
    let posicion;
    for (let indice = 0; indice < lista.length; indice++) {
        if(lista[indice]==numero){
            posicion = indice;
            break;
        } else{
            posicion = -1;
        }
    }
    return posicion;
    }
console.log(`El numero 8 se encuentra en la posicion ${posicionEnLista(numerosEnLista,8)}`);


let listaA=[3,6,7,5,2];
let listaB=[2,5,8,10,1];
let listaResultado=[];
function sumarListas(listaA, listaB) {
    if(listaA.length==listaB.length){
    for (let indice = 0; indice < listaA.length; indice++) {
        listaResultado.push(listaA[indice]+listaB[indice])        
        }
    return listaResultado;
    }else{
    return resultado="que no se puede sumar. Los tamaños de las listas son diferentes.";
}
}
console.log(`La suma entre la lista A=${listaA} \ny la lista B=${listaB} \nresulta en R=${sumarListas(listaA,listaB)}`);


let listaNumeros=[7,6,3,0,9];
let listaCuadradoResultado=[];
function cuadradoDeCadaNumeroListas(lista) {    
    for (let indice = 0; indice < lista.length; indice++) {
        listaCuadradoResultado.push(lista[indice]*lista[indice])        
        }
    return listaCuadradoResultado;
    }
console.log(`La lista es:${listaNumeros}\nla lista de numeros al cudrado es: ${cuadradoDeCadaNumeroListas(listaNumeros)}`)