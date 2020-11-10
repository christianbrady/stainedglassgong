function play(index){
     var audio = document.getElementById("audio"+index);
     audio.playbackRate = 1.0;
     audio.play();
               }

function playslow(index){
    var audio = document.getElementById("audio"+index);
    audio.playbackRate = 4.0;
    audio.play();
}
