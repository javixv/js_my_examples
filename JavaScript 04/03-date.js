/*

FECHAS EN JAVASCRIPT

para manejar fechas se utiliza el objeto DATE
que debe instaciarse cada vez que se requiera
utilizarlo

*/

(function(){
    "use strict";
    var fecha = new Date();
    console.log(fecha);
    // para especificar fechas año/mes/dia/hora/min/segundo
var nacimiento = new Date(1987,6,15);
    console.log(nacimiento);
    
    
    //Metodos para trabajar con fechas
    // .getFullYear() --> año
    // .getDAt() --> dia de la semana
    // .getDate()
    // .getMonth()
    console.log(nacimiento.getFullYear());
    console.log(nacimiento.getMonth());
    console.log(nacimiento.getDay());
    console.log(nacimiento.getDate());
})();