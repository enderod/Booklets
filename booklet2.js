// Actividad 1

// Solicitar al usuario un (1) nombre.
// Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
// Caso contrario, la salida será “Yo no fui”

let nombreuno= prompt("ingrese un nombre");
let nombredos= "Bart";
if (nombreuno == nombredos) { 
    alert("Fui yo");
}
else{
    alert("yo no fui");
}

// Actividad 2

let teclauno= prompt("Inserte una Tecla");

if ((teclauno=="y") ||(teclauno=="Y")){
   alert("Correcto");
 }
else {
    alert("Incorrecto");
}

// Actividad 3

let unnumero= prompt ("Ingrese un numero");

if (unnumero=="1"){
    alert("Elegiste a Homero");
}
else if ( unnumero=="2"){
    alert("Elegiste a Marge");
}
else if (unnumero=="3"){
    alert("Elegiste a Bart");
}
else if (unnumero=="4"){
    alert("Elegiste a Lisa");
}
else {
    alert("Error");
}

// Ejercicio 4

let entradauno= prompt("Ingrese un valor del presupuesto");
parseFloat=entradauno;

if ((entradauno>=0) && (entradauno<=1000)){
    alert("Presupuesto Bajo");
} 
else if ((entradauno>=1001) && (entradauno<=3000)){
    alert("Presupuesto Medio");
}
else if (entradauno>3001){
    alert("Presupuesto Alto");
}
else{
    alert("Error");
}
// actividad 5

let productouno= prompt("1-inserte un producto");
let productodos= prompt("2-inserte el siguiente producto");
let productotres= prompt("3-inserte el siguiente producto");
let productocuatro= prompt("4-inserte el siguiente producto");
let listadeproductos=  (productouno+", "+productodos+", "+productotres+", "+productocuatro);

if ((productouno!=="") && (productodos!=="") && (productotres!=="") && (productocuatro!=="")) 
{
    alert("La lista de productos es:" +" "+listadeproductos);
}
else {
    alert("Error: Es necesario cargar todos los productos")
}