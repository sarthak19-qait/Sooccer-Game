var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",()=>{
    if(!gameOver){
    p1Score++;
    }
    if(p1Score===winningScore){
        console.log("Game Over")
    }
    p1Display.textContent = p1Score;

})


p2Button.addEventListener("click",()=>{
    p2Score++;
    p2Display.textContent = p2Score;
})
