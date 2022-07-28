// Actividad 1

let nombre= "Homero";
let apellido= "Simpson";
let edad= 45;

console.log(nombre);
console.log(apellido);
console.log(edad);

// Actividad 2

const ciudad1= "caracas";
const ciudad2= "merida";
const ciudad3= "maracay";
const ciudad4= "miranda";
const ciudad5= "carupano";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

// Actividad 3

let nombre= "Bart";
let apellido= "Simpson";
let direccion= "742 Evergreen";
let pais="USA";
let fechadenacimiento="02-11-70";
const codigo= "B47U89RE243";

let carnet= "Codigo:"+codigo+" "+
            "Nombre:"+nombre+" "+
            "Apellido:"+apellido+" "+
            "Direccion:"+direccion+" "+
            "Pais:"+pais+" "+
            "Nacimiento:"+fechadenacimiento;

console.log(carnet);


// Ejercicio 4

let nombre1= prompt("ingrese nombre 1");
let nombre2= prompt("ingrese nombre 2");
let nombre3= prompt("ingrese nombre 3");
let nombre4= prompt("ingrese nombre 4");
let nombre5= prompt("ingrese nombre 5");

let familia= "1°"+nombre1+" "+
             "2°"+nombre2+" "+
             "3°"+nombre3+" "+
             "4°"+nombre4+" "+
             "5°"+nombre5+" ";

console.log(familia);  

// actividad 5

let precio1= prompt("ingrese un precio");
const descuento= (20);
let preciocondescuento=(precio1-((precio1*descuento)/100))
alert(preciocondescuento);

// consulta: cuando se indica en el enunciado "Realizar una salida" no se refiere a utilizar la instruccion "alert"?
//console.log(preciocondescuento);
