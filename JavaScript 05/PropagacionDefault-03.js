/*
    PROPAGACION DE EVENTOS
    
    cuando un evento ocurre tambien pasa en todos los deventos relacionados
*/

(function(){
    'use strict' ;
    var container  = document.getElementById('container'),
        boton = document.getElementById('button');
    boton.addEventListener('click',function(e){
      console.log("click en el boton");
        e.stopPropagation();
    });
    container.addEventListener('click',function(e){
       console.log("click en el container"); 
    });
})();

/*
Prevent Default

Los navegadores tienen un conportamiendo predeterminado para cada tipo de evento


el metodo preventDefault detiene el conportamiendo del evento que es prederminado 

*/