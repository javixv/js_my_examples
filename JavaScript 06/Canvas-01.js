/*
    CANVAS
    
    Permite dibujar sobre un area los elementos del dibujo no forman parte del DOM.

*/

//obtener el elemento
var canvas = document.getElementById('canvas');
// obtener el contexto
//sobre el contexto se dibujara usando metodos y propiedades
var c = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;

/*
    para dibujar con canvas se requieren de metodos y propiedes
    
    METODOS
    .stroke() -> dibuja una linea
    .fill()   -> dubuja un relleno
    .beginPath() -> comienza una ruta
    .closePath() -> cierra una ruta
    .moveTO() -> para moverse a un punto
    
    PROPIEDADES
    .strokestyle -> define el color de la linea
    .lineWidth -> el ancho de la linea
    .fill -> Color de relleno de la linea
    
    FORMAS
    .lineTO() -> define una linea que colmina en un punto determinado.
    .rect() -> para dibujar un rectangulo requiere xy w h
    .arc() -> para arcos

    TEXTO
    .strokeText()
    .fillText()
    
    pasando parametros x y
*/

/*
c.moveTo(0,h * 0.5);
c.lineTo(w * 0.5 , h);
*/

/*for(var i = 0; i < 30; i++){
    c.moveTo(0, i * 10);
    c.lineTo(w,i* 10)
}
c.lineTo(w,h * 0.5);
c.moveTo(w *  0.5 , 0);
c.lineTo(w * 0.5 , h);
c.strokeStyle = "red";
//c.lineWidth = 5;

c.stroke();*/

//c.rect(50,50,200,100);
//c.fillStyle = "red";
//c.strokeStyle = "green";
//c.lineWidth = 10;
//c.stroke();
//c.fill();
//
//c.font = "blokd 40px Arial";
//c.fillText("Hola Mundo", 50,200);
//c.strokeText("ADIOS", 50, 50);

c.arc(w/2,h/2,100,0,Math.PI * 2);
c.fillStyle = "red";
c.fill();