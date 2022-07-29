// Actividad 1

/*Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.*/

// function entrada(){
//     return prompt("Ingrese un numero");
// }
// function procesamiento(valor){
//     return "el valor de entrada es"+valor;
// }

// function salida(valor){
//     alert(valor);
// }

// Solicitar explicacion de la invocacion de las tres funciones


// Actividad 2

/*Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano.
 Para ello, puede emplearse  Math.round. Luego invocar la función de forma iterativa cinco (5) veces, 
 solicitando en cada ciclo un número al usuario.+*/
//let numeroentero=0;
//numeroentero=parseInt(numeroentero);
// let numerodecimal=0;
// function numeroentero(){
//     numerodecimal=prompt("Ingrese un numero decimal");
//     numerodecimal=parseInt(Math.round(numerodecimal));
//     return (numerodecimal);
//      }
//  for (let i=0; i<=5;i++){
//     numeroentero();
//     console.log(numerodecimal);
//  } 
//     alert("Ha finalizado la carga de los numeros decimales")

// Actividad 3

/*Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, 
solicitando en cada ciclo un precio y porcentaje al usuario.*/

// function impuesto(precio,porcentaje){
//     precio=prompt("ingrese el precio del articulo");
//     precio=parseInt(precio);
//     porcentaje=prompt("Ingrese el porcentaje de impuesto");
//     porcentaje=parseInt(porcentaje);
//     impuestofinal=((precio)+((precio*porcentaje)/100));
//         return (impuestofinal);
//     }
// for (let i=1; i<=5; i++){
//        console.log(impuesto());
       
// }
// alert("Ha finalizado la carga datos de impuesto");

// Actividad 4

// Codificar dos funciones:
// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, 
// y lo retorna en su equivalente en dólares.
// Una función cotizarPesos(dolar), 
// que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
// Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.

function cotizardolar(){
    const tasadecambiopesos=323 //Para este ejemplo tome un tipo de cambio fijo o constante
    let pesosingresados=parseInt(prompt("Ingrese la cantidad de Pesos argentinos que desea convertir en dolares"));    
    while (isNaN(pesosingresados)) {
        pesosingresados=parseInt(prompt("Ingrese la cantidad de Pesos argentino en numero que desea convertir en dolares"));
      }
        return ((pesosingresados/tasadecambiopesos)+" "+"$USD");
}

function cotizarpesos(){

    const tasadecambiopesos=323 // Para este ejemplo tome un tipo de cambio fijo o constante
    let dolaresingresados=parseInt(prompt("Ingrese la cantidad de dolares que desea convertir a pesos argentinos"));
    while (isNaN(dolaresingresados)) {
        dolaresingresados=parseInt(prompt("Ingrese la cantidad de dolares en numero que desea convertir a pesos argentinos"));
      }
          return ((dolaresingresados*tasadecambiopesos)+" "+"$ARS");
    }

function tipodecotizacion(){
let tipodecotizacion=prompt("Ingrese la palabra dolar o pesos para obtener la cotizacion deseada, si desea finalizar ingrese ESC")
while (tipodecotizacion !== "ESC" ){
switch (tipodecotizacion){
case "dolar":
    alert(cotizardolar());
    break;
case "pesos":
    alert(cotizarpesos());
    break;
default:
    alert("Error, debe ingresar la palabra dolar o pesos para obtener la cotizacion deseada, si desea finalizar ingrese ESC");
    break;
}
    tipodecotizacion=prompt("Ingrese la palabra dolar o pesos para obtener la cotizacion deseada o ESC para finalizar")
}
alert("Muchas gracias por realizar su conversion de divisas con nosotros")
}


// // Actividad 5


