
var img = document.getElementById("cat1");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio('Nani.mp3');
var hk_score = 1000, tw_score = 430, th_score = 200, jp_score = 150, fi_score = 250, se_score = 100, pl_score = 500, dm_score = 280, id_score=590, hu_score=319, sr_score = 300; 

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'catSet.jpg';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'catSmile.jpg';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'catSet.jpg';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'catSmile.jpg';
     audio.play();
});


function increaseScore(){
  score++;
  count.innerHTML= score;
}