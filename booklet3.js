// Actividad 1

// Solicitar al usuario un (1) un número y un (1) texto.
// Efectuar una salida por alerta con el mensaje ingresado por cada repetición, 
// hasta alcanzar el valor señalado por el usuario.
let numeroingresado=parseInt(prompt("Ingrese un numero"));
let textoingresado=prompt("ingrese  un texto")
for (let i=0; i<numeroingresado; i++){
    alert((i+1)+" "+textoingresado);
    //alert(textoingresado);
}

// Actividad 2

// Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, 
// y efectuar una salida por alerta con el mensaje “lado” en cada repetición.
// Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

let numeroingresado=prompt("Ingrese un numero");
for (let i=0; i<numeroingresado; i++){
    if (i==4){
        break;
    }
    alert((i+1)+" "+"Lado");
}

// Actividad 3

// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

let alumnos=" ";
for (let i=0; i<10; i++) {
alumnos+=prompt("Ingrese el nombre del alumno")+"\n";
}
alert(alumnos);

Consultar como se hace...!


// Ejercicio 4

// Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados.

let usuarios=prompt("ingrese Nombre de usuario");
let ingresados=" ";
while (usuarios != "Voldemort"){
       ingresados+=usuarios+"\n";
       usuarios=prompt("ingrese Nombre de usuario");
       
}
alert(ingresados);


// actividad 5

// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
// Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

let entrada=(prompt("Seleccione un producto del 1 al 4"));

while (entrada!="ESC"){
   switch (entrada) {
    case "1":
    alert("Tomate");
    break;
    case "2":
    alert("Papa");
    break;
    case "3":
    alert("Carne");
    break;
    case "4":
    alert("Pollo");
    break;
    default:
    alert("error");
    break;
   } 
   entrada=(prompt("Seleccione un producto del 1 al 4"));
}