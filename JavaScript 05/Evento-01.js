/*
 Es todo lo que ocurre en la pagina web

*/

/*
addEventListener('click', function(){
    alert('Activar');
});

*/

(function(){
    var botonhora = document.getElementById('hora'),
        feche = new Date(),
        hora = feche.getHours(),
        min = feche.getMinutes(),
        seg = feche.getSeconds();
    botonhora.addEventListener('click', function(){ 
        alert('La hora es ' + hora + ' : ' + min + ' : '+ seg );  
    });
})();

var bot = document.getElementById('hora');

// ejemplo 2
(function(){
    
    addEventListener('resize', function(){
        var w = window.innerWidth,
     h = window.innerHeight;
     console.log('la ventana mide ' + w + ' x ' + h);   
    });
})();