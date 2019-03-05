// se puede acceder a propiedades del documento

var hear = document.head;
var body = document.body;
var html = document.documentElement;
var domain = document.domain;
var url = document.URL;
var scripts = document.scripts;
var css = document.styleSheets;
var charset = document.characterSet;
var doctype = document.ductype;

var link = document.links;

/*
ACCESO A ELEMENTOS
document.getElementById()
         getElementByCLassName()
         getElementByTagName()
         getElementByName


O tambien .querySelector
Usa selector CSS como parametro
    document.querySelector()
    document.querySelectorAll()
*/

var enlaces = document.getElementsByTagName('a');
var enlace1 = document.getElementById('link1');

var enlace2 = document.querySelectorAll('body a')