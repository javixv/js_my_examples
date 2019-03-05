/*
  LocalStorage 

  Permite almacenar información en una pequeña base de datos local.

  Para eso se usa el objeto localStorage
*/

var myStorage = localStorage;
var comment = document.getElementById('comment');
comment.addEventListener('focus', saveComment);
var saveComment = setInterval(function(){
    myStorage.comment = comment.value;
  }, 1000);

comment.value = myStorage.comment;



/*
  para limpiar el localStorage se usa el método clear()

  localStorage.clear()

  sessionStorage es un objeto identico a localStorage con la unica diferencia de que al cerrar el navegador se limpian los datos.

  También se pueden definir propiedades al objeto localStorage con el método setItem. Asi:

  localStorage.setItem('key','value');
  
*/
