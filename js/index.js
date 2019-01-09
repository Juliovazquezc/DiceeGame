var body = document.querySelector("body");
var heading = document.querySelector("h1");

body.addEventListener("click",playGame);

function playGame(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var imageElements = document.getElementsByTagName("img");
    imageElements[0].setAttribute("src","images/dice"+randomNumber1+".png");
    imageElements[1].setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1> randomNumber2){
        heading.innerText = "😎Player1 Wins!";
    }else if(randomNumber2 > randomNumber1){
        heading.innerText = "Player2 Wins!😎";
    }else{
        heading.innerText = "Draw";
    }
}


