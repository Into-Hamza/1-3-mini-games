var timer=60;   
var score=0;
var negscore=0;
var hit=0;
var time;
function runTimer(){
    time =setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector(".timerval").textContent=timer;}
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=`<h1>TA DAAAAA ;)<h1>`;
            alert("Bss Bss Hosla");
        }
    },1000);
}
function bubbles(){
    var shuffle = "";
    for(var i=1; i<=144; i++){
        var rn = Math.floor(Math.random()*10)
        shuffle += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = shuffle;
    
}
function newHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hit;
}
function newScore(){
    score += 10;
    document.querySelector(".score").textContent=score;
}
function negative(){
        negscore += 1;
        document.querySelector(".falsy").textContent=negscore;
}
function resetbutton(){
    document.querySelector("#b1").addEventListener("click",function(){
        document.querySelector(".score").textContent="0";
        document.querySelector(".falsy").textContent="0";
        bubbles();
        newHit();
        timer=60;   
        score=0;
        negscore=0;
        hit=0;
        clearInterval(time);
        runTimer();
        });
}
function minus(){
    score -= 10;
    document.querySelector(".score").textContent=score;
}
runTimer();
bubbles();
newHit();
resetbutton();
document.querySelector("#pbtm").addEventListener("click" , function(dets){
var clickednum = Number(dets.target.textContent);
    if(clickednum===hit){
        newScore();
        newHit();
        bubbles();
}
    else if(clickednum!==hit){
        newHit();
        bubbles();
        negative();
        minus();
    }
})

