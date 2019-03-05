(function(){
    'use strict';
    window.addEventListener('mousedown', function(e){
        if(e.which === 3){
            alert('no se puede copiar');
        }
        e.preventDefault();
    })
})();