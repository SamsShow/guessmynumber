'use strict';
   
let score = 20;
let highscore = 0;

const secretnumber = Math.trunc(Math.random()*20)+1;
console.log(secretnumber);

document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if(!guess){
        document.querySelector(".message").textContent='🚫 no number'
    }
    else if(guess===secretnumber){
        document.querySelector(".message").textContent="🍾 Correct Value!"
        score++;
        document.querySelector(".number").textContent = secretnumber;
        document.querySelector(".score").textContent = score;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width="30rem"

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    else if(guess > secretnumber){
        if(score>1){
            document.querySelector(".message").textContent ="📈 too high"
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent ="❌ Game Over"
            document.querySelector("body").style.backgroundColor = "#FF0000";
            document.querySelector(".number").textContent = secretnumber;
        }
    }
    else if(guess < secretnumber){
        if(score>1){
        document.querySelector(".message").textContent ="📉 too low"
        score--;
        document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent ="❌ Game Over"
            document.querySelector("body").style.backgroundColor = "#FF0000";
            document.querySelector(".number").textContent = secretnumber;
        }
    }
});

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent ="Start guessing..."
    const secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width="15rem"
    
});