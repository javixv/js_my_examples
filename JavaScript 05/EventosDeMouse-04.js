/*
EVENTOS DE MOUSE

MOUSEDOWN cuando se pulsa un boton
MOUSEUP cuando se suelta un boton
CLICK cuando se pulsa el boton izquierdo
dblclick cuando se pulsa dos veces el boton
MOUSEMOVE cuando se mueve
MOUSEENTER cuando entra en el area el mouse
MOUSELEAVE cuando sale del area

*/

// ejercicio: programa de dibujo

(function(){
    'use strict';
    var dibujar = function(e){
        var punto = document.createElement('div');
        punto.classList.add('punto');
        punto.style.left = (e.pageX - 10) + 'px';
        punto.style.top = (e.pageY - 10) + 'px';
        document.body.appendChild(punto);
    };
    window.addEventListener('mousedown',function(){
    window.addEventListener('mousemove', dibujar);
        window.addEventListener('mouseup', function(){
            removeEventListener('mousemove', dibujar);
        });
        });
})();