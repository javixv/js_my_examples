/*
    Audio y Videos
    
    EVENTOS
        play
        pause
        ended
        
    METODOS
        play()
        pause()
        load()
    
    PROPIEDADES
        correntTime
        duration
        volume


*/

var video = document.getElementById('video');
var playPause = document.getElementById('play');
var volume = document.getElementById('volume');
var time = document.getElementById('time');
//video.addEventListener('play', function(){
//    console.log('se esta reproduciondo');
//});
//video.addEventListener('pause', function(){
//    console.log('se esta pausado');
//});
//video.addEventListener('ended', function(){
//    console.log('se a terminado');
//});

// Reproductor de video

playPause.addEventListener('click', function () {
    'use strict';
    if (playPause.textContent === "Play") {
        video.play();
        this.textContent = "Pause";
        
    } else {
        video.pause();
        this.textContent = "Play";
    }
    
});

volume.addEventListener('change', function () {
   'use strict';
    video.volume = this.value * 0.01; 
});

var playtime = setInterval(function () {
   
    time.textContent = "00:" + Math.floor(video.currentTime); 
}, 1000);

video.addEventListener('play', playtime);