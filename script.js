var randNumber1=Math.trunc(Math.random()*6)+1;
var randNumber2=Math.trunc(Math.random()*6)+1;

var randomDice1=`dice${randNumber1}.png`;
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
var randomDice2=`dice${randNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);


  if(randNumber1>randNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
  }else if(randNumber1 <randNumber2){
    document.querySelector("h1").textContent="Player 2 Wins";
  }else{
    document.querySelector("h1").textContent="It's a DRAW.";
  }
