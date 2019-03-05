var semana = ['domingo', 'lunes','martes','miercoles']

for(var dia in semana){
    var diaActual = semana[dia];
    console.log(diaActual);
};

var button = document.getElementById('Button');
var contador = 0;
button.addEventListener('click',function(){
var _this = this;
contador++
(function(){
    _this.textContent = contador;
    console.log(contador);
})();
});

var familias = [
['juan','maria'],
['carlos','maria2']
];

console.table(familias);
/**
 * Bloque de codigo
 */