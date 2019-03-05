/*
    STRICT MODE
    se activa añadiendo el string "use strict" en la primera linea del scope (se recomienda que sea una funcion).

*/

//
//function saludar(){
//  var nombre = "javier"  ;
//    return "Hala " + nombre;
//}

//console.log(saludar());

/*
    es una palabra que aputa a un objeto y devolvera valores diferentes segun las circunstacias.

*/

/* CASO 1 : dentro de una funcion
Si no se usa "use strict" devuelve el obj global windows, pero si se usa se devuelve undefined.
*/
//function test(){
 //   console.log(this);
//};

/*
CASO 2 THIS dentro de un metodo
En este caso this se refiere al objeto
*/

//var persona = {
//    
//    nombre: "carmen",
//    edad: 25,
//    saludar:function(){
//        return "Hola " + this.nombre + " y tengo " + this.edad + " años";
//    }
//};

/* CASO 3: THIS dentro de un event handler
   en este caso this referencia al elemento HTML que disparo el evento.   
*/

//var valor = document.getElementById("xxx");
//
//valor.addEventListener('click',function(){alert(this.textContent)});

/*
CASO 4: THIS dentro de un costructor

un constructor es una funcion que define la estructura de un objeto apartir de la cual se crean otros objetos.

En este caso this se refiere al objeto instanciado
*/

function Persona(nombrePersona, edadPersona){
    
    this.nomber = nombrePersona;
    this.edad = edadPersona
    
}

var miAmigo = new Persona("Javier",30);
