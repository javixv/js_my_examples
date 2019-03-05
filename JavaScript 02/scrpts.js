function sel(){
    
    var st = "HolaMundo";
    var s2 = " Valor Concatenado"
 
    console.log(st.toUpperCase() + s2.toLowerCase());
    console.log(st.slice(1,3));
}

sel();

//Eliminar espacios trim()

var sl2 = "Hola Mundo";
console.log(sl2.length);
console.log(sl2.trim());

//Array o Arreglos
var array = [1,2,3,"Hola"];
console.log(array.length);
console.log(array[3]);
//Añadir valor
array[5] = "El numero 5";
array[4] = 10;
console.log(array);
// join() para pasar de string a Array
var st3 = "espectacular"
var st2ar = st3.split("");
console.log(st2ar);

//Quitar elementos
// inicio shift() y al final pop()

//Crear Array desde otros array

var array1 = [1,2,3,4,5];
var array2 = array1.slice(2,4);
console.log(array2);

//Condiciones
//Loops
//for
//for in
//while
//do

for(var i = 0; i< 10; i++){
    
    console.log(i);
}